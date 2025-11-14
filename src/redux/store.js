import { configureStore } from "@reduxjs/toolkit";
import serverReducer from "./slice/base.serverSlice.js"

export const store = configureStore({
    reducer: {
        server: serverReducer
    }
})