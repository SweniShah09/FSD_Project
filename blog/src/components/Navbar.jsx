import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { SiWritedotas } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

const Navbar=()=> {
    const navigate =useNavigate();
    const handlecreatePost=()=>{
        navigate('/createPost');
    }
    const handleviewpost=()=>{
        navigate('/viewallpost');
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <SiWritedotas/>
          </Typography>
          <Button color="inherit" onClick={handlecreatePost}>Create New Post</Button>
          <Button color="inherit" onClick={handleviewpost}>View Posts</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;