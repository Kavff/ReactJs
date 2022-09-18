import {createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart,setCart] = useState([])

    const addToCart = (product) => {
      setCart([...cart,product])
    }
  
    const isInCart = (id) => {
      return  cart.some((product) => product.id === id)
    }
  
    const cartQuantity = () => {
        return cart.reduce((acc,product) => acc + product.quantity,0)
    }
  
    const cartTotal = () => {
        return cart.reduce((acc,product) => acc + product.quantity * product.price,0)
    }

    const emptyCart = () => {
      setCart([])
    }
  return <CartContext.Provider value={{
    cart,
    addToCart,
    isInCart,
    cartQuantity,
    cartTotal,
    emptyCart
  }}>
    {children}
    </CartContext.Provider>;
};









