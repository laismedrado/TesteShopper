import { Order, Products } from "@prisma/client";
import { prisma } from "../data/prismaClient";
import { AppError } from "../error/AppErrors";
import { OrderType } from "../model/Order";
import { OrderProductType } from "../model/OrderProducts";
import { userRoutes } from "../routes/User.Router";

export const createOrder = async ({
  items,
  deliveryDate,
  nicknameId,
}: OrderType): Promise<OrderType> => {
  try {
    let totalPrice = 0;
    const orderProducts: OrderProductType[] = []; //array de produtos vazio
    const idList = items.map((item) => item.id);
    const productsInDatabase = await prisma.products.findMany({
      where: {
        id: {
          in: idList,
        },
      },
    });

    const productsStockUpdated = productsInDatabase.map((product) => {
      const orderedProduct = items.find((item) => product.id === item.id);

      if (
        orderedProduct?.quantityOrdered &&
        product.qty_stock >= orderedProduct?.quantityOrdered
      ) {
        totalPrice =
          totalPrice + product.price * orderedProduct?.quantityOrdered;
        orderProducts.push({
          productId: orderedProduct.id,
          quantity: orderedProduct.quantityOrdered,
        });
      } else {
        throw new AppError(`${product.name} está sem estoque`);
      }
      const productStockUpdated: Products = {
        ...product,
        qty_stock: product.qty_stock - orderedProduct.quantityOrdered,
      };
      return productStockUpdated;
    });
    // const nameValidate = name.split(" ");
    // if (nameValidate.length < 2) {
    //   throw new AppError(
    //     "Preencha o campo corretamente colocando nome e sobrenome."
    //   );
    // }
    const order = await prisma.order.create({
      data: {
       
        delivery_date: new Date(deliveryDate)!,
        nicknameId,
        total_price: totalPrice,
      },
    });
    const orderProductsEntities = orderProducts.map((product) => ({
      orderId: order.id,
      productId: product.productId,
      quantity: product.quantity,
    }));
    await prisma.order_Products.createMany({
      data: orderProductsEntities,
    });

    productsStockUpdated.forEach(async (item) => {
      const updateInDatabase = await prisma.products.update({
        where: { id: item.id },
        data: { qty_stock: item.qty_stock },
      });
    });
    return {
      id: order.id,
      items,
      deliveryDate: order.delivery_date,
      nicknameId: order.nicknameId,
      totalPrice: order.total_price,
      
    };
  } catch (error: any) {
    console.log(error);
    throw new AppError(error);
  }
};
