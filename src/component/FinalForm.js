import { useState } from "react"
import FormOne from "./FormOne"
import FormTwo from "./FormTwo"
import FormThree from "./FormThree"
const FinalForm = () => {
    const[step, setStep] = useState(0)
    const increaseStep = ()=> {
        setStep(step + 1 )

    }
    const decreaseStep = ()=> {
        setStep(step-1  )
    }
    const submit = ()=> {
        alert('you submitted me')
    }
  return (
    <div>
        {
            step === 0 && <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <FormOne />
                    <button onClick={increaseStep}>Next</button>
            </div>
        }
        {
            step === 1 && <div>
                <FormTwo />
                <button onClick={increaseStep}>Next</button>
                <button onClick={decreaseStep}>Prev</button>
            </div>
        }
        {
            step === 2 && <div>
                <FormThree />
                <button type="submit" onClick={submit}>Submit</button>
                <button onClick={decreaseStep}>Prev</button>
            </div>
        }   
    </div>
  )
}

export default FinalForm