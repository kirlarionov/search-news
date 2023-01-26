import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Box, styled, Typography } from "@mui/material"
import Article from "../Article"
import { getCategoryNews } from "../../store/slices/searchNewsSlice"
import Loader from "../Loader"

const CategoryTitleBox = styled(Box)`
   position: absolute;
   top: -65px;
   right: -9px;
   padding: 1px 20px;
`

const CategoryNews = () => {
   const { categoryNewsArticles, showNewsByCategory, isLoading } = useSelector(
      (state) => state.searchNews
   )
   const dispatch = useDispatch()

   const categoryTitle =
      showNewsByCategory === "general" ? "top news" : showNewsByCategory

   useEffect(() => {
      if (showNewsByCategory) {
         dispatch(getCategoryNews(showNewsByCategory))
      }
   }, [dispatch, showNewsByCategory])

   return (
      <Box sx={{ position: "relative", marginTop: "20px" }}>
         <CategoryTitleBox>
            <Typography variant="overline" fontSize={"20px"} color={"#636060"}>
               {categoryTitle}
            </Typography>
         </CategoryTitleBox>

         {categoryNewsArticles?.map((article, index) => (
            <Article article={article} key={index} />
         ))}

         {!categoryNewsArticles?.length && !isLoading && (
            <Box textAlign={"center"} mt={"50px"}>
               <Typography variant="h5">
                  Unable to find articles by category.
               </Typography>
               <Typography variant="h5">Try again or do it later.</Typography>
            </Box>
         )}

         {isLoading === "category-loading" && <Loader />}
      </Box>
   )
}

export default CategoryNews
