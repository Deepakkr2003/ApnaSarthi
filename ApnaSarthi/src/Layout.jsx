import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import OuerService from './Components/OurService/OuerService'
function Layout() {
  return (
    <>
    <Header/>
    <OuerService/>
     <Outlet />
    <Footer/>
    </>
  )
}

export default Layout