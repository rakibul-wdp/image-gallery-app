import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useContext, useState } from "react";
import { darkTheme, lightTheme } from "../helpers/theme";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export const useAppTheme = () => useContext(ThemeContext);

export const useAppThemeUpdate = () => useContext(ThemeUpdateContext);

export const AppThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createTheme(isDarkMode ? darkTheme : lightTheme);

  const updateTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <ThemeUpdateContext.Provider value={updateTheme}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
