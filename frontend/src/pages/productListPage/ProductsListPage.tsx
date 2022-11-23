import React, { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../../global/GlobalContextState";
import { Container, ContainerProductListPage, PaginationField } from "./styles";
import { CardProduct } from "../../components/cards/cardProduct";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";

export const ProductstListPage = () => {
  const { products, productsToRender, setProductsToRender } =
    useContext(GlobalStateContext);
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  useEffect(() => {
    setProductsToRender(products);
  }, [products]);

  return (
    <ContainerProductListPage>
      <Container>
        {productsToRender.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </Container>
      <PaginationField>
        {/* <Typography>Página: {page}</Typography> */}
        <Pagination count={10} page={page} onChange={handleChange} />
      </PaginationField>
    </ContainerProductListPage>
  );
};
