import {React, useState} from 'react'

export default function InputComps({labelText, type, id}) {
    const [obj, setObj] = useState()
  return (
    <div>
        <label htmlFor='#nombreInp'>{labelText}</label>
        <input type={type} id={id} onChange={ele=>{
            setObj(
                [...current, {labelText : ele.target.value}]
            )
            console.log(obj)
            }}/>
    </div>
  )
}
