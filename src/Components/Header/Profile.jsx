import { MenuItem,Menu,Box,Typography,styled } from "@mui/material"
import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';

const Component=styled(Menu)`
margin-top:5px;
`
const Logout=styled(MenuItem)`
color:#2874f0;
&>p{
    margin-left:10px;
}
`
const Profile = ({account,setAccount}) => {
    const [open,setOpen]=useState(false);
    const handleClick=(event)=>{
        setOpen(event.currentTarget)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    const logoutUser=()=>{
         setAccount('')
    }
  return (
    <>
    <Box onClick={handleClick}>
    <Typography style={{marginTop:3,cursor:'pointer'}}>{account}</Typography> 
    </Box>
    <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <Logout onClick={()=>{handleClose();logoutUser();}}><LogoutIcon/><Typography>Log Out</Typography></Logout>
      </Component>
    </>
  )
}

export default Profile