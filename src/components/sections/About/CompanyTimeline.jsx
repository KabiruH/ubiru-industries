// src/components/sections/CompanyTimeline.jsx
import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper,
  useMediaQuery
} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const CompanyTimeline = () => {
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down('md'));
  
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

  return (
    <Box sx={{ py: 8, bgcolor: (theme) => theme.palette.background.default }}>
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
                    <Typography variant="h6" component="span" sx={{ color: (theme) => theme.palette.primary.main, fontWeight: 'bold', display: 'block', mb: 1 }}>
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
  );
};

export default CompanyTimeline;