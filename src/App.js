//Elements from material ui
import { Box } from '@mui/material';
//context api
import DataProvider from './context/DataProvider';
//Components
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import DetailView from './Components/Details/DetailView';
import ImportantLinks from './Components/Home/ImportantLinks';
import Footer from './Components/Home/Footer';
import Cart from './Components/Cart/Cart';
// router elements
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <DataProvider>
   <BrowserRouter>
   <Header/>
    <Box style={{marginTop:'60px'}}>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product/:id' element={<DetailView/>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </Box>
     <Footer/> 
   </BrowserRouter>
    </DataProvider>
  );
}

export default App;

