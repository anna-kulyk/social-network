import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    friendList: [
        {
            id: 2,
            name: 'Hendry Katla',
            address: 'Sterling, Virginia',
            avatar: 'https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
        },
        {
            id: 3,
            name: 'Liselotte Márk',
            address: 'Rockville, Maryland',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        },
        {
            id: 4,
            name: 'Yuli Nabu',
            address: 'Seattle, Washington',
            avatar: 'https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
        },
        {
            id: 5,
            name: 'Charlotte Legrand',
            address: 'Sterling, Virginia',
            avatar: 'https://randomuser.me/api/portraits/med/women/77.jpg'
        },
        {
            id: 6,
            name: 'Ann Mason',
            address: 'Rockville, Maryland',
            avatar: 'https://randomuser.me/api/portraits/med/women/18.jpg'
        },
        {
            id: 7,
            name: 'Sohan Pierre',
            address: 'Seattle, Washington',
            avatar: 'https://randomuser.me/api/portraits/med/men/77.jpg'
        },
        {
            id: 8,
            name: 'Gonzaga Ribeiro',
            address: 'Sterling, Virginia',
            avatar: 'https://randomuser.me/api/portraits/med/men/10.jpg'
        },
        {
            id: 9,
            name: 'Josefina Calvo',
            address: 'Rockville, Maryland',
            avatar: 'https://randomuser.me/api/portraits/med/women/3.jpg'
        },
        {
            id: 10,
            name: 'Andri Leclerc',
            address: 'Seattle, Washington',
            avatar: 'https://randomuser.me/api/portraits/med/men/57.jpg'
        },
        {
            id: 11,
            name: 'Els Ijsseldijk',
            address: 'Sterling, Virginia',
            avatar: 'https://randomuser.me/api/portraits/med/women/75.jpg'
        },
        {
            id: 12,
            name: 'Jesus Riley',
            address: 'Rockville, Maryland',
            avatar: 'https://randomuser.me/api/portraits/med/men/45.jpg'
        },
        {
            id: 13,
            name: 'Konsta Manninen',
            address: 'Seattle, Washington',
            avatar: 'https://randomuser.me/api/portraits/med/men/24.jpg'
        },
        {
            id: 14,
            name: 'Madison Ambrose',
            address: 'Sterling, Virginia',
            avatar: 'https://randomuser.me/api/portraits/med/women/15.jpg'
        },
    ],
};

export const friendsSlice = createSlice({
    name: "friends",
    initialState,
    reducers: {
        addFriend: (state, action) => {
            state.friendList.push(action.payload);
        },
        deleteFriend: (state, action) => {
            state.friendList.splice(state.friendList.findIndex(friend => friend.id === action.payload), 1);
        },
        setFriendList: (state, action) => {
            state.friendList = action.payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const { addFriend } = friendsSlice.actions;

export default friendsSlice.reducer;
