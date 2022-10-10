import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import "./ItemCart.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContext } from "../../context/CartContext";

const ItemCart = ({ product,handleAddToCart}) => {

  const { removeProduct } = useContext(CartContext);
/*   const [quantity, setQuantity] = useState(product.quantity);
 */ 
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
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default ItemCart;
