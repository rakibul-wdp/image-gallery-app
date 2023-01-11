import { Typography } from "@mui/material";
import { styled } from "@mui/styles";
import React from "react";

const Footer = () => {
  return (
    <FooterNav color="default">
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
  margin: "40px 0 30px 0"
}));

export default Footer;
