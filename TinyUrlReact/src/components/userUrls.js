import React, { useEffect, useState } from 'react';
import '../css/userUrls.css'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Graph from './graph';

const style = {
  position: 'absolute',
  top: '10%',
  left: '32%',
  height:'70%',
  width: 450,
  bgcolor: 'white',
  padding:'0%'
};
function UserUrls({ links }) {
  const [id, setId] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = (id) => { setOpen(true); setId(id) };
  const handleClose = () => setOpen(false);

  function getCon() {
    if (links == null || links.length == 0) {
      links = []
      return <h3>No URLs in your account or your aren't signed In</h3>
    }
  }
  return (
    <>
      <div id="userU">
        <h2>Your TinyURLs</h2>
        {getCon()}
        {
          links.map((link) => {
            return (
              <div class="userLinks">OriginalUrl: <a href={link.originalUrl}>{link.originalUrl}</a>
                <br />
                TinyUrl :<a href={process.env.REACT_APP_BaseUrl + '/links/' + link.id}>{process.env.REACT_APP_BaseUrl}/links/{link.id}</a>
                <br />
                <Button id="watch" variant="contained" onClick={() => { handleOpen(link.id) }}>Watch</Button></div>)
          })
        }
      </div>
      <Modal
        sx={style}
        id="mdl"
        open={open}
        onClose={handleClose}
      >
        <Box id="box">
          <Graph id={id} />
        </Box>
      </Modal>
    </>
  );
}

export default UserUrls;