import React from "react";
import { ThemeProvider } from "styled-components";

const shadows =  {
  lvl1: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  lvl2: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  lvl3: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  lvl4: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  lvl5: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
};

const lightTheme = {
  colors: {
    main: "#192b40",
    secondary: "#0088be",
    color1: "#fff",
    color2: "#000"
  },
  backgrounds: {
    color1: "#fff"
  },
  shadows: shadows
};

const darkTheme = {
  colors: {
    main: "#192b40",
    secondary: "#f50057",
    color1: "#fff",
    color2: "#000"
  },
  backgrounds: {
    color1: "#111"
  },
  shadows: shadows
};

const Theme = ({ children, darkMode }) => <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>{children}</ThemeProvider>;


export default Theme;