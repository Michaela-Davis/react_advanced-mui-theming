import React from 'react';

import { Box, Typography } from '@mui/material';

export function Header() {

  const text = "Michaela's React MUI Theming sample";

  return(

    <Box component="header" 
      sx={{ 
        padding: "2rem",
        backgroundColor: 'primary.dark',
      }}>
      <Typography variant="h1" align="center">{ text }</Typography>
    </Box>

  );
}
