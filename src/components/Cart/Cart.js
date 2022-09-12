import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCart from "../itemCart/ItemCart";

const Cart = ({ product = [] }) => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Your watches</h2>
      <hr/>

      {cart.map((prod) => <ItemCart product={prod} key={prod.id} />)}

    </div>
  );
};

export default Cart;
