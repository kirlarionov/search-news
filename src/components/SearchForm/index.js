import React, { useCallback, useEffect, useRef } from "react"
import {
   Box,
   Button,
   IconButton,
   InputBase,
   styled,
   Typography,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import CloseIcon from "@mui/icons-material/Close"
import SearchHistoryList from "./SearchHistoryList"
import { useDispatch, useSelector } from "react-redux"
import {
   getSearchNews,
   setnotFoundSearchResults,
   setSearchHistory,
   setSearchNotInEnglish,
   setSearchQuery,
   setShowSearchHistory,
   setShowNewsByCategory,
} from "../../store/slices/searchNewsSlice"
import { validInEnglish } from "../../utils/search-valid-in-eng"

const INPUT_WIDTH = 550

const formStyle = {
   display: "flex",
   height: "40px",
   position: "relative",
}

const SearchInput = styled(InputBase)`
   width: ${({ value }) => (!!value ? INPUT_WIDTH : INPUT_WIDTH - 150)}px;
   position: relative;
   margin-left: 10px;
   padding: 7px 27px 7px 32px;
   font-size: 18px;
   background-color: white;
   border-bottom: 1px solid gray;
   border-radius: 10px 0 0 10px;
   box-shadow: 1px 1px 2px gray;
   z-index: 2;
   transition: all 0.5s;
   &.Mui-focused {
      box-shadow: 3px 3px 4px gray;
   }
`
const SearchIconBox = styled(Box)`
   position: absolute;
   top: 10px;
   left: 17px;
   z-index: 4;
`
const ClearInputButton = styled(Box)`
   margin-left: -36px;
   z-index: 3;
`
const SearchButton = styled(Button)`
   position: relative;
   padding: 6px 10px;
   border: 1px solid #1976d2;
   border-radius: 0 10px 10px 0;
   z-index: 4;
`
const NotValidSearch = styled(Typography)`
   position: absolute;
   top: -23px;
   left: 80px;
   color: red;
   font-size: 16px;
`

const SearchForm = () => {
   const { searchQuery, searchHistory, showSearchHistory, searchNotInEnglish } =
      useSelector((state) => state.searchNews)

   const dispatch = useDispatch()
   const rootEl = useRef(null)

   const handleValue = (e) => dispatch(setSearchQuery(e.target.value))

   const handleShowSearchHistory = () => {
      dispatch(setShowSearchHistory(true))
   }

   useEffect(() => {
      const onClick = (e) =>
         (rootEl.current.contains(e.target) && !!showSearchHistory) ||
         dispatch(setShowSearchHistory(false))
      document.addEventListener("click", onClick)
      return () => document.removeEventListener("click", onClick)
   }, [showSearchHistory, dispatch])

   const clearInput = (e) => {
      e.stopPropagation()
      dispatch(setSearchQuery(""))
      dispatch(setnotFoundSearchResults(false))
   }

   useEffect(() => {
      if (!searchQuery) {
         dispatch(setnotFoundSearchResults(false))
         dispatch(setSearchNotInEnglish(false))
      }
   }, [dispatch, searchQuery])

   const getSearchResults = useCallback(
      (e) => {
         e.preventDefault()

         if (!!searchQuery && validInEnglish(searchQuery)) {
            dispatch(getSearchNews(searchQuery))
               .then((data) => {
                  const resultsCount = data.payload.totalResults

                  if (!searchHistory && !!resultsCount) {
                     const createSearchHistory = JSON.stringify([searchQuery])

                     localStorage.setItem("searchHistory", createSearchHistory)
                     dispatch(setSearchHistory([searchQuery]))
                  }
                  if (
                     searchHistory &&
                     !searchHistory.includes(searchQuery) &&
                     !!resultsCount
                  ) {
                     const updateSearchHistory = JSON.stringify([
                        ...searchHistory,
                        searchQuery,
                     ])

                     localStorage.setItem("searchHistory", updateSearchHistory)
                     dispatch(setSearchHistory([...searchHistory, searchQuery]))
                  }
               })
               .catch((error) => {
                  console.error(error)
               })
               .finally(() =>
                  dispatch(
                     setShowSearchHistory(false),
                     dispatch(setSearchNotInEnglish(false)),
                     dispatch(setShowNewsByCategory("search-news"))
                  )
               )
         } else {
            dispatch(setSearchNotInEnglish(true))
         }
      },
      [searchQuery, dispatch, searchHistory]
   )

   return (
      <Box position={"relative"} ref={rootEl}>
         <form onSubmit={getSearchResults} style={formStyle}>
            <SearchInput
               type="text"
               size="medium"
               placeholder="Enter a search query in English"
               value={searchQuery}
               onChange={handleValue}
               onFocus={handleShowSearchHistory}
            />
            <SearchIconBox>
               <SearchIcon sx={{ color: "gray" }} />
            </SearchIconBox>
            {searchQuery && (
               <ClearInputButton>
                  <IconButton onClick={clearInput}>
                     <CloseIcon />
                  </IconButton>
               </ClearInputButton>
            )}

            <SearchButton type="submit" variant="contained">
               SEARCH
            </SearchButton>
         </form>

         {showSearchHistory && (
            <SearchHistoryList getSearchResults={getSearchResults} />
         )}

         {searchNotInEnglish && (
            <NotValidSearch>
               Please enter your request in English
            </NotValidSearch>
         )}
      </Box>
   )
}

export default SearchForm
