import { Request, Response } from "express";
import { getAllProducts } from "../Services/ProductService";

export const getAllProductEndpoint = async (req: Request, res: Response) => {
  const result = await getAllProducts();
  return res.status(200).json(result);
};
