import { Api } from "../api/index";
import { OrderType } from "../model/Order";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const createOrder = async (order: OrderType): Promise<OrderType> => {
  try {
    await delay(3000); //simulando api lenta
    const urlRelative = "/order";
    const response = await Api.post(urlRelative, order);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const OrderService = {
  createOrder,
};
