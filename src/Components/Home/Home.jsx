//Components
import { Box, styled } from "@mui/material"
import Banner from "./Banner"
import Navbar from "./Navbar"
import MidSlide from "./MidSlide"
import { useEffect } from "react"
import { getProducts } from "../../redux/actions/productAction"
import {useDispatch,useSelector} from 'react-redux'
import Slide from "./Slide";
import MidSection from "./MidSection"
import MidSlide1 from './MidSlide1'
import ImportantLinks from "./ImportantLinks"
import Footer from "./Footer"
const Component=styled(Box)`
padding:10px 10px;
background:#f2f2f2;
`
const Home = () => {
  const dispatch=useDispatch();
  const {products}=useSelector(state=>state.getProducts);
  useEffect(()=>{
      dispatch(getProducts())
  },[dispatch])
  return (
   <>
   <Navbar/>
   <Component>
   <Banner/>
   <MidSlide products={products} title="Deals of the Day" timer={true}/>
   <Slide products={products} title="Discounts for You" timer={false}/>
   <Slide products={products} title="Suggested Items" timer={false}/>
   <Slide products={products} title="Top Selection" timer={false}/>
   <MidSection/>
   <Slide products={products} title="Recommendations" timer={false}/>
   <Slide products={products} title="Trending Offers" timer={false}/>
   <MidSlide1 products={products} title="Season Top Picks" timer={false}/>
   <Slide products={products} title="Top Deals on Accessories" timer={false}/>
  
   </Component>
   <ImportantLinks/>
   

   
   </>
  )
}

export default Home