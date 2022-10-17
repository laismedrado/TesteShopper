import React, { useContext} from "react";
import { CardProduct } from "../../components/cardProduct";
import GlobalStateContext from "../../global/GlobalContextState";
import { Container } from "./styles";

export const ProductstListPage = () => {
  const { products } =
    useContext(GlobalStateContext);

  return (
    <>
      <Container>
        {products.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </Container>
    </>
  );
};
