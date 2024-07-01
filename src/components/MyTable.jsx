import { Avatar, Button, Container,
     Table,
      TableBody,
       TableCell,
        TableContainer,
         TableHead,
          TableRow 
        } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { deleteProduct, getAllProduct, } from '../apis';
import { toast } from 'react-toastify';
import {  useNavigate } from 'react-router-dom';
// import data from '../assets/json/products'


function MyTable() {

const [lists,setLists] = useState([])

const  navigate= useNavigate()


useEffect(()=>{

  init()
  
},[]) 

const init = async()=>{
  let res = await getAllProduct()
  console.log(res);
  setLists(res.data); 
}
 
const handleDelete = async (id)=>{
  
  try {
    await deleteProduct(id)
    
    let updatedList= lists.filter((list)=>list.id !==id);
    setLists(updatedList)
    toast.success('Deleted Successfully')
  } catch (error) {
     toast.error('error')
     console.log(error.response.data);
  }


}
const handleEdit = async (id)=>{

  navigate(`/edit-form/${id}`)
}
        
    
  return ( 
    <div> 

<Container sx={{p:5}}>
    <TableContainer sx={{backgroundColor:'lightyellow'}}>
    <Table>
        {/*table head related */}
        <TableHead>
            <TableRow>
             <TableCell>SI No</TableCell>
             <TableCell>Image</TableCell>
             <TableCell>Title</TableCell>
             <TableCell>category</TableCell>
             <TableCell>description</TableCell>
             <TableCell>quantity</TableCell>
             <TableCell>price</TableCell>
             <TableCell>Edit</TableCell>
             <TableCell>Delete</TableCell>

            </TableRow>
        </TableHead>
        {/*table body related*/}

        <TableBody>

{lists.map((row,index)=>(

<TableRow key={index}>

    <TableCell>{index+1}</TableCell>
    <TableCell><Avatar alt="Remy Sharp" src= {row.image}
    sx={{ width: 100, height: 100 }}
    /></TableCell>
{/* <TableCell><img src={row.image} width="auto" height="50"  alt={
  row.title
  }/></TableCell> */}
    <TableCell>{row.title}</TableCell>
    <TableCell>{row.category}</TableCell>
    <TableCell>{row.description}</TableCell>
    <TableCell>{row.quantity}</TableCell>
    <TableCell>{row.price}</TableCell>
    <TableCell>
      <Button variant="contained" color="primary"
     onClick={()=>handleEdit(row._id)}>Edit</Button>
     </TableCell>
    <TableCell>
      <Button variant="contained" color="error" 
    onClick={()=>handleDelete(row._id)}>Delete</Button>
    </TableCell>
    



</TableRow>

))}

        </TableBody>
      </Table>
    </TableContainer>
</Container>


    </div>
  )
}

export default MyTable