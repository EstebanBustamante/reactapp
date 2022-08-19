import React from 'react'
import './Inicio.css'
import logo from '../../images/logo.png'

export default function Inicio() {
    return (
        <div className="containerInicio">
            <h2>Bienvenidos a "El arte del buen comer"</h2>
            <h3>Un lugar para comer bien y disfrutar un buen momento.</h3>
            <img className="img-logo" src={logo} />
        </div>
    )
}
