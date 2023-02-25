import { useTheme } from "@emotion/react";
import MoonIcon from "@mui/icons-material/NightsStayRounded";
import SearchIcon from "@mui/icons-material/Search";
import SunIcon from "@mui/icons-material/WbSunnyRounded";
import {
  AppBar,
  Container,
  Grow,
  IconButton, styled, Switch,
  Toolbar,
  Typography, useMediaQuery
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useAppTheme, useAppThemeUpdate } from "../context/ThemeContext";
import Search from "./Search";

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.up("xs"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  const isDarkMode = useAppTheme();
  const setIsDarkMode = useAppThemeUpdate();

  const changeMode = (e) => setIsDarkMode(e.target.checked);

  return (
    <AppBar color="default">
      <Container>
        <IGToolbar variant="dense">
          {showSearchBar ? (
            <Grow in={showSearchBar}>
              <div style={{ width: "100%" }}>
                <Search key="navbarSearch" />
              </div>
            </Grow>
          ) : (
            <>
              <Typography variant="h5" fontFamily="pattaya">
                Image Gallery
              </Typography>
              {sm && (
                <div style={{ maxWidth: 600, width: 600 }}>
                  <Search key="navbarSearch" />
                </div>
              )}
              <Box display="flex" alignItems="center">
                {xs && !sm && (
                  <IconButton
                    onClick={() => setShowSearchBar(true)}
                    style={{ padding: 10, marginRight: 15 }}
                  >
                    <SearchIcon />
                  </IconButton>
                )}
                <ThemeSwitch>
                  <SunIcon />
                  <Switch
                    checked={isDarkMode}
                    onChange={changeMode}
                    color="default"
                  />
                  <MoonIcon />
                </ThemeSwitch>
              </Box>
            </>
          )}
        </IGToolbar>
      </Container>
    </AppBar>
  );
};

// Styles
const IGToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  columnGap: 20,
  padding: "10px 0",
  justifyContent: "space-between",
  alignItems: "center",
}));

const ThemeSwitch = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  columnGap: 3,
}));

export default Navbar;
