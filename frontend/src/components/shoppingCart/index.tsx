import * as React from "react";
import { useContext } from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import GlobalStateContext from "../../global/GlobalContextState";
import {
  ProductBox,
  SubtitleBox,
  BoxTotalPrice,
  SubtitleField,
  CartTitle,
  ValueField,
  TextInputField,
  ContainerFieldInput,
  ContainerForm,
  TotalPriceField,
  InfoTextField,
  StyledBadge,
  NameProductField,
  ContainerButton,
  DialogContainer,
  BoxQuantityCart,
  CartContainer,
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
import { alertError } from "../../alerts";
import { toast } from "react-toastify";
import { formatBRL } from "../../helper";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const ShoppingCartProduct = () => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const [deliveryDate, setDeliveryDate] = React.useState<Dayjs | null>(dayjs());
  const { productsCart, addToCart, removeFromCart, clearCart, getProducts } =
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

    const nameValidate = customerName.split(" ");
    if (nameValidate.length < 2) {
      return alertError(
        "Preencha o campo corretamente colocando nome e sobrenome."
      );
    }
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
      getProducts();
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
        <IconButton>
          <StyledBadge
            badgeContent={productsCart.reduce(
              (acumulador, item) => acumulador + (item.quantityOrdered || 0),
              0
            )}
            color="secondary"
          >
            <ShoppingCartIcon
              background-color="secondary"
              fontSize="large"
              color="secondary"
            />
          </StyledBadge>
        </IconButton>
        <Button variant="contained" onClick={handleClickOpen("paper")}>
          IR PARA CARRINHO
        </Button>
      </BoxQuantityCart>

      <DialogContainer open={open} onClose={handleClose} scroll={scroll}>
        <CartTitle>CARRINHO DE COMPRAS</CartTitle>

        <CartContainer>
          <SubtitleBox>
            <SubtitleField>PRODUTO </SubtitleField>
            <SubtitleField>PREÇO </SubtitleField>
            <SubtitleField>QUANT.</SubtitleField>
            <SubtitleField>SUBTOTAL</SubtitleField>
          </SubtitleBox>

          {productsCart.map((item) => {
            const price = new Decimal(item.price || 0);
            return (
              <ProductBox>
                <NameProductField> {item.name}</NameProductField>
                <ValueField> {formatBRL.format(item.price || 0)}</ValueField>
                <TextField
                  variant="standard"
                  type="number"
                  value={item.quantityOrdered}
                  style={{ width: 42 }}
                  onChange={(event) => handleQuantityChange(event, item)}
                />
                <ValueField>
                  {formatBRL.format(
                    price.times(item.quantityOrdered || 0).toNumber()
                  )}
                </ValueField>
              </ProductBox>
            );
          })}

          <BoxTotalPrice>
            <TotalPriceField>
              <span>TOTAL DA COMPRA </span>
              <span>
                {formatBRL.format(
                  productsCart.reduce(
                    (acumulador, item) =>
                      new Decimal(item.price || 0)
                        .times(item.quantityOrdered || 0)
                        .plus(acumulador)
                        .toNumber(),
                    0
                  )
                )}
              </span>
            </TotalPriceField>
          </BoxTotalPrice>

          <InfoTextField>
            *Preencha os campos para finalizar a compra
          </InfoTextField>
          <ContainerForm>
            <ContainerFieldInput>
              
              <TextInputField
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
        </CartContainer>

        <ContainerButton>
          <span>
            <IconButton onClick={handleClose} style={{ color: "black" }}>
              <HighlightOffIcon />
            </IconButton>
          </span>
          <span>
            <Button onClick={createOrder}>finalizar compra</Button>
            <Button
              onClick={clearCart}
              style={{ marginLeft: "1rem", width: "2rem" }}
            >
              limpar
            </Button>
          </span>
        </ContainerButton>
      </DialogContainer>
    </div>
  );
};
