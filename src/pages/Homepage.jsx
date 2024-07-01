import React from 'react'
import MyNavbar from '../components/MyNavbar'
import MyTable from '../components/MyTable'
import { Box, Container, Paper } from '@mui/material'

function Homepage() {
  return (
    <div>
        <MyNavbar/>
        <Container>
            <Box sx={{margin:5,borderRadius:2,bgcolor:'#e7e2e2',padding:5}}>
            <Paper elevation={24} />
                <MyTable/>
               
            </Box>
        
        </Container>
       
    </div>
  )
}

export default Homepage