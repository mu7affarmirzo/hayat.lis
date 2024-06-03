import {
  createListenerMiddleware,
  type TypedStartListening,
} from '@reduxjs/toolkit'
import { refreshToken } from '@/shared/api'
import { refreshThunk } from './refresh'

export const refreshTokenListener = createListenerMiddleware()

// @see https://redux-toolkit.js.org/api/createListenerMiddleware#typescript-usage
export type TypedListening = TypedStartListening<RootState, AppDispatch>

export const startRefreshTokenListener =
  refreshTokenListener.startListening as TypedListening

startRefreshTokenListener({
  actionCreator: refreshToken,
  effect: async (data, api) => {
    // In the future here may be logic with refresh access token
    // @see https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#preventing-multiple-unauthorized-errors
    api.dispatch(refreshThunk(data.payload.access))
  },
})
