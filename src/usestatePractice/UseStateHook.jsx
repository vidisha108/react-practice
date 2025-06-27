import './UseState.css';
import {useState} from "react";


export const UseStateHook = () =>
{

const [count, setCount] = useState(0);
const [step, setStep] = useState(0);

const handleInc = () =>{
    setCount(count + step);
};
const handleDec = () =>{
    setCount(count - step);
}
const handleReset = () =>{
    setCount(0);
     setStep(0);
};
    return (
        
        <div className='container'>
            <h1>UseState hook</h1>
            <p>
                Count : <span>{count}</span>
            </p>
            <label>
                Step : <input
                 type="number"
                 value={step}
                 onChange={(e)=>setStep(Number(e.target.value))} />
            </label>
            <div className='buttonContainer'>
                <button onClick={handleInc} disabled={count>=100}>Increment</button>
                <button onClick={handleDec} disabled={count<=0} >Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
       
    )
}
            
          