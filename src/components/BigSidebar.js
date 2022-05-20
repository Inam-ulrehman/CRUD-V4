import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { links } from '../utils/data'

const BigSidebar = () => {
  return (
    <Wrapper>
      <div className='sidebar'>
        {links.map((item) => {
          const { id, path, text } = item
          return (
            <NavLink key={id} to={path}>
              {text}
            </NavLink>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar {
    display: flex;
    a {
      padding-left: 1rem;
    }
  }
`

export default BigSidebar
