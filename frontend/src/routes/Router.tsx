import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { ProductstListPage } from "../pages/productListPage/ProductsListPage";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductstListPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
