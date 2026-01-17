# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 13 portfolio website showcasing design and development work. It uses styled-components for styling and framer-motion for animations. The site features a dark/light theme toggle and includes portfolio pieces across multiple categories: web development, user testing, web design, branding, and illustration.

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

- **Next.js 13.0.6**: React framework with file-based routing
- **styled-components 6.1.0**: CSS-in-JS with server-side rendering configured via `.babelrc`
- **next-themes 0.3.0**: Theme management (dark/light modes)
- **framer-motion 7.6.19**: Animation library for complex animations
- **react-intersection-observer 9.5.3**: Scroll-based animation triggers
- **next-cloudinary 4.28.0**: Cloudinary integration for image hosting

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

### Babel Configuration

`.babelrc` configures styled-components with:
- `ssr: true` for server-side rendering
- `displayName: true` for debugging component names in dev tools

### Next.js Configuration

`next.config.js`:
- Enables React Strict Mode
- Configures Cloudinary domain for `next/image` component

## Important Notes

- All portfolio item data is currently hardcoded in `pages/index.js` (not fetched from a CMS or API)
- Images are served from Cloudinary, not local public directory
- Theme is controlled via next-themes, which manages the `dark`/`light` class on the `<html>` element
- Many components use the `$prop` syntax for transient props in styled-components (e.g., `$expanded`, `$isInView`)
