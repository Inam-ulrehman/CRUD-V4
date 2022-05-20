import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { logeOutUser } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Navbar = () => {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // handleLogeOut

  const handleLogeOut = () => {
    dispatch(logeOutUser())
    navigate('/landing')
    toast.success('See you Soon....', {
      position: toast.POSITION.TOP_CENTER,
    })
  }
  return (
    <Wrapper className='container'>
      <div className='menu'>
        <button type='button'>Menu</button>
      </div>
      <div className='dashboard'>
        <h3>Dashboard</h3>
      </div>
      <div className='user'>
        <p style={{ margin: 0 }}>Hello , {user.name}</p>
        <button className='btn' onClick={handleLogeOut}>
          LogeOut
        </button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`

export default Navbar
