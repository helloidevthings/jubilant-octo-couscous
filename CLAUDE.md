# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 portfolio website showcasing design and development work. It uses styled-components for styling and framer-motion for animations. The site features a dark/light theme toggle and includes portfolio pieces across multiple categories: web development, user testing, web design, branding, and illustration. The site is configured for static export and deploys to Netlify.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev
# or
yarn dev

# Build for production
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start

# Run linter
npm run lint
# or
yarn lint
```

## Architecture

### Directory Structure

- **`pages/`**: Next.js file-based routing
  - `index.js`: Homepage with portfolio grid sections
  - `_app.js`: App wrapper with ThemeProvider (next-themes) and global styles
  - `portfolio/`: Individual portfolio case study pages (e.g., IO2.js, Cadre5.js, Deadpool.js)
  - `projects/`: Interactive project demos (e.g., Cards.js, RegalColors.js, DeadWolf.js)

- **`components/`**: Reusable React components
  - Core UI: `Card.js`, `ProjectShelf.js`, `ThemeButton.js`, `StickyNav.js`
  - Animation wrappers: `AnimationOnScroll.js`, `AnimateMe.js`, `ScrollAnimateMe.js`
  - Custom interactive elements: `ButtonSlider.js`, `MoviePoster.js`, `Popcorn.js`, `Popcorn3D.js`
  - `Icons/`: SVG icon components (e.g., `LogoSVG.js`, `Moon.js`, `Confetti.js`, `Paint.js`)

- **`styles/`**: Global CSS
  - `globals.css`: Contains CSS custom properties for theming (dark/light themes), typography scales, and global resets

- **`public/`**: Static assets

### Key Technologies

- **Next.js 16.1.3**: React framework with file-based routing and static export
- **React 19.2.3**: Latest React with improved performance
- **styled-components 6.1.0**: CSS-in-JS with server-side rendering via Next.js compiler
- **next-themes 0.4.6**: Theme management (dark/light modes)
- **framer-motion 12.26.2**: Animation library for complex animations
- **react-intersection-observer 10.0.2**: Scroll-based animation triggers
- **next-cloudinary 6.17.5**: Cloudinary integration for image hosting

### Styling System

The site uses a CSS custom property theming system defined in `styles/globals.css`:

- Theme variables switch between light/dark modes via `html.dark` and `html.light` classes
- Key CSS variables: `--bg`, `--text`, `--secondary`, `--bgTrans`, `--boxShadow`, `--gradient90`, `--gradient30`
- Accent colors (pink theme) available via `--accent*` variables
- All images are hosted on Cloudinary (`res.cloudinary.com/labofthingsimages`)

### Page Structure Patterns

**Homepage (`pages/index.js`):**
- Contains hardcoded arrays of portfolio items (SiteTakeOver, UserTesting, ProductDesign, etc.)
- Each array item has: `title`, `description`, `date`, `alt`, `tag[]`, `path`, `src`
- Uses `ProjectShelf` component to render grid layouts
- Sections organized by category with styled section headers

**Portfolio Pages (`pages/portfolio/*.js`):**
- Typically extend a `PortfolioPageTemplate` component
- Use `AnimationOnScroll` wrapper for scroll-triggered animations
- Include embedded videos, images, and links to live demos

**Project Pages (`pages/projects/*.js`):**
- Interactive demos using data arrays
- Often feature animated components like `Card`, custom SVG animations, or Framer Motion effects

### Animation Components

- **`AnimationOnScroll.js`**: Uses `react-intersection-observer` to trigger animations when elements enter viewport
  - Supports animation types: `fadeUp`, `slideUp`, `zoomUp`, `colorFade`
  - Can accept `bgColor` prop to change background on scroll

- **`AnimateMe.js`**: Basic Framer Motion wrapper for simple animations

- **`ScrollAnimateMe.js`**: More advanced scroll-based animations using Framer Motion

### Next.js Configuration

`next.config.js`:
- Enables React Strict Mode
- Configured for static export (`output: 'export'`)
- Uses Next.js built-in compiler for styled-components (SSR enabled, displayName for debugging)
- Images set to unoptimized for static export compatibility
- Configures Cloudinary remote patterns for `next/image` component

### Deployment

`netlify.toml`:
- Configured for Netlify deployment
- Node.js version set to 20 (required for Next.js 16)
- Build output directory: `out`
- Uses @netlify/plugin-nextjs for optimal Next.js support

## Important Notes

- All portfolio item data is currently hardcoded in `pages/index.js` (not fetched from a CMS or API)
- Images are served from Cloudinary, not local public directory
- Theme is controlled via next-themes, which manages the `dark`/`light` class on the `<html>` element
- Many components use the `$prop` syntax for transient props in styled-components (e.g., `$expanded`, `$isInView`)
