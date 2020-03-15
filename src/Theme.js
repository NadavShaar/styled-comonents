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
      contrastText: '#fff',
    },
    secondary: {
      main: '#e5679e',
      contrastText: '#fff',
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
      color3: '#93acc3',
      color4: '#414141',
      color5: '#23a283',
    },
    backgrounds: {
      color1: "aliceblue",
      color2: "#fff",
    },
    shadows,
    sizes
  }
});

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#d4af38',
      contrastText: '#414141',
    },
    secondary: {
      main: '#f38d18',
      contrastText: '#414141',
    },
    customColor: {
      main: '#95e422'
    }
  },
  custom: {
    colors: {
      primary: "#d4af38",
      secondary: "#f38d18",
      color1: "#fff",
      color2: "#000",
      color3: '#929292',
      color4: '#c1c1c1',
      color5: '#95e422'
    },
    backgrounds: {
      color1: '#2f2f2f',
      color2: "#545454"
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