import React from 'react';
import { Box } from '@mui/material';
import AboutHero from '../components/sections/AboutHero';
import MissionVision from '../components/sections/MissionVision';
import CompanyTimeline from '../components/sections/CompanyTimeline';
import CoreValues from '../components/sections/CoreValues';
import CTASection from '../components/sections/CTASection';

const About = () => {
  return (
    <Box>
      {/* Hero Section */}
      <AboutHero />

      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Company Timeline */}
      <CompanyTimeline />

      {/* Core Values */}
      <CoreValues />

      {/* Call to Action */}
      <CTASection />
    </Box>
  );
};

export default About;