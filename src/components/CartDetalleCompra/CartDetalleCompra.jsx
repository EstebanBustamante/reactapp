import  React, { useContext } from "react";
import { cartContext } from "../../store/cartContex.js";
import './CartDetalleCompra.css'
import Swal from "sweetalert2";
import UserForm from "../UserForm/UserForm.jsx";

export default function CartDetalleCompra() {

  const { cart, setCart } = useContext(cartContext);

  const clear = () => setCart([]);

  const removeItems = (itemId) => {
    let newRemoveItemsForId = cart.filter((item) => item.id !== itemId);
    setCart(newRemoveItemsForId);
  } 
  const redirecIr = () => { setTimeout(function () { window.location.href = "/"; }, 1000) }

  const redirecIrConAlert = () => {

    let timerInterval;

    Swal.fire({
      title: 'No se registró ninguna compra',
      html: 'De nuevo al menú principal!',
      timer: 1500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 150)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })


    redirecIr()


  }

  if (cart.length === 0) {
    return redirecIrConAlert();
  }


  let totalCantidadProductos = 0;

  for (let iterador in cart) {
    totalCantidadProductos += cart[iterador].quantity * cart[iterador].price.slice(1);
  }

  return (

    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "orange" }}>
      <h2>Detalle de compras del carrito</h2>
      <div>
        <button class="btnDelete" onClick={() => clear()} > Vaciar carrito </button>
      </div>
      <div className="detalleCompra">
        {cart.map((producto) => <div>
          <p>{`Producto: ${producto.item}`}</p>
          <p>{`Cantidad: ${parseInt(producto.quantity)}`}</p>
          <p>{`Precio: $ ${parseFloat(producto.price.slice(1))}`}</p>
          <p>{`Total: $ ${parseInt(producto.quantity) * parseFloat(producto.price.slice(1))} `}</p>
          <button class="btn" onClick={() => removeItems(producto.id)}>Eliminar</button>
        </div>)}
        <h4>{`TOTAL GENERAL: $ ${totalCantidadProductos.toFixed(2)}`}</h4>
      </div>
      <UserForm 
      
      cart={cart}
      cantidad = {totalCantidadProductos}
      
      />


    </div>
  );
}

