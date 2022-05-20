import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
import FormRow from '../components/FormRow'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { getLoginUser, getRegisterUser } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: false,
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoading } = useSelector((state) => state.user)

  // Handle onSubmit

  const handleSubmit = (e) => {
    const { name, email, password, isMember } = values
    e.preventDefault()
    if (!email || !password || (!isMember && !name)) {
      toast.error('Please fill all the fields.')
      return
    }
    if (isMember) {
      dispatch(getLoginUser({ email, password }))
      return
    }
    return dispatch(getRegisterUser({ name, email, password }))
  }

  // Handle onChange

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }

  // handle toggleButton

  const toggleButton = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  // useEffect

  useEffect(() => {
    if (user) {
      const timeOut = setTimeout(() => {
        navigate('/')
      }, 3000)
      return () => clearTimeout(timeOut)
    }
  })
  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className='form'>
        <h3 className='title'>{values.isMember ? 'Login' : 'Register'}</h3>
        {/* name input */}
        {!values.isMember && (
          <FormRow
            className='form-input'
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email input */}
        <FormRow
          className='form-input'
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          className='form-input'
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          submit
        </button>
        <p>
          {!values.isMember ? 'Are you Member ? ' : 'Are you register ? '}
          <button className='toggle-btn' type='button' onClick={toggleButton}>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .toggle-btn {
    border: transparent;
    background-color: transparent;
    cursor: pointer;
    color: var(--primary-5);
  }
`

export default Register
