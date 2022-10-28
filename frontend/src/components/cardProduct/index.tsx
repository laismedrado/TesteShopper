import Button from "@mui/material/Button";
import React, { useContext } from "react";
import {
  CardContainer,
  BoxNameProduct,
  BoxPriceProduct,
  StockProductField,
} from "./styles";
import { ProductType } from "../../model/Product";
import GlobalStateContext from "../../global/GlobalContextState";
import { formatBRL } from "../../helper";
import { theme } from "../../constants/theme";

export type CardProductProps = {
  product: ProductType;
};
export const CardProduct = ({ product }: CardProductProps) => {
  const { addToCart } = useContext(GlobalStateContext);

  return (
    <>
      <CardContainer bgcolor={theme.palette.background.default}>
        <BoxNameProduct>{product.name} </BoxNameProduct>

        <BoxPriceProduct>
          {formatBRL.format(product.price || 0)}
          <Button
            onClick={() => addToCart(product)}
            variant="contained"
            style={{ marginBottom: "-.7rem" }}
          >
            COMPRAR
          </Button>
          <StockProductField>ESTOQUE: {product.qty_stock} </StockProductField>
        </BoxPriceProduct>
      </CardContainer>
    </>
  );
};
