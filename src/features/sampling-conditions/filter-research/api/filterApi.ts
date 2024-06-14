import { baseApi } from '@/shared/api'

export const filterApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    choices: build.query<{ choices: string[] }, void>({
      query: () => ({
        url: `lis/orders/validate-research-choices`,
      }),
    }),
  }),
})

export const { useChoicesQuery } = filterApi
