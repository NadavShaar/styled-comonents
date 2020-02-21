import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    main: "#192b40",
    secondary: "#0088be",
    color1: "#fff",
    color2: "#000"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;