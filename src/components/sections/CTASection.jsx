// src/components/sections/CTASection.jsx
import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Button 
} from '@mui/material';

const CTASection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: (theme) => theme.palette.primary.main, color: 'white' }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
          Ready to Work with Us?
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, fontWeight: 'normal' }}>
          Contact Ubiru Industries today to discuss how we can help take your business to the next level.
        </Typography>
        <Button 
          variant="contained"
          size="large"
          sx={{ 
            bgcolor: 'white', 
            color: (theme) => theme.palette.primary.main,
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.9)'
            }
          }}
        >
          Contact Us
        </Button>
      </Container>
    </Box>
  );
};

export default CTASection;