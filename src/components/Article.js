import React from "react"
import { Box, Divider, Typography } from "@mui/material"
import moment from "moment"
import styled from "styled-components"

const ArticleBox = styled(Box)`
   display: flex;
   justify-content: space-between;
   gap: 10px;
   padding: 7px 10px 10px;
`
const ArticleTitleLink = styled.a`
   &:hover {
      text-decoration: underline;
   }
`
const ArticleFooter = styled(Box)`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 98%;
`
const ArticleImg = styled.img`
   width: 200px;
   cursor: pointer;
   border-radius: 7px;
   &:hover {
      transform: scale(1.5);
   }
   transition: all 0.5s;
`

const Article = ({ article }) => {
   const formatedDate = moment(article.publishedAt).format(
      "MMMM Do YYYY, HH:mm"
   )

   return (
      <>
         <ArticleBox>
            <Box width={"83%"}>
               <ArticleTitleLink href={article.url}>
                  <Typography variant="h5" marginBottom={"10px"}>
                     {article.title}
                  </Typography>
               </ArticleTitleLink>
               <Typography fontSize={"16px"} marginBottom={"10px"}>
                  {article.description}
               </Typography>
               <ArticleFooter>
                  <Typography variant="body1">
                     Source: "{article.source?.name}"
                  </Typography>
                  <Typography variant="body2">{formatedDate}</Typography>
               </ArticleFooter>
            </Box>
            <Box>
               <a href={article.url}>
                  <ArticleImg src={article.urlToImage} alt="" />
               </a>
            </Box>
         </ArticleBox>
         <Divider width={"99%"} />
      </>
   )
}

export default Article
