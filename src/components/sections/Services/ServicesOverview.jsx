// src/components/sections/ServicesOverview.jsx
import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid,
  Card,
  CardActionArea,
  useTheme
} from '@mui/material';
import {
  Event as EventIcon,
  Message as MessageIcon,
  Computer as ComputerIcon,
  Devices as DevicesIcon
} from '@mui/icons-material';

const ServicesOverview = () => {
  const theme = useTheme();

  const categories = [
    {
      id: 'events',
      title: 'Event Planning & Management',
      description: 'Professional event planning and execution services',
      icon: <EventIcon sx={{ fontSize: 60, color: theme.palette.primary.main, mb: 2 }} />,
      image: '/event-planning.jpg',
    },
    {
      id: 'communications',
      title: 'Communications & PR',
      description: 'Strategic communication to enhance your brand',
      icon: <MessageIcon sx={{ fontSize: 60, color: theme.palette.primary.main, mb: 2 }} />,
      image: '/communications.jpg',
    },
    {
      id: 'software',
      title: 'Software Solutions',
      description: 'Custom software development and licensing',
      icon: <ComputerIcon sx={{ fontSize: 60, color: theme.palette.primary.main, mb: 2 }} />,
      image: '/software-dev.jpg',
    },
    {
      id: 'hardware',
      title: 'Hardware Procurement',
      description: 'Complete hardware procurement and setup',
      icon: <DevicesIcon sx={{ fontSize: 60, color: theme.palette.primary.main, mb: 2 }} />,
      image: '/hardware.jpg',
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h4" 
            component="h2"
            sx={{ mb: 2, fontWeight: 'bold' }}
          >
            What We Offer
          </Typography>
          <Typography 
            variant="body1"
            sx={{ 
              fontSize: '1.1rem',
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            At Ubiru Industries, we provide a comprehensive range of services designed to meet all your business needs under one roof. From event planning to technology solutions, we've got you covered.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8],
                  }
                }}
              >
                <CardActionArea 
                  sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}
                  href={`#${category.id}`}
                >
                  <Box>
                    {category.icon}
                  </Box>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h3"
                    sx={{ fontWeight: 'medium' }}
                  >
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {category.description}
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesOverview;