import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { links } from '../utils/data'

const SmallSidebar = () => {
  return (
    <Wrapper>
      <div>
        {links.map((item) => {
          const { id, path, text } = item
          return (
            <NavLink className='navbar' key={id} to={path}>
              {text}
            </NavLink>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  @media (max-width: 992px) {
    display: none;
  }
`
export default SmallSidebar
