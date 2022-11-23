import { Button, TextField } from "@mui/material";
import {
  BoxButton,
  ContainerRegistration,
  TextDescriptionField,
  TitleField,
} from "./styles";

type Props = {
  text: string;
  textButton: string;
  textButton1: string;
};
export const CardRegistration = (props: Props) => {
  return (
    <ContainerRegistration>
      <TitleField>{props.text}</TitleField>
      <TextDescriptionField>NOME DO USUÁRIO : </TextDescriptionField>
      <TextField variant="filled" placeholder="NOME E SOBRENOME" />
      <TextDescriptionField>SENHA: </TextDescriptionField>
      <TextField
        id="filled-basic"
        placeholder="8 CARACTERES"
        variant="filled"
      />
      <BoxButton>
        <Button variant="outlined" sx={{ border: 0, fontWeight: 800 }}>
          {" "}
          {props.textButton}{" "}
        </Button>
      </BoxButton>
    </ContainerRegistration>
  );
};
