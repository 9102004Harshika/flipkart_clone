import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import { Box, Divider, Typography, styled } from '@mui/material';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Component = styled(Box)`
margin-top:10px;
background-color:#ffffff;
`
const Deal = styled(Box)`
padding:15px 20px;
display:flex;
`
const Timer = styled(Box)`
display:flex;
margin-left:10px;
align-items:center;
justify-content:center;
color:#7f7f7f;
`
const DealText = styled(Typography)`
 font-size:22px;
 font-weight:600;
 line-height:32px;
 margin-right:25px;
`

const Button = styled('button')`
border:none;
background-color:#2874f0;
color:white;
padding:10px;
border-radius:2px;
margin-left:auto;
width:100px;
font-size:12px;
cursor:pointer;
font-weight:600
`
const Image = styled('img')({
    width: 'auto',
    height: 150
});
const Container = styled(Box)`
transition: all .2s ease-in-out; 
cursor:pointer;
:hover{
    transform: scale(1.1);
}
`
const Text = styled(Typography)`
font-size:14px;
margin-top:10px;
`
const Completionist = () => <span>Oops!Your are late for the Deal</span>;
const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a complete state
        return <Completionist />;
    } else {
        // Render a countdown
        return (
            <span>
                {hours}:{minutes}:{seconds} Left
            </span>
        );
    }
};
const Slide = ({ products, title, timer }) => {
    return (
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                {
                    timer &&
                    <Timer>
                        <img src="https://ik.imagekit.io/amazon9124/FLIPKART-CLONE/svgexport-1.png?updatedAt=1686032386298" width={24} style={{ marginRight: 10 }} />
                        <Countdown date={Date.now() + 4.32e+7}
                            renderer={renderer} />
                    </Timer>
                }
                <Button>VIEW ALL</Button>
            </Deal>
            <Divider />
            <Carousel
                responsive={responsive}
                infinite={true}
                swipeable={false}
                draggable={false}
                autoPlay={true}
                autoPlaySpeed={6000}
                keyBoardControl={true}
                centerMode={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >{
                    products.map(product => (
                       <Link to={`/product/${product.id}`} style={{textDecoration:'none'}}>
                        <Container textAlign="center" style={{ padding: '25px 15px' }}>
                            <Image src={product.url} alt="product" />
                            <Text style={{ fontWeight: '600', color: '#212121' }}>{product.title.shortTitle}</Text>
                            <Text style={{ color: 'green', fontSize: '16px' }}>{product.discount}</Text>
                            <Text style={{ color: '#212121', opacity: '.6', fontSize: '13px' }}>{product.tagline}</Text>
                        </Container>

                       </Link>
                    ))
                }</Carousel>
        </Component>
    )
}

export default Slide