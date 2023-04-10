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
            providesTags: (result, error, arg) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
                    : ['Post'],
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
        likePost: builder.mutation({
            query: (body) => {
                return {
                    url: `/posts/${body.id}`,
                    method: "PATCH",
                    body
                };
            },
            invalidatesTags: (result, error, arg) => [{ type: 'Post', id: arg.id }],
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery, useAddPostMutation, useLikePostMutation } = postsApi