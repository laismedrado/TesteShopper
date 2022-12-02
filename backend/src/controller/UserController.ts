import { Request, Response } from "express";
import { editUser, loginUser, signUpUser } from "../Services/UserService";
import { Sucess as httpCode } from "../error/httpCodes";
import { Error as httpCodeError } from "../error/httpCodes";
import { Edit } from "../model/User";

export const signUpUserEndpoint = async (req: Request, res: Response) => {
  try {
    const {id, email, password, name, nickname, role } = req.body;
    const signUp = await signUpUser({id,email, password, name, nickname, role });
    return res.status(httpCode.Created).json('Usuário criado');
  } catch (error: any) {
    console.log(error);
    res.status(httpCodeError.InternalServerError).json(error.message);
  }
};

export const loginUserEndpoint = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const login = await loginUser({ email, password });
    return res.status(httpCode.OK).json("login");
  } catch (error: any) {
    console.log(error);
    res.status(httpCodeError.InternalServerError).json(error.message);
  }
};

export const editUserEndpoint = async (req: Request, res: Response) => {
  try {
    const input: Edit  = {
      name: req.body.name,
      nickname: req.body.nickname,
      role: req.body.role,
      id: req.params.id,
      token: req.headers.authorization!
    }
    const token = await editUser({ 
      name:req.body.name, 
      nickname:req.body.nickname,
      role: req.body.role,
      id: req.params.id, 
      token: req.headers.authorization!});
    return res.status(httpCode.OK).send({ message: "Usuário alterado" });
  } catch (error: any) {
    console.log(error);
    res.status(httpCodeError.Unauthorized).json(error.message);
  }
};
