
import React from 'react'


const ItemCart = ({product}) => {
  return (
    <div>
      
      <img src={product.img} alt={product.name}></img>
      <h3>{product.name}</h3>
      <p> $ {product.price*product.quantity}</p>



    </div>
  )
}

export default ItemCart



