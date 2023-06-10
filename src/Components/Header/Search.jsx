import { Box, Button, InputBase ,List,ListItem,styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {getProducts} from '../../redux/actions/productAction';
import {Link} from 'react-router-dom'
const SearchContainer=styled(Box)`
display:flex;
margin-left:15px;
width:38%;
&>input{
    padding: 0 16px;
border-radius: 2px 0 0 2px;
border: 0;
outline: 0 none;
font-size: 16px;
height: 36px;
width: 100%;
background:#fff;
 
}
&>button{
    background:#fff;
    border:none;
    border-radius:0 2px 2px 0;
    &>svg{
     width:42px;
     font-size:30px;
     color:#2874f0;
     
    }
}
`
const ListWrapper=styled(List)`
 position:absolute;
 margin-top: 38px;
 color: #000;
 background: #FFFFFF;
`


const Search = () => {
  const [text,setText]=useState('')
  const { products }=useSelector(state=>state.getProducts);
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(getProducts())
  },[dispatch])
  const getText=(text)=>{
   setText(text);
  }
  return (
    <SearchContainer>
        <input type="text" title="Search for products, brands and more"  placeholder="Search for products, brands and more" 
          onChange={(e)=>getText(e.target.value)} value={text}
          ></input>
        <button><SearchIcon/></button>
        {
          text &&
             <ListWrapper>
                 {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                    <ListItem >
                     <Link to={`/product/${product.id}`} style={{textDecoration:'none',color:'inherit'}} onClick={()=>setText('')}>
                     {product.title.longTitle}
                     </Link>
                    </ListItem>
                  ))
                 }
             </ListWrapper>
        }
    </SearchContainer>
  )
}

export default Search