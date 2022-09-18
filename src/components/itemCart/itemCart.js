import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import "./ItemCart.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContext } from "../../context/CartContext";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";

const ItemCart = ({ product }) => {
  const { removeProduct } = useContext(CartContext);

  return (
    <>
      <div className="containerMain">
        <div className="containerProduct">
          <div className="containerImg">
            <img src={product.img} alt={product.name}></img>
          </div>
          <div className="containerDetails">
            <h3> {product.name}</h3>
            <p className="containerPrice"> $ {product.price}</p>
            <p> Quantity: "{product.quantity}"</p>
            <p>Category: {product.category}</p>
            <IconButton
              color="primary"
              onClick={() => removeProduct(product.id)}
              aria-label="delete"
              size="large"
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
            <IconButton color="primary" aria-label="edit" size="large">
              <EditIcon fontSize="inherit" />
            </IconButton>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default ItemCart;
