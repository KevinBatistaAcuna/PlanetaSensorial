import React from 'react'
import '../ServicioType/ServicioType.css'

export default function ServicioType({image, title, text, orientationImg, light}) {
  return (
    <div className={light ? 'servicioType__container light' : 'servicioType__container' }>
        {orientationImg == 'left' && <img src={image} alt="img" className='servicioType__image'/>}
        <div className='servicioType__textContainer'>
            <h2 className='servicioType__tittle'>{title}</h2>
            <p className='servicioType__text'>{text}</p>
        </div>
        {orientationImg == 'right' && <img src={image} alt="img" className='servicioType__image'/>}
    </div>
  )
}
