import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import lightTheme from './themes/light';
import darkTheme from './themes/dark';

// Material-UI full theme referance
// https://material-ui.com/customization/default-theme/

const Theme = ({ children, darkMode }) => (
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    {children}
  </ThemeProvider>
);

export default Theme;