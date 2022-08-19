import  React, { useContext } from "react";
import { cartContext } from "../../store/cartContex.js";
import './CartDetalleCompra.css'

export default function CartDetalleCompra() {


  const { cart } = useContext(cartContext);

  let mapeo = cart.map((producto) => producto)

console.log(mapeo)



  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", color: "orange" }}>
      <h2>Productos comprados:</h2>

             <div className="detalleCompra">
                  {cart.map((producto) => <div>

                    <p>{`Producto: ${producto.item}`}</p>
                    <p>{`Cantidad: ${producto.quantity}`}</p>



                  </div>  )}
                  
             </div>
    </div>
  );
}



{/* <p>{`Producto: ${producto.item} Precio: ${producto.quantity}`}</p> */}