import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import { Badge, Box, styled,Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//Components
import LoginDialog from '../Login/LoginDialog';
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Container=styled(Box)(({theme})=>({
    display:'flex',
    marginLeft:'20px',
    alignItems:'center',
    '& > div ':{
        fontSize:'18px',
        fontWeight:'bold'
    },
    [theme.breakpoints.down('md')]:{
        display:'block',
        width:'100%',
        '& > div':{
        color:'#2874f0',
        display:'flex',
        flexDirection:'column',
        marginTop:20,
        },

    }
   
}))

const LoginContainer=styled(Box)`

&>button{
    color: #2874f0;
    font-weight: bold;
    background-color: #fff;
    cursor: pointer;
    border-radius: 2px;
    height: 32px;
    padding: 5px 40px;
    border: 1px solid #dbdbdb;
    font-size:18px;
  :hover{
    background:#2874f0;
    color:white;
  }
}
`
const Wrapper=styled(Box)(({theme})=>({
    display:'flex',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))

const Menu = () => {
  const [open,setOpen]=useState(false);
  const {account,setAccount}=useContext(DataContext);
  const navigate=useNavigate();
  const { cartItems }=useSelector(state=>state.cart)
  const openDialog=()=>{
    setOpen(true)
  }
  function cartPage(){
    navigate('/cart')
  }
  return (
   <>
    <Container>
      {
          account ?<Profile account={account} setAccount={setAccount}/>
          : <LoginContainer onClick={()=>openDialog()}>
          <button>Login</button>
      </LoginContainer>
        }
        <Box style={{marginLeft:20,cursor:'pointer'}}>Become a seller</Box>
        <Box style={{marginLeft:20,cursor:'pointer'}}>More</Box>
        <Box style={{marginLeft:20,cursor:'pointer'}}><Box style={{display:'flex'}} onClick={cartPage}>
          <Badge badgeContent={cartItems?.length} color="secondary"><ShoppingCartIcon/></Badge><Typography style={{fontWeight:"600",marginLeft:10}}>Cart</Typography></Box>
          </Box>
    </Container>
    <LoginDialog open={open} setOpen={setOpen}/>
   </>
  )
}

export default Menu