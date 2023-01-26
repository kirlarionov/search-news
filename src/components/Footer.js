import React from "react"
import { NavLink } from "react-router-dom"
import { Box, Button, styled, Typography } from "@mui/material"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import SocialIcons from "./SocialIcons"

const FooterContainer = styled(Box)`
   min-height: 150px;
   font-size: 30px;
   padding: 50px 20px 30px;
   background: rgb(173, 216, 230);
   background: radial-gradient(
      circle,
      rgba(173, 216, 230, 1) 51%,
      rgba(255, 255, 224, 1) 100%
   );
   box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.1);
`
const ContactsItem = styled(Box)`
   display: flex;
   align-items: center;
   gap: 5px;
`
const ButtonStyle = styled(Button)`
   font-size: 20px;
   color: #46575d;
   border: 1px solid #46575d;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
   &:hover {
      background-color: #94ccde;
   }
`

const Footer = () => {
   return (
      <FooterContainer color={"#46575d"}>
         <Box display={"flex"} alignItems={"center"} mb={"20px"}>
            <Box
               width={"50%"}
               borderRight={"2px solid #46575d"}
               textAlign={"right"}
               pr={"55px"}>
               <NavLink to="about">
                  <ButtonStyle size="large">ABOUT US</ButtonStyle>
               </NavLink>
            </Box>

            <Box pl={"55px"}>
               <ContactsItem>
                  <PhoneIcon />
                  <Typography fontSize={"20px"}>+380503337777</Typography>
               </ContactsItem>
               <ContactsItem>
                  <EmailIcon />
                  <Typography fontSize={"20px"}>
                     searchnews@gmail.com
                  </Typography>
               </ContactsItem>
            </Box>
         </Box>

         <SocialIcons />
         <Typography textAlign={"center"}>
            Copyright © 2023 Search News | All rights reserved
         </Typography>
      </FooterContainer>
   )
}

export default Footer
