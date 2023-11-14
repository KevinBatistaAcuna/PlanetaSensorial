import React from 'react'
import './Lists.css'

export default function Lists({title, content, classSelected}) {
  return (
    <section className={`listComp ${classSelected}`}>
      <h2>{title}</h2>
      <ul className='listContent'>
          {content.map(item => {
              return <li key={item}>{item}</li>
          })}
      </ul>
    </section>
  )
}
