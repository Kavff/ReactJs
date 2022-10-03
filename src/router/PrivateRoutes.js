import React from "react";
import Header from "../components/Header/Header";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../themeConfig";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";
import { Routes, Route, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route
            path="/categories/:categoryId"
            element={<ItemListContainer />}
          />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="*" element={<Navigate to="/" />} />
          {/* {user.rol === "admin" ? (
            <Route path="/Admin" element={<Admin />} />
          ) : null} */}
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default PrivateRoutes;
