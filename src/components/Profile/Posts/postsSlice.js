import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [
        {
            id: 1,
            post: 'Hi, how are you?',
            likes: 3
        },
        {
            id: 2,
            post: `It's my first post`,
            likes: 15
        }
    ],
    postIdCount: 2,
};

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.postIdCount += 1;
            const newPost = {
                id: state.postIdCount,
                post: action.payload,
                likes: 0
            }
            state.push(newPost);
        },
        likePost: (state, action) => {
            const likedPost = state.posts.find(post => post.id === action.payload);
            likedPost.likes += 1;
        }
    },
});

// Action creators are generated for each case reducer function
export const { addPost, likePost } = postsSlice.actions;

export default postsSlice.reducer;
