import React from 'react'
import './TextImg.css'
import { Link } from "react-router-dom";

export default function TextImg({title, content, img, classSelected, orientationImg, borderRadius, clickable, route}) {
  return (
    <section className={`textImg ${classSelected}`}>
      {orientationImg == 'left' && <img src={img} alt="Image" style={{borderRadius: borderRadius}} className='back'/>}
      <div className='content'>
          <h2>{title}</h2>
          <p>{content} {clickable && <Link className='link' to={`/${route}`}>Ver más...</Link>}</p>
          
      </div>
      {orientationImg == 'right' && <img src={img} alt="Image" style={{borderRadius: borderRadius}} className='back'/>}
    </section>
  )
}
