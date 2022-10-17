import { ThemeProvider } from "@mui/material";
import { theme } from "./constants/theme";
import { Router } from "./routes/Router";
import { GlobalState } from "./global/GlobalState";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <ToastContainer position="top-center" autoClose={1000} />
        <Router />
      </ThemeProvider>
    </GlobalState>
  );
};

export default App;
