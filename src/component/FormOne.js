import Input from "./Input"
import { useState } from "react"
const FormOne = () => {
    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName]  = useState('')
    const firstNameVal =  (e) => {
        setFirstName(e.target.value)
    }
    const lastNameVal = (e) => {
        setLastName(e.target.value)
    }

  return (
    <div>
        <Input type='text' value={firstName} onChange= {firstNameVal} placeholder='First Name'/>
        <Input type='text' value={lastName} onChange={lastNameVal} placeholder='Last Name'/>
    </div>
  )
}

export default FormOne