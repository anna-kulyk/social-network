import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from '../components/Messages/messagesSlice';

export const store = configureStore({
    reducer: {
        messages: messagesReducer,
    },
})