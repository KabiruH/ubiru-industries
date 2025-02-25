import React from 'react';
import { Box } from '@mui/material';
import AboutHero from '../components/sections/About/AboutHero';
import MissionVision from '../components/sections/About/MissionVision';
import CompanyTimeline from '../components/sections/About/CompanyTimeline';
import CoreValues from '../components/sections/About/CoreValues';
import CTASection from '../components/sections/About/CTASection';

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