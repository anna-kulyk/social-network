import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
    // reducerPath: 'usersApi',
    // baseQuery: fetchBaseQuery({ baseUrl: 'https://social-network.samuraijs.com/api/1.0/' }),
    // endpoints: (builder) => ({
    //     getUsers: builder.query({
    //         query: () => {
    //             return {
    //                 url: '/users',
    //                 headers: {
    //                     'API-KEY': '9df0d288-597c-4b6b-b277-ab32683cd769'
    //                 }
    //             }
    //         },
    //     }),
    // }),
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => {
                return {
                    url: '/users'
                }
            },
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery } = usersApi