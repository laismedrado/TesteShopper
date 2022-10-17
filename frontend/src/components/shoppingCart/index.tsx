import * as React from "react";
import { useContext } from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import GlobalStateContext from "../../global/GlobalContextState";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import { ShoppingCart } from "@mui/icons-material";
import {
  BoxItem,
  ContainerField,
  ContainerName,
  ContainerTotalValue,
  NameField,
  TitleField,
  ValueField,
  Container,
  TextFieldInput,
  ContainerFieldInput,
  ContainerForm,
  TotalPriceField,
  BoxQuantityCart,
  InfoText,
} from "./styles";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Decimal from "decimal.js";
import { ProductType } from "../../model/Product";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { OrderType } from "../../model/Order";
import { OrderService } from "../../services/OrderService";
import { alertError} from "../../alerts";
import { toast } from "react-toastify";
import { formatBRL } from "../../helper";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";

export const ShoppingCartProduct = () => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const [deliveryDate, setDeliveryDate] = React.useState<Dayjs | null>(dayjs());
  const { productsCart, addToCart, removeFromCart, clearCart } =
    useContext(GlobalStateContext);
  const nameInput = React.useRef<HTMLInputElement>(null);
  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const createOrder = () => {
    const customerName = nameInput.current?.value;
    if (!deliveryDate || !customerName)
      return alertError("Preencha todos os dados");
    const body: OrderType = {
      items: productsCart,
      name: customerName,
      deliveryDate: deliveryDate?.toISOString(),
    };
    const createOrderPromise = OrderService.createOrder(body);
    toast.promise(createOrderPromise, {
      pending: "Criando o pedido...",
      success: "Pedido criado com sucesso.",
      error: "Falha ao criar pedido.",
    });
    createOrderPromise.then(() => {
      handleClose();
      clearCart();
    });
  };
   const handleQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    product: ProductType
  ) => {
    const newQuantity = Number(event.target.value);
    if ((product.quantityOrdered || 0) > newQuantity) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };
  return (
    <div>
      <BoxQuantityCart>
        {productsCart.reduce(
          (acumulador, item) => acumulador + (item.quantityOrdered || 0),
          0
        )}
        <ShoppingCart />
        <Button variant="outlined" onClick={handleClickOpen("paper")}>
          IR PARA CARRINHO <ArrowForwardIosIcon />
        </Button>
      </BoxQuantityCart>

      <Dialog open={open} onClose={handleClose} scroll={scroll}>
        <TitleField>CARRINHO DE COMPRAS</TitleField>
        <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
          <Container>
            <ContainerName>
              <NameField>PRODUTO </NameField>
              <NameField>PREÇO </NameField>
              <NameField>QUANT.</NameField>
              <NameField>SUBTOTAL</NameField>
            </ContainerName>

            {productsCart.map((item) => {
              const price = new Decimal(item.price || 0);
              return (
                <BoxItem>
                  <ContainerField>
                    <ValueField> {item.name}</ValueField>
                    <ValueField>
                      {" "}
                      {formatBRL.format(item.price || 0)}
                    </ValueField>

                    <TextField
                      variant="standard"
                      type="number"
                      value={item.quantityOrdered}
                      style={{ width: 45 }}
                      onChange={(event) => handleQuantityChange(event, item)}
                    />
                    <ValueField>
                      {price.times(item.quantityOrdered || 0).toNumber()}
                    </ValueField>
                  </ContainerField>
                </BoxItem>
              );
            })}

            <ContainerTotalValue>
              <TotalPriceField>TOTAL DA COMPRA </TotalPriceField>
              <TotalPriceField>
                {" "}
                {productsCart.reduce(
                  (acumulador, item) =>
                    new Decimal(item.price || 0)
                      .times(item.quantityOrdered || 0)
                      .plus(acumulador)
                      .toNumber(),
                  0
                )}
              </TotalPriceField>
            </ContainerTotalValue>

            <InfoText> *Preencha os campos para finalizar a compra</InfoText>
            <ContainerForm>
              <ContainerFieldInput>
                <TextFieldInput
                  inputRef={nameInput}
                  placeholder="NOME E SOBRENOME"
                  variant="filled"
                  style={{ width: "16rem" }}
                />
              </ContainerFieldInput>

              <ContainerFieldInput>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    inputFormat="MM/DD/YYYY"
                    value={deliveryDate}
                    onChange={setDeliveryDate}
                    renderInput={(params) => (
                      <TextField
                        variant="filled"
                        {...params}
                        style={{ width: "15rem" }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </ContainerFieldInput>
            </ContainerForm>
          </Container>
        </DialogContentText>

        <DialogActions>
          <IconButton
            onClick={handleClose}
            style={{ marginRight: "15rem", color: "black" }}
          >
            <HighlightOffIcon />{" "}
          </IconButton>
          <Button onClick={createOrder}>finalizar compra</Button>
          <Button
            onClick={clearCart}
            style={{ width: "2rem", marginRight: "1rem" }}
          >
            limpar{" "}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
