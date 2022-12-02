import React from "react";
import errorpage from "../../assets/errorpage.svg";
import Typography from "@mui/material/Typography";
import { ErrorButton, ErrorImage, ErrorPageContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { goToProductList } from "../../routes/Coordinator";

export const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <ErrorPageContainer>
        <ErrorImage src={errorpage} />
        <Typography
          sx={{ marginTop: "1rem", marginRight: "18rem", marginLeft: "-10rem" }}
          color={"secondary"}
          variant={"h3"}
          align={"right"}
        >
          Erro 404 - Página Não Encontrada
          <ErrorButton onClick={() => goToProductList(navigate)} sx={{fontSize:"1rem"}}>
            Voltar para página inícial
          </ErrorButton>
        </Typography>
      </ErrorPageContainer>
    </>
  );
};
            
