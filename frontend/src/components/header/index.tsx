import AppBar from "@mui/material/AppBar";
import logo from "../../assets/shopperlogo.png";
import { StyledToolbar } from "./styles";
import { ShoppingCartProduct } from "../shoppingCart/index";

export const Header = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <img
          alt={"Logo da shopper"}
          src={logo}
          height="60"
          width="200"
          style={{ margin: "1.5rem", marginTop: "1rem" }}
        />
        <ShoppingCartProduct />
      </StyledToolbar>
    </AppBar>
  );
};
