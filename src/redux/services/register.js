// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { API_URL } from 'helpers/config';

// Define a service using a base URL and expected endpoints
export const registerApi = createApi({
  reducerPath: 'registerApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: '',
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.token?.value || '';

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      headers.set('Accept', 'application/json');

      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: `${API_URL}/register`,
        method: 'POST',
        body,
      }),
    }),
    resendVerification: builder.mutation({
      query: (body) => ({
        url: `${API_URL}/email/verification-notification`,
        method: 'POST',
        body,
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useRegisterMutation,
  useResendVerificationMutation,
} = registerApi