import logo from '../../images/logo.png'
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <ul>
        <li>
        <Link to="/productos">Nuestra comida</Link>
        </li>
        <li>
          <Link to="/categorias/Sandwitch">Variedad</Link>
        </li>
        <li>
          <a href="experiencia.html">Tu experiencia con nosotros</a>
        </li>

        <li>
          <CartWidget />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
