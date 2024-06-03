import { createAction } from '@reduxjs/toolkit'

export const refreshToken = createAction(
  'session/refreshToken',
  (access: string) => ({
    payload: {
      access,
    },
  })
)
