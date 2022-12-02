import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { SignUpPage } from "../pages/createAccountPage/CreateAccountPage";
import { ErrorPage } from "../pages/errorPage/ErrorPage";
import { LoginPage } from "../pages/loginPage/LoginPage";
import { ManagerPage } from "../pages/managementPage/ManagementPage";
import { ProductstListPage } from "../pages/productListPage/ProductsListPage";


export const Router: React.FC = () => {


return (

    <BrowserRouter>
     {window.location.pathname === "/management" ? <Header /> :null}
     {window.location.pathname === "/" ? <Header /> :null}
    
      <Routes>
        <Route path="/" element={<ProductstListPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/management" element={<ManagerPage/>} />
        <Route path = "*" element={<ErrorPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

//pagina de error com problema 