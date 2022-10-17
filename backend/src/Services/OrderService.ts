import { Order,Products } from "@prisma/client";
import { prisma } from "../data/prismaClient";
import { AppError } from "../error/AppErrors";
import { OrderType } from "../model/Order";
import { OrderProductType } from "../model/OrderProducts";

export const createOrder = async ({
  items,
  deliveryDate,
  name,
}: OrderType): Promise<OrderType> => {
  try {
    let totalPrice = 0;
    const orderProducts: OrderProductType[] = [];
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
      console.log(orderedProduct, product);
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
    console.log("tesssteee", productsStockUpdated);
    const order = await prisma.order.create({
      data: {
        delivery_date: new Date(deliveryDate),
        name: name,
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

    productsStockUpdated.forEach((item) => {
      prisma.products.updateMany({
        where: { id: item.id },
        data: { qty_stock: item.qty_stock },
      });
    });

    return {
      id: order.id,
      items,
      deliveryDate: order.delivery_date,
      name: order.name,
      totalPrice: order.total_price,
    };
  } catch (err: any) {
    throw new AppError(err);
  }
};

export const getAllOrders = async (): Promise<Order[]> => {
  try {
    const getOrders = await prisma.order.findMany({
      include: {
        order_products: {
          select: {
            id: true,
            orderId: true,
            quantity: true,
          },
        },
      },
    });

    return getOrders;
  } catch (err: any) {
    throw new AppError(err);
  }
};
