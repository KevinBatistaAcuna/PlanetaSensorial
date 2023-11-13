import React from 'react'
import logo from '../../assets/logo.png'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
        <img src={logo} alt="logo" />
        <nav>
            <ul>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header