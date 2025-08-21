import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { text: 'Home', href: '#home' },
    { text: 'Features', href: '#features' },
    { text: 'About', href: '#about' },
    { text: 'Contact', href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Quality Quanta
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} onClick={() => scrollToSection(item.href)}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem onClick={() => scrollToSection('#contact')}>
          <ListItemText 
            primary="Get Started" 
            sx={{ 
              color: theme.palette.secondary.main,
              fontWeight: 600,
            }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: theme.palette.background.default,
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src="/images/qq-logo-1.png"
              alt="Quality Quanta Logo"
              sx={{
                height: 40,
                width: 'auto',
                mr: 2,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: theme.palette.text.primary,
                display: { xs: 'none', sm: 'block' },
              }}
            >
              Quality Quanta
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    color: theme.palette.text.primary,
                    '&:hover': {
                      backgroundColor: 'rgba(25, 118, 210, 0.08)',
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
              <Button
                variant="contained"
                onClick={() => scrollToSection('#contact')}
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  '&:hover': {
                    backgroundColor: theme.palette.secondary.dark,
                  },
                }}
              >
                Get Started
              </Button>
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: theme.palette.text.primary }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
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

      {/* Spacer for fixed header */}
      <Toolbar />
    </>
  );
};

export default Header;
