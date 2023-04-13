import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './redusers/messagesSlice';
import chatsReduser from './redusers/chatsSlice';
import friendsReduser from './redusers/friendsSlice';
import { usersApi } from '../services/usersService';
import { postsApi } from '../services/postsService';
import { setupListeners } from '@reduxjs/toolkit/query'
import postsReduser from './redusers/postsdataSlice';
import userinfoReduser from './redusers/userinfoSlice';

export const store = configureStore({
    reducer: {
        userinfo: userinfoReduser,
        chats: chatsReduser,
        messages: messagesReducer,
        friends: friendsReduser,
        postsData: postsReduser,
        [usersApi.reducerPath]: usersApi.reducer,
        [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware, postsApi.middleware),
})

setupListeners(store.dispatch)