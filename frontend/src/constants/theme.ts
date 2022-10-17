import { createTheme, Theme } from "@mui/material/styles";
import { shopperGreen, primaryColor, black } from "./color";

export const theme: Theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: shopperGreen,
          color: black,
        },
      },
    },
  },
  palette: {
    primary: {
      main: primaryColor,
      contrastText: black,
    },
    background: {
      default: shopperGreen,
    },
    text: {
      primary: shopperGreen,
    },
  },
});
