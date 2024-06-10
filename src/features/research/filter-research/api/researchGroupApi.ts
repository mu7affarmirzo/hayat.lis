import { baseApi } from '@/shared/api'
import { type GroupsResearch } from '@/shared/types'
// import { mapSession } from '../lib/mapSession'
// import { mapUser } from '../lib/mapUser'
// import { type User, type Session } from '../model/types'
// import { type UserDto, type RequestLoginBody, type SessionDto } from './types'

export const researchGroupApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    groupList: build.query<GroupsResearch, void>({
      query: () => ({
        url: `/lis/get_labs_group_by_category/`,
      }),
    }),
  }),
})

export const { useGroupListQuery } = researchGroupApi
