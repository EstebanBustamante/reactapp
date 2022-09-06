import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/" class="inicio">
        Inicio
      </Link>
      <ul>
        <li>
          <Link to="/productos">Nuestra comida</Link>
        </li>
        <li>
          <Link to="/categorias/Sandwich">Variedad</Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
