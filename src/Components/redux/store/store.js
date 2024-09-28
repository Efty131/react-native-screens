// Action, Reducer, Store

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counterSlice';

export const store = configureStore({
    reducer: {
        // counterSlice a jey name dewa hoise oitai ekhane dite hobe jemon 'counter'
        counter: counterReducer,
    },
});