import React from 'react'
import './home.css'
import Header from '../../components/header/header'
import { useState } from 'react'
import Exploremenu from '../../components/Exploremenu/Exploremenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Appdownload from '../../components/Appdownload/Appdownload'

const Home = () => {

    const [category,setCategory]=useState("all");

  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <Appdownload/>
    </div>
  )
}

export default Home
