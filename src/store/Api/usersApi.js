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
        if (userLogin) {
          return {
            url: `search/users?q=${userLogin}&sort=repositories&order=${order}&per_page=12&page=${page}`,
          }
        }
        //В случае, если условия поиска не переданы, то показываем случайных пользователей
        const characters =
          'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        const randomIndex = Math.floor(Math.random() * characters.length)
        const randomChar = characters[randomIndex]
        return {
          url: `search/users?q=${randomChar}&sort=repositories&order=${order}&per_page=12&page=${page}`,
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
    getUserRepo: builder.query({
      query: ({ login }) => {
        return {
          url: `users/${login}/repos`,
        }
      },
      providesTags: ['USERS'],
    }),
  }),
})

export const { useGetUsersQuery, useGetUserInfoQuery, useGetUserRepoQuery } =
  usersApi
