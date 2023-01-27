import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const loadAllArticles = createAsyncThunk(
    'articles/loadAllArticles',
    async () => {
    const redditData = await fetch('https://www.reddit.com/r/popular.json');
    const json = await redditData.json();
    return json;
    }
)

export const articlesSlice = createSlice({
    name: 'articles',
    initialState:{
        articles: [],
        isLoading: false,
        hasError: false,
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadAllArticles.fulfilled, (state,action) => {
            state.articles= action.payload;
            state.isLoading = false;
            console.log(action.payload);
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
})

export const selectAllArticles = (state) => state.articles.articles;
export const isLoading = (state) => state.articles.isLoading;
export default articlesSlice.reducer;
