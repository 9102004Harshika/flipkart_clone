import React, { useState } from 'react'
import {Box, Button, Dialog, TextField, Typography,styled} from '@mui/material';
import { authenticateLogin, authenticateSignup } from '../../service/api';
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
    padding: 0;
    padding-top: 0;
`;

const ImageContainer=styled(Box)`
background:#2874f0 url('https://ik.imagekit.io/amazon9124/FLIPKART-CLONE/login_img_c4a81e.png?updatedAt=1685856941674') center 85% no-repeat;
  width: 28%;
  height: 83%;
    padding:39px 35px;
  &>p,&>h5{
    color:white;
    font-weight:600;
  }
`
const Wrapper=styled(Box)`
display:flex;
flex-direction:column;
padding:45px 35px;
flex:1;
&>div,&>p{
  margin-top:20px;
}
`
const LoginButton=styled('button')`
text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 52px;
    border-radius: 2px;
    border:none;
    font-size:18px;
`
const RequestOtp=styled('button')`
text-transform:none;
background:#fff;
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0/20%);
border:none;
cursor:pointer;
`
const Text=styled(Typography)`
font-size:12px;
color:#878787;
`
const CreateAccount=styled(Typography)`
  font-size:14px;
  text-align:center;
  color:#2874f0;
  font-weight:600;
  cursor:pointer;

`
const ErrorText=styled(Typography)`
 font-size:10px;
 color:#ff6161;
 line-height:0;
 font-weight:bold;
`
const accountIntialValues={
  login:{
    view:'login',
    heading:'Login',
    subHeading:'Get access to your Orders,Wishlist and Reccomendations'
  },
  signup:{
    view:'signup',
    heading:"Looks like you're new here!",
    subHeading:"Sign up with this form to get started"
  }
}
const signupIntialValues={
  firstname:'',
  lastname:'',
  username:'',
  email:'',
  password:''
}
const loginIntialValues={
  username:'',
  password:''
}
const LoginDialog = ({open,setOpen}) => {

  const [account,toggleAccount]=useState(accountIntialValues.login);
  const [signup,setSignup]=useState(signupIntialValues);
  const {setAccount}=useContext(DataContext);
  const[login,setLogin]=useState(loginIntialValues);
  const [error,setError]=useState(false);
  const handleClose=()=>{
    setOpen(false);
    toggleAccount(accountIntialValues.login);
    setError(false)
  }
  const toggleSignup=()=>{
    toggleAccount(accountIntialValues.signup)
  }
  const onInputChange=(e)=>{
   setSignup({...signup,[e.target.name]:e.target.value});
   console.log(signup)
  }
  const signupUser=async()=>{
    let response=await authenticateSignup(signup);
    if(!response) return;
    handleClose();
    setAccount(signup.firstname)
  }
  const onValueChange=(e)=>{
       setLogin({...login,[e.target.name]:e.target.value})
  }
  const loginUser=async()=>{
    let response=await authenticateLogin(login);
    console.log(response)
    if(response.status===200){
      handleClose();
      setAccount(response.data.data.firstname)
    }
    else{
      setError(true)
    }
  }
  return (
   <Dialog open={open}  onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
    <Component>
      <Box style={{display:'flex',height:'100%'}}>
      <ImageContainer>
        <Typography variant='h5'>{account.heading}</Typography>
        <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
      </ImageContainer>
      {
        account.view==='login' ?
        <Wrapper>
        <TextField variant='standard' onChange={(e)=>onValueChange(e)} name="username"  label="Enter Username "/>
       {
        error && <>
        <ErrorText>Please enter valid username or password</ErrorText>
        </>
       }
        <TextField variant='standard' onChange={(e)=>onValueChange(e)} name="password"  label="Enter Password"/>
        <Text>By continuing,you agree to Flipkart's Terms of Use and Privacy Policy</Text>
        <LoginButton style={{marginTop:20}} onClick={()=>loginUser()}>Login</LoginButton>
        <Typography style={{textAlign:'center'}}>Or</Typography>
        <RequestOtp style={{marginTop:20}}>Request OTP</RequestOtp>
        <CreateAccount onClick={()=>toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
      </Wrapper>
      :
      <Wrapper>
        <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="firstname" label="Enter Firstname"/>
        <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="lastname" label="Enter Lastname"/>
        <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="username" label="Enter Username"/>
        <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="email" label="Enter Email"/>
        <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="password" label="Enter Password"/>
        <LoginButton onClick={()=>signupUser()} style={{marginTop:20}}>Continue</LoginButton>
      </Wrapper>
      }
      </Box>
    </Component>
   </Dialog>
  )
}

export default LoginDialog;