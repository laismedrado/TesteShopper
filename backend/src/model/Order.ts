import { Users } from "@prisma/client";
import { ProductType } from "./Product";
import { CreateUser } from "./User";

export type OrderType = {
  id?: number;
  nicknameId : string,
  totalPrice?: number;
  deliveryDate: Date;
  items: ProductType[];
};
