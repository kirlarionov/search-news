import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Typography, Button, Box, styled } from "@mui/material"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import { getCategoryNews } from "../store/slices/searchNewsSlice"
import newspaperImg from "../assets/newspaper.jpg"
import developerImg from "../assets/developer.jpg"
import { useEffect } from "react"

const AboutPageBackground = styled(Box)`
   background-image: url(${newspaperImg});
   background-repeat: no-repeat;
   background-position: center center;
   background-attachment: fixed;
   -webkit-background-size: cover;
   -moz-background-size: cover;
   -o-background-size: cover;
   background-size: cover;
`
const AboutPageContainer = styled(Box)`
   position: relative;
   margin: -60px auto -20px;
   background-color: #e8eaeb;
   padding: 30px 20px;
   border-radius: 15px;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   z-index: 6;
   max-width: 900px;
`
const AboutPageTitle = styled(Typography)`
   color: #636060;
   text-align: center;
   padding-bottom: 30px;
`
const MainContentBox = styled(Typography)`
   display: flex;
   gap: 15px;
   align-items: center;
`

const AboutPage = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const onClickToMain = () => {
      navigate("/search-news/?category=general")
      dispatch(getCategoryNews("general"))
   }

   useEffect(() => {
      if (
         document.body.scrollTop > 0 ||
         document.documentElement.scrollTop > 0
      ) {
         window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
         })
      }
   }, [])

   return (
      <AboutPageBackground>
         <AboutPageContainer>
            <AboutPageTitle variant="h3">ABOUT</AboutPageTitle>
            <MainContentBox>
               <Box textAlign={"center"} color="#636060">
                  <Typography fontSize={"22px"} pb="15px">
                     Greetings to you! &#128075; <br />
                     My name is Kirill. I am a frontend developer.
                  </Typography>
                  <Typography fontSize={"22px"} pb="15px">
                     This application is created to search for news by your
                     request, and also shows the main news of Ukraine and such
                     categories as: sports, business, health, technology, <br />
                     science and entertainment.
                  </Typography>
                  <Typography fontSize={"22px"}>
                     Thank you for using my App &#128578; <br />
                     Enjoy your use!
                  </Typography>
               </Box>
               <Box
                  sx={{
                     display: "flex",
                     flexDirection: "column",
                     gap: "50px",
                  }}>
                  <img
                     src={developerImg}
                     alt="developer"
                     width={"220px"}
                     height={"180px"}
                  />
                  <Button
                     variant="contained"
                     size="large"
                     startIcon={<ArrowBackIosIcon />}
                     onClick={onClickToMain}>
                     TO MAIN
                  </Button>
               </Box>
            </MainContentBox>
         </AboutPageContainer>
      </AboutPageBackground>
   )
}

export default AboutPage
