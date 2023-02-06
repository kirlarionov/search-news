import React from "react"
import { useSelector } from "react-redux"
import { Box, styled } from "@mui/material"
import SearchHistoryVariant from "./SearchHistoryVariant"

const PreviousSearchBox = styled(Box)`
   position: absolute;
   top: 31px;
   left: 22px;
   width: 446px;
   padding-top: 10px;
   background-color: white;
   border-radius: 0 0 10px 10px;
   overflow: hidden;
   box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
   z-index: 1;
`

const SearchHistoryList = () => {
   const { searchHistory } = useSelector((state) => state.searchNews)

   return (
      <PreviousSearchBox>
         {searchHistory?.map((variant, index) => (
            <SearchHistoryVariant variant={variant} key={index} />
         ))}
      </PreviousSearchBox>
   )
}

export default SearchHistoryList
