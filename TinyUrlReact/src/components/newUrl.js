import React, { useState } from 'react';
import '../css/newUrl.css'
import service from '../service.js';
import { Button } from '@mui/material';
import { VscCheck } from "react-icons/vsc";
import serviceUsers from '../serviceUsers';
function NewUrl({ setOpen, setCom,isLoged,user,setUser }) {
  const url = process.env.REACT_APP_BaseUrl + '/links/'
  const [newUrl, setNewUrl] = useState("");
  const [alias, setAlias] = useState();
  const [warn, setWarn] = useState('none')
  const [longUrl, setLongUrl] = useState("");
  const [status1, setStatus1] = useState("block");
  const [status2, setStatus2] = useState("none");
  async function doesIdExist() {
    const link = await service.getUrlById(alias);
    console.log(link)
    if (link != undefined) {
      setWarn('block')
      setTimeout(() => { setWarn('none') }, 2000)
      return true;
    }
    return false
  }
  async function createUrl(e) {
    e.preventDefault();
    let flag = await doesIdExist()
    if (!flag) {
      let res = await service.addUrl(longUrl, alias);
      setNewUrl(url + alias)
      setAlias('')
      setStatus1("none");
      setStatus2("block");
      if(isLoged)
      {
        const u=user
        u.links.push(res)
        setUser(u)
        serviceUsers.pushLink(u)
      }
    }
  }
  return (
    <>
      <form onSubmit={createUrl} id="addUrl">
        <div style={{ display: status1 }}>
          <h3><img width="5%" src="/images/icon1.png" /> Enter a long URL to make a TinyUrl</h3>
          <input
            type="url"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            required />
          <h3>
            <img width="5%" src="/images/icon2.png" /> Customize your link</h3>
          <div id="he">
            <input value={process.env.REACT_APP_BaseUrl + "/links"} disabled id="base" />
            <input
              minlength="5"
              type="text"
              placeholder='alias'
              id="all"
              value={alias}
              onChange={(e) => { setAlias(e.target.value); }}
              required />
          </div>
          <p id="warn" style={{ display: warn }}>Alias is not available.</p>
          <Button type='submit' variant="contained" color="success" id="sub">
            Make TinyUrl!
          </Button>
        </div>
        <div id="next" style={{ display: status2 }}>
          <h3><img width="5%" src="/images/icon1.png" /> Your LongURL</h3>
          <input
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            disabled />
          <h3><img width="5%" src="/images/icon2.png" /> Your TinyURL</h3>
          <input
            value={newUrl}
            onChange={(e) => setLongUrl(e.target.value)} disabled />
          <div id="wrap">
            <Button variant="contained" color="success"
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(newUrl);
              }}
            >
              <img id="copy" width="15%" src="/images/copy.png"></img>
              Copy
            </Button>
            <Button variant="contained" color="success"
              onClick={(e) => {
                e.preventDefault();
                setStatus2("none");
                setStatus1("block");
                setLongUrl('');
                setNewUrl('');
                setAlias(null);
              }}
            >
              Another
            </Button>
          </div>
        </div>
      </form>
      <div id="wel">
        <h3>Welcome to</h3>
        <h1>TINYURL</h1>
        <br /><br />
        <h3>Create a free account to enjoy:</h3>
        <h3>
          <VscCheck />   Easy Link Shortening<br />
          <VscCheck />  Full Link History<br />
          <VscCheck />   Customized TinyURLs
        </h3>
        <Button variant="contained" id="acc" onClick={() => { setOpen('block'); setCom('signUp') }}>
          Create Free Account
        </Button>
      </div>
    </>
  );
}

export default NewUrl;