import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const loadAllArticles = createAsyncThunk(
    'articles/loadAllArticles',
    async (searchTerm) => {
        if (searchTerm){
            const escapedSearchTerm = encodeURI(searchTerm);
            const redditData = await fetch(`https://www.reddit.com/r/sports/${escapedSearchTerm}.json`);
            const json = await redditData.json();
            return json.data.children.map(article => article.data);
        }
    const redditData = await fetch('https://www.reddit.com/r/sports.json');
    const json = await redditData.json();
    console.log(json);
    return json.data.children.map(article => article.data);
    }
)

export const articlesSlice = createSlice({
    name: 'articles',
    initialState:{
        articles: [],
        isLoading: false,
        hasError: false,
    },
    // reducers: {
    //     filterArticles: (state, action) => {
    //         state.articles[id] = action.payload.filter(id => action.payload !== id);
    //     },
    // },
    extraReducers: (builder) => {
        builder
        .addCase(loadAllArticles.fulfilled, (state,action) => {
            state.articles = action.payload;
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
})

export const { filterArticles } = articlesSlice.actions;
export const selectAllArticles = (state) => state.articles.articles;
export const isLoading = (state) => state.articles.isLoading;
export default articlesSlice.reducer;
