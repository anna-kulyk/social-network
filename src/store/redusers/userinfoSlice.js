import { createSlice } from '@reduxjs/toolkit';
import avatar from '../../assets/images/avatar.jpg';

const initialState = {
    avatar: avatar,
    name: 'Anna Sandpiper',
    address: 'Reston, Virginia',
    id: 1
};

export const userinfoSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {
        setAvatar: (state, action) => {
            state.avatar = action.payload;
        },
        setName: (state, action) => {
            state.cover = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setAvatar, setName } = userinfoSlice.actions;

export default userinfoSlice.reducer;
