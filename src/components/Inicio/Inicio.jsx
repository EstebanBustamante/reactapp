import React from 'react'
import './Inicio.css'
import logo from '../../images/logo.png'

export default function Inicio() {
    return (
        <div className="containerInicio">
            <img className="img-logo" src={logo} alt="logo" />
        </div>
    )
}
