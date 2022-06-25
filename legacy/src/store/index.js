import { configureStore } from '@reduxjs/toolkit';
import { sw } from './sw';

export const actions = {
    sw: sw.actions,
};

export const initialStates = {
    sw: sw.initialState,
};

export const createStore = (preloadedState) => configureStore({
    preloadedState,
    reducer: {
        sw: sw.reducer,
    },
});
