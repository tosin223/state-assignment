import { useState } from "react"
import Input from "./Input"
const FormTwo = () => {
    const[email, setEmail] =useState('')
    const[phone, setPhone] =useState('')
    const emailVal = (e)=> {
        setEmail(e.target.value)
    }
    const phoneVal = (e) => {
        setPhone(e.target.value)
    }
  return (
    <div>
        <Input type='email' value={email} onChange= {emailVal} placeholder='email'/>
        <Input type='tel' value={phone} onChange= {phoneVal} placeholder='telphone'/>
    </div>
  )
}

export default FormTwo