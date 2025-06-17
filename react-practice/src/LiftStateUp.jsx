import { useState } from "react";

export const LiftStateUp = () => {
    const [inputvalue , setInput] = useState(""); //this was use inside the InputComp but we lifted it up to the parent component
    return (
        <>
        <InputComp inputvalue={inputvalue} setInput={setInput}/>
        <DisplayComp inputvalue={inputvalue}/>
        </>
    )};

    const InputComp = ({inputvalue,setInput}) => {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="Enter something"
                    value={inputvalue} 
                    onChange={(e) => setInput(e.target.value)}
                    > </input>
            </div>
        )
    };

    const DisplayComp = ({inputvalue}) => {
        
        return (
            <p> the input value is {inputvalue}</p>
        )
    };