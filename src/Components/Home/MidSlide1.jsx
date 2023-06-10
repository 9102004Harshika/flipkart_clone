import React from 'react'
import { Box,styled } from '@mui/material'
import Slide from './Slide'

const Right=styled(Box)(({theme})=>({
    background:'white',
    padding:'12px',
    marginTop:'10px',
    marginLeft:'5px',
    width:'17%',
    textAlign:'center',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
    }))

    const Left=styled(Box)(({theme})=>({
        background:'white',
        padding:'12px',
        marginTop:'10px',
        marginLeft:'5px',
        width:'17%',
        textAlign:'center',
        [theme.breakpoints.down('md')]:{
            display:'none'
        }
        }))
const Center=styled(Box)(({theme})=>({
    width:'63%',
    [theme.breakpoints.down('md')]:{
        width:'100%'
    }
}))
const MidSlide2 = ({products,title,timer}) => {
  return (
   <Box style={{display:'flex'}}>
    <Left>
    <img src='https://ik.imagekit.io/amazon9124/FLIPKART-CLONE/bcc1ec9f76573b9f.png?updatedAt=1686043423922' alt="Ad" style={{width:217}}/>
    </Left>
    <Center>
    <Slide products={products} 
        title={title} 
        timer={timer}/>
    </Center>
    <Right>
            <img src='https://ik.imagekit.io/amazon9124/FLIPKART-CLONE/633789f7def60050.png?updatedAt=1686036789240' alt="Ad" style={{width:217}}/>
        </Right>
   </Box>
  )
}

export default MidSlide2