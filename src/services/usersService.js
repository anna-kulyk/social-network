import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (page) => {
                return {
                    url: `/users?_page=${page}&_limit=15`
                }
            },
            providesTags: (result, error, arg) => [{ type: 'User', id: 'LIST' }],
        }),
        getUser: builder.query({
            query: (id) => { return { url: `users/${id}` } },
            providesTags: (result, error, id) => [{ type: 'User', id }],
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery, useGetUserQuery } = usersApi