import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Register, Landing, Error } from './pages'
import {
  AddJobs,
  EditJob,
  EditProfile,
  SharedLayout,
  Stats,
} from './pages/dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Stats />} />

          <Route path='add-jobs' element={<AddJobs />} />
          <Route path='edit-job' element={<EditJob />} />
          <Route path='edit-profile' element={<EditProfile />} />
        </Route>
        <Route path='landing' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
