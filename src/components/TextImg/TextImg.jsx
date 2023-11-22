import React from 'react'
import './TextImg.css'

export default function TextImg({title, content, img, classSelected, orientationImg, borderRadius, clickable}) {
  return (
    <section className={`textImg ${classSelected}`}>
      {orientationImg == 'left' && <img src={img} alt="Image" style={{borderRadius: borderRadius}} className='back'/>}
      <div className='content'>
          <h2>{title}</h2>
          <p>{content}</p>
          {clickable && <a id='#'  style={{cursor: 'pointer'}}>Ver mas</a>}
      </div>
      {orientationImg == 'right' && <img src={img} alt="Image" style={{borderRadius: borderRadius}} className='back'/>}
    </section>
  )
}
