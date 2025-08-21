import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  useTheme,
} from '@mui/material';

const About = () => {
  const theme = useTheme();

  return (
    <Box
      id="about"
      sx={{
        py: 8,
        background: `linear-gradient(135deg, ${theme.palette.primary.main}05 0%, ${theme.palette.secondary.main}05 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="overline"
                sx={{
                  color: theme.palette.secondary.main,
                  fontWeight: 600,
                  letterSpacing: 1,
                  mb: 2,
                  display: 'block',
                }}
              >
                ABOUT US
              </Typography>
              
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: theme.palette.text.primary,
                }}
              >
                Quantity meets Quality
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 4,
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                }}
              >
                Quality Quanta is developed and operated by{' '}
                <Link
                  href="https://techjobsinternational.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  TJI
                </Link>
                , an interdisciplinary team dedicated to building 
                innovative solutions that free people from repetitive 
                tasks and make space for the quality work that matters.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 4,
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                }}
              >
                We believe the most valuable insights come from those closest to the ground. 
                Quality Quanta brings this philosophy to life by helping organizations 
                access authentic local knowledge at scale — 
                through meaningful interviews that give everyone a voice to 
                share their insights and experiences.
              </Typography>


            </Box>
          </Grid>

          {/* About Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end' },
                alignItems: 'center',
                height: { xs: '400px', md: '600px' },
              }}
            >
              <Box
                component="img"
                src="/images/qq-about-1.png"
                alt="Quality Quanta Team and Process"
                sx={{
                  width: { xs: '320px', sm: '450px', md: '500px' },
                  height: 'auto',
                  maxHeight: { xs: '320px', sm: '450px', md: '500px' },
                  borderRadius: '20px',
                  boxShadow: `0 8px 32px ${theme.palette.primary.main}15`,
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

export default About;
