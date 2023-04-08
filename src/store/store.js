import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './redusers/messagesSlice';
import postsReduser from './redusers/postsSlice';
import chatsReduser from './redusers/chatsSlice';
import friendsReduser from './redusers/friendsSlice';
import { usersApi } from '../services/usersService';
import { postsApi } from '../services/postsService';
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        chats: chatsReduser,
        messages: messagesReducer,
        posts: postsReduser,
        friends: friendsReduser,
        [usersApi.reducerPath]: usersApi.reducer,
        [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware, postsApi.middleware),
})

setupListeners(store.dispatch)