import { Router } from "express";
import { signUpUserEndpoint } from "../controller/UserController";
import { loginUserEndpoint } from "../controller/UserController";
import { editUserEndpoint } from "../controller/UserController";

export const usnputes = Router();
userRoutes.post("/signup", signUpUserEndpoint);
userRoutes.post("/login", loginUserEndpoint);
userRoutes.put("/:id", editUserEndpoint);
