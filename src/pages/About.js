// src/pages/About.jsx
import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Paper,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import {
  CheckCircleOutline as CheckIcon,
  Business as BusinessIcon,
  People as PeopleIcon,
  Assignment as AssignmentIcon,
  Lightbulb as LightbulbIcon
} from '@mui/icons-material';

const About = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  // Company timeline data
  const timelineEvents = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'Ubiru Industries was founded with a vision to provide integrated solutions across event management and technology services.'
    },
    {
      year: '2021',
      title: 'Service Expansion',
      description: 'Expanded our service offerings to include communications, PR, and equipment rental for corporate events.'
    },
    {
      year: '2022',
      title: 'Technology Division',
      description: 'Launched our technology division focused on software development, licensing, and hardware procurement.'
    },
    {
      year: '2023',
      title: 'Regional Growth',
      description: 'Opened new offices to better serve clients across the region and established key industry partnerships.'
    },
    {
      year: '2024',
      title: 'Innovation Focus',
      description: 'Introduced new innovative services combining event technology with digital experiences for clients.'
    }
  ];
  
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
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
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

      {/* Mission & Vision Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box 
              component="img"
              src="office.jpg"
              alt="Ubiru Industries Office"
              sx={{
                width: '100%',
                borderRadius: '8px',
                boxShadow: theme.shadows[4],
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

      {/* Company Timeline */}
      <Box sx={{ py: 8, bgcolor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h6" 
              color="primary"
              sx={{ mb: 1, fontWeight: 'medium' }}
            >
              OUR JOURNEY
            </Typography>
            <Typography 
              variant="h4" 
              component="h2"
              sx={{ mb: 2, fontWeight: 'bold' }}
            >
              Milestones & Growth
            </Typography>
            <Typography 
              variant="body1"
              sx={{ 
                maxWidth: '700px',
                mx: 'auto'
              }}
            >
              Since our founding in 2020, we've steadily expanded our services and reach while maintaining our commitment to excellence.
            </Typography>
          </Box>
          
          <Timeline position={isTablet ? "right" : "alternate"} sx={{ 
            maxWidth: '1000px', 
            mx: 'auto',
            [`& .MuiTimelineItem-root:before`]: isTablet ? {
              flex: 0,
              padding: 0
            } : {}
          }}>
            {timelineEvents.map((event, index) => (
              <TimelineItem key={index}>
                {!isTablet && (
                  <TimelineOppositeContent color="text.secondary">
                    <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
                      {event.year}
                    </Typography>
                  </TimelineOppositeContent>
                )}
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  {index < timelineEvents.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} sx={{ p: 3, borderRadius: '8px' }}>
                    {isTablet && (
                      <Typography variant="h6" component="span" sx={{ color: theme.palette.primary.main, fontWeight: 'bold', display: 'block', mb: 1 }}>
                        {event.year}
                      </Typography>
                    )}
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'medium', mb: 1 }}>
                      {event.title}
                    </Typography>
                    <Typography>{event.description}</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </Box>

      {/* Core Values */}
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

      {/* Call to Action */}
      <Box sx={{ py: 8, bgcolor: theme.palette.primary.main, color: 'white' }}>
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
              color: theme.palette.primary.main,
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)'
              }
            }}
          >
            Contact Us
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default About;