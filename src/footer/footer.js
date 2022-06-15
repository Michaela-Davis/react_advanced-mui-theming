import React from 'react';
import { Box, Button, Link, Typography } from '@mui/material';

export function Footer() {

  return(
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
  );

}