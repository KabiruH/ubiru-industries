import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  Event as EventIcon, 
  Message as MessageIcon, 
  Business as BusinessIcon,
  Computer as ComputerIcon,
  Code as CodeIcon,
  Security as SecurityIcon
} from '@mui/icons-material';
import HeroCarousel from '../components/sections/HeroCarousel';
import ServiceCard from '../components/sections/ServiceCard';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const services = [
    {
      title: 'Event Planning',
      icon: <EventIcon fontSize="large" color="primary" />,
      description: 'Professional event planning services for corporate and private functions. From concept to execution, we handle every detail.',
    },
    {
      title: 'Communications & PR',
      icon: <MessageIcon fontSize="large" color="primary" />,
      description: 'Strategic communication services to enhance your brand image and maintain positive public relations.',
    },
    {
      title: 'Equipment Rental',
      icon: <BusinessIcon fontSize="large" color="primary" />,
      description: 'High-quality equipment rentals for events, productions, and business needs with professional setup and support.',
    },
    {
      title: 'Software Development',
      icon: <CodeIcon fontSize="large" color="primary" />,
      description: 'Custom software solutions, web applications, and mobile apps developed to meet your specific business requirements.',
    },
    {
      title: 'Software Licensing',
      icon: <SecurityIcon fontSize="large" color="primary" />,
      description: 'Helping organizations acquire and manage software licenses for various products at competitive prices.',
    },
    {
      title: 'Hardware Procurement',
      icon: <ComputerIcon fontSize="large" color="primary" />,
      description: 'Complete hardware solutions including computers, accessories, networking equipment, and security software.',
    },
  ];

  return (
    <Box>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Introduction Section */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h3" 
              component="h2"
              sx={{ 
                mb: 2,
                fontWeight: 'medium' 
              }}
            >
              Welcome to Ubiru Industries
            </Typography>
            <Typography 
              variant="subtitle1"
              sx={{ 
                maxWidth: '800px',
                mx: 'auto',
                color: theme.palette.text.secondary,
                fontSize: '1.1rem',
                lineHeight: 1.6
              }}
            >
              We provide comprehensive solutions across event management, communications, 
              technology services, and hardware procurement. Our diverse expertise allows 
              us to be your single point of contact for a wide range of business needs.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.background.paper }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            component="h2"
            sx={{ 
              mb: 6, 
              textAlign: 'center',
              fontWeight: 'medium'
            }}
          >
            Our Services
          </Typography>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ServiceCard 
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button 
              variant="contained" 
              size="large" 
              color="primary"
            >
              Learn More About Our Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                src="/team.jpg"
                alt="Ubiru Industries Team"
                sx={{
                  width: '100%',
                  borderRadius: '8px',
                  boxShadow: theme.shadows[4],
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h4" 
                component="h2"
                sx={{ 
                  mb: 4,
                  fontWeight: 'medium' 
                }}
              >
                Why Choose Ubiru Industries
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                <Typography 
                  variant="h6" 
                  component="h3"
                  sx={{ mb: 1, fontWeight: 'medium' }}
                >
                  Integrated Solutions
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  We offer a unique combination of event planning, tech services, and business support under one roof.
                </Typography>
              </Box>
              
              <Box sx={{ mb: 2 }}>
                <Typography 
                  variant="h6" 
                  component="h3"
                  sx={{ mb: 1, fontWeight: 'medium' }}
                >
                  Industry Expertise
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  Our team brings years of specialized experience in each of our service domains.
                </Typography>
              </Box>
              
              <Box sx={{ mb: 2 }}>
                <Typography 
                  variant="h6" 
                  component="h3"
                  sx={{ mb: 1, fontWeight: 'medium' }}
                >
                  Client-Focused Approach
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  We prioritize understanding your specific needs to deliver tailored solutions.
                </Typography>
              </Box>
              
              <Button 
                variant="contained" 
                color="primary"
                size="large"
              >
                About Us
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box 
        sx={{ 
          py: 8, 
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h4" 
              component="h2"
              sx={{ 
                mb: 3,
                fontWeight: 'medium' 
              }}
            >
              Ready to Work with Us?
            </Typography>
            <Typography 
              variant="h6"
              sx={{ 
                mb: 4,
                fontWeight: 'normal',
                opacity: 0.9 
              }}
            >
              Contact Ubiru Industries today to discuss how we can help with your event planning, technology, or business service needs.
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                backgroundColor: 'white',
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                }
              }}
            >
              Get in Touch
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;