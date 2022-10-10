import { createContext, useEffect, useState,useContext } from "react";
import Swal from "sweetalert2";

const CartContext = createContext();

const init = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(init);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };
  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, product) => acc + product.quantity, 0);
  };

  const cartTotal = () => {
    return cart.reduce(
      (acc, product) => acc + product.quantity * product.price,
      0
    );
  };

  const emptyCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
      }
    });
  };

  const finishCheckout = (id) => {
    Swal.fire({
      title: "Successful purchase",
      text: `Your order number is: ${id}`,
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Enjoy!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        isInCart,
        cartQuantity,
        cartTotal,
        emptyCart,
        removeProduct,
        finishCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export { CartContext }


export const useCartContext = () => {
  return useContext(CartContext);
}; 
