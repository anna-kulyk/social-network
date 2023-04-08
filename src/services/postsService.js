import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => {
                return {
                    url: '/posts?_sort=id&_order=desc&_limit=10'
                }
            },
            providesTags: ['Post'],
        }),
        addPost: builder.mutation({
            query: (body) => {
                return {
                    url: `/posts`,
                    method: "POST",
                    body
                };
            },
            invalidatesTags: ['Post'],
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery, useAddPostMutation } = postsApi