import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
  BoxButton,
  BoxField,
  BoxName,
  RowContainer,
  FieldName,
  FieldTitle,
  style,
} from "./styles";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { IconButton } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { alertError, alertSuccess } from "../../../alerts";
import GlobalStateContext from "../../../global/GlobalContextState";
import { ProductType } from "../../../model/Product";
import { ProductService } from "../../../services/ProductService";


export type FieldNames = "name" | "price" | "qty_stock";

export const CreateProduct: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const { getProducts } = useContext(GlobalStateContext);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setData([
      {
        name: "",
      },
    ]);
  };
  const [data, setData] = useState<ProductType[]>([
    {
      name: "",
    },
  ]);
 
  const handleCheck = (index: number, value: any, selected: FieldNames) => {
    console.log(index, value, selected);
    const newData = [...data];
  
    newData[index][selected] = value;
    setData(newData);
  };

  const handleNewRow = () => {
    setData([
      ...data,
      {
        name: "",
      },
    ]);
  };
  const clearForm = (event: any) => {
    event.preventDefault();
    setData([
      {
        name: "",
      },
    ]);
  };
 
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(data);
    const createProductPromise = ProductService.createProduct(data);
    alertSuccess(`Produtos Cadastrados`);
    createProductPromise.then(() => {
      handleClose();
      clearForm(data);
      getProducts();
      setData([
        {
          name: "",
        },
      ]);
    });
  };
  return (
    <div>
      <IconButton onClick={handleOpen}>
        <AddBoxIcon fontSize="large" />
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
              <FieldTitle>CADASTRAR PRODUTO</FieldTitle>
              <IconButton onClick={handleClose}>
                <HighlightOffIcon />
              </IconButton>
            </span>
            <BoxName>
              <FieldName style={{ marginLeft: ".5rem" }}>NOME:</FieldName>
              <FieldName style={{ marginLeft: "2.75rem" }}>PREÇO:</FieldName>
              <FieldName style={{ marginLeft: "3.5rem" }}>ESTOQUE:</FieldName>
            </BoxName>
            {data.map((row, index) => (
              <RowContainer>
                <BoxField>
                  <TextField
                    onChange={(event) =>
                      handleCheck(index, event.target.value, "name")
                    }
                    value={row?.name}
                    multiline
                    rows={1}
                    variant="filled"
                    color="secondary"
                    sx={{ m: 1, width: "20rem" }}
                  />
                </BoxField>

                <BoxField>
                  <TextField
                    onChange={(event) =>
                      handleCheck(index, event.target.value, "price")
                    }
                    value={row?.price}
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
                    onChange={(event) =>
                      handleCheck(index, event.target.value, "qty_stock")
                    }
                    value={row?.qty_stock}
                    variant="filled"
                    type="number"
                    inputProps={{ min: 1 }}
                    color="secondary"
                    sx={{ width: "5rem", m: 1 }}
                  />
                </BoxField>
              </RowContainer>
            ))}
            <BoxButton>
            <Button sx={{marginRight:"16.5rem"}}  onClick={handleNewRow}> Adicionar nova linha </Button>
              <Button onClick={clearForm}>LIMPAR</Button>
              <Button onClick={handleSubmit}>SALVAR </Button>
            </BoxButton>
          </Box>
        </>
      </Modal>
    </div>
  );
};
