import React from 'react'
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import {  useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { toast } from 'react-toastify';



function MyNavbar() {

const navigate =useNavigate();
const {logoutAuth}=useAuthStore()

const toLogout =()=>{
 
  logoutAuth();
  toast.info('Logout Scuessfully!')


  navigate('/login');
}


const toAddProduct =()=>{

  navigate('/add-product');
}
const toHome =()=>{
  navigate('/');
  }


  return <>
  
<Box component="section"
 sx={{p:3,backgroundColor:'peru'}}>

<Stack direction='row' justifyContent={'space-around'}>

    <Typography  variant='h6' sx={{color:'white',cursor:'pointer'}} onClick={toHome} >Home</Typography>
    <Typography  variant='h6' sx={{color:'white',cursor:'pointer'}} onClick={toAddProduct} >Add products</Typography>

  
    <Typography  variant='h6' sx={{color:'white',cursor:'pointer'}} onClick={toLogout} >Logout</Typography>

   
  </Stack>
</Box>
  </>
}

export default MyNavbar