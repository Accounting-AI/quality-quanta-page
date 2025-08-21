import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import RecordVoiceOver from '@mui/icons-material/RecordVoiceOver';
import Insights from '@mui/icons-material/Insights';
import Face from '@mui/icons-material/Face';
import Speed from '@mui/icons-material/Speed';
import Public from '@mui/icons-material/Public';


const Features = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <RecordVoiceOver sx={{ fontSize: 40 }} />,
      title: '100% Qualitative',
      description: 'The knowledge comes directly from the people who know best. Instead of survey designers shaping the answers, insights emerge from what participants actually say.',
      color: theme.palette.primary.main,
    },
    {
      icon: <Face sx={{ fontSize: 40 }} />,
      title: 'Personal',
      description: 'Our chatbots apply best practices in qualitative research and meet participants wherever they are most comfortable.',
      color: theme.palette.secondary.main,
    },
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: 'Fast',
      description: 'Rapid deployment of interview sessions at scale — without the burden of complex logistics.',
      color: theme.palette.success.main,
    },
    {
      icon: <Insights sx={{ fontSize: 40 }} />,
      title: 'Custom Made Analytics',
      description: 'Our analytics turn qualitative input into structured findings, making rich conversations measurable and easy to interpret.',
      color: theme.palette.info.main,
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Secure and Certified',
      description: 'We are ISO certified and treat your data with the highest standards of security and care.',
      color: theme.palette.warning.main,
    },
    {
      icon: <Public sx={{ fontSize: 40 }} />,
      title: 'Global Reach',
      description: 'Reach participants anywhere in the world, with chatbots that adapt to local contexts and languages.',
      color: theme.palette.success.main,
    },
    
  ];

  return (
    <Box
      id="features"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: theme.palette.text.primary,
            }}
          >
            Why Us?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            With the help of our chatbots, we empower you to conduct interviews on scale 
            following the best practices of qualitative research.
          </Typography>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  
                  backgroundColor: theme.palette.grey[100],
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      backgroundColor: `${feature.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      color: feature.color,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: theme.palette.grey[700],
                    }}
                  >
                    {feature.title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.grey[500],
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 3,
              color: theme.palette.text.primary,
            }}
          >
            Tap into local knowledge at scale.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              mb: 4,
              maxWidth: 500,
              mx: 'auto',
            }}
          >
            Get in touch to explore how we can help you access authentic insights from the people who know best.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
