import React, { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Box, Button, styled } from "@mui/material"
import {
   getCategoryNews,
   setShowNewsByCategory,
} from "../../store/slices/searchNewsSlice"

const CATEGORYS = [
   "general",
   "sports",
   "business",
   "health",
   "technology",
   "science",
   "entertainment",
]

const NavContainer = styled(Box)`
   display: flex;
   justify-content: space-between;
   gap: 10px;
   margin-bottom: 30px;
`
const NavButton = styled(Button)`
   font-size: 16px;
   color: white;
   box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
   background-color: #b9b9b9;
   &:hover {
      background-color: #aba9a9;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`

const CategoryButtons = () => {
   const dispatch = useDispatch()

   const [searchParams, setSearchParams] = useSearchParams()

   const categoryQuery = searchParams.get("category")

   useEffect(() => {
      if (!!categoryQuery) {
         dispatch(setShowNewsByCategory(categoryQuery))
         dispatch(getCategoryNews(categoryQuery))
         setSearchParams({ category: categoryQuery })
      }
   }, [categoryQuery, setSearchParams, dispatch])

   const onClickHomeBtn = (e) => {
      e.stopPropagation()
      const categoryName = e.target.value

      dispatch(getCategoryNews(categoryName))
      dispatch(setShowNewsByCategory(categoryName))
      setSearchParams({ category: categoryName })
   }

   return (
      <NavContainer>
         {CATEGORYS.map((category, index) => {
            const categoryTitle = category === "general" ? "top news" : category

            return (
               <NavButton key={index} value={category} onClick={onClickHomeBtn}>
                  {categoryTitle}
               </NavButton>
            )
         })}
      </NavContainer>
   )
}

export default CategoryButtons
