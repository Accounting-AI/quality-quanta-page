import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  useTheme,
} from '@mui/material';


const Footer = () => {
  const theme = useTheme();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '#about' },
        { text: 'Features', href: '#features' },
        { text: 'Services', href: '#services' },
        { text: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: '#' },
        { text: 'Terms of Service', href: '#' },
        { text: 'Cookie Policy', href: '#' },
      ],
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.grey[900],
        color: 'white',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              {/* Logo */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL + '/images/qq-logo-1.png'}
                  alt="Quality Quanta Logo"
                  sx={{
                    height: 40,
                    width: 'auto',
                    mr: 2,
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: 'white',
                  }}
                >
                  Quality Quanta
                </Typography>
              </Box>
              
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.grey[300],
                  mb: 3,
                  lineHeight: 1.6,
                }}
              >
                Qualitative research with AI-powered chatbots at scale 
                for authentic insights from real voices.
              </Typography>


            </Box>
          </Grid>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: 'white',
                }}
              >
                {section.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    sx={{
                      color: theme.palette.grey[300],
                      textDecoration: 'none',
                      '&:hover': {
                        color: theme.palette.primary.light,
                        textDecoration: 'underline',
                      },
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {link.text}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Section */}
        <Box
          sx={{
            borderTop: `1px solid ${theme.palette.grey[800]}`,
            mt: 4,
            pt: 3,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.grey[400],
            }}
          >
            © 2025 Quality Quanta. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              href="#"
              sx={{
                color: theme.palette.grey[400],
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: theme.palette.primary.light,
                },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              sx={{
                color: theme.palette.grey[400],
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: theme.palette.primary.light,
                },
              }}
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              sx={{
                color: theme.palette.grey[400],
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: theme.palette.primary.light,
                },
              }}
            >
              Cookie Policy
            </Link>
          </Box>
        </Box>


      </Container>
    </Box>
  );
};

export default Footer;
