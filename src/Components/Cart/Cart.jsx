import { Box, Button,Grid, Typography, styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import TotalView from './TotalView'
const Container=styled(Grid)(({theme})=>({
    padding:'30px 135px',
    [theme.breakpoints.down('md')]:{
        padding:'15px 0',
    }
}))

const Header=styled(Box)`
padding:15px 24px;
background: #fff;
`
const LeftComponent=styled(Grid)(({theme})=>({
    paddingLeft:15,
    [theme.breakpoints.down('md')]:{
        marginBotton:0,
        marginTop:10
    },
    
}))
const Cart = () => {
    const {cartItems}=useSelector(state=> state.cart)
  return (
    <>
    {
        cartItems.length ?
        <Container container >
            <Grid item lg={9} md={9} sm={12} xs={12}>
                <Header >
                    <Typography style={{fontWeight:'bold'}}>My Cart({cartItems.length})</Typography>
                </Header >
                {
                    cartItems.map(item=>(
                        <CartItem item={item}/>
                    ))
                }
                <Box style={{backgroundColor:'white',padding:'15px 22px',boxShadow:'0 -2px 10px 0 rgb(0 0 0/10%)',borderTop:'1px solid #f0f0f0'}}><Button style={{display:'flex',marginLeft:'auto',background: '#fb641b',width:'250px',height:'51px',borderRadius:'2px'}} variant="contained">Place Order</Button></Box>
            </Grid>
            <LeftComponent item lg={3} md={3} sm={12} xs={12}>
                <TotalView cartItems={cartItems}/>
            </LeftComponent>

        </Container>
        :<Box style={{display:'flex',alignItems:'center',justifyContent:'center',color:'#d8d8d8',fontWeight:'bold',marginTop:'45vh'}}><Typography style={{marginBottom:250,fontSize:'45px',fontWeight:'bold'}}>Oops you have nothing in the Cart , Go Shop now!!!</Typography></Box>
    }
    </>
  )
}

export default Cart