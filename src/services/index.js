import axios from "axios"

export const getSearchNewsRequest = async (searchQuery) => {
   const response = await axios.get(
      `${process.env.REACT_APP_NEWS_API_URL}/v2/everything?q=${searchQuery}&sortBy=publishedAt&language=en&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
   )
   return response.data
}

export const getCategoryNewsRequest = async (category) => {
   const response = await axios.get(
      `${process.env.REACT_APP_NEWS_API_URL}/v2/top-headlines?country=ua&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
   )
   return response.data
}
