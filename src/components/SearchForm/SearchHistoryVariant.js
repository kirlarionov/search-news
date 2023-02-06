import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Box, IconButton, Typography, styled } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import {
   getSearchNews,
   setSearchHistory,
   setSearchQuery,
   setShowSearchHistory,
   setShowNewsByCategory,
} from "../../store/slices/searchNewsSlice"

const PreviousSearchVariant = styled(Box)`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 2px 0 2px 10px;
   cursor: pointer;
   &:hover {
      background: #e0dcdc;
      transition: all 0.4s;
   }
   &:active {
      background: #b4b0b0;
      transition: all 0.2s;
   }
`

const SearchHistoryVariant = ({ variant }) => {
   const { searchHistory } = useSelector((state) => state.searchNews)
   const dispatch = useDispatch()

   const onClickHistoryVariant = (e) => {
      e.stopPropagation()

      dispatch(setSearchQuery(variant))
      dispatch(getSearchNews(variant))
      dispatch(setShowSearchHistory(false))
      dispatch(setShowNewsByCategory("search-news"))
   }

   const deleteSearchVariant = (e) => {
      e.stopPropagation()
      const updatedState = searchHistory.filter((curVariant) => {
         return curVariant !== variant
      })

      dispatch(setSearchHistory(updatedState))
      localStorage.setItem("searchHistory", JSON.stringify(updatedState))
   }

   return (
      <PreviousSearchVariant onClick={onClickHistoryVariant}>
         <Typography>{variant}</Typography>
         <IconButton onClick={deleteSearchVariant}>
            <CloseIcon />
         </IconButton>
      </PreviousSearchVariant>
   )
}

export default SearchHistoryVariant
