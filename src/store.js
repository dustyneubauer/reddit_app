import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./components/Articles/articlesSlice";
import currentArticleReducer from "./components/Articles/currentArticleSlice";

export const store = configureStore({
    reducer: {
        articles: articlesReducer,
        currentArticle: currentArticleReducer,
    },
})