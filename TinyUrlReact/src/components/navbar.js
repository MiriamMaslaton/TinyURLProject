import * as React from 'react';
import "../css/navbar.css"
import { Button } from '@mui/material';
import { AiOutlineClose } from "react-icons/ai";
import Login from './login';
import SignUp from './signUp';
import UserUrls from './userUrls';
export default function Navbar({ open, setOpen, com, setCom, isLoged, setIsLoged,user,setUser }) {
    function handleOpen(val) { setOpen('block'); setCom(val); }
    const handleClose = () => setOpen('none');
    function getCom() {
        switch (com) {
            case 'login': return <Login setCom={setCom} setIsLoged={setIsLoged} setOpen={setOpen} setUser={setUser}/>
            case 'signUp': return <SignUp setCom={setCom} />
            case 'urls':  if(isLoged) return<UserUrls links={user.links}/>; return <UserUrls links={null}/> 
        }
    }
    function getLog() {
        if (!isLoged)
            return <Button class="link" onClick={() => { handleOpen('login') }}>Sign In</Button >
        return <Button class="link" onClick={() => { setIsLoged(false); setUser(null) }}>Sign Out</Button >
    }
    return (
        <div>
            <h1 onClick={handleClose}>TINYURL</h1>
            <div id="nav">
                <Button class="link" onClick={() => { handleOpen('urls') }}>My URLs</Button >
                {getLog()}
                <Button class="link" onClick={() => { handleOpen('signUp') }}>Sign Up</Button >
            </div>
            <div id="modal"
                style={{ display: open }}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <button id="ex" onClick={handleClose}><AiOutlineClose /></button>
                <div id="com">
                    {getCom()}
                </div>
            </div>
        </div>
    );
}