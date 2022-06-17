import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';


export function BannerLoading({ backgroundColor = "primary.light", bannerText, buttonText = "Visit Rocket", bannerHref ="https://www.rocketcompanies.com/", ...rest }) {

  const [loading, setLoading] = useState(false);
  const [internalBG, setInternalBG] = useState(backgroundColor);

  useEffect( () => {
    setLoading(true);
    setTimeout( () => {
      setLoading(false);
      setInternalBG(backgroundColor);
    }, 2000)
  }, [backgroundColor] )
  

  return (
    <>
      { bannerText &&
        <Box
          sx={{
            margin: '1em 0',
            padding: '2em',
            backgroundColor: internalBG,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
          }}
          {...rest}
          >
          <Typography variant="h3" sx={{ color: 'primary.contrastText' }}>{ loading ? 'loading' : bannerText }</Typography>
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
