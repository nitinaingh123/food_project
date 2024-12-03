
import './Navbar.css';
import { assets } from '../../assets/assets';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar=({setShowLogin})=> {

 const[menu,setMenu]=useState("menu")


  return (
    <div className='navbar'>
      <Link to='/'> <img src={assets.logo} alt="Company Logo" className='logo' /></Link>
      <ul className="navbar-menu">
        <Link onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#footer' onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>Contact Us</a>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
        <a href='#app-download'onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app"?"active":""}>Mobile App</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="navbar-search-icon">
        <Link to='/Cart'><img src={assets.basket_icon} alt="Basket Icon" /></Link>
        <div className="dot"></div>
      </div>
      <button onClick={()=>setShowLogin(true)}>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
