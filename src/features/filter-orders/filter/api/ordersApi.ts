import { baseApi } from '@/shared/api'
import { type IBranchList } from '@/shared/types/iBranch'

export const ordersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    branchList: build.query<IBranchList, void>({
      query: () => ({
        url: `organizations/branches/`,
      }),
    }),
  }),
})

export const { useBranchListQuery } = ordersApi
