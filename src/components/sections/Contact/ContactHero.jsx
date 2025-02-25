// src/components/sections/ContactHero.jsx
import React from 'react';
import { 
  Box, 
  Typography, 
  Container
} from '@mui/material';

const ContactHero = () => {
  return (
    <Box
      sx={{
        bgcolor: (theme) => theme.palette.primary.main,
        color: (theme) => theme.palette.primary.contrastText,
        py: 8,
        textAlign: 'center',
        position: 'relative'
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
          Contact Us
        </Typography>
        <Typography 
          variant="h5"
          sx={{ 
            maxWidth: '700px',
            mx: 'auto',
            lineHeight: 1.6
          }}
        >
          Get in touch with our team to discuss how we can help with your business needs
        </Typography>
      </Container>
    </Box>
  );
};

export default ContactHero;