import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
    tagTypes: ['Posts', 'Users'],
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
            invalidatesTags: (result, error, { userId }) => [{ type: 'Posts', id: 'LIST' }, { type: 'User', userId }],
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
            invalidatesTags: (result, error, { userId }) => [{ type: 'Posts', id: 'LIST' }, { type: 'User', userId }],
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
        getUsers: builder.query({
            query: (page) => {
                return {
                    url: `/users?_page=${page}&_limit=15`
                }
            },
            providesTags: (result, error, arg) => [{ type: 'User', id: 'LIST' }],
        }),
        getUser: builder.query({
            query: (id) => { return { url: `users/${id}?_embed=posts` } },
            providesTags: (result, error, id) => [{ type: 'User', id }],
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
    useEditPostMutation,
    useGetUsersQuery,
    useGetUserQuery } = postsApi