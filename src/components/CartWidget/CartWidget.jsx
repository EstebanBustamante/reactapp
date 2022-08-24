import carrito from "../../images/burger-solid.svg";
import "./CartWidget.css";
import { useContext } from "react";
import { cartContext } from "../../store/cartContex.js";
import { Link } from "react-router-dom";

export default function CartWidget() {

  const { cart, prueba, setPrueba } = useContext(cartContext);
  let quantityProductos = 0;

  for (let iterador in cart) {
    quantityProductos += cart[iterador].quantity;
  }
  setPrueba(

    quantityProductos === 0 ? '' : quantityProductos

  );

  return (
    <div style={{ display: 'flex', gap: '5px', justifyContent: 'center', alignItems: 'center' }}>
      <Link to="/CartDetalleCompra"><img className="carrito" src={carrito} alt="carrito" /> </Link>
      <p style={{ color: 'white' }}>{prueba}</p>
    </div>
  );
}