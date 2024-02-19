import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  totalUsers: '',
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload
      localStorage.setItem('users', state.users)
    },
    setTotalUsers(state, action) {
      state.totalUsers = action.payload
    },
  },
})

export const { setUsers, setTotalUsers } = usersSlice.actions
export default usersSlice.reducer
export const usersReducer = usersSlice.reducer
