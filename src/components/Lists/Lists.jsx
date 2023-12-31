import React from 'react'
import './Lists.css'

export default function Lists({title, content, classSelected, img, orientationImg, borderRadius}) {
  return (
    
    <section className={`listComp ${classSelected}`}>
    {orientationImg == 'left' && <img src={img} alt="Image" style={{borderRadius: borderRadius}} className='back'/>}
      <div className='textCont'>
        <h2>{title}</h2>
        <ul className='listContent'>
            {content.map(item => {
                return (
                <> 
                  <li key={item}>{item}</li>
                </> 
                )
            })}
        </ul>
      </div>
      {orientationImg == 'right' && <img src={img} alt="Image" style={{borderRadius: borderRadius}} className='back'/>}
    </section>
  )
}
