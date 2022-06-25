import { createSlice } from '@reduxjs/toolkit';

const initialState = () => ({
    initialized: false,
    updated: false,
    registration: null,
});

const {actions, reducer} = createSlice({
    name: 'sw',
    initialState: initialState(),
    reducers: {
        ready: (state, {payload}) => {
            state.initialized = !state.initialized;
            state.registration = payload;
            return state;
        },
        update: (state, {payload}) => {
            state.updated = !state.updated;
            state.registration = payload;
            return state;
        },
    },
});

export const sw = {
    actions,
    reducer,
    initialState,
};
