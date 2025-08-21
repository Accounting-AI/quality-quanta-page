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

This project uses **manual deployment** to GitHub Pages via the `gh-pages` branch.

### Making Updates

When you make changes to the landing page:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Verify build contents (IMPORTANT):**
   ```bash
   ls -la build/
   ```
   You should see: `index.html`, `asset-manifest.json`, `static/`, `images/`
   **DO NOT proceed if you see `node_modules/` in the build directory**

3. **Switch to gh-pages branch:**
   ```bash
   git checkout gh-pages
   ```

4. **Clear existing files (safety measure):**
   ```bash
   rm -rf *
   ```

5. **Copy ONLY build files (explicitly exclude node_modules):**
   ```bash
   cp -r build/index.html .
   cp -r build/asset-manifest.json .
   cp -r build/static .
   cp -r build/images .
   ```
   
   **OR use this safer alternative:**
   ```bash
   cp -r build/* . && rm -rf node_modules package*.json
   ```

6. **Verify gh-pages contents:**
   ```bash
   ls -la
   ```
   You should see: `index.html`, `asset-manifest.json`, `static/`, `images/`
   **You should NOT see `node_modules/`, `package.json`, or `package-lock.json`**

7. **Commit and push changes:**
   ```bash
   git add .
   git commit -m "Update landing page"
   git push origin gh-pages
   ```

8. **Switch back to main branch:**
   ```bash
   git checkout main
   ```

### ⚠️ Important Safety Notes

- **Never copy `node_modules/`** to the `gh-pages` branch
- **Never copy `package.json` or `package-lock.json`** to the `gh-pages` branch
- The `gh-pages` branch should **only contain** the built static files
- If you accidentally copy `node_modules/`, use `git filter-repo` to clean the history

### GitHub Pages Configuration

Ensure GitHub Pages is configured to serve from:
- **Source:** Deploy from a branch
- **Branch:** `gh-pages`
- **Folder:** `/ (root)`

The site will be available at: `https://accounting-ai.github.io/quality-quanta-page/`

## Alternative Deployment Options

For automated deployment, consider:
- **Netlify:** Use `netlify.toml` configuration
- **Vercel:** Use `vercel.json` configuration

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
