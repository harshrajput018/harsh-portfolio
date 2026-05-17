# Harsh Rajput — Portfolio

A clean, editorial React portfolio with mobile-first responsive design.

## Quick Start

```bash
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
```

Deploy the `build/` folder to Vercel, Netlify, or any static host.

## Project Structure

```
src/
├── App.js                  # Root component
├── index.js                # Entry point
├── index.css               # Global styles & CSS variables
├── data.js                 # All content: projects, skills, experience
├── hooks/
│   ├── useFade.js          # Intersection Observer fade-in animation
│   └── useMediaQuery.js    # Responsive breakpoint hook
└── components/
    ├── Nav.jsx             # Sticky nav + mobile hamburger menu
    ├── Hero.jsx            # Landing section
    ├── Projects.jsx        # Project cards with expand/collapse
    ├── Skills.jsx          # Skills grid
    ├── Experience.jsx      # Work history + education
    ├── Footer.jsx          # Contact + links
    └── SectionHead.jsx     # Shared section header component
```

## Customisation

All content lives in **`src/data.js`** — edit your projects, skills, and experience there without touching any component code.

## Mobile Responsiveness

- **Nav**: Collapses to a hamburger menu on screens ≤ 640px with a full-screen overlay
- **Hero**: Single-column stacked layout on mobile; side-by-side on desktop
- **Projects**: Auto-fill grid, minimum card width adapts to screen size
- **Experience**: Stacked column layout on mobile, two-column on desktop
- **Skills**: Responsive auto-fill grid
# harsh-portfolio
