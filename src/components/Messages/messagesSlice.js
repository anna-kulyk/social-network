import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [
        {
            userId: 3,
            message: "Hi, how are you?",
        },
        {
            userId: 0,
            message: "Good, how are you?",
        },
    ],
};

export const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        addMessage: (state, action) => {
            const newMessage = {
                userId: 0,
                message: action.payload
            }
            state.value.push(newMessage);
        },
    },
});

// Action creators are generated for each case reducer function
export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
