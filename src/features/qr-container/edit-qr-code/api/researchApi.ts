import { baseApi } from '@/shared/api'
import { RESEARCH_ITEM_TAG, RESEARCH_LIST_TAG } from '@/shared/api/tags'
import { type IEditContainer, type IPatientsRoot } from '@/shared/types'

export const researchGroupApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    researchList: build.query<IPatientsRoot, { searchQuery: string }>({
      query: ({ searchQuery }) => ({
        url: `/lis/orders/get-list-ordered-researches/${searchQuery || ''}`,
      }),
      providesTags: [RESEARCH_LIST_TAG],
    }),
    researchItem: build.query<IPatientsRoot, { orderId: string }>({
      query: ({ orderId }) => ({
        url: `/lis/orders/get-list-ordered-researches/${orderId}`,
      }),
      providesTags: [RESEARCH_ITEM_TAG],
    }),
    editContainer: build.mutation<unknown, IEditContainer>({
      query: (body) => ({
        url: `/lis/orders/update-test-container/${body.id}`,
        method: 'POST',
        body: {
          container_id: body.container_id,
          container_code: body.container_code,
        },
      }),
      invalidatesTags: [RESEARCH_LIST_TAG, RESEARCH_ITEM_TAG],
    }),
  }),
})

export const {
  useResearchListQuery,
  useResearchItemQuery,
  useEditContainerMutation,
} = researchGroupApi
