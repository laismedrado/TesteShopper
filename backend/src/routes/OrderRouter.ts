import { Router } from "express";
import {
  createOrderEndpoint,
  getAllOrderEndpoint,
} from "../controller/OrderController";
import { check } from "express-validator";

const createOrderValidator = [
  check("name").notEmpty(),
  check("items").notEmpty(),
  check("deliveryDate").notEmpty(),
];

export const orderRoutes = Router();
orderRoutes.post("/", createOrderValidator, createOrderEndpoint);
orderRoutes.get("/", getAllOrderEndpoint);
