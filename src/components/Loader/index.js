import React from "react"
import { Box, styled } from "@mui/material"
import cl from "./Loader.module.css"

const LoaderContainer = styled(Box)`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 75px;
`
const LoaderStyleBox = styled(Box)`
   display: inline-block;
   background-color: #8080800f;
   border-radius: 50%;
   padding: 30px;
`

const Loader = () => {
   return (
      <LoaderContainer>
         <LoaderStyleBox>
            <div className={cl.spinner}>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </div>
         </LoaderStyleBox>
      </LoaderContainer>
   )
}

export default Loader
