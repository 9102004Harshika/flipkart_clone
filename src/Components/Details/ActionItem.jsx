import { Box, styled,Button } from '@mui/material'
import React, { useState } from 'react';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/actions/cartActions'
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';
const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))
const Image=styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%'
});
const StyledButton = styled(Button)(({theme})=>({
    width: '48%',
    borderRadius: 2,
    height: 50,
    color: '#FFF',
    marginTop:10,
    [theme.breakpoints.down('lg')]:{
      width:'46%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'48%'
      }
}))
   
;
const ActionItem = ({product}) => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [quantity,setQuantity]=useState(1);
  const {id}=product;
  const addToCart=()=>{
    dispatch(addCart(id,quantity))
    navigate('/cart')
  }
  return (
    <LeftContainer>
        <Image src={product.detailUrl} alt='Product Image'/>
        <StyledButton style={{marginRight: 10, background: '#ff9f00'}} variant='contained' onClick={()=>addToCart()} ><Cart />Add to Cart</StyledButton>
        <StyledButton style={{background: '#fb641b', cursor:'not-allowed'}}  variant="contained"><Flash /> Buy Now</StyledButton>
    </LeftContainer>
  )
}

export default ActionItem