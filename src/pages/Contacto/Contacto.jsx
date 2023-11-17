import {React, useState, useRef} from 'react'
import ContactNumbers from '../../components/ContactNumbers/ContactNumbers'
import './Contacto.css'
import HeroComp from '../../components/HeroComp/HeroComp';
import InputComps from '../../components/InputComps/InputComp';
import MessageComp from '../../components/MessageComp/MessageComp';
import img from '../../assets/Planetasensorialimg5.jpg'

export default function Contact() {
  let [val, setVal] = useState();
  let nombreRef = useRef();
  let emailRef = useRef();
  let numberRef = useRef();
  let messageRef = useRef();

  return (
    <div className='contactBody'>
      <HeroComp image={img} title={'Contactenos'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, sapiente? Ullam at nam harum dignissimos, ex consectetur alias eius officiis, fugit ad velit. Sed quo sit est aspernatur possimus sunt!'}/>
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
