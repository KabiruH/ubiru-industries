// src/components/sections/HeroCarousel.jsx
import React from 'react';
import { 
  Box,
  Typography,
  Container,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Hero slide data
  const slides = [
    {
      title: "Ubiru Industries",
      subtitle: "Your comprehensive solutions partner for events, technology, and business services",
      backgroundImage: "/hero.jpg",
      buttons: [
        {
          text: "Our Services",
          variant: "contained",
          color: "primary",
          path: "/services"
        },
        {
          text: "Contact Us",
          variant: "outlined",
          color: "inherit",
          path: "/contact",
          customStyle: {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            borderColor: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderColor: 'white',
            }
          }
        }
      ]
    },
    {
      title: "Event Planning",
      subtitle: "Professional event management for corporate and social occasions",
      backgroundImage: "event.jpg",
      buttons: [
        {
          text: "Learn More",
          variant: "contained",
          color: "primary",
          path: "/services#events"
        }
      ]
    },
    {
      title: "Software Solutions",
      subtitle: "Custom software development, licensing, and technical support",
      backgroundImage: "software.jpg",
      buttons: [
        {
          text: "Our Tech Services",
          variant: "contained",
          color: "primary",
          path: "/services#software"
        }
      ]
    }
  ];

  return (
    <Box 
      sx={{
        position: 'relative',
        height: isMobile ? '50vh' : '80vh',
        borderRadius: 0,
        overflow: 'hidden'
      }}
    >
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        style={{ height: '100%' }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                height: '100%',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${slide.backgroundImage}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Container maxWidth="md">
                <Box sx={{ textAlign: 'center', color: 'white' }}>
                  <Typography 
                    variant="h2" 
                    component="h1"
                    sx={{ 
                      fontWeight: 'bold',
                      mb: 2,
                      fontSize: isMobile ? '2.5rem' : '4rem' 
                    }}
                  >
                    {slide.title}
                  </Typography>
                  <Typography 
                    variant="h5"
                    sx={{ mb: 4 }}
                  >
                    {slide.subtitle}
                  </Typography>
                  {slide.buttons.map((button, buttonIndex) => (
                    <Button 
                      key={buttonIndex}
                      variant={button.variant} 
                      size="large" 
                      color={button.color}
                      href={button.path}
                      sx={{ 
                        mr: buttonIndex < slide.buttons.length - 1 ? 2 : 0, 
                        mb: isMobile ? 2 : 0,
                        ...button.customStyle
                      }}
                    >
                      {button.text}
                    </Button>
                  ))}
                </Box>
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroCarousel;