import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import React, { useEffect, useState } from "react";
import { ContainerSearchBar } from "./styles";
import { ProductType } from "../../model/Product";

type Props = {
  products: ProductType[];
  setProductsToRender: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

export const SearchBar = ({ setProductsToRender, products }: Props) => {
  const [search, setSearch] = useState("");
  const lowerSearch = search.toLowerCase();

  useEffect(() => {
    setProductsToRender(
      products.filter((product: ProductType) =>
        product.name?.toLowerCase().includes(lowerSearch)
      )
    );
  }, [search]);

  return (
    <ContainerSearchBar>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="PESQUISAR PRODUTO"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <SearchIcon sx={{ p: "10px", color: "gray" }} aria-label="search" />
        <DirectionsIcon
          color="primary"
          sx={{ p: "10px", marginRight: "-1rem" }}
          aria-label="directions"
        />
      </Paper>
    </ContainerSearchBar>
  );
};
