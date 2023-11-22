import {React, useState} from 'react'
import logo from '../../assets/logo.png'
import './Header.css'
import { Link } from "react-router-dom";
import img from '../../assets/Hamburger_icon.svg.png'

const Header = () => {
  const [visibleNav, setVisibleNav] = useState(false)
  return (
    <header className='header'>
      <Link to="/">
        <img src={logo} alt="logo" className='logoImg'/>
      </Link>
      <section className='navSection'>
        {window.screen.width < 770 && <img src={img} alt='menu' className='menuImg' onClick={()=> setVisibleNav(!visibleNav)}/>}
        <nav className={visibleNav ? 'visibleNav' : 'notVisibleNav'}>
          <ul>
            <li onClick={()=> setVisibleNav(!visibleNav)}><Link to="/">Inicio</Link></li>
            <li onClick={()=> setVisibleNav(!visibleNav)}><Link to="/nosotros">Nosotros</Link></li>
            <li onClick={()=> setVisibleNav(!visibleNav)}><Link to="/contacto">Contacto</Link></li>
            <li onClick={()=> setVisibleNav(!visibleNav)}><Link to="/servicios">Servicios</Link></li>
          </ul>
        </nav>
      </section>
    </header>
  )
}

export default Header