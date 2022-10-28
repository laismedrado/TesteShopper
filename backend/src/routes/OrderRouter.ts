import { Router } from "express";
import { createOrderEndpoint } from "../controller/OrderController";
import { createOrderValidator } from "../validator/orderValidator";

export const orderRoutes = Router();
orderRoutes.post("/", createOrderValidator, createOrderEndpoint);
