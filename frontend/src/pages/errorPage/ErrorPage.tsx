import React from "react";
import error from "../../assets/error.png";
import Typography from "@mui/material/Typography";
import { ErrorImage, ErrorPageContainer } from "./styles";

export const ErrorPage: React.FC = () => {
  return (
    <>
      <ErrorPageContainer>
        <ErrorImage src={error} />
        <Typography
          sx={{ marginTop: "-1rem" }}
          color={"secondary"}
          variant={"h4"}
          align={"center"}
        >
          Erro 404 - Página Não Encontrada
        </Typography>
      </ErrorPageContainer>
    </>
  );
};
