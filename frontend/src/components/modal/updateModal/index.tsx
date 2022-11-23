import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
  BoxButton,
  BoxField,
  BoxName,
  ContainerModal,
  FieldName,
  FieldTitle,
  style,
} from "./styles";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
export const UpdateModal: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState("Controlled");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <EditIcon sx={{ marginLeft: "2.5rem" }} fontSize="small" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Box sx={style}>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "black",
                marginBottom: "2rem",
              }}
            >
              <FieldTitle>ATUALIZAR PRODUTO</FieldTitle>
              <IconButton onClick={handleClose}>
                <HighlightOffIcon />
              </IconButton>
            </span>
            <BoxName>
              <FieldName style={{ marginLeft: ".5rem" }}>NOME:</FieldName>
              <FieldName style={{ marginLeft: "2.75rem" }}>PREÇO:</FieldName>
              <FieldName style={{ marginLeft: "3.5rem" }}>ESTOQUE:</FieldName>
            </BoxName>
            <ContainerModal>
              <BoxField>
                <TextField
                  id="filled-multiline-static"
                  multiline
                  rows={1}
                  defaultValue=""
                  variant="filled"
                  color="secondary"
                  sx={{ m: 1, width: "20rem" }}
                />
              </BoxField>

              <BoxField>
                <TextField
                  id="outlined-start-adornment"
                  variant="filled"
                  color="secondary"
                  sx={{ width: "9rem", m: 1 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">R$:</InputAdornment>
                    ),
                  }}
                />
              </BoxField>

              <BoxField>
                <TextField
                  variant="filled"
                  type="number"
                  color="secondary"
                  sx={{ width: "5rem", m: 1 }}
  
                />
              </BoxField>
            </ContainerModal>
            <BoxButton>
              <Button>LIMPAR</Button>
              <Button>SALVAR</Button>
            </BoxButton>
          </Box>
        </>
      </Modal>
    </div>
  );
};
