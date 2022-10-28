import {  Dialog, TextField } from "@mui/material";
import styled from "styled-components";
import { styled as style } from "@mui/material/styles";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { shopperGreen } from "../../constants/color";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  justify-self: center;
`;
export const ProductBox = styled.div`
  background-color: #f0f0f0;
  width: 32rem;
  height: 4rem;
  margin: 0.2rem;
  border-radius: 0.5rem;
  align-items: center;
  justify-items: baseline;
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr;
`;
export const SubtitleBox = styled.text`
  display: grid;
  grid-template-columns: 3.5fr 1fr 1fr 1fr;
  align-items: center;
  background-color: #f0f0f0;
  width: 32rem;
  height: 2rem;
  margin: 0.5rem;
  border-radius: 0.2rem;
`;
export const SubtitleField = styled.text`
  font-size: 0.9rem;
  color: black;
  text-align: center;
  font-weight: 550;
  margin-left: -1rem;
`;
export const ValueField = styled.text`
  display: flex;
  font-size: 0.8rem;
  color: black;
  font-weight: 600;
  margin-right: 2rem;
`;
export const NameProductField = styled.text`
  display: flex;
  font-size: 0.8rem;
  margin-left: 2rem;
  text-align: start;
  color: black;
  font-weight: 550;
  margin-right: 1rem;
  padding-right: 3rem;
`;
export const CartTitle = styled.text`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 600;
  text-align: center;
  font-size: 2rem;
  margin: 1rem;
`;
export const TextInputField = styled(TextField)`
  margin-top: -17rem;
  border-radius: 13rem;
`;
export const ContainerForm = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  width: 100%;
  margin-top: 0.6rem;
  margin-bottom: .6rem;
`;
export const TotalPriceField = styled.text`
  display: flex;
  font-size: 0.9rem;
  color: black;
  width: 100%;
  justify-content: space-between;
  margin-inline: 2rem;
  font-weight: 1000;
`;
export const BoxTotalPrice = styled.div`
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  width: 32rem;
  height: 2rem;
  border-radius: 0.3rem;
  border: 1rem black;
`;
export const BoxQuantityCart = styled.div`
  margin-right: 2rem;
`;
export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: .5rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1.5rem;
  gap: 1rem;
`;
export const InfoTextField = styled.text`
  display: flex;
  width: 100%;
  justify-content: center;
  font-weight: 1000;
  color: #29a67a;
  text-align: start;
  width: 100%;
  font-size: 0.7rem;
`;
export const ContainerFieldInput = styled.text`
  color: black;
  font-weight: 5rem;
  justify-content: center;
`;
export const DialogContainer = styled(Dialog)`
  align-items: center;
  justify-self: center;
  align-self: center;
`;
export const StyledBadge = style(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -1,
    top: 16,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    fontSize: "large",
    background: shopperGreen,
  },
}));
 
