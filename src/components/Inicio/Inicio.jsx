import React from 'react'
import './Inicio.css'
import logo from '../../images/logo.png'

export default function Inicio() {
    return (
        <div className="containerInicio">
            <h2>Bienvenidos a la mejor sandwicheria del país</h2>
            <img className="img-logo" src={logo} />
        </div>
    )
}
