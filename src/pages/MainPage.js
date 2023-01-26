import React from "react"
import { useSelector } from "react-redux"
import { Box } from "@mui/material"
import styled from "styled-components"
import SearchNews from "../components/news/SearchNews"
import SearchForm from "../components/SearchForm"
import CategoryButtons from "../components/buttons/CategoryButtons"
import WeatherWidget from "../components/WeatherWidget"
import rozetkaBanner from "../assets/rozetka.png"
import CategoryNews from "../components/news/CategoryNews"
import ScrollUpBtn from "../components/buttons/ScrollUpBtn"

const MainContainer = styled(Box)`
   display: flex;
   justify-content: center;
   background-color: lightgray;
   min-height: 85vh;
   max-width: 1896px;
   margin: 0 auto;
`
const Sidebar = styled(Box)`
   position: sticky;
   top: 100px;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-top: 40px;
   background-color: lightgray;
   flex-basis: 19%;
`
const ContentBox = styled(Box)`
   position: relative;
   margin: -60px auto -20px;
   background-color: #e8eaeb;
   padding: 20px;
   border-radius: 15px;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   z-index: 4;
   flex-basis: 900px;
   flex-grow: 1;
`
const TopMainBox = styled(Box)`
   display: flex;
   justify-content: center;
   align-items: center;
`
const RozetkaBanner = styled.img`
   max-width: 250px;
   border-radius: 10px;
   box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`

const MainPage = () => {
   const { showNewsByCategory } = useSelector((state) => state.searchNews)
   
   return (
      <MainContainer component="main">
         <Sidebar>
            <a href="https://rozetka.com.ua/">
               <RozetkaBanner src={rozetkaBanner} alt="banner ad" />
            </a>
         </Sidebar>
         <ContentBox>
            <TopMainBox>
               <CategoryButtons />
            </TopMainBox>
            <SearchForm />
            {showNewsByCategory === "search-news" ? (
               <SearchNews />
            ) : (
               <CategoryNews />
            )}
         </ContentBox>
         <Sidebar>
            <WeatherWidget />
            <ScrollUpBtn />
         </Sidebar>
      </MainContainer>
   )
}

export default MainPage
