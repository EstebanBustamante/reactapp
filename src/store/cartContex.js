import { createContext, useState } from "react";

export const cartContext = createContext();

export default function CartProvider({ children }) {
  const [prueba, setPrueba] = useState(0);

  const [cart, setCart] = useState([]);

  let copyCart = [...cart];

  function addItem(item, quantity, id, price, data) {
    if (isInCart(data.id)) {
      const itemIndex = findItem(data.id);
      itemIndex.quantity += quantity;
      setCart(copyCart);
    } else {
      copyCart.push({ id, item, quantity, price });
      setCart(copyCart);
    }
  }

  function isInCart(id) {
    return copyCart.some((itemInCart) => itemInCart.id === id);
  }

  function findItem(id) {
    return copyCart.find((item) => item.id === Number(id));
  }

  return (
    <cartContext.Provider value={{ cart, addItem, setCart, setPrueba, prueba }}>
      {children}
    </cartContext.Provider>
  );
}
