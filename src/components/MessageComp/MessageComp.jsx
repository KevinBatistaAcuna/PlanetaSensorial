import React from 'react'
import '../MessageComp/MessageComp.css'

export default function MessageComp({refInput}) {
  return (
    <div className='messageContainer'>
        <label htmlFor='#messageArea'>Mensaje :</label>
        <textarea name="textArea" id="messageArea" cols="30" rows="10" ref={refInput}></textarea>
    </div>
  )
}
