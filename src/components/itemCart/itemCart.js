import { IconButton, Button } from "@mui/material";
import React from "react";
import "./ItemCart.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCartContext } from "../../context/CartContext";
import EditIcon from "@mui/icons-material/Edit";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";

const ItemCart = ({ product,handleAddToCart}) => {
  const { removeProduct } = useCartContext();
  const [quantity, setQuantity] = useState(product.quantity);

    const [appearButton,setAppearButton] = useState(false)
    const handleToggle=()=>{
      setAppearButton(!appearButton);
    }

  console.log(appearButton)
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
            <p>Qty: {product.quantity}</p>
             <div className={`buttonsItemCountFalse ` + (appearButton ? `buttonsItemCountTrue` : ``)}>
              <ItemCount
                stock={product.stock}
                counter={quantity}
                setCounter={setQuantity}
              />
              <Button 
              variant="contained" 
              color="primary"
              onClick={handleAddToCart}>   
                accept
              </Button>
            </div>
            <p>Category: {product.category}</p>
            <div className="editButton">
              <IconButton
                color="primary"
                onClick={() => removeProduct(product.id)}
                aria-label="delete"
                size="large"
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                color="primary"
                onClick={handleToggle}
                aria-label="edit"
                size="large"
              >
            
                <EditIcon fontSize="inherit" />
              </IconButton>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default ItemCart;
