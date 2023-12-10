import { useState } from "react";
import Input from "./Input";
const FormThree = () => {
    const [password, setPassword] = useState('')
    const passwordVal = (e)=> {
        setPassword(e.target.value)
    }
  return (
    <div>
        <Input  type='password' value={password} onChange= {passwordVal} placeholder='password'/>
    </div>
  )
}

export default FormThree