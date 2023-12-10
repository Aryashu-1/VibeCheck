import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'


function Rootlayout() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )

}

export default Rootlayout