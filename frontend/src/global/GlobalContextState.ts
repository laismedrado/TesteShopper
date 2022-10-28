import React from "react";
import { ProductType } from "../model/Product";

export type ContextType = {
  products: ProductType[];
  productsCart: ProductType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (product: ProductType) => void;
  clearCart: () => void;
  getProducts: () => void ;

};

const GlobalStateContext = React.createContext<ContextType>({
  products: [],
  productsCart: [],
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  getProducts: () => null, 
});

export default GlobalStateContext;
