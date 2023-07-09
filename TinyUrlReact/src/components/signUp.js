import React, { Component } from 'react';
import { useState } from 'react'
import swal from 'sweetalert';
import "../css/login.css";
import Button from '@mui/material/Button';
import { FiLogIn } from 'react-icons/fi'
import serviceUsers from '../serviceUsers';
function SignUp({ setCom }) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name,setName]=useState('');
    async function signUp(e) {
        e.preventDefault()
        const res=await serviceUsers.signUp(email,pass,name);
        setPass('');
        setEmail('');
        setName('');
        swal("Fine!","You are successfully Signed Up","success").then(()=>{ setCom('login')})
    }
    return (
        <div>
            <h2>TINYURL</h2>
            <p>Welcome to TinyUrl</p>
            <form id="login" onSubmit={(e)=>{signUp(e)}}>
                <label>Name</label>
                <input class="logInput" type="text" required onChange={(e)=>{setName(e.target.value)}}/>
                <label>Email</label>
                <input class="logInput" type="email" required onChange={(e)=>{setEmail(e.target.value)}}/>
                <label>Password</label>
                <input class="logInput" minlength="8" type="password" required onChange={(e)=>{setPass(e.target.value)}}/>
                <div id="center">
                    By clicking on “Create Account”, I agree to <a>TinyURL’s Terms & Conditions</a> and <a>Privacy Policy</a>.
                    <Button id="log" variant="contained" type="submit">
                        <FiLogIn />  Create An Account
                    </Button>
                    <p>Already a user? </p> <p id="sig" onClick={() => setCom('login')}>Sign In</p>
                </div>
            </form>
        </div>
    )
}
export default SignUp;
