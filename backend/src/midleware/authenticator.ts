import * as jwt from "jsonwebtoken";
import { AuthenticationData} from "../model/User";

export const generateToken = ({ id, role }: AuthenticationData): string=> {
  const expiresIn = "10h";
  const token = jwt.sign({ id, role },(process.env.JWT_KEY) as string, {
    expiresIn,
  });
  return token;
};


export const getTokenData = (token:string): AuthenticationData =>{
  const tokenData = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
  return tokenData 
}