import AppBar from "@mui/material/AppBar";
import logo from "../../assets/shopperlogo.png";
import { StyledToolbar, BoxIcon } from "./styles";
import { ShoppingCartProduct } from "../shoppingCart/index";
import LoginIcon from "@mui/icons-material/Login";
import { IconButton } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalContextState";
import { useContext } from "react";
import { SearchBar } from "../SearchBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { goToManagement, goToProductList } from "../../routes/Coordinator";

export const Header: React.FC = () => {
  const { products, setProductsToRender } = useContext(GlobalStateContext);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        {location.pathname === "/" && "/management" && (
          <img alt={"Logo da shopper"} src={logo} height="50" width="180" />
        )}
        {location.pathname === "/management" && (
          <img alt={"Logo da shopper"} src={logo} height="50" width="180" />
        )}
        {location.pathname === "/" && (
          <SearchBar
            setProductsToRender={setProductsToRender}
            products={products}
          />
        )}
        {location.pathname === "/management" && (
          <SearchBar
            setProductsToRender={setProductsToRender}
            products={products}
          />
        )}
        {location.pathname === "/" && (
          <BoxIcon>
            <ShoppingCartProduct />
            <h3> ADM</h3>
            <IconButton>
              <LoginIcon
                onClick={() => goToManagement(navigate)}
                fontSize="large"
              />
            </IconButton>
          </BoxIcon>
        )}
        {location.pathname === "/management" && (
          <BoxIcon>
            <IconButton>
              <ArrowBackIcon
                onClick={() => goToProductList(navigate)}
                fontSize="large"
              />
            </IconButton>
          </BoxIcon>
        )}
      </StyledToolbar>
    </AppBar>
  );
};
