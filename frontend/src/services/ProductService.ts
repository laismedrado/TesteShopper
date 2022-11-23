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
// convertendo o price e qnty stock para numero , pegadno uma list e criando uma outra lista apartir a original ,soh que nesta lsita eles tão como number
const createProduct = async (products: ProductType[]) => {
  const formatedList = products.map(
    (item): ProductType => ({
      name: item.name,
      price: Number(item.price),
      qty_stock: Number(item.qty_stock),
    })
  );
  try {
    const urlRelative = "/product/create";
    await Api.post(urlRelative, formatedList);
  } catch (error: any) {
    throw new Error(error);
  }
};

const updateProduct = async (product: ProductType): Promise<ProductType> => {
  try {
    const urlRelative = "/product/update/id";
    const response = await Api.put(urlRelative, product);
    console.log("RESPONSE API", response);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

const deleteProduct = async (product: ProductType): Promise<ProductType> => {
  try {
    const urlRelative = `/product/delete/${product.id}`;
    const response = await Api.delete(urlRelative);
    console.log("RESPONSE API", response);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const ProductService = {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
