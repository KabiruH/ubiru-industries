// src/components/sections/ContactForm.jsx
import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  TextField, 
  Button, 
  MenuItem,
  Snackbar,
  Alert,
  CircularProgress,
  Paper
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';

const serviceOptions = [
  { value: 'events', label: 'Event Planning & Management' },
  { value: 'communications', label: 'Communications & PR' },
  { value: 'software', label: 'Software Solutions' },
  { value: 'hardware', label: 'Hardware Procurement' },
  { value: 'other', label: 'Other Services' }
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        service: formData.service
      };

      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          service: ''
        });
        
        setSnackbar({
          open: true,
          message: 'Thank you for your message. We will get back to you soon!',
          severity: 'success'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSnackbar({
        open: true,
        message: 'There was an error submitting your message. Please contact us directly using our phone number or email.',
        severity: 'error'
      });
    }

    setIsSubmitting(false);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6}>
        {/* Contact Information */}
        <Grid item xs={12} md={5}>
          <Box sx={{ mb: 4 }}>
            <Typography 
              variant="h4" 
              component="h2"
              sx={{ 
                mb: 3, 
                fontWeight: 'bold',
                color: (theme) => theme.palette.primary.main
              }}
            >
              Get In Touch
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              We'd love to hear from you. Please fill out the form and we'll get back to you as soon as possible.
            </Typography>
          </Box>

          <Paper elevation={3} sx={{ p: 4, borderRadius: '8px' }}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 'medium', mb: 2 }}>
                Contact Information
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Address:</strong> Shop 2-02, Superior Arcade, Accra Road, Nairobi
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Phone:</strong> +254 706 233 304
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Email:</strong> ubiruafrica@gmail.com
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Hours:</strong> Monday - Friday: 9:00 AM - 5:00 PM
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'medium', mb: 2 }}>
                Connect With Us
              </Typography>
              <Typography variant="body1">
                Follow us on social media for updates on our services and industry insights.
              </Typography>
              {/* Social media icons can be added here */}
            </Box>
          </Paper>
        </Grid>

       {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: '8px' }}>
            <Typography 
              variant="h5" 
              component="h3"
              sx={{ 
                mb: 3, 
                fontWeight: 'medium',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <EmailIcon sx={{ mr: 1 }} />
              Send Us a Message
            </Typography>
            
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label="Service of Interest"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    variant="outlined"
                  >
                    {serviceOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={4}
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={isSubmitting}
                    sx={{ 
                      py: 1.5,
                      px: 4,
                      mt: 2
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <CircularProgress size={24} sx={{ mr: 1 }} color="inherit" />
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Snackbar for notifications */}
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactForm;