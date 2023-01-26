import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./components/Articles/articlesSlice";

export const store = configureStore({
    reducer: {
        articles: articlesReducer,
    },
})