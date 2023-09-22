import React from 'react'
import Navbar from '../navbar/navbar'
import { Outlet } from 'react-router-dom'
import './layout.scss';

const Layout = () => {
  return (
      <div>
          <Navbar />
          <Outlet/>
    </div>
  )
}

export default Layout