import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { BigSidebar, Navbar, SmallSidebar } from '../../components'

const SharedLayout = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default SharedLayout
