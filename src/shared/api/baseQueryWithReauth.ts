import { type FetchBaseQueryMeta } from '@reduxjs/toolkit/dist/query/fetchBaseQuery'
import {
  type FetchArgs,
  type FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import {
  type BaseQueryApi,
  type QueryReturnValue,
} from '@reduxjs/toolkit/src/query/baseQueryTypes'
import { baseQuery } from './baseQuery'
import { invalidateAccessToken } from './invalidateTokenEvent'
import { refreshToken } from './refreshTokenEvent'

export async function baseQueryWithReauth(
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {}
): Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>> {
  let result = await baseQuery(args, api, extraOptions)

  /**
   * 👇 ATTENTION: We can't use any thunk in direct mode,
   * coz it's FSD Violation:
   *
   * api.dispatch(logoutThunk()) // 👎
   *
   * So we dispatch shared event `invalidateAccessToken`,
   * which has subscribes via redux middleware in other layers.
   * See example in @/features/authentication/InvalidateAccessToken
   */
  // const state = JSON.parse(`${localStorage.getItem('persist:root')}`)

  if (result.error && result.error.status === 401) {
    // try to get a new token
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const refreshTokenData = api.getState()?.session?.refreshToken
    // console.log({ refreshTokenData })

    if (refreshTokenData) {
      const refreshResult = await baseQuery(
        {
          url: '/token/refresh/',
          method: 'POST',
          body: { refresh: refreshTokenData },
        },
        api,
        extraOptions
      )

      if (refreshResult.data) {
        // console.log({ result: refreshResult.data })
        // store the new token in the store or wherever you keep it
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        api.dispatch(refreshToken(refreshResult.data?.access))

        // retry the initial query
        result = await baseQuery(args, api, extraOptions)
      } else {
        // refresh failed - do something like redirect to login or show a "retry" button
        api.dispatch(invalidateAccessToken())
      }
    }
  }

  return result
}
