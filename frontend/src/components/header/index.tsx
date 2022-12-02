import AppBar from "@mui/material/AppBar";
import logo from "../../assets/shopperlogo.png";
import { StyledToolbar, BoxIcon, LoginText } from "./styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import { ShoppingCartProduct } from "../shoppingCart/index";
import LoginIcon from "@mui/icons-material/Login";
import { IconButton } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalContextState";
import { useContext } from "react";
import { SearchBar } from "../SearchBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { goToManagement, goToProductList } from "../../routes/Coordinator";
import { BoxIconShoppingCart } from "../shoppingCart/styles";
import { LoginModal } from "../modal/loginModal";

export const Header: React.FC = () => {
  const { products, setProductsToRender } = useContext(GlobalStateContext);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <img alt={"Logo da shopper"} src={logo} height="50" width="180" />

        <SearchBar
          setProductsToRender={setProductsToRender}
          products={products}
        />

        {location.pathname === "/" && (
          <BoxIcon>
          
              <LoginModal/>
             
          

            <LoginText>
              {" "}
              Faça Login ou
              <br />
              Cadastre-se
            </LoginText>

            <ShoppingCartProduct />
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
