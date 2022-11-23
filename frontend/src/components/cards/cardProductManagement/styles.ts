import { Box } from "@mui/material";
import styled from "styled-components";

export const CardContainer = styled(Box)`
  justify-content: space-between;
  display: grid;
  grid-template-columns: 0.1fr 0.1fr 2fr 2fr 0.4fr;
  justify-self: center;
  align-content: center;
  margin-top: 0.2rem;
  width: 100%;
  height: 1.3rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  border-radius: 0.1rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
export const BoxNameProduct = styled.div`
  display: flex;
  text-align: start;
  font-weight: 500;
  font-size: 1rem;
  align-items: center;
  margin-left: 10rem;
`;
export const BoxPriceProduct = styled.div`
  text-align: end;
  display: flex;
  flex-direction: column;
  font-size: rem;
  font-weight: 500;
  align-self: center;
  margin-right: 14rem;
`;
export const StockProductField = styled.text`
  display: flex;
  font-weight: 500;
  padding-right: 1rem;
  font-size: rem;
  align-items: center;
  margin-right: 1.5rem;
`;
