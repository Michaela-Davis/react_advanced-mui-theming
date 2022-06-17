import React, { useState } from 'react';
import { Box, Card, Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import designTokens from '@michaela-davis/design-tokens/src/design-tokens.json';

import './App.css';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { BannerSimple } from './banner/banner-simple';
import { BannerLoading } from './banner/banner-loading';

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
      brandWhite: designTokens.color.white,
      brandBlack: designTokens.color.primaryBlack,
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


const rockets = [
  {"name":'Solid-Fuel Rocket', 'image':'https://www.rocket.com/sites/default/files/how-do-srms-work_t.png'}, 
  {"name":'Liquid-Fuel Rocket',  'image':'https://www.researchgate.net/profile/Joseph-Castellano-2/publication/215507622/figure/fig2/AS:341794496761856@1458501566456/Liquid-fueled-rockets-top-use-two-separate-tanks-one-for-the-fuel-and-one-for-the.png'}, 
  {"name":'Ion Rocket', 'image':'https://www.extremetech.com/wp-content/uploads/2012/12/1000px-Electrostatic_ion_thruster-en.svg_.png'}, 
  {"name":'Plasma Rocket', 'image':'https://thefutureofthings.com/upload/image/new-news/2008/september/fast-plasma-rocket-test/plasma-rocket.jpg'}];



function App() {

  const [bgColor, setBgColor] = useState('secondary.light');
  const [bannerText, setBannerText] = useState();

  return (
    <ThemeProvider theme={ theme }>
      <Container>

        <Header></Header>

        <Box component="main">

          <Box sx={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:4, m:'2em' }} >
            { rockets && rockets.map( (rocket, index) => 
              <Card key={ rocket.name } variant="outlined" 
                sx={{ 
                  flexGrow: '1', 
                  p:'2em', 
                  color:'custom.brandWhite', 
                  backgroundColor:'custom.brandBlack',
                  textAlign:'center'
                }}>
                <img src={ rocket.image } className='rkt--image'></img>
                { rocket.name }
              </Card> 
            )}
          </Box>

          <BannerSimple bannerText="I'm a simple banner"></BannerSimple>

          <FormControl fullWidth sx={{ mt: '3em' }}>
            <InputLabel id="state-color-select">Banner background color</InputLabel>
            <Select
              labelId="state-color-select"
              id="demo-simple-select"
              value={ bgColor }
              label="Banner background color"
              onChange={ event => setBgColor(event.target.value) }
            >
              <MenuItem value={ 'secondary.light' }>Light purple</MenuItem>
              <MenuItem value={ 'primary.light' }>Light teal</MenuItem>
              <MenuItem value={ 'error.dark' }>Dark red</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mt: '3em' }}>
            <TextField
              id="outlined-name"
              label="Banner text"
              value={ bannerText }
              onChange={ event => setBannerText(event.target.value) }
            />
          </FormControl>
          <BannerSimple backgroundColor={ bgColor } bannerText={ bannerText }></BannerSimple>
          <BannerLoading backgroundColor={ bgColor } bannerText={ bannerText }></BannerLoading>

        </Box>
        
        <Footer></Footer>
        
      </Container>
    </ThemeProvider>
  );
}

export default App;