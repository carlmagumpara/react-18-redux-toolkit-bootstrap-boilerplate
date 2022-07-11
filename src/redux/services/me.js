// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { API_URL } from 'helpers/config';

// Define a service using a base URL and expected endpoints
export const meApi = createApi({
  reducerPath: 'meApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: '',
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.token?.value || '';

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      headers.set('Accept', 'application/json');

      return headers
    },
  }),
  endpoints: (builder) => ({    
    getMe: builder.query({
      query: () => `${API_URL}/me`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMeQuery } = meApi