import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from '../components/Messages/messagesSlice';
import postsReduser from '../components/Profile/Posts/postsSlice';
import chatsReduser from '../components/Messages/chatsSlice';

export const store = configureStore({
    reducer: {
        messages: messagesReducer,
        posts: postsReduser,
        chats: chatsReduser,
    },
})