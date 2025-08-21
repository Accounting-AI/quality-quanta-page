import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  useTheme,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };



  return (
    <Box
      id="contact"
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
            Start Your Project
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
            Tell us what kind of interview project you’d like to run, 
            and we’ll work with you to design the approach, 
            conduct the interviews, and deliver the insights.
          </Typography>
        </Box>

        {/* Contact Form */}
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          <Card 
            sx={{ 
              p: 4,
              backgroundColor: theme.palette.primary.light,
              background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                mb: 4,
                color: theme.palette.primary.contrastText,
                textAlign: 'center',
              }}
            >
              Send us a Message
            </Typography>
            
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    color="primary"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: theme.palette.background.paper,
                        '&:hover fieldset': {
                          borderColor: theme.palette.primary.dark,
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: theme.palette.primary.dark,
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: theme.palette.grey[600],
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: theme.palette.primary.dark,
                      },
                      '& .MuiInputBase-input': {
                        color: theme.palette.grey[800],
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    color="primary"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: theme.palette.background.paper,
                        '&:hover fieldset': {
                          borderColor: theme.palette.primary.dark,
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: theme.palette.primary.dark,
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: theme.palette.grey[600],
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: theme.palette.primary.dark,
                      },
                      '& .MuiInputBase-input': {
                        color: theme.palette.grey[800],
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    variant="outlined"
                    color="primary"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: theme.palette.background.paper,
                        '&:hover fieldset': {
                          borderColor: theme.palette.primary.dark,
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: theme.palette.primary.dark,
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: theme.palette.grey[600],
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: theme.palette.primary.dark,
                      },
                      '& .MuiInputBase-input': {
                        color: theme.palette.grey[800],
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                    color="primary"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: theme.palette.background.paper,
                        '&:hover fieldset': {
                          borderColor: theme.palette.primary.dark,
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: theme.palette.primary.dark,
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: theme.palette.grey[600],
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: theme.palette.primary.dark,
                      },
                      '& .MuiInputBase-input': {
                        color: theme.palette.grey[800],
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={6}
                    variant="outlined"
                    placeholder="Tell us about your quality management needs and how we can help..."
                    color="primary"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: theme.palette.background.paper,
                        '&:hover fieldset': {
                          borderColor: theme.palette.primary.dark,
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: theme.palette.primary.dark,
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: theme.palette.grey[600],
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: theme.palette.primary.dark,
                      },
                      '& .MuiInputBase-input': {
                        color: theme.palette.grey[800],
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{
                      py: 1.5,
                      px: 4,
                      backgroundColor: theme.palette.primary.dark,
                      '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Box>


      </Container>
    </Box>
  );
};

export default Contact;
