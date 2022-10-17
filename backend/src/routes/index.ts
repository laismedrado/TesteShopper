import express, { Router } from "express";
import { orderRoutes } from "./OrderRouter";
import { productRoutes } from "./Product.Router";
const app = express();
export const routes = Router();

routes.use("/order", orderRoutes);
routes.use("/product", productRoutes);
