/* eslint-disable no-param-reassign */

import { createSlice } from "@reduxjs/toolkit";
import type { ThemeMode } from "theme/type";

type AppState = {
    loading: Boolean;
    theme: ThemeMode;
};

const initialState: AppState = {
    loading: false,
    theme: "light",
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        toggleLoading: (state) => {
            state.loading = !state.loading;
        },
        toggleTheme: (state) => {
            // console.log('state:', state)
            state.theme = state.theme === "light" ? "dark" : "light";
        },
        setTheme: (state, action) => {
            const theme = action.payload;
            state.theme = theme;
        },
    },
});

export default appSlice;
