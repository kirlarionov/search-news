import React from "react"
import { Box, Typography } from "@mui/material"
import Article from "../Article"
import { useSelector } from "react-redux"
import Loader from "../Loader"

const SearchNews = () => {
   const { searchArticles, notFoundSearchResults, searchQuery, isLoading } =
      useSelector((state) => state.searchNews)

   const currentArticles = searchArticles?.slice(0, 10)

   return (
      <Box minHeight={"280px"}>
         {currentArticles && (
            <Box marginTop={"20px"}>
               {currentArticles.map((article, index) => (
                  <Article article={article} key={index} />
               ))}
            </Box>
         )}

         {isLoading === "search-loading" && <Loader />}

         {notFoundSearchResults && (
            <Typography variant="h5" marginTop={"50px"} textAlign="center">
               No results were found for the query <b>"{searchQuery}"</b>
            </Typography>
         )}
      </Box>
   )
}

export default SearchNews
