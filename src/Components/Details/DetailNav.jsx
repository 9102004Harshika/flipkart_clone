import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { navData } from '../../Constants/data';
const Container=styled(Box)(({theme})=>({
  display:'flex',
  margin:'55px 130px 0 130px',
  justifyContent:'space-between',
  [theme.breakpoints.down('md')]:{
     margin:0,
     width:'100%',
     overflow:'hidden',
  }
}))

const Component=styled(Box)`
padding:12px 8px;
text-align:center;
`
const Text=styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;
`
const Navbar = () => {
  return (
    <Box style={{backgroundColor:'white',borderBottom:'1px solid #d8d8d8'}}>
        <Container>
        {
            navData.map(item=>(
                <Component>
                    <Text>{item.text}</Text>
                </Component>
            ))
        }
    </Container>
    </Box>
  )
}

export default Navbar