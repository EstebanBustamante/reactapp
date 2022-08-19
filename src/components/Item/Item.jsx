
import "./Item.css";
import { Link } from "react-router-dom";

export default function Item({ product, variedad, precio, imagen, Id }) {



  return (
    <div className="container">
      <div className="container-image">
        <h4>{product}</h4>
        <h5> {variedad}</h5>
        <img
          className="producto-image"
          src={imagen}
          alt="imagen"
        />
        <p>{precio}</p>

        <Link class="btn" to={`/detalles/${Id}`}>Más información</Link>

      </div>

    </div>
  );
}
