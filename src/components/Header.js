import React from "react"
import { Box, styled, Typography } from "@mui/material"
import ukraineFlag from "../assets/ukraine-flag.jpeg"
import newsIcon from "../assets/news-icon.png"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getCategoryNews } from "../store/slices/searchNewsSlice"

const TopHeader = styled(Box)`
   position: fixed;
   z-index: 5;
   width: 100%;
   height: 50px;
   background: rgb(182, 184, 186);
   background: linear-gradient(
      0deg,
      rgba(182, 184, 186, 1) 0%,
      rgba(241, 241, 241, 1) 58%,
      rgba(241, 241, 241, 1) 96%
   );
   box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
`
const TopHeaderLogo = styled(Box)`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 12px;
   max-width: 400px;
   margin: 0 auto;
   cursor: pointer;
`

const BottomHeaderContainer = styled(Box)`
   display: flex;
   height: 330px;
   width: 100%;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
   position: relative;
   z-index: 2;
`

const MainHeaderBox = styled(Box)`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 15px;
   width: 100%;
   background: rgb(173, 216, 230);
   background: radial-gradient(
      circle,
      rgba(173, 216, 230, 1) 50%,
      rgba(255, 255, 224, 1) 100%
   );
`
const HeaderSlogan = styled(Typography)`
   width: 350px;
   color: white;
   text-align: center;
   margin-top: -7px;
`
const ukraineFlagStyle = {
   width: "150px",
   marginTop: "-17px",
   borderRadius: "6px",
   opacity: "90%",
   boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
}

const Header = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const onClickLogo = () => {
      navigate("/search-news/")
      dispatch(getCategoryNews("general"))
   }

   return (
      <Box>
         <TopHeader>
            <TopHeaderLogo onClick={onClickLogo}>
               <img src={newsIcon} alt="news icon" />
               <Typography sx={{ fontSize: "32px", color: "#636060" }}>
                  SEARCH NEWS
               </Typography>
            </TopHeaderLogo>
         </TopHeader>
         <BottomHeaderContainer>
            <MainHeaderBox>
               <HeaderSlogan variant="h4">
                  BRAVERY MADE IN UKRAINE!
               </HeaderSlogan>
               <img
                  src={ukraineFlag}
                  alt="Ukraine Flag"
                  style={ukraineFlagStyle}
               />
               <HeaderSlogan variant="h4">
                  УКРАЇНА ПОЧИНАЄТЬСЯ З ТЕБЕ!
               </HeaderSlogan>
            </MainHeaderBox>
         </BottomHeaderContainer>
      </Box>
   )
}

export default Header
