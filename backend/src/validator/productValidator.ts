import { check, body } from "express-validator";

export const updateProductValidator = [
  check("name").notEmpty(),
  check("price").notEmpty(),
  check("qty_stock").notEmpty(),
];
export const createProductValidator = [
  body().isArray(),
  body("*.name", "Nome inválido").notEmpty(),
  body("*.price", "Preço inválido").notEmpty().isNumeric(),
  body("*.qty_stock", "Quantidade de estoque inválido").notEmpty().isNumeric(),
];
