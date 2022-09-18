import {createContext, useState } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {



    const [cart,setCart] = useState([])

    const addToCart = (product) => {
      setCart([...cart,product])
    }
  
    const removeProduct = (id)=> {

      setCart(cart.filter((product) => product.id !== id))
    }
    const isInCart = (id) => {
      return  cart.some((product) => product.id === id)
    }

    /* const increaseQuantityInCart = (id) => {
      

    } */
  
    const cartQuantity = () => {
        return cart.reduce((acc,product) => acc + product.quantity,0)
    }
  
    const cartTotal = () => {
        return cart.reduce((acc,product) => acc + product.quantity * product.price,0)
    }

    const emptyCart = () => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          setCart([])
        }
      })
    }
  return <CartContext.Provider value={{
    cart,
    addToCart,
    isInCart,
    cartQuantity,
    cartTotal,
    emptyCart,
    removeProduct
  }}>
    {children}
    </CartContext.Provider>;
};









