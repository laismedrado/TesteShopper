import Button from "@mui/material/Button";
import React, { useContext } from "react";
import {
  CardContainer,
  BoxNameProduct,
  BoxPriceProduct,
  StockProductField,
} from "./styles";
import { ProductType } from "../../../model/Product";
import GlobalStateContext from "../../../global/GlobalContextState";
import { formatBRL } from "../../../helper";
import { theme } from "../../../constants/theme";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { UpdateModal } from "../../modal/updateModal";
import { ProductService } from "../../../services/ProductService";
export type CardProductProps = {
  product: ProductType;
};
export const CardProductManagement = ({ product }: CardProductProps) => {
  const { addToCart } = useContext(GlobalStateContext);
  return (
    <>
      <CardContainer bgcolor={theme.palette.background.default}>
        <UpdateModal />
        <IconButton
          onClick={() => {
            ProductService.deleteProduct(product);
          }}
        >
          <DeleteIcon sx={{ marginLeft: "1rem" }} fontSize="small" />
        </IconButton>

        <BoxNameProduct>{product.name} </BoxNameProduct>
        <BoxPriceProduct>
          {formatBRL.format(product.price || 0)}
        </BoxPriceProduct>
        
        <StockProductField> {product.qty_stock} UN </StockProductField>
      </CardContainer>
    </>
  );
};
