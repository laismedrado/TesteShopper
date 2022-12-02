import { ProductType } from "./Product";

export type OrderType = {
  id?: string;
  nicknameId: string;
  totalPrice?: number;
  deliveryDate: string;
  items: ProductType[];
};
