import React, { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../../global/GlobalContextState";
import {
  BoxNameProduct,
  PaginationField,
  TableHeader,
  ContainerListManagement,
  Container,
} from "./styles";
import { CardProductManagement } from "../../components/cards/cardProductManagement";
import Pagination from "@mui/material/Pagination";
import { CreateProduct } from "../../components/modal/createModal";

export const ManagerPage = () => {
  const { productsToRender, setProductsToRender } =
    useContext(GlobalStateContext);
  const { products } = useContext(GlobalStateContext);
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  useEffect(() => {
    setProductsToRender(products);
  }, [products]);
  return (
    <>
      <Container>
        <TableHeader>
          <BoxNameProduct style={{ marginLeft: "1rem" }}>
            <CreateProduct />
          </BoxNameProduct>
          <BoxNameProduct style={{ marginLeft: "10rem" }}>
            NOME
          </BoxNameProduct>
          <BoxNameProduct style={{ marginLeft: "8.5rem" }}>
            PREÇO
          </BoxNameProduct>
          <BoxNameProduct style={{ marginLeft: "8rem" }}>
            ESTOQUE
          </BoxNameProduct>
        </TableHeader>
        <ContainerListManagement>
          {productsToRender.map((product) => (
            <CardProductManagement product={product} key={product.id} />
          ))}
        </ContainerListManagement>
      </Container>
      <PaginationField>
        <Pagination count={10} page={page} onChange={handleChange} />
      </PaginationField>
    </>
  );
};
            
          

           
            
