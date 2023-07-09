import React, { Component } from 'react';
import { useState } from 'react'
import swal from 'sweetalert';
import "../css/login.css";
import Button from '@mui/material/Button';
import { FiLogIn } from 'react-icons/fi'
import serviceUsers from '../serviceUsers';
function Login({ setCom, setIsLoged ,setOpen,setUser}) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    async function login(e) {
        e.preventDefault()
        const res=await serviceUsers.login(email,pass);
        console.log(res)
        if(!res)
        {
            swal("Oops!","User doesn't exits, please Sign In","error").then(()=>{setCom('signUp')})
            return;
        }
        setIsLoged(true)
        setPass('')
        setEmail('')
        setOpen('none')
        setUser(res)
    }
    return (
        <div>
            <h2>TINYURL</h2>
            <p>Welcome to TinyUrl</p>
            <form id="login" onSubmit={(e)=>{login(e)}}>
                <label>Email</label>
                <input class="logInput" required type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <label>Password</label>
                <input class="logInput" required type="password" onChange={(e)=>{setPass(e.target.value)}} minlength="8"/>
                <div id="center">
                    <Button id="log" variant="contained" type="submit" >
                        <FiLogIn />      Sign In
                    </Button>
                    <p>Don’t have an account? </p> <p id="sig" onClick={() => setCom('signUp')}>Sign Up</p>
                </div >
            </form>
        </div>
    )
}
export default Login;
