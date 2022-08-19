import '../ItemDetail/ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useContext } from "react";
import { cartContext } from "../../store/cartContex.js";
import { Link } from "react-router-dom";

export default function ItemDetail({ price, images, product, variedad, detalles, cant }) {
  const { cart, addItem } = useContext(cartContext);

  const [state, setState] = useState(0);

  const addCard = (producto, cantidad) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Agregaste ${cantidad} ${product} a tu pedido!! :D`,
      showConfirmButton: false,
      timer: 1000,
    });

    setState(cantidad);
    addItem(producto, cantidad);
  };

  return (
    <div className='item-detail'>
      <h3>{product} {variedad}</h3>
      <div className='containerDetailsImg'>
        <img src={images} alt='images-food' />
        <div className='item-detail-price'>
          <p>{detalles}</p>
          <p>No te pierdas la posibilidad de probar un {product} {variedad}.  Te aseguramos una grata experiencia,    realizados con productos frescos. Retiralo o pedi que te lo mandemos!!</p>
          <div className="group-price-count">
            <p>Disfrutalo al precio de <span>{price}</span></p>
            {cart.some((itemInCart) => itemInCart.item === product) === false ? ( 
              <ItemCount cantidad={cant} addCard={addCard} product={product} />)
              :(
                <Link class="btn" to="/CartDetalleCompra">Ver compra</Link>)}
          </div>
        </div>
      </div>
    </div>
  );
}


