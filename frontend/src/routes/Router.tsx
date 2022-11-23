import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { CreateAccountPage } from "../pages/createAccountPage/CreateAccountPage";
import { ErrorPage } from "../pages/errorPage/ErrorPage";
import { LoginPage } from "../pages/loginPage/LoginPage";
import { ManagerPage } from "../pages/managementPage/ManagementPage";
import { ProductstListPage } from "../pages/productListPage/ProductsListPage";


export const Router: React.FC = () => {


return (

    <BrowserRouter>

      <Header />
      <Routes>
        <Route path="/" element={<ProductstListPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/createaccount" element={<CreateAccountPage/>} />
        <Route path="/management" element={<ManagerPage/>} />
        <Route    path = "*" element={<ErrorPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

//pagina de error com problema 