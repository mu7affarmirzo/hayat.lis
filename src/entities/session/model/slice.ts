import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { sessionApi } from '../api/sessionApi'
import { type SessionUserId } from './types'

type SessionSliceState =
  | {
      accessToken: string
      userId: SessionUserId
      isAuthorized: true
      refreshToken: string
    }
  | {
      isAuthorized: false
      accessToken?: string
      userId?: SessionUserId
      refreshToken?: string
    }

const initialState: SessionSliceState = {
  isAuthorized: false,
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    clearSessionData: (state) => {
      state.accessToken = undefined
      state.userId = undefined
      state.isAuthorized = false
      state.refreshToken = undefined
    },
    resetToken: (state, action: PayloadAction<{ access: string }>) => {
      state.accessToken = action.payload.access
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      sessionApi.endpoints.login.matchFulfilled,
      (state: SessionSliceState, { payload }) => {
        state.isAuthorized = true
        // say TypeScript that isAuthorized = true
        if (state.isAuthorized) {
          // state.userId = payload.userId
          state.accessToken = payload.accessToken
          state.refreshToken = payload.refreshToken
        }
      }
    )
  },
})

export const selectIsAuthorized = (state: RootState) =>
  state.session.isAuthorized

export const selectUserId = (state: RootState) => state.session.userId

export const { clearSessionData, resetToken } = sessionSlice.actions
