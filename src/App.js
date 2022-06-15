import React from 'react';
import { Box, Card, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import designTokens from './design-tokens.json'
import { Footer } from './footer/footer'
import { Header } from './header/header'

const theme = createTheme({
  palette: {
    primary: {
      main: '#037c6e',
      light: '#28a99e',
      dark: '#025043',
      contrastText: '#fff',
    },
    secondary: {
      main: designTokens.color.mainPurple,
      light: designTokens.color.lightPurple,
      dark: designTokens.color.darkPurple,
    },
    error: {
      main: designTokens.color.primaryRed,
      dark: designTokens.color.rocketRed,
      contrastText: designTokens.color.primaryBlack,
    },
    custom: {
      brandRed: designTokens.color.rocketRed,
      backgroundColor: designTokens.color.white,
    },
  },

  typography: {
    h1: {
      fontFamily: designTokens.typography.fontFamily,
      fontWeight: designTokens.typography.h1.fontWeight,
      fontSize: designTokens.typography.h1.fontSize,
      letterSpacing: designTokens.typography.h1.letterSpacing,
      lineHeight: designTokens.typography.h1.lineHeight,
      color: designTokens.color.lightTeal,
    },
    h3: {
      fontFamily: designTokens.typography.fontFamily,
      fontSize: designTokens.typography.h3.fontSize,
      letterSpacing: designTokens.typography.h3.letterSpacing,
      lineHeight: designTokens.typography.h3.lineHeight,
      color: designTokens.color.darkTeal,
    },
  }
});



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{
        backgroundColor: 'custom.backgroundColor',
      }}>

        <Header></Header>

        <Box component="main">
          <Card></Card>
        </Box>
        
        <Footer></Footer>
        
      </Container>
    </ThemeProvider>
  );
}

export default App;