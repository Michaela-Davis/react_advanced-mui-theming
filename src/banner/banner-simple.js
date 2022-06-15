import React from 'react';
import { Box, Button, Typography } from '@mui/material';

import fakeData from './banner-simple-data.json';


export function BannerSimple() {

  return (
    <>
      { fakeData.bannerText &&
        <Box
          sx={{
            margin: '1em 0',
            padding: '2em',
            backgroundColor: 'primary.light',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
          }}>
          <Typography variant="h3" sx={{ color: 'primary.contrastText'}}>{ fakeData.bannerText }</Typography>
          <Button 
            variant="contained"
            color="primary"   
            href='https://www.rocketcompanies.com/' target="_blank" rel="noopener"
            sx={{
              gridRow: '1 / -1',
              alignSelf: 'start',
              justifySelf: "start"
            }}>
          { fakeData.buttonText }
          </Button>
        </Box>
      }
    </>
  );
}
