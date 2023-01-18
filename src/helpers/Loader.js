import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Loading from "../assets/images/loader.gif";

const Loader = () => {
  return (
    <Box
      display="flex"
      height="90vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <img src={Loading} height={200} alt="Loading" />
      <Typography variant="h6">Loading...!!!</Typography>
    </Box>
  );
};

export default Loader;
