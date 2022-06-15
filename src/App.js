import React from 'react';
import { useState } from 'react';
import { Box, Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import designTokens from './design-tokens.json'
import { Footer } from './footer/footer'
import { Header } from './header/header'
import { BannerSimple } from './banner/banner-simple';

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

  const [bgColor, setBgColor] = useState('secondary.light');
  const [bannerText, setBannerText] = useState();

  return (
    <ThemeProvider theme={theme}>
      <Container>

        <Header></Header>

        <Box component="main">

          <BannerSimple bannerText="I'm a simple banner"></BannerSimple>

          <FormControl fullWidth
            sx={{ mt: '3em'}}>

            <InputLabel id="state-color-select">Banner background color</InputLabel>
            <Select
              labelId="state-color-select"
              id="demo-simple-select"
              value={bgColor}
              label="Banner background color"
              onChange={event => setBgColor(event.target.value)}
            >
              <MenuItem value={'secondary.light'}>Light purple</MenuItem>
              <MenuItem value={'primary.light'}>Light teal</MenuItem>
              <MenuItem value={'error.dark'}>Dark red</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth
            sx={{ mt: '3em'}}>
            <TextField
              id="outlined-name"
              label="Banner text"
              value={ bannerText }
              onChange={ event => setBannerText(event.target.value) }
            />
          </FormControl>
          <BannerSimple backgroundColor={ bgColor } bannerText={ bannerText }></BannerSimple>

        </Box>
        
        <Footer></Footer>
        
      </Container>
    </ThemeProvider>
  );
}

export default App;