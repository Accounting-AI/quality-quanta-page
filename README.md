# Quality Quanta Landing Page

React landing page built with Material UI for Quality Quanta.

**Live Demo:** [https://accounting-ai.github.io/quality-quanta-page/](https://accounting-ai.github.io/quality-quanta-page/)

## Tech Stack

- React 18.2.0
- Material UI 5.14.20
- Emotion (for styled components)

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation with logo, mobile menu
│   ├── Hero.js            # Hero section with CTA
│   ├── Features.js        # 6 feature cards with theme colors
│   ├── About.js           # Company info with TJI link
│   ├── Contact.js         # Teal-themed contact form
│   ├── Footer.js          # Footer with logo and links
│   └── LandingPage.js     # Main component orchestrator
├── theme/
│   └── theme.js           # Centralized Material UI theme
├── App.js                 # App wrapper with ThemeProvider
└── index.js               # Entry point
```

## Theme Configuration

Primary colors in `src/theme/theme.js`:
- Primary: `#008080` (teal)
- Secondary: `#f5b700` (golden yellow)
- Background: `#0f1a2b` (deep navy)
- Text: `#fdfdfd` (cream/ivory)

## Assets

Images in `public/images/`:
- `qq-logo-1.png` - Logo (60px height, used in header/footer)
- `quality-quanta-hero-1.png` - Hero image
- `qq-about-1.png` - About section image
- `qq-hero-2.png`, `qq-hero-3.png` - Additional hero images

## Key Features

### Contact Form
- Teal gradient background (`primary.light` to `primary.main`)
- White input fields with grey text (`grey[600]` labels, `grey[800]` input text)
- Dark teal submit button (`primary.dark`)

### Navigation
- Smooth scroll to contact form from header and hero CTAs
- Mobile drawer with hamburger menu

### Features Section
6 cards with assigned theme colors:
1. Primary (teal)
2. Secondary (golden yellow)  
3. Success (green)
4. Info (blue)
5. Warning (orange)
6. Primary (teal)

## Development

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## Deployment

Static hosting ready. Configuration files included:
- `netlify.toml` - Netlify deployment
- `vercel.json` - Vercel deployment

## Dependencies

```json
{
  "@emotion/react": "^11.11.1",
  "@emotion/styled": "^11.11.0", 
  "@mui/icons-material": "^5.14.19",
  "@mui/material": "^5.14.20",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1"
}
```
