import { Router } from "express";
import { getAllProductEndpoint } from "../controller/ProductController";

export const productRoutes = Router();
productRoutes.get("/", getAllProductEndpoint);
