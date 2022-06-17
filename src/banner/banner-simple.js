import React from 'react';
import { Box, Button, Typography } from '@mui/material';


export function BannerSimple({ backgroundColor = "primary.light", bannerText, buttonText = "Visit Rocket", bannerHref ="https://www.rocketcompanies.com/" }) {

  return (
    <>
      { bannerText &&
        <Box
          sx={{
            margin: '1em 0',
            padding: '2em',
            backgroundColor: backgroundColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
          }}>
          <Typography variant="h3" sx={{ color: 'primary.contrastText' }}>{ bannerText }</Typography>
          <Button 
            variant="contained"
            color="primary"   
            href={ bannerHref } target="_blank" rel="noopener"
            sx={{
              gridRow: '1 / -1',
              alignSelf: 'start',
              justifySelf: "start"
            }}>
          { buttonText }
          </Button>
        </Box>
      }
    </>
  );
}
