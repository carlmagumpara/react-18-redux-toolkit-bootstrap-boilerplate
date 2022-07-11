// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { API_URL } from 'helpers/config';

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
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
  tagTypes: ['Profile'],
  endpoints: (builder) => ({
    searchUser: builder.query({
      query: ({ q }) => `${API_URL}/user/search?q=${q}`,
    }),
    getProfile: builder.query({
      query: id => `${API_URL}/user/profile/${id}`,
      providesTags: ['Profile'],
    }),
    unfollowUser: builder.mutation({
      query: (body) => ({
        url: `${API_URL}/user/unfollow`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Profile'],
    }),
    followUser: builder.mutation({
      query: (body) => ({
        url: `${API_URL}/user/follow`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Profile'],
    }),
    updateProfile: builder.mutation({
      query: (body) => ({
        url: `${API_URL}/user/profile/update`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Profile'],
    }),
    updateAvatar: builder.mutation({
      query: (body) => ({
        url: `${API_URL}/user/profile/update/profile-photo`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Profile'],
    }),
    updateCover: builder.mutation({
      query: (body) => ({
        url: `${API_URL}/user/profile/update/cover-photo`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Profile'],
    }),
    updatePassword: builder.mutation({
      query: (body) => ({
        url: `${API_URL}/user/profile/update/password`,
        method: 'POST',
        body,
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetProfileQuery,
  useUnfollowUserMutation,
  useFollowUserMutation,
  useSearchUserQuery,
  useUpdateProfileMutation,
  useUpdateAvatarMutation,
  useUpdateCoverMutation,
  useUpdatePasswordMutation,
} = userApi