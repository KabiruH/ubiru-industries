// src/components/sections/ServiceCategory.jsx
import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent,
  useTheme,
  useMediaQuery
} from '@mui/material';

const ServiceCategory = ({ 
  id,
  title, 
  description, 
  image, 
  direction = 'ltr', 
  services = [],
  backgroundColor = 'white' 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isReversed = direction === 'rtl' && !isMobile;
  
  return (
    <Box 
      id={id}
      sx={{ 
        py: 8, 
        bgcolor: backgroundColor === 'light' ? theme.palette.background.default : 'white'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} direction={isReversed ? 'row-reverse' : 'row'} alignItems="center">
          {/* Category Image */}
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: theme.shadows[3],
              }}
            />
          </Grid>
          
          {/* Category Description */}
          <Grid item xs={12} md={7}>
            <Box>
              <Typography 
                variant="h4" 
                component="h2" 
                sx={{ mb: 3, fontWeight: 'bold', color: theme.palette.primary.main }}
              >
                {title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                {description}
              </Typography>
              
              {/* Services List */}
              <Grid container spacing={3}>
                {services.map((service, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Card 
                      elevation={2}
                      sx={{ 
                        height: '100%',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: theme.shadows[8],
                        }
                      }}
                    >
                      {service.icon && (
                        <Box sx={{ textAlign: 'center', pt: 2 }}>
                          {service.icon}
                        </Box>
                      )}
                      <CardContent>
                        <Typography 
                          variant="h6" 
                          component="h3" 
                          sx={{ mb: 1, fontWeight: 'medium' }}
                        >
                          {service.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {service.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceCategory;