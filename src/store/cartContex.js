import { createContext, useState } from "react";

export const cartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(item, quantity) {
    if (isInCart(item)) {
    } else {
      let copyCart = [...cart];

      copyCart.push({ item, quantity });

      setCart(copyCart);

      
    }
  }

  function isInCart(item) {
    return cart.some((itemInCart) => itemInCart.item === item);
  }

  return (
    <cartContext.Provider value={{ cart, addItem }}>
      {children}
    </cartContext.Provider>
  );
}
