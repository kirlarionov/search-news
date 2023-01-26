import React from "react"
import { Box, IconButton, Tooltip } from "@mui/material"
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import YouTubeIcon from "@mui/icons-material/YouTube"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TelegramInIcon from "@mui/icons-material/Telegram"

const SocialIcons = () => {
   return (
      <Box
         sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
         }}>
         <Tooltip title="Instagram">
            <IconButton>
               <InstagramIcon sx={{ width: "40px", height: "40px" }} />
            </IconButton>
         </Tooltip>
         <Tooltip title="Facebook">
            <IconButton>
               <FacebookIcon sx={{ width: "40px", height: "40px" }} />
            </IconButton>
         </Tooltip>
         <Tooltip title="YouTube">
            <IconButton>
               <YouTubeIcon sx={{ width: "40px", height: "40px" }} />
            </IconButton>
         </Tooltip>
         <Tooltip title="Telegram">
            <IconButton>
               <TelegramInIcon sx={{ width: "40px", height: "40px" }} />
            </IconButton>
         </Tooltip>
         <Tooltip title="Twitter">
            <IconButton>
               <TwitterIcon sx={{ width: "40px", height: "40px" }} />
            </IconButton>
         </Tooltip>
         <Tooltip title="LinkedIn">
            <IconButton>
               <LinkedInIcon sx={{ width: "40px", height: "40px" }} />
            </IconButton>
         </Tooltip>
      </Box>
   )
}

export default SocialIcons
