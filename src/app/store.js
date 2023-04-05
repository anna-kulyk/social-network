import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from '../components/Messages/messagesSlice';
import postsReduser from '../components/Profile/Posts/postsSlice';
import chatsReduser from '../components/Messages/chatsSlice';

export const store = configureStore({
    reducer: {
        chats: chatsReduser,
        messages: messagesReducer,
        posts: postsReduser,
    },
})