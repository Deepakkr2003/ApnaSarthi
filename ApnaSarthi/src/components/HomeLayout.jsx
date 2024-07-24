/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default HomeLayout