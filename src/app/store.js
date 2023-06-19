import UserSlice from '@/Reducer/Admin/UserSlice'
import VisaSlice from '@/Reducer/Admin/VisaSlice'
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
  reducer: {
    User: UserSlice,
    Visa: VisaSlice
  },
})