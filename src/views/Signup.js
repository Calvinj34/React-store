import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function SignUp() {
    const [redirect, setRedirect] = useState(false)


    const sendSignUpInfo = async (e) => {
        e.preventDefault();

        if (e.target.password.value !== e.target.confirmPassword.value) { 
            return
        }

        const res = await fetch('http://localhost:5000/api/signup', {
            method: "POST",
            body: JSON.stringify({
                username: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value, }),          
            headers: {
                "Content-Type": 'application/json',
            }
        });
        const data = await res.json();
        console.log(data)
        if (data.status === 'ok') {
            setRedirect(true)
        }
    };


    return redirect ? <Navigate to='/Login' /> : (
        <form className='col-4' onSubmit={(e) => { sendSignUpInfo(e) }}>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                <input type="text" className="form-control" name='username' />
            </div>


            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" name='email' />
                
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" name='confirmPassword' />
            </div>

            <button type="submit" className="btn btn-primary">Create user</button>
        </form>
    )

}