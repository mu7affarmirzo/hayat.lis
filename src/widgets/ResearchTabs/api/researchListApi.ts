import { baseApi } from '@/shared/api'
import { type IPatientsRoot } from '@/shared/types'

// import { mapSession } from '../lib/mapSession'
// import { mapUser } from '../lib/mapUser'
// import { type User, type Session } from '../model/types'
// import { type UserDto, type RequestLoginBody, type SessionDto } from './types'

export const researchGroupApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    researchList: build.query<IPatientsRoot, { searchQuery: string }>({
      query: ({ searchQuery }) => ({
        url: `/lis/orders/get-list-ordered-researches/${searchQuery || ''}`,
      }),
    }),
    researchItem: build.query<IPatientsRoot, { orderId: string }>({
      query: ({ orderId }) => ({
        url: `/lis/orders/get-list-ordered-researches/${orderId}`,
      }),
    }),
  }),
})

export const { useResearchListQuery, useResearchItemQuery } = researchGroupApi
