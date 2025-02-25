// src/components/layout/Footer.jsx
import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  Divider,
  useTheme,
  IconButton,
  Stack,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const theme = useTheme();
  
  const serviceLinks = [
    { name: 'Event Planning', path: '/services#events' },
    { name: 'Communications & PR', path: '/services#communications' },
    { name: 'Equipment Rental', path: '/services#equipment' },
    { name: 'Software Development', path: '/services#software' },
    { name: 'Software Licensing', path: '/services#licensing' },
    { name: 'Hardware Procurement', path: '/services#hardware' },
  ];
  
  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about#team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'background.paper',
        borderTop: `1px solid ${theme.palette.divider}`,
        mt: 'auto',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Information */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              color="text.primary" 
              gutterBottom
              sx={{ fontWeight: 'bold' }}
            >
              UBIRU INDUSTRIES
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ mb: 2, maxWidth: '300px' }}
            >
              Your comprehensive solutions partner for events, technology, and business services.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton 
                aria-label="facebook" 
                size="small"
                sx={{ 
                  color: theme.palette.text.secondary,
                  '&:hover': { color: '#4267B2' }
                }}
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton 
                aria-label="twitter" 
                size="small"
                sx={{ 
                  color: theme.palette.text.secondary,
                  '&:hover': { color: '#1DA1F2' }
                }}
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton 
                aria-label="linkedin" 
                size="small"
                sx={{ 
                  color: theme.palette.text.secondary,
                  '&:hover': { color: '#0A66C2' }
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton 
                aria-label="instagram" 
                size="small"
                sx={{ 
                  color: theme.palette.text.secondary,
                  '&:hover': { color: '#E1306C' }
                }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>
          
          {/* Services Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ fontWeight: 'medium' }}
            >
              Our Services
            </Typography>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
              {serviceLinks.map((link) => (
                <Box component="li" key={link.name} sx={{ py: 0.5 }}>
                  <Link
                    component={RouterLink}
                    to={link.path}
                    variant="body2"
                    color="text.secondary"
                    underline="hover"
                  >
                    {link.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
          
          {/* Company Links and Contact */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ fontWeight: 'medium' }}
            >
              Company
            </Typography>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', mb: 2 }}>
              {companyLinks.map((link) => (
                <Box component="li" key={link.name} sx={{ py: 0.5 }}>
                  <Link
                    component={RouterLink}
                    to={link.path}
                    variant="body2"
                    color="text.secondary"
                    underline="hover"
                  >
                    {link.name}
                  </Link>
                </Box>
              ))}
            </Box>
            
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ fontWeight: 'medium', mt: 2 }}
            >
              Contact Us
            </Typography>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
              <Box component="li" sx={{ py: 0.5, display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon color="inherit" fontSize="small" sx={{ mr: 1, color: theme.palette.text.secondary }} />
                <Typography variant="body2" color="text.secondary">
                  123 Business Avenue, Suite 100, City
                </Typography>
              </Box>
              <Box component="li" sx={{ py: 0.5, display: 'flex', alignItems: 'center' }}>
                <PhoneIcon color="inherit" fontSize="small" sx={{ mr: 1, color: theme.palette.text.secondary }} />
                <Typography variant="body2" color="text.secondary">
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box component="li" sx={{ py: 0.5, display: 'flex', alignItems: 'center' }}>
                <EmailIcon color="inherit" fontSize="small" sx={{ mr: 1, color: theme.palette.text.secondary }} />
                <Typography variant="body2" color="text.secondary">
                  info@ubiruindustries.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ mt: 4, mb: 4 }} />
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Ubiru Industries. All rights reserved.
          </Typography>
          <Box>
            <Link href="#" variant="body2" color="text.secondary" sx={{ mr: 2 }} underline="hover">
              Privacy Policy
            </Link>
            <Link href="#" variant="body2" color="text.secondary" underline="hover">
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;