import { createAsyncThunk } from '@reduxjs/toolkit'
import { resetToken } from '@/entities/session'

export const refreshThunk = createAsyncThunk<
  void,
  string,
  { state: RootState }
>('session/refreshToken', async (data, { dispatch }) => {
  console.log({ data }, 'refresh thunk')
  dispatch(resetToken({ access: data }))
})
