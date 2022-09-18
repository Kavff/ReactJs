import { IconButton } from "@mui/material";
import React from "react";
import "./ItemCart.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCartContext } from "../../context/CartContext";
import EditIcon from "@mui/icons-material/Edit";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();

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
