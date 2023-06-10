import { Box, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
const Heading=styled(Box)`
padding:15px 24px;
background:#fff;
border-bottom:1px solid #f0f0f0;

`;
const Container=styled(Box)`
padding:15px 24px;
background:#fff;
& > p{
  margin-bottom:20px;
  font-size:14px;
}
`;
const Price = styled (Box)`
float:right;
`;
const Discount=styled(Typography)`
color:green;
`
const TotalView = ({cartItems}) => {
  const [price,setPrice]=useState(0);
  const [discount,setDiscount]=useState(0);
  const totalAmount=()=>{
    let price=0,discount=0;
    cartItems.map(item=>{
      price += item.price.mrp;
      discount += ( item.price.mrp - item.price.cost )
    })
    setPrice(price);
    setDiscount(discount)
  }
  useEffect(()=>{
   totalAmount()
  },[cartItems])
  return (
    <Box>

      <Heading><Typography style={{color:'#878787'}}>PRICE DETAILS</Typography></Heading>
      <Container>
        <Typography>Price ( {cartItems?.length} item )
        <Price component="span">₹{price} </Price>
        </Typography>
        <Typography>Discount
        <Price component="span">-₹{discount} </Price>
        </Typography>
        <Typography>Delivery Charges
        <Price component="span">₹40</Price>
        </Typography>
        <Typography  style={{fontWeight:'bold',fontSize:'18px'}}>Total Amount
        <Price component="span">₹{price - discount + 40 }</Price>
        </Typography>
       
        <Discount>You will save ₹{discount - 40 } on this order</Discount>
      </Container>
    </Box>
  )
}

export default TotalView