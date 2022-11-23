import { Request, Response } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updatedProduct,
} from "../Services/ProductService";
import { messages } from "../error/messages";
import { Sucess as httpCode } from "../error/httpCodes";
import { Error as httpCodeError } from "../error/httpCodes";
import { validationResult } from "express-validator";
import { ProductType } from "../model/Product";

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

export const createProductEndpoint = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(httpCodeError.BadRequest)
        .json({ errors: errors.array() });
    }
    const list: ProductType[] = req.body;
    const product = await createProduct(list);
    return res.status(httpCode.Created).json(product);
  } catch (error: any) {
    console.log(error);
    res.status(httpCodeError.BadRequest).json(error.message);
  }
};

export const updateProductEndpoint = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(httpCodeError.BadRequest)
        .json({ errors: errors.array() });
    }
    const { id, name, price, qty_stock } = req.body;
    const product = await updatedProduct({ id, name, price, qty_stock });
    res.status(httpCode.Updated).json(product);
  } catch (error: any) {
    console.log(error);
    res
      .status(httpCodeError.BadRequest)
      .json(messages.unsuccessful("Atualização"));
  }
};

export const deleteProductEndpoint = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await deleteProduct(Number(id));
    return res.status(httpCode.OK);
  } catch (error: any) {
    console.log(error);
    res.status(httpCodeError.BadRequest).json(messages.notDelete("Produto"));
  }
};


