import { check } from "express-validator";

export const createOrderValidator = [
  check("name").notEmpty(),
  check("items").notEmpty(),
  check("deliveryDate").notEmpty(),
];
