import React from 'react'
import './TextImg.css'

export default function TextImg({title, content, img, classSelected, orientationImg}) {
  return (
    <section className={`textImg ${classSelected}`}>
      {orientationImg == 'left' && <img src={img} alt="Image" className='back'/>}
      <div className='content'>
          <h2>{title}</h2>
          <p>{content}</p>
      </div>
      {orientationImg == 'right' && <img src={img} alt="Image" className='back'/>}
    </section>
  )
}
