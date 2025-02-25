// src/components/sections/FAQ.jsx
import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  const faqs = [
    {
      question: 'What services does Ubiru Industries offer?',
      answer: 'Ubiru Industries offers a comprehensive range of services including event planning and management, communications and PR, software solutions including development and licensing, and hardware procurement services.'
    },
    {
      question: 'How can I request a quote for your services?',
      answer: 'You can request a quote by filling out our contact form with details about your project requirements. Alternatively, you can call or email us directly, and one of our team members will get back to you promptly to discuss your needs and provide a customized quote.'
    },
    {
      question: 'Do you offer services for small businesses?',
      answer: 'Yes, we work with businesses of all sizes, from startups to large enterprises. Our solutions are scalable and can be tailored to meet the specific needs and budget constraints of small businesses.'
    },
    {
      question: 'What is your typical response time for inquiries?',
      answer: 'We aim to respond to all inquiries within 24 business hours. For urgent matters, we recommend calling our office directly for immediate assistance.'
    },
    {
      question: 'Can you handle international projects?',
      answer: 'Yes, we have experience with international clients and projects. Our team can work remotely with clients around the world, and for certain services, we can arrange for on-site support as needed.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Absolutely. We offer various support and maintenance packages for our technology services, and ongoing consultation for our event planning and communications services to ensure continued success.'
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              mb: 2,
              fontWeight: 'bold' 
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography 
            variant="body1"
            sx={{ 
              maxWidth: '700px',
              mx: 'auto',
              fontSize: '1.1rem'
            }}
          >
            Find answers to common questions about our services
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          {faqs.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{ 
                  '& .MuiAccordionSummary-content': { 
                    my: 1.5
                  } 
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Still have questions?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="mailto:info@ubiruindustries.com"
            sx={{ py: 1.5, px: 4 }}
          >
            Contact Our Team
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;