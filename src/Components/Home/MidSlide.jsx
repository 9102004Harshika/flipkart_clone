import { Box, styled } from '@mui/material'
import React from 'react'
import Slide from './Slide'
const Container=styled(Box)`
display:flex;
`
const Left=styled(Box)(({theme})=>({
    width:'82%',
    [theme.breakpoints.down('md')]:{
        width:'100%'
    }
}))
 

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


const MidSlide = ({products,title,timer}) => {
  return (
    <Container>
        <Left>
        <Slide products={products} 
        title={title} 
        timer={timer}/>
        </Left>
        <Right>
            <img src='https://ik.imagekit.io/amazon9124/FLIPKART-CLONE/633789f7def60050.png?updatedAt=1686036789240' alt="Ad" style={{width:217}}/>
        </Right>
    </Container>
  )
}

export default MidSlide