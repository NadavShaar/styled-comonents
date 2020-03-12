import React from "react";
import { ThemeProvider } from "styled-components";
import { createMuiTheme, ThemeProvider as MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';

const shadows = {
  0: "none",
  1: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  2: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  3: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  4: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  5: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
}

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#6772e5',
    },
    secondary: {
      main: '#26599e',
    },
  },
  colors: {
    primary: "#192b40",
    secondary: "#26599e",
    color1: "#fff",
    color2: "#000"
  },
  backgrounds: {
    color1: "#fff"
  },
  custom: {
    shadows: shadows
  }
});

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#192b40',
    },
    secondary: {
      main: '#2fab6f',
    },
  },
  colors: {
    primary: "#192b40",
    secondary: "#2fab6f",
    color1: "#fff",
    color2: "#000"
  },
  backgrounds: {
    color1: "#111"
  },
  custom: {
    shadows: shadows
  }
});

const Theme = ({ children, darkMode }) => (
  <MuiThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <StylesProvider injectFirst={false}>{children}</StylesProvider>
    </ThemeProvider>
  </MuiThemeProvider>
);


export default Theme;