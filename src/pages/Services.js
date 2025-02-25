// src/pages/Services.jsx
import React from 'react';
import { Box } from '@mui/material';
import { 
  Event as EventIcon, 
  Message as MessageIcon, 
  Business as BusinessIcon,
  Computer as ComputerIcon,
  Code as CodeIcon,
  Security as SecurityIcon,
  Devices as DevicesIcon,
  Assignment as AssignmentIcon
} from '@mui/icons-material';

// Import modular components
import ServicesHero from '../components/sections/Services/ServicesHero';
import ServicesOverview from '../components/sections/Services/ServicesHero';
import ServiceCategory from '../components/sections/Services/ServicesHero';
import CTASection from '../components/sections/About/CTASection';

const Services = () => {
  // Event Planning Services
  const eventServices = [
    {
      name: 'Corporate Events',
      description: 'Professional planning and execution of corporate events, conferences, and meetings with attention to every detail.',
      icon: <EventIcon color="primary" fontSize="large" />
    },
    {
      name: 'Equipment Rental',
      description: 'High-quality audio-visual equipment, staging, and event furniture rental with professional setup and support.',
      icon: <BusinessIcon color="primary" fontSize="large" />
    },
    {
      name: 'Event Management',
      description: 'End-to-end management of your events including venue selection, logistics, catering, and on-site coordination.',
      icon: <AssignmentIcon color="primary" fontSize="large" />
    },
    {
      name: 'Virtual Events',
      description: 'Innovative virtual and hybrid event solutions with cutting-edge technology and engaging digital experiences.',
      icon: <DevicesIcon color="primary" fontSize="large" />
    }
  ];

  // Communications & PR Services
  const communicationServices = [
    {
      name: 'Public Relations',
      description: 'Strategic PR campaigns to enhance your company\'s image and maintain positive relationships with the public.',
      icon: <MessageIcon color="primary" fontSize="large" />
    },
    {
      name: 'Content Creation',
      description: 'Professional content development for various channels including websites, social media, and marketing materials.',
      icon: <AssignmentIcon color="primary" fontSize="large" />
    },
    {
      name: 'Crisis Management',
      description: 'Effective communication strategies to manage and mitigate potential reputation risks during challenging situations.',
      icon: <SecurityIcon color="primary" fontSize="large" />
    },
    {
      name: 'Media Relations',
      description: 'Building and maintaining relationships with key media outlets to secure valuable coverage for your business.',
      icon: <BusinessIcon color="primary" fontSize="large" />
    }
  ];

  // Software Solutions Services
  const softwareServices = [
    {
      name: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your specific business requirements and streamline operations.',
      icon: <CodeIcon color="primary" fontSize="large" />
    },
    {
      name: 'Web & Mobile Applications',
      description: 'User-friendly web and mobile applications built with modern technologies and responsive design principles.',
      icon: <DevicesIcon color="primary" fontSize="large" />
    },
    {
      name: 'Software Licensing',
      description: 'Expert assistance in acquiring and managing software licenses for various products at competitive prices.',
      icon: <AssignmentIcon color="primary" fontSize="large" />
    },
    {
      name: 'Technical Support',
      description: 'Reliable technical support and maintenance services to ensure your software solutions run smoothly.',
      icon: <ComputerIcon color="primary" fontSize="large" />
    }
  ];

  // Hardware Procurement Services
  const hardwareServices = [
    {
      name: 'Computer Equipment',
      description: 'Procurement of high-quality computers, laptops, servers, and workstations tailored to your business needs.',
      icon: <ComputerIcon color="primary" fontSize="large" />
    },
    {
      name: 'Networking Equipment',
      description: 'Complete networking solutions including routers, switches, access points, and structured cabling services.',
      icon: <DevicesIcon color="primary" fontSize="large" />
    },
    {
      name: 'Security Solutions',
      description: 'Comprehensive security hardware and software including antiviruses, firewalls, and physical security systems.',
      icon: <SecurityIcon color="primary" fontSize="large" />
    },
    {
      name: 'IT Infrastructure Setup',
      description: 'Professional installation, configuration, and optimization of your complete IT infrastructure.',
      icon: <BusinessIcon color="primary" fontSize="large" />
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <ServicesHero />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Event Planning Section */}
      <ServiceCategory 
        id="events"
        title="Event Planning & Management" 
        description="Our event planning services help you create memorable experiences for your audiences. From corporate conferences to product launches, we handle every aspect of event management with meticulous attention to detail." 
        image="/event.jpg"
        services={eventServices}
        backgroundColor="light"
      />

      {/* Communications & PR Section */}
      <ServiceCategory 
        id="communications"
        title="Communications & PR" 
        description="Effective communication is key to building your brand and maintaining your reputation. Our communications and PR experts develop strategies that enhance your company's image and deliver your message clearly to your target audience."
        image="/comms.jpg" 
        services={communicationServices}
        direction="rtl"
      />

      {/* Software Solutions Section */}
      <ServiceCategory 
        id="software"
        title="Software Solutions" 
        description="Our technology division provides comprehensive software solutions to address your business challenges. From custom development to software licensing, we help you leverage technology to improve efficiency and drive growth."
        image="/software.jpg" 
        services={softwareServices}
        backgroundColor="light"
      />

      {/* Hardware Procurement Section */}
      <ServiceCategory 
        id="hardware"
        title="Hardware Procurement" 
        description="We simplify the process of acquiring and implementing hardware for your business. Our procurement specialists source high-quality equipment at competitive prices, handle setup and configuration, and provide ongoing support."
        image="/hero.jpg" 
        services={hardwareServices}
        direction="rtl"
      />

      {/* Call to Action */}
      <CTASection />
    </Box>
  );
};

export default Services;