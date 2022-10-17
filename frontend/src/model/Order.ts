import { ProductType } from "./Product";

export type OrderType = {
  id?: string;
  name: string;
  totalPrice?: number;
  deliveryDate: string;
  items: ProductType[];
};
