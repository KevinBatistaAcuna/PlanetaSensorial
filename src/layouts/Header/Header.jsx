import React from 'react'
import logo from '../../assets/logo.png'
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header