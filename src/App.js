import * as React from "react";
import "./App.scss";
import { CartProvider } from "./Context/CartContext";
import { LoginProvider } from "./Context/LoginContext";



import AppRouter from './router/AppRouter';
function App() {


  return (
    // High order component
    <LoginProvider>
      <CartProvider>
        <AppRouter/>
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
