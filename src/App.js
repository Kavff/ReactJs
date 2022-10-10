import * as React from "react";
import "./App.scss";
import  CartProvider  from "./context/CartContext1";
import  LoginProvider  from "./context/LoginContext";

import AppRouter from "./router/AppRouter";
function App() {
  return (
    // High order component
    <CartProvider>
      <LoginProvider>
        <AppRouter />
      </LoginProvider>
    </CartProvider>
  );
}

export default App;
