import { React, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import FormROW from '../../components/FormRow'
import { toast } from 'react-toastify'
import { updateUser } from '../../features/user/userSlice'

const EditProfile = () => {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    name: user?.name || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    location: user?.location || '',
  })

  // handle onSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, lastName, email, location } = userData

    if (!name || !lastName || !email || !location) {
      toast.warn('Please fill all the fields.')
      return
    } else {
      dispatch(updateUser({ name, lastName, email, location }))
    }
  }

  // handle onChange
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserData({ ...userData, [name]: value })
  }
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        {/* name input */}
        <FormROW
          name='name'
          type='text'
          value={userData.name}
          handleChange={handleChange}
        />
        {/* lastName input */}
        <FormROW
          name='lastName'
          labelText='last name'
          type='text'
          value={userData.lastName}
          handleChange={handleChange}
        />
        {/* email input */}
        <FormROW
          name='email'
          type='email'
          value={userData.email}
          handleChange={handleChange}
        />
        {/* location input */}
        <FormROW
          name='location'
          type='text'
          value={userData.location}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>
          update
        </button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--grey-2);
  height: 100vh;
  padding: 0 2rem;
`
export default EditProfile
