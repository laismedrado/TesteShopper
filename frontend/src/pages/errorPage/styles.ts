import styled from "styled-components";
import Button from "@mui/material/Button/Button";

export const ErrorPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  min-height: 84vh;
  height: 100%;
  width: 100vw;
  z-index: 10;
`;
export const ErrorImage = styled.img`
  width: 4500vw;
  max-width: 650px;
  margin-top: -4rem;
  margin-left: 7rem;
`;
export const ErrorButton = styled(Button)`
  margin-top: 2rem;
  font-size: 2rem;
  margin-right: -0.4rem;
  margin-left: 10rem;
`;
