import shoppingCard from "../../images/shopping-card-outline.gif";
import "./CartWidget.css";

export default function CartWidget() {
  return (
    <img className="shoppingCard" src={shoppingCard} alt="Shopping Card" />
  );
}
