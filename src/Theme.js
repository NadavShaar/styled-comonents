import React from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const shadows = {
  0: "none",
  1: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  2: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  3: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  4: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  5: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
}

const sizes = {
  buttons: {
    sm: { fontSize: 14, padding: 10 },
    md: { fontSize: 18, padding: 14 },
    lg: { fontSize: 24, padding: 18 }
  }
};

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f71b5',
    },
    secondary: {
      main: '#e5679e',
    },
    customColor: {
      main: '#23a283',
    },
  },
  custom: {
    colors: {
      primary: "#3f71b5",
      secondary: "#e5679e",
      color1: "#fff",
      color2: "#000",
      color3: "aliceblue"
    },
    backgrounds: {
      color1: "#fff"
    },
    shadows,
    sizes
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
    customColor: {
      main: '#0f0'
    }
  },
  custom: {
    colors: {
      primary: "#192b40",
      secondary: "#2fab6f",
      color1: "#fff",
      color2: "#000",
      color3: "aliceblue"
    },
    backgrounds: {
      color1: "#111"
    },
    shadows,
    sizes
  }
});

console.log(lightTheme)

const Theme = ({ children, darkMode }) => (
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    {children}
  </ThemeProvider>
);


export default Theme;