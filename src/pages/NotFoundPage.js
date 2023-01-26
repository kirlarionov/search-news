import React from "react"
import { NavLink, useRouteError } from "react-router-dom"
import { Button, styled, Typography, Box } from "@mui/material"

const NotFoundPageContainer = styled(Box)`
   display: flex;
   gap: 20px;
   padding: 20px;
   background-color: lightyellow;
   font-size: 30px;
`

const NotFoundPage = () => {
   const error = useRouteError()

   console.log(error)

   return (
      <NotFoundPageContainer component="main">
         <Typography variant="h3">Not Found Page!</Typography>
         <p>{error.statusText}</p>
         <div>
            <NavLink to="/">
               <Button variant="contained">to Main Page</Button>
            </NavLink>
         </div>
      </NotFoundPageContainer>
   )
}

export default NotFoundPage
