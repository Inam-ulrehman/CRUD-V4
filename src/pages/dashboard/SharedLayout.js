import React from 'react'
import { Outlet } from 'react-router-dom'

import { BigSidebar, Navbar, SmallSidebar } from '../../components'

const SharedLayout = () => {
  return (
    <>
      <div>
        <BigSidebar />
        <SmallSidebar />
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default SharedLayout
