import cars from '../../images/logo.png'
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">
        <img className="logo" src={cars} alt="cars-logo" />
      </Link>
      <div className="contenedorParrafos">
        <p className="elArteDelBuenComer">
        El arte del buen comer
        </p>
      </div>
      <ul>
        <li>
        <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/categorias/Sandwitch">Categorias Por Comida </Link>
        </li>
        <li>
          <a href="contacto.html">Contacto</a>
        </li>

        <li>
          <CartWidget />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
