import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { format } from "date-fns";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#141414",
        color: "white",
        padding: "20px",
      }}
    >
      <Typography>
        @ {format(new Date(), "yyyy")} BYD. All rights reserved
      </Typography>

      <Box sx={{ display: "flex", gap: "15px", cursor: "pointer" }}>
        <TelegramIcon />
        <InstagramIcon />
        <YouTubeIcon />
      </Box>
    </Box>
  );
};

export default Footer;
