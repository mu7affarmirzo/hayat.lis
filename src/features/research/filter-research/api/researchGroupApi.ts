import { baseApi } from '@/shared/api'
import { type Patient, type GroupsResearch } from '@/shared/types'
import { type IBranchList } from '@/shared/types/iBranch'
// import { mapUsers } from '../lib/mapUsers'
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
    branchList: build.query<IBranchList, void>({
      query: () => ({
        url: `organizations/branches/`,
      }),
    }),
    findUser: build.mutation<Patient[], { word: string }>({
      query: (body) => ({
        url: `/logus/search-patient/`,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useGroupListQuery, useFindUserMutation, useBranchListQuery } =
  researchGroupApi
