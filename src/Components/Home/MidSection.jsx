import React from 'react'
import { Box, Grid,styled } from '@mui/material'
import { imageURL } from '../../Constants/data'
const Wrapper=styled(Grid)`
margin-top:10px;
`
const Image=styled('img')(({theme})=>({
    marginTop:3,
    width:'100%',
    display:'flex',
    [theme.breakpoints.down('md')]:{
        objectFit:'cover',
        height:120
    }
}))
const MidSection = () => {
  return (
  <>
   <Wrapper container lg={12} md={12} sm={12} xs={12}>
    {
        imageURL.map(image=>(
            <Grid item lg={4} md={4} sm={12} xs={12}>
                <img src={image} alt='image'style={{width:'100%'}}/>
            </Grid>
        ))
    }
   </Wrapper>
   <Image src='https://ik.imagekit.io/amazon9124/FLIPKART-CLONE/4789bc3aefd54494.png?updatedAt=1686041958257'/>
  </>
  )
}

export default MidSection