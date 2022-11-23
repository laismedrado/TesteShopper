import { Request, Response } from "express";
import { createOrder } from "../Services/OrderService";
import { validationResult } from "express-validator";
import { messages } from "../error/messages";
import { Sucess as httpCode } from "../error/httpCodes";
import { Error as httpCodeError } from "../error/httpCodes";

export const createOrderEndpoint = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(httpCodeError.BadRequest)
        .json({ errors: errors.array() });
    }
    const { name, deliveryDate, items, totalPrice } = req.body;
    const order = await createOrder({ name, deliveryDate, items, totalPrice });
    res.status(httpCode.Created).json(order);
  } catch (error: any) {
    console.log(error);
    res
      .status(httpCodeError.InternalServerError)
      .json(messages.recordNotCreated("Pedido"));
  }
};
