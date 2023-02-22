import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login({logMeIn}) {
    const [redirect, setRedirect] = useState(false)
    const Navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        

        const url = 'http://localhost:5000/api/login'
        const options = {
            method: "POST",
            headers: {
                Authorization: `Basic ${btoa(username+':'+password)}`
                
            }

            
        }
    

        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)
        if (data.status === 'ok') {
            logMeIn(data)  
            Navigate('/Products')         
        }

    };

    return redirect ? <Navigate to='/Products'  /> : (
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <input name='username' />
                <input name='password' type='password' />
                <button type='submit'>Log In</button>


            </form>



        </div>
    )
}