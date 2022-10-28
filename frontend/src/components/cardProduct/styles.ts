import { Box } from "@mui/material";
import styled from "styled-components";

export const CardContainer = styled(Box)`
  justify-content: space-between;
  display: flex;
  justify-self: center;
  align-content: center;
  width: 27vw;
  height: 15vh;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in;
  }
`;

export const BoxNameProduct = styled.div`
  display: flex;
  text-align: start;
  font-weight: 1000;
  padding-right: 1rem;
  font-size: 1.2rem;
  align-items: center;
`;

export const BoxPriceProduct = styled.div`
  text-align: end;
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  font-weight: 1000;
  align-self: center;
  margin-top: 1rem; 
`;


export const StockProductField = styled.text `
  font-weight: 500;
  text-align: end;
  font-size: .8rem;
   margin-top: 1rem; 
 

`