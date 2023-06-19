import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    visa: {}
}

export const VisaSlice = createSlice({
  name: 'Visa',
  initialState,
  reducers: {
    ADD_VISA: (state, action) => {
        // console.log("state", state.visa);
        console.log("action", action.payload);
        const a = [...action.payload.state, action.payload.payload]
      alert("ADD_VISA")
      return a;
       
    },
    UPDATE_VISA: (state, action) => {
        alert("UPDATE_VISA")
    },
    DELETE_VISA: (state, action) => {
      alert('DELETE_VISA')
    },
  },
})

// Action creators are generated for each case reducer function
export const { ADD_VISA, UPDATE_VISA, DELETE_VISA } = VisaSlice.actions

export default VisaSlice.reducer