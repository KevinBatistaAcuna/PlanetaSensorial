import React, { useState } from 'react'
import ContactNumbers from '../../../components/ContactNumbers/ContactNumbers'
import InputComps from '../../../components/Inputcomps/InputComps'

export default function Contact() {
    let [val, setVal] = useState();
  return (
    <div>
        <ContactNumbers/>
        <form>
            <InputComps labelText={'Nombre Completo :'} type={'text'} id={'nombreInp'} setVal={setVal}/>
            <InputComps labelText={'Correo :'} type={'email'} id={'emailInp'} setVal={setVal}/>
            <InputComps labelText={'Numero de telefono :'} type={'number'} id={'numberInp'} setVal={setVal}/>
            <InputComps labelText={'Mensaje :'} type={'text'} id={'textInp'} setVal={setVal}/>
        </form>
        <button onClick={e=>{console.log(val)}}>Enviar mensaje</button>
    </div>
  )
}
