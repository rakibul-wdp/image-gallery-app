import { Typography } from "@mui/material";
import { styled } from "@mui/styles";
import React from "react";

const Footer = () => {
  return (
    <FooterNav>
      <Typography variant="body1" align="center">
        © {new Date().getFullYear()} Md. Rakibul Islam All rights reserved
      </Typography>
    </FooterNav>
  );
};

const FooterNav = styled("footer")(({theme}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "30px 0 30px 0",
  color: theme.palette.mode === "dark" ? theme.palette.common.white : theme.palette.black,
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.common.black
      : theme.palette.grey[50],
  boxShadow:
    theme.palette.mode === "dark" ? theme.shadows[0] : theme.shadows[4],
}));

export default Footer;
