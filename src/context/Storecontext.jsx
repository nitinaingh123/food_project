import { createContext, useEffect, useState } from "react";
import {food_list} from '../assets/assets.js';



export const Storecontext = createContext(null)

const Storecontextprovider =(props) =>{

const[cartItems,setCartItems]=useState({});

const addToCart = (itemId)=>{
    if(!cartItems[itemId]){
   setCartItems((prev)=>({...prev,[itemId]:1}))
    }
 else {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
 }
}

const removeFormCart =(itemId) =>
{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}

useEffect(()=>{
console.log(cartItems);
}
,[cartItems])
    const contextValue ={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFormCart,
      
    }
    return(
        <Storecontext.Provider value={contextValue}>
            {props.children}
        </Storecontext.Provider>
    )
}

export default Storecontextprovider;