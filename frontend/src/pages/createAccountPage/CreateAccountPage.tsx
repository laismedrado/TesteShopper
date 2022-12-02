import React from "react";
import { CardRegistration } from "../../components/cards/cardRegistration";

import { Container } from "./styles";

export const SignUpPage: React.FC = () => {
  return (
    <Container>
      <CardRegistration
        text="CRIAR CONTA ADMINISTRAÇÃO"
        textButton="CONTINUAR "
        textButton1="LOGIN ADMINISTRAÇÃO "
      />
    </Container>
  );
};
