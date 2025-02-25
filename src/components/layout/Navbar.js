// src/components/layout/Navbar.jsx
import React, { useState } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Button, 
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold' }}>
        Ubiru Industries
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem 
            button 
            component={RouterLink} 
            to={item.path} 
            key={item.name}
            sx={{ textAlign: 'center' }}
          >
            <ListItemText 
              primary={item.name} 
              primaryTypographyProps={{ fontWeight: item.name === 'Contact' ? 'medium' : 'regular' }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo/Brand */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <Box
              component="img"
              src="logo2.jpg"
              alt="Ubiru Industries"
              sx={{
                height: 70,
                width: 'auto',
              }}
            />
             <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              fontWeight: 'bold',
              color: theme.palette.primary.main,
              textDecoration: 'none',
              letterSpacing: '0.5px',
            }}
          >
            Ubiru Industries Limited
          </Typography>
          </Box>
         
         

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={RouterLink}
                  to={item.path}
                  sx={{ 
                    mx: 1,
                    color: theme.palette.text.primary,
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                    ...(item.name === 'Contact' && {
                      ml: 2,
                      color: 'white',
                      bgcolor: theme.palette.primary.main,
                      '&:hover': {
                        bgcolor: theme.palette.primary.dark,
                        color: 'white',
                      },
                    }),
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}

          {/* Mobile Navigation */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;