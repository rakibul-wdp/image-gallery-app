import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HeaderImg from "../assets/images/header.jpg";
import Search from "./Search";

const Header = () => {
  return (
    <Box sx={header}>
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        color="white"
      >
        Download High Quality Images by creators
      </Typography>
      <Typography variant="subtitle1" textAlign="center" color="white">
        Over 2.4+ million stock images by talented community
      </Typography>
      <Box display="flex" justifyContent="center">
        <div style={{ maxWidth: 900, width: 900 }}>
          <Search key="headerSearch" dense={true} />
        </div>
      </Box>
    </Box>
  );
};

// Styles
const header = {
  height: 500,
  backgroundImage: `url(${HeaderImg})`,
  backgroundPosition: "center center",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  rowGap: 2,
  p: 2,
};

export default Header;
