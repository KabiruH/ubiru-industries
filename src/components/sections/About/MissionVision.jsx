// src/components/sections/MissionVision.jsx
import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid
} from '@mui/material';
import {
  Business as BusinessIcon,
  Lightbulb as LightbulbIcon
} from '@mui/icons-material';

const MissionVision = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box 
            component="img"
            src="/office.jpg"
            alt="Ubiru Industries Office"
            sx={{
              width: '100%',
              borderRadius: '8px',
              boxShadow: (theme) => theme.shadows[4],
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography 
              variant="h6" 
              color="primary"
              sx={{ mb: 1, fontWeight: 'medium' }}
            >
              OUR STORY
            </Typography>
            <Typography 
              variant="h4" 
              component="h2"
              sx={{ mb: 3, fontWeight: 'bold' }}
            >
              Our Mission & Vision
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.7 }}
            >
              Ubiru Industries was founded in 2020 with a clear purpose: to provide businesses with comprehensive solutions that bridge the gap between event management, communications, and technology services. 
              What began as a small team with big ambitions has grown into a versatile organization trusted by clients across various industries.
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <BusinessIcon color="primary" sx={{ mr: 1 }} />
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ ml: 4 }}>
                To empower organizations through integrated event, communication, and technology solutions that drive success and growth.
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LightbulbIcon color="primary" sx={{ mr: 1 }} />
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ ml: 4 }}>
                To be the leading provider of comprehensive business solutions that seamlessly integrate events, communications, and technology services.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MissionVision;