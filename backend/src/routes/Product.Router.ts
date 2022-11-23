import { Router } from "express";
import {
  createProductEndpoint,
  deleteProductEndpoint,
  getAllProductEndpoint,
  updateProductEndpoint,
} from "../controller/ProductController";
import {
  createProductValidator,
  updateProductValidator,
} from "../validator/productValidator";

export const productRoutes = Router();
productRoutes.get("/", getAllProductEndpoint);
productRoutes.post("/create", createProductValidator, createProductEndpoint);
productRoutes.put("/update", updateProductValidator, updateProductEndpoint);
productRoutes.delete("/delete/:id", deleteProductEndpoint);
