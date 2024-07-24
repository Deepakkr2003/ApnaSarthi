/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './components/Header'
import OurService from './components/OurServices'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <div>
      <Header/>
      <OurService/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
