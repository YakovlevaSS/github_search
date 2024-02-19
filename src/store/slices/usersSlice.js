import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  totalUsers: '',
  userLogin: ''
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload
    },
    setTotalUsers(state, action) {
      state.totalUsers = action.payload
    },
    setUserLogin(state, action) {
      state.userLogin = action.payload
    },
  },
})

export const { setUsers, setTotalUsers,setUserLogin } = usersSlice.actions
export default usersSlice.reducer
export const usersReducer = usersSlice.reducer
