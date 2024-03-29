import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  tagTypes: ['USERS'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ userLogin, order, page }) => {
        return {
          url: `search/users?q=${userLogin}&sort=repositories&order=${order}&per_page=12&page=${page}`,
        }
      },
      providesTags: ['USERS'],
    }),
    getUserInfo: builder.query({
      query: ({ login }) => {
        return {
          url: `users/${login}`,
        }
      },
      providesTags: ['USERS'],
    }),
  }),
})

export const { useGetUsersQuery, useLazyGetUsersQuery, useGetUserInfoQuery } =
  usersApi
