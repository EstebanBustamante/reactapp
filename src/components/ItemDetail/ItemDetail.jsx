import '../ItemDetail/ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function ItemDetail({ price, images, product, variedad, detalles, cant }) {

  const [state, setState] = useState(0);

  const addCard = (producto, cantidad) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Añadiste ${cantidad} ${product} al carrito`,
      showConfirmButton: false,
      timer: 1500,
    });

    setState(cantidad)
  };

  return (
    <div className='item-detail'>
      <h3>{product} {variedad}</h3>
      <div className='containerDetailsImg'>
        <img src={images} alt='images-food' />
        <div className='item-detail-price'>
          <p>{detalles}</p>
          <p>Cuando se trata de preparar tu {product} {variedad} no tenemos tiempo que perder. Nos enfocamos en poder cumplir los tiempos correctos para que no tengas que esperar.</p>
          <p>Tu {product} {variedad} lo podés retirar en nuestro local, sino también hacemos envios a domicilio.</p>
          <div className="group-price-count">
            <p>Disfrutalo solo por <span>{price}</span></p>
            {state === 0 ?
              <ItemCount cantidad={cant} addCard={addCard} product={product} />
              :
              <a href="/cart">Ir al carrito</a>
            }
          </div>
        </div>
      </div>
    </div>
  )
}


