import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { BoxIconShoppingCart } from "../../shoppingCart/styles";
import {
  BoxButton,
  BoxField,
  ContainerModal,
  FieldHeader,
  InputField,
  TitleInput,
  TitleModal,
} from "./styles";
import { Button, IconButton, TextField } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { goToSignUp } from "../../../routes/Coordinator";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 54,
  p: 4,
};

export const LoginModal: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  return (
    <div>
      <BoxIconShoppingCart onClick={handleOpen}>
        {" "}
        <PersonIcon />{" "}
      </BoxIconShoppingCart>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ContainerModal>
            <FieldHeader>
              <TitleModal>LOGIN</TitleModal>
              <IconButton
                sx={{ marginLeft: "9rem", marginTop: "-.5rem" }}
                onClick={handleClose}
              >
                <HighlightOffIcon fontSize="medium" />
              </IconButton>
            </FieldHeader>

            <BoxField>
              <TitleInput>NOME DO USUÁRIO:</TitleInput>
              <TextField
                id="outlined-start-adornment"
                variant="filled"
                color="secondary"
                sx={{ width: "15.6rem" }}
              />
            </BoxField>

            <BoxField>
              <TitleInput>SENHA:</TitleInput>
              <TextField
                id="outlined-start-adornment"
                variant="filled"
                color="secondary"
                sx={{ width: "15.6rem" }}
              />
            </BoxField>
            <BoxButton>
              <Button sx={{ width: "7.3rem" }}> CONTINUAR</Button>
              <Button onClick={() => goToSignUp(navigate)}
                > CRIAR CONTA</Button>
            </BoxButton>
          </ContainerModal>
        </Box>
      </Modal>
    </div>
  );
};
