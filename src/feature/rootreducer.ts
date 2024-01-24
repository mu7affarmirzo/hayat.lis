import { combineReducers } from '@reduxjs/toolkit'
import { ApiSlice } from '../service/apiService'
import authSlice from './slices/authSlice'

export const reducers = combineReducers({
  [ApiSlice.reducerPath]: ApiSlice.reducer,
  authorization: authSlice,
})

export type RootState = ReturnType<typeof reducers>
