import React from "react";
import { CardRegistration } from "../../components/cards/cardRegistration";
import { Container } from "./styles";

export const LoginPage: React.FC = () => {
  return (
    <Container>
      <CardRegistration
        text="LOGIN ADMINISTRAÇÃO"
        textButton="CONTINUAR "
        textButton1="LOGIN ADMINISTRAÇÃO "
      />
    </Container>
  );
};
