import { useState } from "react"
import Expolarmenu from "../../Componts/Navbar/Expoler menu/Expolarmenu"
import Header from "../../Componts/Navbar/Header/Header"
import FoodDisplay from "../../Componts/FoodDisplay/FoodDisplay"
import Appdownload from "../../Componts/Appdownload/Appdownload"


const Home = () => {

  const[category,setCategory]= useState("All")



  return (
    <div>
      <Header/>
     
      <Expolarmenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}></FoodDisplay>
      <Appdownload/>
    </div>
  )
}

export default Home
