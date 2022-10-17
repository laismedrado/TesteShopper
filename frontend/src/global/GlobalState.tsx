import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalContextState";
import { ProductService } from "../services/ProductService";
import { ProductType } from "../model/Product";
import { alertError, alertSuccess } from "../alerts";

type GlobalStateType = {
  children: React.ReactNode;
};

export enum Actions {
  ADD = "ADD",
  REMOVE = "REMOVE",
}

export const GlobalState = (props: GlobalStateType) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [productsCart, setProductsCart] = useState<ProductType[]>([]);

  const getProducts = () => {
    ProductService.getAllProduct()
      .then((response) => setProducts(response))
      .catch((err) => alertError(err,"Algo deu errado, tente novamente."));
  };

  const updateStock = (product: ProductType, action: Actions) => {
    const newProducts = [...products];

    const productIndex = newProducts.findIndex(
      (productItem) => product.id === productItem.id
    );
    if (action === Actions.ADD) {
      newProducts[productIndex].quantityStock -= 1;
    } else {
      newProducts[productIndex].quantityStock += 1;
    }
  };

  const addToCart = (product: ProductType) => {
    const newProductsCart = [...productsCart];

    const productIndex = newProductsCart.findIndex(
      (productItem) => product.id === productItem.id
    );

    if (product.quantityStock <= 0) {
      alertError("","Produto indisponível!");
      return;
    }

    if (productIndex === -1) {
      newProductsCart.push({
        id: product.id,
        quantityOrdered: 1,
        name: product.name,
        price: product.price,
        quantityStock: product.quantityStock,
      });
      alertSuccess(`${product.name} adcionado ao carrinho!`);
    } else {
      newProductsCart[productIndex].quantityOrdered! += 1;
    }
    setProductsCart(newProductsCart);
    updateStock(product, Actions.ADD);
  };

  const removeFromCart = (product:ProductType) => {
    const newProductsCart = [...productsCart];

    const productIndex = newProductsCart.find(
      (productItem) => product.id === productItem.id
    );
    if (productIndex && productIndex.quantityOrdered! > 1) {
      productIndex.quantityOrdered! -= 1;
      setProductsCart(newProductsCart);
    } else {
      const arrayFiltered = newProductsCart.filter(
        (productItem) => productItem.id!==product.id
      );
      setProductsCart(arrayFiltered);
      updateStock(product, Actions.REMOVE);
    }
  };

  const clearCart = () => {
    setProductsCart([]);
  };

  useEffect(() => {
    if (!products.length) {
      getProducts();
    }
  }, [products]);

  return (
    <GlobalStateContext.Provider
      value={{
        addToCart,
        removeFromCart,
        clearCart,
        products,
        productsCart,
      }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};
