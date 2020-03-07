import React from "react";
import { ThemeProvider } from "styled-components";
import { createMuiTheme, ThemeProvider as MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';

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