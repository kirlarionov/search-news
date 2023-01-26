import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {
   getSearchNewsRequest,
   getCategoryNewsRequest,
} from "../../services/index"

export const getSearchNews = createAsyncThunk(
   "searchNews/getSearchNews",
   async (searchQuery) => await getSearchNewsRequest(searchQuery)
)

export const getCategoryNews = createAsyncThunk(
   "searchNews/getCategoryNews",
   async (category) => await getCategoryNewsRequest(category)
)

const initialState = {
   isLoading: false,
   showNewsByCategory: "general",
   categoryNewsArticles: null,
   searchQuery: "",
   searchArticles: null,
   searchNotInEnglish: false,
   notFoundSearchResults: false,
   searchHistory: JSON.parse(localStorage.getItem("searchHistory")) || null,
   showSearchHistory: false,
}

export const searchNewsSlice = createSlice({
   name: "searchNews",
   initialState,
   reducers: {
      setSearchQuery: (state, action) => {
         state.searchQuery = action.payload
      },
      setSearchHistory: (state, action) => {
         state.searchHistory = action.payload
      },
      setShowSearchHistory: (state, action) => {
         state.showSearchHistory = action.payload
      },
      setnotFoundSearchResults: (state, action) => {
         state.notFoundSearchResults = action.payload
      },
      setSearchNotInEnglish: (state, action) => {
         state.searchNotInEnglish = action.payload
      },
      setShowNewsByCategory: (state, action) => {
         state.showNewsByCategory = action.payload
      },
   },
   extraReducers: (builder) => {
      builder.addCase(getSearchNews.pending, (state) => {
         state.isLoading = "search-loading"
         state.searchArticles = null
         state.categoryNewsArticles = null
      })

      builder.addCase(getSearchNews.fulfilled, (state, action) => {
         state.searchArticles = action.payload.articles
         state.isLoading = false

         if (action.payload.articles.length === 0) {
            state.notFoundSearchResults = true
         } else {
            state.notFoundSearchResults = false
         }
      })

      builder.addCase(getCategoryNews.pending, (state) => {
         state.isLoading = "category-loading"
         state.categoryNewsArticles = null
      })

      builder.addCase(getCategoryNews.fulfilled, (state, action) => {
         state.categoryNewsArticles = action.payload.articles
         state.searchArticles = null
         state.isLoading = false
      })
   },
})

export const {
   setSearchQuery,
   setSearchHistory,
   setShowSearchHistory,
   setnotFoundSearchResults,
   setSearchNotInEnglish,
   setShowNewsByCategory,
} = searchNewsSlice.actions

export default searchNewsSlice.reducer
