import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
    tagTypes: ['Posts'],
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: (page) => {
                return {
                    url: `/posts?_sort=id&_order=desc&_page=${page}&_limit=5`
                }
            },
            providesTags: (result, error, arg) => [{ type: 'Posts', id: 'LIST' }],
        }),
        addPost: builder.mutation({
            query: (body) => {
                return {
                    url: `/posts`,
                    method: "POST",
                    body
                };
            },
            invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
        }),
        likePost: builder.mutation({
            query: ({ id, ...body }) => {
                return {
                    url: `/posts/${id}`,
                    method: "PUT",
                    body
                };
            },
            invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }],
        }),
        getPost: builder.query({
            query: (id) => { return { url: `posts/${id}` } },
            providesTags: (result, error, id) => [{ type: 'Posts', id }],
        }),
        deletePost: builder.mutation({
            query: (id) => {
                return {
                    url: `/posts/${id}`,
                    method: "DELETE"
                };
            },
            invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
        }),
        editPost: builder.mutation({
            query: ({ id, ...body }) => {
                return {
                    url: `/posts/${id}`,
                    method: "PUT",
                    body
                };
            },
            invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }],
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetPostsQuery,
    useAddPostMutation,
    useLikePostMutation,
    useGetPostQuery,
    useDeletePostMutation,
    useEditPostMutation } = postsApi