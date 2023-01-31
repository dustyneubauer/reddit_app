import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCurrentArticle = createAsyncThunk(
    'currentArticle/loadCurrentArticle',
    async (articleId, articleTitle) => {
        const data = await fetch(`https://www.reddit.com/r/sports/comments/${articleId}/${articleTitle}`)
        const json = await data.json();
        return json;
    }
);

export const currentArticleSlice= createSlice({
    name: 'currentArticle',
    initialState: {
        article: undefined,
        isLoadingArticle: false,
        hasError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCurrentArticle.pending, (state) => {
                state.isLoadingArticle = true;
                state.hasError = false;
            })
            .addCase(loadCurrentArticle.fulfilled, (state, action) => {
                state.isLoadingArticle= false;
                state.article = action.payload;
                state.hasError = false;
                console.log(action.payload);
            })
            .addCase(loadCurrentArticle.rejected, (state)=> {
                state.hasError= true;
                state.article= {};
                state.isLoadingArticle = false;
            })
    }
})

export const selectArticle = (state) => state.currentArticle.article;
export const isLoadingArticle = (state) => state.currentArticle.isLoadingArticle;

export default currentArticleSlice.reducer;