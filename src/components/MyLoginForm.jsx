import React, { useState } from 'react';
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useLoginStore from '../store/loginStore';
import { login } from '../apis';
import { useAuthStore } from '../store/authStore';
import ReCAPTCHA from 'react-google-recaptcha';

function MyLoginForm() {
  const { setToggle } = useLoginStore();
  const { loginAuth } = useAuthStore();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();

  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const toLogin = async (data) => {
    if (!recaptchaToken) {
      toast.error('Please complete the reCAPTCHA');
      return;
    }

    try {
      // Call API to login
      let res = await login(data);  // Assuming login function is correctly imported
      console.log(res.data);

      loginAuth(res.token);
      toast.success('Login successful');
      navigate('/');  // Redirect to home page after successful login
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        toast.error(error.response.data.error);
      } else {
        toast.error('An error occurred. Please try again.');
      }
      reset();  // Reset form fields on error
    }
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <Box
      sx={{ borderColor: 'primary.main' }}
      component="form"
      height={500}
      width={500}
      m={4}
      onSubmit={handleSubmit(toLogin)}
    >
      <Typography sx={{ marginY: 5 }} align='center' variant='h4'>Login</Typography>

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
        <ReCAPTCHA
          sitekey='6Ld_mgIqAAAAAJNEQaT9g_LVR21rttWL2KgLJ0i6'
          onChange={handleRecaptchaChange}
        />

        <Button variant="contained" type='submit' sx={{ mt: 3 }}>Log in</Button>
      </Stack>

      <Typography align='center' variant='subtitle1' sx={{ marginY: 2 }}>
        New? <Link sx={{ cursor: 'pointer' }} onClick={setToggle}>Sign up Here</Link>
      </Typography>
    </Box>
  );
}

export default MyLoginForm;
