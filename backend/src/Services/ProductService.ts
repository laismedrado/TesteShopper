import { Products } from "@prisma/client";
import { prisma } from "../data/prismaClient";
import { AppError } from "../error/AppErrors";

export const getAllProducts = async (): Promise<Products[]> => {
  try {
    return prisma.products.findMany();
  } catch (err: any) {
    throw new AppError(err);
  }
};
