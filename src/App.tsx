import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { PrimaryColor, SecondaryColor } from './Globals';
import Router from './Router';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: PrimaryColor
    },
    secondary: {
      main: SecondaryColor
    }
  }
})

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App;
