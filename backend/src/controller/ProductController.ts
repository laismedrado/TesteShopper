import { Request, Response } from "express";
import { getAllProducts } from "../Services/ProductService";
import { messages } from "../error/messages";
import { Sucess as httpCode } from "../error/httpCodes";
import { Error as httpCodeError } from "../error/httpCodes";

export const getAllProductEndpoint = async (req: Request, res: Response) => {
  try {
    const result = await getAllProducts();
    return res.status(httpCode.OK).json(result);
  } catch (error: any) {
    res
      .status(httpCodeError.BadRequest)
      .json(messages.unsuccessful("Requisição"));
  }
};
