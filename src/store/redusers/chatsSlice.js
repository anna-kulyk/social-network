import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [
        {
            id: 1,
            name: 'Hendry Katla',
            avatar: 'https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
        },
        {
            id: 2,
            name: 'Liselotte Márk',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        },
        {
            id: 3,
            name: 'Yuli Nabu',
            avatar: 'https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
        }
    ],
};

export const chatsSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {
        addChat: (state, action) => {
            state.value.push(action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { addChat } = chatsSlice.actions;

export default chatsSlice.reducer;
