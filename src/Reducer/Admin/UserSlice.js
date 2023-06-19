import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    ADD_USER: (state, action) => {
      alert("ADD_USER")
    },
    UPDATE_USER: (state) => {
      alert("UPDATE_USER")
    },
    DELETE_USER: (state, action) => {
      alert("DELETE_USER")
    },
  },
})

// Action creators are generated for each case reducer function
export const { ADD_USER, UPDATE_USER, DELETE_USER } = UserSlice.actions

export default UserSlice.reducer