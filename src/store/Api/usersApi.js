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
            url: `search/users?q=${userLogin}&sort=repositories&order=${order}&per_page=10&page=${page}`,
            // method: "GET",
            // headers: {
            //   "Content-type": "application/json",
            // },
          }
        }
        const randomSince = Math.floor(Math.random() * 999999) + 1;
        return { 
          url: `/users?since=${randomSince}&per_page=12` }; 
      },
      providesTags: ['USERS'],
    }),
  }),
})

export const { useGetUsersQuery, useLazyGetUsersQuery } = usersApi
