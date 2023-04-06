import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from '../components/Messages/messagesSlice';
import postsReduser from '../components/Profile/Posts/postsSlice';
import chatsReduser from '../components/Messages/chatsSlice';
import friendsReduser from '../components/Friends/friendsSlice';

export const store = configureStore({
    reducer: {
        chats: chatsReduser,
        messages: messagesReducer,
        posts: postsReduser,
        friends: friendsReduser,
    },
})