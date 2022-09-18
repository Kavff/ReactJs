import { Button } from "@mui/material";
import React from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../itemCart/ItemCart";
import "./Cart.scss";

const Cart = ({ product = [] }) => {
  const { cart,cartTotal,emptyCart } = useCartContext();

  return (
    <div className="containerCart">
      <div className="containerTitle">
        <h2 className="h2Title">Your watches</h2>
      </div>
      <hr />
      {cart.map((prod) => (
        <ItemCart product={prod} key={prod.id} />
      ))}
      <hr />

      <div className="containerSubclass">
        <h2> Subtotal: $ {cartTotal()}</h2>
        <Button onClick={emptyCart} variant="contained" color="primary">
          Delete all products
        </Button>
      </div>
    </div>
  );
};

export default Cart;
