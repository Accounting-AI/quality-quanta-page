import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
  const theme = useTheme();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(135deg, ${theme.palette.primary.light}15 0%, ${theme.palette.secondary.light}15 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(25, 118, 210, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                }}
              >
                Unlock Local Knowledge at Scale
              </Typography>
              
              <Typography
                variant="h5"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 4,
                  lineHeight: 1.6,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                }}
              >
                Truly valuable insights live with the people on the ground. 
                Quality Quanta helps you tap into them — not with bulky surveys, 
                but through interviews at scale that reveal what people really care about.
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  mb: 4,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => scrollToSection('#contact')}
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.secondary.dark,
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                    py: 1.5,
                    px: 4,
                  }}
                >
                  Get Started Today
                </Button>
              </Box>


            </Box>
          </Grid>

          {/* Hero Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end' },
                alignItems: 'center',
                height: { xs: '300px', md: '600px' },
              }}
            >
              <Box
                component="img"
                src={process.env.PUBLIC_URL + '/images/quality-quanta-hero-1.png'}
                alt="Quality Quanta Platform Dashboard"
                sx={{
                  width: { xs: '280px', sm: '400px', md: '500px' },
                  height: 'auto',
                  maxHeight: { xs: '280px', sm: '400px', md: '500px' },
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
