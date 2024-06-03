import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from './baseQueryWithReauth'
import {
  SESSION_TAG,
  WISHLIST_TAG,
  CART_TAG,
  RESEARCH_ITEM_TAG,
  RESEARCH_LIST_TAG,
} from './tags'

export const baseApi = createApi({
  tagTypes: [
    SESSION_TAG,
    WISHLIST_TAG,
    CART_TAG,
    RESEARCH_ITEM_TAG,
    RESEARCH_LIST_TAG,
  ],
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
})
