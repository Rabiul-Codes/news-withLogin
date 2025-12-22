import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div className='max-w-7xl px-3 mx-auto'>
     <NavBar></NavBar>
     <Outlet></Outlet>
     </div>
  )
}

export default Root;