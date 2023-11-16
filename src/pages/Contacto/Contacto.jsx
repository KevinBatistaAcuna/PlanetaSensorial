import {React, useState, useRef} from 'react'
import ContactNumbers from '../../components/ContactNumbers/ContactNumbers'
import './Contacto.css'
import HeroContact from '../../components/HeroContact/HeroContact';
import InputComps from '../../components/InputComps/InputComp'
import MessageComp from '../../components/MessageComp/MessageComp';

export default function Contact() {
  let [val, setVal] = useState();
  let nombreRef = useRef();
  let emailRef = useRef();
  let numberRef = useRef();
  let messageRef = useRef();

  return (
    <div className='contactBody'>
      <HeroContact />
      <div className='contactBody__contactMessage'>
        <section className='sectionNums__formMessage'>
          <ContactNumbers/>
          <form>
            <InputComps labelText={'Nombre Completo :'} type={'text'} id={'nombreInp'} refInput={nombreRef}/>
            <InputComps labelText={'Correo :'} type={'email'} id={'emailInp'} refInput={emailRef}/>
            <InputComps labelText={'Numero de telefono :'} type={'number'} id={'numberInp'} refInput={numberRef}/>
            <MessageComp refInput={messageRef}/>
            <button onClick={e=>{setVal([nombreRef.current.value, emailRef.current.value, numberRef.current.value, messageRef.current.value])}}>Enviar mensaje</button>
        </form>
      </section>
      </div>
    </div>
  )
}
