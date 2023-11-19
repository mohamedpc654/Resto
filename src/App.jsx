import { useState } from 'react'

import './style.css'

import Header from './Component/Header/Header'
import Mainsection from './Component/Mainsection/Mainsec'
import Qualite from './Component/Qualite/Qualite'
import Reservation from './Component/Reservation/Reservation'
import OurChef from './Component/OurChef/OurChef'
import Footer from './Component/Footer/Footer'
import Menu from './Component/Menu/Menu'
function App() {
  

  return (
    <div>
      <Header/>
      <Mainsection/>
      <Qualite/>
      <Menu/>
      <Reservation/>
      <OurChef/>
      <Footer/>
    </div>
  )
}

export default App;
