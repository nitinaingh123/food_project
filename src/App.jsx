
import { Route, Routes } from 'react-router-dom';
// import {Navbar} from './'
import Navbar from './Componts/Navbar/Navbar'; // Corrected 'Componts' to 'components'
import Home from  './Pages/Home/Home.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder.jsx'
import Footer from './Componts/Footer/Footer.jsx';
import Logingpopup from './Componts/Loginpupop/Logingpopup.jsx';
import { useState } from 'react';
import { assets } from './assets/assets.js';


const App = () => {
const[showLogin,setShowLogin]=useState(false)
 
  return (
  <>
{showLogin?<Logingpopup setShowLogin={setShowLogin}/>:<></>}
    <div className="App">
     <Navbar setShowLogin={setShowLogin}/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/placeOrder'element={<PlaceOrder/>} />
     </Routes>
    </div>
    <Footer/>
    </>
  );
};

export default App;
