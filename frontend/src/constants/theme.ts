import { createTheme, Theme } from "@mui/material/styles";
import { shopperGreen, primaryColor, black } from "./color";

export const theme: Theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          cursor: "grab",
          fontFamily: "Raleway, Arial",
          fontSize: ".69rem",
          fontWeight: 1000,
          marginTop: ".3rem",
          background: shopperGreen,
          borderWidth: ".15rem",
          color: black,
          borderColor: black,
          outlineColor: black,
          "&:hover": {
            backgroundColor: "#1E7556",
            color: black,
            borderColor: black,
          },
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
      default: primaryColor,
      paper: primaryColor,
    },
    text: {
      primary: black,
    },
    secondary: {
      main: black,
      contrastText: primaryColor,
    },
  },
});
