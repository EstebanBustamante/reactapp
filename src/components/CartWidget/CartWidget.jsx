import carrito from "../../images/burger-solid.svg";
import "./CartWidget.css";

export default function CartWidget() {
  return (
    <img className="carrito" src={carrito} alt="carrito" />
  );
}
