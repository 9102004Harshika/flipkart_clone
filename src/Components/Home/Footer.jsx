import React from 'react'
import { Box, Grid, Typography, styled } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpIcon from '@mui/icons-material/Help';
const Container = styled(Box)(({theme})=>({
backgroundColor:'rgb(23,35,55)',
overflow:'hidden',
color:'white',

}))
const Top = styled(Box)(({theme})=>({
 borderBottom:'1px solid gray',
 display:'flex',
 justifyContent:'space-between',
 [theme.breakpoints.down('lg')]:{
    display:'flex',
    flexDirection:'column'
 }
}))
const Bottom = styled(Box)`
padding:20px;
margin-top:20px;

`
const Left = styled(Box)`
padding:50px;
display:flex;
`
const Right = styled(Box)(({theme})=>({
 display:'flex',
padding:'50px',
[theme.breakpoints.down('lg')]:{
    display:'flex',
    flexDirection:'column',
},
[theme.breakpoints.down('md')]:{
    display:'flex',
    flexDirection:'row',
}
}))
const First = styled(Box)(({theme})=>({
    fontSize:'12px',
lineHeight:'12px',
marginLeft:'30px',
[theme.breakpoints.down('md')]:{
    fontSize:9
},
[theme.breakpoints.down('lg')]:{
    fontSize:'12px'
}
}))
const Second = styled(Box)(({theme})=>({
    fontSize:'12px',
lineHeight:'12px',
marginLeft:'30px',
[theme.breakpoints.down('md')]:{
    fontSize:9
},
[theme.breakpoints.down('lg')]:{
    fontSize:'12px'
}
}))

const Third = styled(Box)(({theme})=>({
    fontSize:'12px',
lineHeight:'12px',
marginLeft:'30px',
[theme.breakpoints.down('md')]:{
    fontSize:9
},
[theme.breakpoints.down('lg')]:{
    fontSize:'12px'
}
}))
const Fourth = styled(Box)(({theme})=>({
    fontSize:'12px',
lineHeight:'12px',
marginLeft:'30px',
[theme.breakpoints.down('md')]:{
    fontSize:9
},
[theme.breakpoints.down('lg')]:{
    fontSize:'12px'
}
}))
const Fifth = styled(Box)(({theme})=>({
    borderRight:'1px solid gray',
marginLeft:'150px',
height:'150px',
[theme.breakpoints.down('lg')]:{
    display:'none'
}
}))
const One = styled(Box)(({theme})=>({
    fontSize:'12px',
lineHeight:'5px',
marginRight:'79px',
[theme.breakpoints.down('md')]:{
   fontSize:'9px',
    }
}));

const Two = styled(Box)(({theme})=>({
    fontSize:'12px',
lineHeight:'5px',
[theme.breakpoints.down('md')]:{
    fontSize:'9px',
     }

}))

const Seller=styled(Box)`
display:flex;
align-items:center;
justify-content:center;
&>svg{
    color:#fcb603;
    margin-left:5px;
}
&>p{
    font-size:14px;
    margin-left:5px;
}
`
const Advertise=styled(Box)`
display:flex;
align-items:center;
justify-content:center;
margin-left:-50px;
&>svg{
    color:#fcb603;
    margin-left:5px;
}
&>p{
    font-size:14px;
    margin-left:5px;
}
`
const GiftCard=styled(Box)`
display:flex;
align-items:center;
justify-content:center;
margin-left:-50px;
&>svg{
    color:#fcb603;
    margin-left:5px;
}
&>p{
    font-size:14px;
    margin-left:5px;
}
`
const Help=styled(Box)`
display:flex;
align-items:center;
justify-content:center;
margin-left:-50px;
&>svg{
    color:#fcb603;
    margin-left:5px;
}
&>p{
    font-size:14px;
    margin-left:5px;
}
`
const Component=styled(Box)(({theme})=>({
    display:'flex',
    [theme.breakpoints.down('lg')]:{
        display:'flex',
    }
}))
const Footer = () => {
    return (
        <Container>
            <Top>
                <Left>
                    <First>
                        <Box>
                            <Typography style={{ color: 'gray', fontSize: '12px' }}>ABOUT</Typography>
                            <span>
                                <p>Contact Us</p>
                                <p>About Us</p>
                                <p>Carrers</p>
                                <p>Flipkart Stories</p>
                                <p>Press</p>
                                <p>Flipkart Wholesale</p>
                                <p>Corporate Information</p>
                            </span>
                        </Box>
                    </First>
                    <Second>
                        <Box>
                            <Typography style={{ color: 'gray', fontSize: '12px' }}>HELP</Typography>
                            <span>
                                <p>Payments</p>
                                <p>Shipping</p>
                                <p>Cancellations & Returns</p>
                                <p>FAQ</p>
                                <p>Report Infringement</p>
                            </span>
                        </Box>
                    </Second>
                    <Third>
                        <Box>
                            <Typography style={{ color: 'gray', fontSize: '12px' }}>CONSUMER POLICY</Typography>
                            <span>
                                <p>Return Policy</p>
                                <p>Terms of Use</p>
                                <p>Security</p>
                                <p>Privacy</p>
                                <p>Sitemap</p>
                                <p>Grievance Redressal</p>
                                <p>EPR Compliance</p>
                            </span>
                        </Box>
                    </Third>
                    <Fourth>
                        <Box>
                            <Typography style={{ color: 'gray', fontSize: '12px' }}>SOCIAL</Typography>
                            <span>
                                <p>Facebook</p>
                                <p>Twiiter</p>
                                <p>Youtube</p>
                            </span>
                        </Box>
                    </Fourth>
                    <Fifth></Fifth>
                </Left>
                <Right>
                    <Component>
                    <One>
                        <Box>
                            <Typography style={{ color: 'gray', fontSize: '12px' }}>Mail us:</Typography>
                            <span>
                                <p>Flipkart Internet Private Limited,</p>
                                <p>Buildings Alssa, Begnia &</p>
                                <p>Clve Embasy Teh Village,</p>
                                <p>Outer ing Rod, </p>
                                <p>Devarabnahlli Village,</p>
                                <p>Bengaluru, 568103,</p>
                                <p>Karnataka, India</p>
                            </span>
                        </Box>
                    </One>
                    <Two>
                        <Box>
                            <Typography style={{ color: 'gray', fontSize: '12px' }}>Registered Office Address::</Typography>
                            <span>
                                <p>Flipkart Internet Private Limited,</p>
                                <p>Buildings Alssa, Begnia &</p>
                                <p>Clve Embasy Teh Village,</p>
                                <p>Outer ing Rod,</p>
                                <p> Devarabnahalli Village,</p>
                                <p>Bengaluru, 568103,</p>
                                <p>Karnataka, India</p>
                                <p>CIN : U51109AB4012PTC066107</p>
                                <p>Telephone: 089-45813700</p>
                            </span>
                        </Box>
                    </Two>
                    </Component>
                </Right>
            </Top>
            <Bottom>
                <Grid container lg={12} md={8} sm={12} xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Seller ><WorkIcon /><Typography>Become a Seller</Typography></Seller>
                    <Advertise ><StarsIcon /><Typography>Advertise</Typography></Advertise>
                    <GiftCard ><CardGiftcardIcon /><Typography>Gift Cards</Typography></GiftCard>
                    <Help ><HelpIcon /><Typography>Help Center</Typography></Help>
                    <Box>© 2007-2023 Flipkart.com</Box>
                    <Box><img src='https://ik.imagekit.io/amazon9124/FLIPKART-CLONE/svgexport-1__1_.png?updatedAt=1686146337303' /></Box>
                </Grid>
            </Bottom>
        </Container>
    )
}

export default Footer