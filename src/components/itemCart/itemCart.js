import React from "react";
import "./ItemCart.scss";

const ItemCart = ({ product }) => {



  
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
        </div>
      </div>
      <hr />
    </div>
    </>
  );
};

export default ItemCart;
