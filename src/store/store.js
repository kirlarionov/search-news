import { configureStore } from "@reduxjs/toolkit"
import searchReaducer from "./slices/searchNewsSlice"

const store = configureStore({
   reducer: {
      searchNews: searchReaducer,
   },
})

export default store