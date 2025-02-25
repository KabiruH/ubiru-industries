// src/components/sections/AboutHero.jsx
import React from 'react';
import { 
  Box, 
  Typography, 
  Container
} from '@mui/material';

const AboutHero = () => {
  return (
    <Box
      sx={{
        bgcolor: (theme) => theme.palette.primary.main,
        color: (theme) => theme.palette.primary.contrastText,
        py: 8,
        textAlign: 'center'
      }}
    >
      <Container maxWidth="md">
        <Typography 
          variant="h2" 
          component="h1"
          sx={{ 
            fontWeight: 'bold',
            mb: 3
          }}
        >
          About Ubiru Industries
        </Typography>
        <Typography 
          variant="h5"
          sx={{ 
            maxWidth: '700px',
            mx: 'auto',
            lineHeight: 1.6
          }}
        >
          Since 2020, we've been delivering integrated solutions for businesses seeking excellence in events, communications, and technology.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutHero;