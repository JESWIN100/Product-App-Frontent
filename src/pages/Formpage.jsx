import React, { useEffect } from 'react';
import MyNavbar from '../components/MyNavbar';
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { addProduct, getProductbyId, updateProduct } from '../apis';
import { useParams } from 'react-router-dom';




export default function Formpage() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
   // formState: { errors }
  } = useForm();

  const {id}=useParams();
  const isEdit =Boolean(id);

  const  loadData = async()=>{
    if(!isEdit) return;
    try {
      let res=await getProductbyId(id)
      let formData = res.data
      console.log(formData);
      Object.keys(formData).forEach((key) => {
        setValue(key, formData[key]);
        });
       
      

      toast.success('scuess')
      
    } catch (error) {
      console.log(error)
      toast.error('Fail to load product')
    }
  }

useEffect(()=>{

  loadData();
 


},[id]);
 


  const onSubmit = async (data) => {
    try{
    const formData = new FormData();

    // Append all form data to FormData object
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    // Append image file if selected
    const fileInput = document.getElementById("image");
    if (fileInput && fileInput.files[0]) {
      formData.append("image", fileInput.files[0]);
    }


 isEdit? await updateProduct(id,formData):await addProduct(formData);


  toast.success(isEdit? "product updated sccessfully" : "Product added scuessfully");

  // Optionally reset the form after successful submission
  reset();
} catch (error) {
  if (error.code === 401) {
    toast.error('Unauthorized!')
  } else { 

    toast.error(error.response.data.error) 
    toast.error("Something went wrong!");
    console.log(error);
  }
}

  }; 



  return (
    <div>
      <MyNavbar />
      <Container>
        <Box sx={{ margin: 5, borderRadius: 2, bgcolor: '#e7e2e2', padding: 5 }}>
          <Paper elevation={24} />
          <Typography variant='h2' align='center'>
           {isEdit?'Edit Product':'Add Product'}
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Typography variant=''>Upload Image</Typography>
                <input type="file" name="image" id="image" />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  {...register("title", { required: true })}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                  {...register("price", { required: true })}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  {...register("description", { required: true })}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Category"
                  variant="outlined"
                  {...register("category", { required: true })}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Quantity"
                  variant="outlined"
                  {...register("quantity", { required: true })}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant='contained'
                  type='submit'
                >
                  {isEdit? 'Edit Product' : 'Add Product'}

                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </div>
  );
}
