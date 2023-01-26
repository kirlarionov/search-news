import React from "react"
import { Button, styled } from "@mui/material"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"

const ButtonStyle = styled(Button)`
   color: #636060;
   border-color: #636060;
   margin-top: 100px;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
   &:hover {
      border-color: gray;
      background-color: #b6b6b6;
   }
`

const ScrollUpBtn = () => {
   const handlerScrollUp = () => {
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
   }

   return (
      <ButtonStyle
         variant="outlined"
         size="large"
         endIcon={<ArrowUpwardIcon />}
         onClick={handlerScrollUp}>
         Scroll To Top
      </ButtonStyle>
   )
}

export default ScrollUpBtn
