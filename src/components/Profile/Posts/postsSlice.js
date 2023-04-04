import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [
        {
            post: 'Hi, how are you?',
            likes: 3
        },
        {
            post: `It's my first post`,
            likes: 15
        }
    ],
};

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.value.push(action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
