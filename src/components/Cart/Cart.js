import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import itemCart from "../itemCart/itemCart";

const Cart = ({ product = [] }) => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>My Cart</h2>
      <hr/>

      {cart.map((prod) => <itemCart product={prod} key={prod.id} />)}

    </div>
  );
};

export default Cart;
