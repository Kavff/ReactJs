import Header from "./components/Header/Header";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themeConfig";
import "./App.scss";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginOrRegister from "./components/LoginOrRegister/LoginOrRegister";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {


  return (
    // High order component
    <CartProvider> 
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route
              path="/categories/:categoryId"
              element={<ItemListContainer />}
            ></Route>
            <Route path="/LoginOrRegister" element={<LoginOrRegister />} />
            <Route path="/Cart" element={<Cart/>}></Route>
            <Route path="/Checkout" element={<Checkout/>}></Route> 
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

