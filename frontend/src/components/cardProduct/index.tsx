import Button from "@mui/material/Button";
import React, { useContext } from "react";
import { CardContainer, BoxNameProduct, BoxPriceProduct } from "./styles";
import { ShoppingCart } from "@mui/icons-material";
import { ProductType } from "../../model/Product";
import GlobalStateContext from "../../global/GlobalContextState";
import { formatBRL } from "../../helper";

export type CardProductProps = {
  product: ProductType;
};
export const CardProduct = ({ product }: CardProductProps) => {
  const { addToCart, removeFromCart } = useContext(GlobalStateContext);

  return (
    <>
      <CardContainer>
        <BoxNameProduct>{product.name}</BoxNameProduct>
        <BoxPriceProduct>
          {formatBRL.format(product.price || 0)}
          <Button
            onClick={() => addToCart(product)}
            variant="outlined"
            startIcon={<ShoppingCart />}
          >
            COMPRAR
          </Button>
        </BoxPriceProduct>
      </CardContainer>
    </>
  );
};
