import React, { useContext } from "react";
import cartContext from "../../context/cartContext";

const Cart = ({ product = [] }) => {
  const { cart } = useContext(cartContext);

  return (
    <div>
      <h2>My Cart</h2>
      <hr/>

      {cart.map((prod) => <itemCart product={prod} key={prod.id} />)}

    </div>
  );
};

export default Cart;
