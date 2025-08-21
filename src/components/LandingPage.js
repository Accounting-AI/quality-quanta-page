import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Header />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </Box>
  );
};

export default LandingPage;
