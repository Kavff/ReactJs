import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartWidget.scss";
import { Link } from "react-router-dom";
import React, {  useContext } from "react";
 import { CartContext1 }  from "../../context/CartContext1";


export function CartWidget() {
/*   const { cartQuantity } = useContext(CartContext1);
 */
const { cartQuantity } = useContext(CartContext1);

  return (
    <Link className="spanWid" to="/Cart">
      <>
        <IconButton>
          <ShoppingCartIcon color="secondary"></ShoppingCartIcon>
          <span className="spanWid">{cartQuantity()}</span>
        </IconButton>
      </>
    </Link>
  );
}

export default CartWidget;
