import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import firestoreDB from "../../services/firebase";
import Swal from "sweetalert2";
import './UserForm.css'

export default function UserForm({ cart, cantidad }) {


  const [userData, setUserData] = useState({
    name: "",
    email: "",
    telefono: "",
  });


  const [orderFirebase, setOrderFirebase] = useState({
    id: '',
    complete: false,
  });


  const ordenDeCompra = {
    buyer: { ...userData },
    items: [...cart],
    total: cantidad,
    date: new Date(),
  };

  const redirec = () => { setTimeout(function () { window.location.href = "/"; }, 4000) }

  const redirecConAlert = () => {

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `Gracias por tu compra!
          El Nº de seguimiento es el ${orderFirebase.id}`,
      showConfirmButton: false,
      timer: 4500
    })

    redirec()

  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const collectionRef = collection(firestoreDB, "orders");
    const order = await addDoc(collectionRef, ordenDeCompra);
    setOrderFirebase({ id: order.id, complete: true });

  }

  function inputChangeHandler(evt) {
    const input = evt.target;
    const value = input.value;
    const inputName = input.name;
    let copyUserData = { ...userData };

    copyUserData[inputName] = value;
    setUserData(copyUserData);
  }


  function handleReset(evt) {
    setUserData({
      name: "",
      email: "",
      telefono: "",
    });
  }

  if (orderFirebase.complete === true) redirecConAlert();

  return (
    <div className="form-container">
      <form onReset={handleReset} onSubmit={handleSubmit}>
        <h3>Formulario de Compra</h3>
        <div className="form-item">
          <input
            value={userData.name}
            onChange={inputChangeHandler}
            name="name"
            type="text"
            placeholder="Nombre"
            autoComplete="offs"
            required
          />
        </div>
        <div className="form-item">
          <input
            value={userData.telefono}
            onChange={inputChangeHandler}
            name="telefono"
            type="text"
            placeholder="Telefono"
            autoComplete="offs"
            required
          />
        </div>
        <div className="form-item">
          <input
            value={userData.email}
            onChange={inputChangeHandler}
            name="email"
            type="text"
            placeholder="Correo"
            autoComplete="offs"
            required
          />
        </div>
        <div className="formButton">
          <button type="submit" >
            Finalizar Compra
          </button>
          <button type="reset">Vaciar Formulario</button>
        </div>
      </form>
    </div>
  )
}
