import add from "../../images/1.png";
import remove from "../../images/2.png";
import "./ItemCount.css";
import Swal from "sweetalert2";
import React, { useState } from "react";


export default function ItemCount({ cantidad, addCard, product, id, price}) {

  const [count, setCount] = useState(1);


  let stock = cantidad;

  const addItems = () => {
    count < stock
      ? setCount(count + 1)
      : Swal.fire({
        icon: "error",
        title: "Perdón",
        text: `Solo podés pedir hasta ${stock} :( `,
      });
  };

  const removeItems = () => {
    count > 1 ? setCount(count - 1) : setCount(1);
  };

  return (
    <div className="container-count">
      <img onClick={() => addItems()} src={add} alt="add" />
      <p> {count} </p>
      <img onClick={() => removeItems()} src={remove} alt="remove" />
      <button class="btn" onClick={() => addCard(product, count, id, price)}>Agregar compra</button>
    </div>
  );
}
