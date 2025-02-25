// src/components/sections/CoreValues.jsx
import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid
} from '@mui/material';
import {
  CheckCircleOutline as CheckIcon
} from '@mui/icons-material';

const CoreValues = () => {
  // Core values data
  const coreValues = [
    {
      value: 'Innovation',
      description: 'We continuously seek new approaches and technologies to deliver better solutions.'
    },
    {
      value: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical business practices in all our interactions.'
    },
    {
      value: 'Excellence',
      description: 'We are committed to delivering the highest quality services that exceed client expectations.'
    },
    {
      value: 'Collaboration',
      description: 'We work together as a team and partner closely with our clients to achieve success.'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="h6" 
          color="primary"
          sx={{ mb: 1, fontWeight: 'medium' }}
        >
          OUR VALUES
        </Typography>
        <Typography 
          variant="h4" 
          component="h2"
          sx={{ mb: 2, fontWeight: 'bold' }}
        >
          What We Stand For
        </Typography>
        <Typography 
          variant="body1"
          sx={{ 
            maxWidth: '700px',
            mx: 'auto'
          }}
        >
          Our core values guide every decision we make and every interaction we have with clients and partners.
        </Typography>
      </Box>
      
      <Grid container spacing={3}>
        {coreValues.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
              <Box sx={{ mr: 2, mt: 0.5 }}>
                <CheckIcon color="primary" fontSize="large" />
              </Box>
              <Box>
                <Typography variant="h5" component="h3" sx={{ mb: 1, fontWeight: 'medium' }}>
                  {item.value}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CoreValues;