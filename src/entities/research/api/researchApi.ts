import { baseApi } from '@/shared/api'
import { RESEARCH_LIST_TAG } from '@/shared/api/tags'

export const researchGroupApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    validateResearch: build.mutation<unknown, { id: number; choice: string }>({
      query: (body) => ({
        url: `/lis/orders/validate-research-test/${body.id}`,
        method: 'PATCH',
        body: { choice: body.choice },
      }),
      invalidatesTags: [RESEARCH_LIST_TAG],
    }),
  }),
})

export const { useValidateResearchMutation } = researchGroupApi
