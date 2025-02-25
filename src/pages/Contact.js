// src/pages/Contact.jsx
import React from 'react';
import { Box } from '@mui/material';

// Import modular components
import ContactHero from '../components/sections/Contact/ContactHero';
import ContactForm from '../components/sections/Contact/ContactForm';
import FAQ from '../components/sections/Contact/FAQ';

const Contact = () => {
    return (
      <Box>
        {/* Hero Section */}
        <ContactHero />
  
        {/* Contact Form Section */}
        <ContactForm />
  
        {/* Frequently Asked Questions */}
        <FAQ />
      </Box>
    );
  };

export default Contact;