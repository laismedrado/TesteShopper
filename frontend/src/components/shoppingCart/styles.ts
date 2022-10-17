import { Box, TextField } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  align-items: center;
  justify-content: center;
`;
export const BoxItem = styled.div`
  background-color: #f0f0f0;
  width: 32rem;
  height: 4rem;
  margin: 0.2rem;
  border-radius: 0.5rem;
  align-items: center;
  justify-items: baseline;
`;
export const NameProduct = styled.text`
  font-size: large;
  font-family: "Asap", sans-serif;
`;
export const ContainerField = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr;
  text-align: center;
  margin-top: 0.4rem;
  margin-left: 1rem;
  align-items: center;
`;
export const ContainerName = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr;
  text-align: start;
  margin-left: -2rem;
  align-items: center;
  background-color: #f0f0f0;
  width: 32rem;
  height: 2rem;
  margin: 0.5rem;
  border-radius: 0.2rem;
`;
export const NameField = styled.text`
  font-size: 0.9rem;
  font-family: "Asap", sans-serif;
  color: black;
  text-align: center;
  margin-left: -2rem;
`;
export const ValueField = styled.text`
  display: flex;
  font-size: 0.8rem;
  font-family: "Asap", sans-serif;
  margin-top: 0.08rem;
  text-align: start;
  color: black;
  font-weight: 550;
`;
export const TitleField = styled.text`
  font-family: "Asap", sans-serif;
  font-weight: 1000;
  text-align: center;
  font-size: 2rem;
  margin: 1rem;
`;
export const DateInput = styled(Box)`
  margin-top: 2rem;
  width: 25rem;
  margin-bottom: 2rem;
`;
export const TextFieldInput = styled(TextField)`
  margin-top: -17rem;
  border-radius: 13rem;
`;

export const ContainerForm = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  width: 100%;
  margin-left: 3rem;
`;
export const TotalPriceField = styled.text`
  font-size: 0.9rem;
  font-family: "Asap", sans-serif;
  color: black;
  margin-left: -0.3rem;
  margin-right: 2rem;
  text-align: center;
  font-weight: 1000;
  padding: 0 1rem;
`;
export const ContainerTotalValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  width: 32rem;
  height: 2rem;
  margin: 0.5rem;
  border-radius: 0.3rem;
  border: 1rem black;
`;
export const BoxQuantityCart = styled.div`
  font-size: 2.5rem;
  font-family: "Asap", sans-serif;
  margin-right: 2rem;
  margin-top: -1rem;
`;
export const ModalBox = styled.div`
  width: 2rem;
  height: 10rem;
`;
export const ContainerButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  margin-top: 2rem;
  margin-left: 3rem;
  padding: 0.1 rem;
`;
export const InfoText = styled.text`
  font-family: "Asap", sans-serif;
  font-weight: 1000;
  color: #29a67a;
  margin-left: -17rem;
  font-size: 0.7rem;
`;
export const ContainerFieldInput = styled.text`
  color: black;
  font-weight: 5rem;
`;
