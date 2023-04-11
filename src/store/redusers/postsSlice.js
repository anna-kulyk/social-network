import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [
        {
            id: 2,
            post: `React apps are made out of components.`,
            likes: 15,
            liked: false
        },
        {
            id: 1,
            post: `It's my first post`,
            likes: 3,
            liked: false
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
                likes: 0,
                liked: false
            }
            state.posts.unshift(newPost);
        },
        likePost: (state, action) => {
            const likedPost = state.posts.find(post => post.id === action.payload);
            if (likedPost.liked) {
                likedPost.likes -= 1;
                likedPost.liked = false;
            }
            else {
                likedPost.likes += 1;
                likedPost.liked = true;
            }
        }
    },
});

// Action creators are generated for each case reducer function
export const { addPost, likePost } = postsSlice.actions;

export default postsSlice.reducer;
