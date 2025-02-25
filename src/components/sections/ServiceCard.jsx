// src/components/sections/ServiceCard.jsx
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  useTheme
} from '@mui/material';

const ServiceCard = ({ title, icon, description }) => {
  const theme = useTheme();
  
  return (
    <Card 
      elevation={2}
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: theme.shadows[8],
        }
      }}
    >
      <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
        <Box sx={{ mb: 2 }}>
          {icon}
        </Box>
        <Typography 
          gutterBottom 
          variant="h5" 
          component="h3"
          sx={{ mb: 2, fontWeight: 'medium' }}
        >
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;