import { Api } from "../api/index";
import { ProductType } from "../model/Product";

const getAllProduct = async (): Promise<ProductType[]> => {
  try {
    const urlRelative = "/product";
    const response = await Api.get(urlRelative);
    console.log("RESPONSE API", response);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const ProductService = {
  getAllProduct,
};
