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
  const [productsToRender, setProductsToRender] = useState<ProductType[]>([]);
  const getProducts = () => {
    ProductService.getAllProduct()
      .then((response) => setProducts(response))
      .catch(() => console.log("Algo deu errado, tente novamente."));
  };
  //atualizar estoque
  const updateStock = (product: ProductType, action: Actions) => {
    const newProducts = [...products];

    const productIndex = newProducts.findIndex(
      (productItem) => product.id === productItem.id
    );
    if (action === Actions.ADD) {
      newProducts[productIndex].quantityStock =
        newProducts[productIndex].quantityStock! - 1;
    } else {
      newProducts[productIndex].quantityStock =
        newProducts[productIndex].quantityStock! + 1;
    }
  };
  //adicionar carrinho
  const addToCart = (product: ProductType) => {
    const newProductsCart = [...productsCart];
    const productIndex = newProductsCart.findIndex(
      (productItem) => product.id === productItem.id
    );
    if (product.qty_stock! <= 0) {
      return alertError(`${product.name} sem estoque!`);
      // -1 n encontrou  n existe no array inexistente, s en acha ro produto ..dah o push no produto adicionando pela primeira vez no array
    }
    if (productIndex === -1) {
      newProductsCart.push({
        id: product.id,
        quantityOrdered: 1,
        name: product.name,
        price: product.price,
        quantityStock: product.quantityStock,
      });
      //antes de add eu vejo se a quantidade que já foi adicionado é igual a quantiidade do estoque do produto
    } else {
      if (
        newProductsCart[productIndex].quantityOrdered! === product.qty_stock
      ) {
        alertError("Estoque insuficiente ");
        return;
      }
      newProductsCart[productIndex].quantityOrdered! += 1;
      alertSuccess(`${product.name} atualizado no carrinho!`);
    }
    setProductsCart(newProductsCart);
    updateStock(product, Actions.ADD);
  };
  const removeFromCart = (product: ProductType) => {
    const newProductsCart = [...productsCart];

    const productIndex = newProductsCart.find(
      (productItem) => product.id === productItem.id
    );
    if (productIndex && productIndex.quantityOrdered! > 1) {
      productIndex.quantityOrdered! -= 1;
      setProductsCart(newProductsCart);
    } else {
      const arrayFiltered = newProductsCart.filter(
        (productItem) => productItem.id !== product.id
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
        getProducts,
        productsToRender,
        setProductsToRender,
      }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};
