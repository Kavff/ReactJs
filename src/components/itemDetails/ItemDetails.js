import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ItemCount from "../ItemCount/ItemCount";
import "./itemDetails.scss";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const ItemDetails = ({ products }) => {
  const { addToCart, isInCart } = useCartContext();

  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    const itemToCart = {  
      id: products.id,
      name: products.name,
      price: products.price,
      img: products.img,
      category: products.category,
      quantity
    };
    addToCart(itemToCart);  
  };

  return (
    <div className="mainComponent">
      <Card className="cardMain" sx={{ maxWidth: 620, margin: 5 }}>
        <div className="cardImg">
          <img src={products.img} alt={products.name}></img>
        </div>
        <CardContent className="cardContent">
          <Typography
            className="cardName"
            gutterBottom
            variant="h5"
            component="div"
          >
            {products.name}
          </Typography>
          <hr className="cardHr" />
          <Typography variant="body2" color="text.secondary">
            {products.desc}
          </Typography>
          <hr className="cardHr" />
          <Typography variant="h5" color="primary">
            ${products.price}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            <div className="cardResponse">
              {isInCart(products.id) ? (
                <>
                  <Link className="cardLink" to="/">
                    <Button variant="contained" color="secondary" >
                      Continue shopping
                    </Button>
                  </Link>
                  <Link className="cardLink" to="/Cart">
                    <Button variant="contained" color="secondary">
                      Complete my order
                    </Button>
                  </Link>
                  <p className="cardP" >you already have this product in your cart</p>
                </>
              ) : (
                <ItemCount
                  initial={products.stock > 1 ? 1 : 0}
                  stock={products.stock}
                  counter={quantity}
                  setCounter={setQuantity}
                  handleAddToCart={handleAddToCart}
                />
              )}
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ItemDetails;
