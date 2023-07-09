import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar.js';
import NewUrl from './components/newUrl.js';
import './css/app.css'
function App() {
  const [open, setOpen] = useState('none')
  const [com, setCom] = useState('');
  const [isLoged,setIsLoged]=useState(false)
  const [user,setUser]=useState(null)
  return (
    <>
      <Navbar open={open} setOpen={setOpen} com={com} setCom={setCom} isLoged={isLoged} setIsLoged={setIsLoged} user={user} setUser={setUser}></Navbar>
      <NewUrl setOpen={setOpen} setCom={setCom} isLoged={isLoged} user={user} setUser={setUser} ></NewUrl>
    </>
  );
}

export default App;