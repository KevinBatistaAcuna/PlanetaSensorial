import {React} from 'react'
import './InputComp.css'

export default function InputComps({labelText, type, id, refInput}) {
  return (
    <div className='inputContainer'>
        <label htmlFor='#nombreInp'>{labelText}</label>
        <input type={type} id={id} ref={refInput}/>
    </div>
  )
}
