import React, { useEffect, useState } from "react";
import { SearchInput } from "./styles";
import { Search } from "@mui/icons-material";
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
    <>
      <Search />
      <SearchInput
        placeholder="PESQUISE O PRODUTO"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </>
  );
};
