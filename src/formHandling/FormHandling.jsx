import { useState } from 'react';
import './FormHandling.css';

export const FormHandling = () =>{
 
    const[user, setUser] = useState("");
    const[pass, setPass] = useState("");
    
    const handleForm = ((e)=>{
        e.preventDefault();
        const loginData = {user,pass}
    
        console.log(loginData)
    }
);

    return (
        <form onSubmit={handleForm}>
             <div className='container'>
                <h1>Login</h1>
                <label htmlFor="Name"><b>Name</b></label>
                <input type="text"
                name='Name'
                value={user}
                placeholder='Enter your first name'
                onChange={(e)=>setUser(e.target.value)}
                required />

                <label htmlFor="password"><b>Password</b></label>
                <input type="password"
                name='password'
                value={pass}
                placeholder='Enter your password'
                onChange={(e)=>setPass(e.target.value)}
                required />

              <button>Submit</button>
             </div>
        </form>
    )
};
                

