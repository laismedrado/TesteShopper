import { Products } from "@prisma/client";
import { prisma } from "../data/prismaClient";
import { AppError } from "../error/AppErrors";
import { ProductType } from "../model/Product";

export const getAllProducts = async (): Promise<Products[]> => {
  try {
    return prisma.products.findMany({
      orderBy: {
        name: "asc",
      },
      where: {
        active: true,
      },
    });
  } catch (err: any) {
    throw new AppError(err);
  }
};
export const createProduct = async (productToInsert: ProductType[]) => {
  try {
    const nameList = productToInsert.map((item) => item.name!);
    const productsInDatabase = await prisma.products.findMany({
      where: {
        name: {
          in: nameList,
        },
      },
    });
    if (productsInDatabase.length > 0) {
      const duplicatedProduct = productsInDatabase.map((item) => item.name!);
      throw new AppError(
        `Produto(s) duplicado(s): ${duplicatedProduct.join(",")}  `
      );
    }
    const productsEntities = productToInsert.map((product) => {
      return {
        name: product.name!,
        price: product.price!,
        qty_stock: product.qty_stock!,
        createdAt: new Date(),
        updatedAt: null,
        active: true,
      };
    });
    await prisma.products.createMany({
      data: productsEntities,
    });
  } catch (error: any) {
    console.log(error);
    throw new AppError(error);
  }
};
export const updatedProduct = async ({
  name,
  price,
  qty_stock,
  id
}: ProductType): Promise<Products> => {
  try {
    return await prisma.products.update({
      where: { id },
      data: { 
      name,
      qty_stock,
      price,
      updatedAt: new Date()
    },
    });
  } catch (error: any) {
    console.log(error);
    throw new AppError(error);
  }
};
export const deleteProduct = async ( id : number) => {
  try {
    const delteproduct = await prisma.products.update({
      where: { id },
      data: { active: false },
    });
    return  delteproduct
  } catch (error: any) {
    console.log(error);
    throw new AppError(error);
  }
};












// export const getAllProducts = async (page?: string, size?:string): Promise<Products[]> => {
//   try {
//     return prisma.products.findMany({
//       skip:Number (page),
//       orderBy: {
//         name: "asc",
//       },
//     });
//   } catch (err: any) {
//     throw new AppError(err);
//   }
// };
