import { createTheme } from '@mui/material/styles';

// Quality Quanta Brand Colors (Logo-Inspired)
const colors = {
  primary: {
    main: '#008080', // Teal (from logo left side)
    light: '#33a6a6',
    dark: '#005959',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#f5b700', // Golden yellow (from logo right side)
    light: '#ffd24d',
    dark: '#c08a00',
    contrastText: '#212121',
  },
  success: {
    main: '#2e7d32', // Kept similar for functional color
    light: '#4caf50',
    dark: '#1b5e20',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#f57c00',
    light: '#ff9800',
    dark: '#ef6c00',
    contrastText: '#ffffff',
  },
  error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828',
    contrastText: '#ffffff',
  },
  info: {
    main: '#1976d2', // Harmonized blue for info elements
    light: '#42a5f5',
    dark: '#0d47a1',
    contrastText: '#ffffff',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  background: {
    default: '#0f1a2b', // Deep navy (logo background)
    paper: '#ffffff',
  },
  text: {
    primary: '#fdfdfd', // Cream/ivory tone for contrast on navy
    secondary: '#bdbdbd',
  },
};

// Typography configuration (same as yours)
const typography = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: '3.5rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontSize: '2.75rem',
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
  },
  h3: {
    fontSize: '2.25rem',
    fontWeight: 600,
    lineHeight: 1.3,
  },
  h4: {
    fontSize: '1.75rem',
    fontWeight: 500,
    lineHeight: 1.4,
  },
  h5: {
    fontSize: '1.5rem',
    fontWeight: 500,
    lineHeight: 1.4,
  },
  h6: {
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: 1.4,
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.6,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.6,
  },
  button: {
    textTransform: 'none',
    fontWeight: 500,
  },
};

// Component style overrides (same base, small polish for color harmony)
const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        padding: '12px 24px',
        fontSize: '1rem',
        fontWeight: 500,
      },
      contained: {
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        '&:hover': {
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        },
      },
      outlined: {
        borderWidth: 2,
        '&:hover': {
          borderWidth: 2,
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        backgroundColor: '#ffffff',
        '&:hover': {
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
          transform: 'translateY(-2px)',
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 12,
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: 8,
        },
      },
    },
  },
};

const theme = createTheme({
  palette: colors,
  typography,
  components,
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
});

export default theme;
export { colors };
