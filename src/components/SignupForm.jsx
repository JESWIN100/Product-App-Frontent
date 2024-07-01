import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import useLoginStore from '../store/loginStore';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
function SignupForm() {
  const { setToggle } = useLoginStore();
  console.log("SignupForm rendered");

  const {
    register,
    handleSubmit,
    // getValues,
    // reset,
    formState: { errors }
  } = useForm();
 
  const toSignup =async (data)=>{
    console.log("toSignup",data);

try {

  let res= await axios.post('http://localhost:9656/users/sign-up',data)
  
  console.log(res.data);
      toast.success('Successfully signed up!', {
        icon: '👏',
      });
      
} catch (error) {
  console.log(error.response.data);
      toast.error(error.response.data.error || 'Signup failed')
}


  }

  


  return (
    <Box
      component="form"
      height={500}
      width={500}
      m={4}
      onSubmit={handleSubmit(toSignup)}
    >
      <Typography sx={{ marginY: 5 }} align='center' variant='h4'>Signup</Typography>

      <Stack spacing={5}>
      <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          {...register('email', { required: 'Email is required' })}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ''}
        />
       <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          {...register('password', { required: 'Password is required' })}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ''}
        />
        {/* <TextField
  id="confirm-password"
  label="Confirm Password"
  variant="outlined"
  type="password"
  {...register('confirmPassword', {
    required: 'Please confirm your password',
    validate: value => value === getValues('password') || 'Passwords do not match',
  })}
  error={!!errors.confirmPassword}
  helperText={errors.confirmPassword?.message}
/> */}

        <Button variant="contained" color="success" type='submit'>Sign Up</Button>
      </Stack>

      <Typography align='center' variant='subtitle1' sx={{ marginY: 2 }}>
        Already existing? <Link sx={{ cursor: 'pointer' }} onClick={setToggle}>Login Here</Link>
      </Typography>
    </Box>
  );
}

export default SignupForm;