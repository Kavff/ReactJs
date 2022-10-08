import * as React from "react";
import "./App.scss";
import { CartProvider } from "./Context/CartContext";
import { LoginProvider } from "./Context/LoginContext";

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
