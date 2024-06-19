import { baseApi } from '@/shared/api'
import { type IBranchList } from '@/shared/types/iBranch'

export const ordersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    branchList: build.query<IBranchList, void>({
      query: () => ({
        url: `organizations/branches/`,
      }),
    }),
    orderChoices: build.query<{ choices: string[] }, void>({
      query: () => ({
        url: `lis/orders/order-filter-validate-research-choices`,
      }),
    }),
  }),
})

export const { useBranchListQuery, useOrderChoicesQuery } = ordersApi
