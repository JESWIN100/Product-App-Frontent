import React from 'react';
import MyLoginForm from '../components/MyLoginForm';
import SignupForm from '../components/SignupForm';
import useLoginStore from '../store/loginStore';
import { Box } from '@mui/material';




function LoginPage() {

  const {isToggle} =useLoginStore()

  console.log("LoginPage rendered with isToggle:", isToggle);

  return (
    <div>
      <Box sx={{display:'flex',justifyContent:"center",alignItems:'center',height:'100vh'}}>
        {isToggle ? <MyLoginForm /> : <SignupForm />}
      </Box>
      
    </div>
  );
} 

export default LoginPage;
