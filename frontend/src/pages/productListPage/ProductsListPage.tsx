import React, { useContext, useEffect, useState } from "react";
import { CardProduct } from "../../components/cardProduct";
import { ContainerFieldInput } from "../../components/shoppingCart/styles";
import { SearchBar } from "../../components/SearchBar";
import GlobalStateContext from "../../global/GlobalContextState";
import { ProductType } from "../../model/Product";
import { Container, ContainerProductList } from "./styles";

export const ProductstListPage = () => {
  const { products } = useContext(GlobalStateContext);
  const [productsToRender, setProductsToRender] = useState<ProductType[]>([]);

  
  useEffect(() => {
    setProductsToRender(products);
  }, [products]);
  return (
    <>
      <Container>
        <ContainerFieldInput>
          <SearchBar
            setProductsToRender={setProductsToRender}
            products={products}
          />
        </ContainerFieldInput>
      </Container>
      <ContainerProductList>
        {productsToRender.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </ContainerProductList>
    </>
  );
};
