import React from "react";

const ItemCart = ({ product }) => {

  return (
    <div>
      <div>
        <div>
          <img src={product.img} alt={product.name}></img>
          <h3> {product.name}</h3>
          <p> $ {product.price}</p>
          <p> quantity: {product.quantity}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ItemCart;
