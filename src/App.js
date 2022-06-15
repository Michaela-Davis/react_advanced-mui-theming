import React from 'react';
import { Box, Button, Card, Container, Link, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import designTokens from './design-tokens.json'

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

        <Box component="header" 
          sx={{ 
            p: "2rem",
            backgroundColor: 'primary.dark',
          }}>
          <Typography variant="h1" align="center">Michaela's React MUI Theming sample</Typography>
        </Box>


        <Box component="main">
          <Card></Card>
        </Box>
        
        {/** begin footer **/}
        <Box component="footer"
          sx={{
            p: "2rem",
            display: 'grid',
            gap: 1,
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(4, 1fr)'
          }}>          
          <Button 
            variant="contained" 
            color="primary"   
            onClick={() => {console.info("I'm a CTA button.");}}
            sx={{
              gridRow: '1 / -1',
              alignSelf: 'start',
              justifySelf: "start"
            }}>
            Main Call to Action
          </Button>
      
          <Typography variant="h3" sx={{ gridColumn: '2'}}>React</Typography>
          <Link href="https://mui.com/material-ui/react-link/" target="_blank" rel="noopener" sx={{ gridColumn: '2'}}>React link</Link>
          <Link href="https://mui.com/material-ui/react-link/" target="_blank" rel="noopener" underline="hover" sx={{ gridColumn: '2'}}>React link</Link>
          <Link href="https://mui.com/material-ui/react-link/" target="_blank" rel="noopener" color="secondary" sx={{ gridColumn: '2'}}>React link</Link>
          
          <Typography variant="h3" sx={{ gridColumn: '3', gridRow: '1'}}>About Us</Typography>
          <Link href="https://www.rocketcompanies.com/who-we-are/about-us/" target="_blank" rel="noopener" sx={{ gridColumn: '3', gridRow: '2'}}>About Us</Link>
          <Link href="https://www.rocketcompanies.com/who-we-are/about-us/" target="_blank" rel="noopener" underline="hover" sx={{ gridColumn: '3', gridRow: '3'}}>About Us</Link>
          <Link href="https://www.rocketcompanies.com/who-we-are/about-us/" target="_blank" rel="noopener" color="secondary" sx={{ gridColumn: '3', gridRow: '4'}}>About Us</Link>
            
          <Typography variant="h3" sx={{ gridColumn: '4', gridRow: '1'}}>Contact Us</Typography>
          <Link href="https://www.rocketcompanies.com/press-room/#Contact-Media-Relations" target="_blank" rel="noopener" sx={{ gridColumn: '4', gridRow: '2'}}>Contact Us</Link>
          <Link href="https://www.rocketcompanies.com/press-room/#Contact-Media-Relations" target="_blank" rel="noopener" underline="hover" sx={{ gridColumn: '4', gridRow: '3'}}>Contact Us</Link>
          <Link href="https://www.rocketcompanies.com/press-room/#Contact-Media-Relations" target="_blank" rel="noopener" color="secondary" sx={{ gridColumn: '4', gridRow: '4'}}>Contact Us</Link>
        </Box>
        {/** end footer **/}
        
      </Container>
    </ThemeProvider>
  );
}

export default App;