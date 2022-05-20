import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../utils/axios'
import { toast } from 'react-toastify'
import {
  addUserLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils/localStorage'

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
}

// Axios hold Register Users - post Request
export const getRegisterUser = createAsyncThunk(
  'user/getRegisterUser',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post('/auth/register', user)
      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

// Axios hold Logged in Users - post Request

export const getLoginUser = createAsyncThunk(
  'user/getLoginUser',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post('/auth/login', user)
      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

// Axios hold Update User - patch Request

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token
      const resp = await customFetch.patch('/auth/updateUser', user, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

// Reducer

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logeOutUser: (state) => {
      removeUserFromLocalStorage()
      state.user = null
    },
  },
  extraReducers: {
    [getRegisterUser.pending]: (state) => {
      state.isLoading = true
    },
    [getRegisterUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      const { user } = payload
      state.user = user
      toast.success(`Hello there , ${user.name}`)
      addUserLocalStorage(user)
    },
    [getRegisterUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [getLoginUser.pending]: (state) => {
      state.isLoading = true
    },
    [getLoginUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      const { user } = payload
      state.user = user
      toast.success(`Welcome back , ${user.name}`)
      addUserLocalStorage(user)
    },
    [getLoginUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [updateUser.pending]: (state) => {
      state.isLoading = true
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      const { user } = payload
      state.user = user
      toast.success('Profile Updated...', {
        position: toast.POSITION.TOP_CENTER,
      })
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
  },
})

export const { logeOutUser } = userSlice.actions

export default userSlice.reducer
