import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postsPage: 1,
    postsData: []
};

export const postsSlice = createSlice({
    name: "postsData",
    initialState,
    reducers: {
        setPostsPage: (state, action) => {
            state.postsPage = action.payload;
        },
        nextPostsPage: (state) => {
            state.postsPage += 1;
        },
        resetPostsPage: (state) => {
            state.postsPage = 1;
        },
        setPostsData: (state, action) => {
            if (state.postsPage === 1) {
                state.postsData = action.payload;
            }
            else {
                state.postsData = [...state.postsData, ...action.payload];
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { setPostsPage, nextPostsPage, resetPostsPage, setPostsData } = postsSlice.actions;

export default postsSlice.reducer;
