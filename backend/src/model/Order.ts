import { ProductType } from "./Product";

export type OrderType = {
  id?: number;
  name: string;
  totalPrice?: number;
  deliveryDate: Date;
  items: ProductType[];
};
