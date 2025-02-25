// src/components/sections/ServicesHero.jsx
import React from 'react';
import { 
  Box, 
  Typography, 
  Container
} from '@mui/material';

const ServicesHero = () => {
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
          Our Services
        </Typography>
        <Typography 
          variant="h5"
          sx={{ 
            maxWidth: '700px',
            mx: 'auto',
            lineHeight: 1.6
          }}
        >
          Comprehensive solutions for events, communications, technology, and business operations
        </Typography>
      </Container>
    </Box>
  );
};

export default ServicesHero;