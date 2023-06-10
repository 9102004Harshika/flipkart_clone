import React, { useState } from 'react'
import { AppBar, Toolbar, styled, Box,Drawer, Typography, IconButton ,List,ListItem} from '@mui/material'
import { Link } from 'react-router-dom'
import Search from './Search'
import Menu from './Menu'
import MenuIcon from '@mui/icons-material/Menu';
const Container = styled(AppBar)`
background-color:#2874f0;
box-shadow:none;
height:60px;
`
const Component = styled(Link)`
margin-left:12%;
line-height:0;
font-style: italic;
margin-bottom:5px;
text-decoration:none;

`
const LogoText = styled(Box)`
display:flex;
cursor:pointer;
&>p{
    font-size:12px;
}
:hover{
    text-decoration:underline;
}
`
const Image = styled('img')`
    width:75px;
`

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }
}));

const MenuButton=styled(IconButton)(({theme})=>({
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block',
        color:'inherit'
    }
}));

const Header = () => {
    const[open,setOpen]=useState(false)
    const handleOpen=()=>{
     setOpen(true)
    }
    const handleClose=()=>{
      setOpen(false)
    }
    const list=()=>(
        <Box style={{width:200}} >
            <List>
                <ListItem button><Menu/></ListItem>
            </List>
        </Box>
    )
    const logoURL = 'https://ik.imagekit.io/amazon9124/FLIPKART-CLONE/flipkart-plus_8d85f4.png?updatedAt=1685686939694';
    return (
        <Container>
            <Toolbar>  
                <MenuButton onClick={handleOpen}>
                    <MenuIcon />
                </MenuButton>
                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>
                <Component to={'/'}>
                    <Image src={logoURL} />
                    <LogoText>
                        <Typography style={{ color: 'white' }}>Explore</Typography>
                        <Typography style={{ color: '#ffe500', marginLeft: 3 }}>Plus</Typography>
                        <img src="https://ik.imagekit.io/amazon9124/FLIPKART-CLONE/plus_aef861.png?updatedAt=1685686394246" width={15} height={15} style={{ marginLeft: 3 }} />
                    </LogoText>
                </Component>

                <Search />
                <CustomButtonWrapper> <Menu /></CustomButtonWrapper>
            </Toolbar>
        </Container>
    )
}

export default Header