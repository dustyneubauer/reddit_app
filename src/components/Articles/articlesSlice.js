import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    articles: [],
    isLoading: false,
    hasError: false,
}

export const loadAllArticles = createAsyncThunk(
    'articles/loadAllArticles',
    async () => {
    const redditData = await fetch('https://www.reddit.com/r/sports.json');
    const json = await redditData.json();
    console.log(json);
    return json;
    }
)

const options = {
    name: 'articles',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(loadAllArticles.fulfilled, (state,action) => {
            state.articles= action.payload;
            state.isLoading = false;
        })
        .addCase(loadAllArticles.pending, (state,action)=>{
            state.isLoading= true;
            state.hasError= false;
        })
        .addCase(loadAllArticles.rejected, (state,action) =>{
            state.articles= [];
            state.hasError= true;
        })
    }
}

export const articlesSlice = createSlice(options);
export const selectAllArticles = (state) => state.articles.artciles;
export const isLoading = (state) => state.articles.isLoading;
export default articlesSlice.reducer;

