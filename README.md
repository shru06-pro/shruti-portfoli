# Shruti Kumari — Personal Portfolio

A cute, modern, editorial portfolio website built with React, Vite, TypeScript, and Tailwind CSS. Features a warm off-white canvas with lavender accents, big expressive serif headlines, pill-shaped UI, sparkle decorations, smooth scroll animations, and a pseudo-3D hero visual.

## Tech Stack

- **React 18** + **Vite** + **TypeScript**
- **Tailwind CSS** for styling with a custom design system
- **Framer Motion** for component and scroll-reveal animations
- **Lenis** for smooth scrolling
- **lucide-react** for icons

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

# Run lint and type checks
npm run lint
npm run typecheck
```

## How to Edit Your Content

All text, skills, projects, links, and configuration live in **`src/data/content.ts`**. Update this single file to change anything on the page:

- **Name, role, headline, subtitle** — top-level fields
- **About bio and stats** — `about.bio`, `about.stats`
- **Skills** — `skills` array (set `isLearning: true` for the "Currently Learning" group)
- **Projects** — `projects` array (title, description, tags, links, badge, gradient)
- **Timeline/Experience** — `timeline` array
- **Education** — `education` array
- **Certifications** — `certifications` array
- **Contact info** — `contact` object (email, LinkedIn, GitHub, resume path)

## How to Add Your Photo / 3D Avatar

### Option 1: Add a photo (2D cutout)

1. Save a transparent-background PNG of yourself as `public/me.png`
2. The hero visual will automatically use it with a pseudo-3D layered effect (parallax, tilt, floating chips)

### Option 2: Add a 3D avatar (GLB)

1. Export your 3D avatar as a `.glb` file and save it as `public/me.glb`
2. Install three.js dependencies:
   ```bash
   npm install three @react-three/fiber @react-three/drei
   ```
3. Update `src/components/Hero3DCanvas.tsx` to render the GLB using `<Canvas>`, `<useGLTF>`, studio lighting, and a contact shadow
4. The hero component auto-detects `me.glb` and switches to the 3D renderer

### How to create a 3D avatar if you don't have one

- Use a service like [Ready Player Me](https://readyplayer.me) to create a 3D avatar from a selfie, then export as `.glb`
- Or use [Mixamo](https://www.mixamo.com) for rigged character models

### Option 3: Placeholder (default)

If neither `me.glb` nor `me.png` exist, a stylized placeholder with your initial in a lavender circle is shown with floating tech chips and parallax sparkles.

## How to Add Your Resume

1. Save your resume PDF as `public/resume.pdf`
2. The "Resume" button in the hero section will download it automatically

## Deployment

### Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com), import the repo
3. Vercel auto-detects Vite — no config needed
4. Deploy

### Netlify

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com), import the repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

## Design System

| Token | Color | Usage |
|-------|-------|-------|
| Canvas | `#F8F6F2` | Page background |
| Surface | `#FFFFFF` | Cards, pills |
| Ink | `#27272A` | Body text, headlines |
| Muted | `#6B6B73` | Secondary text |
| Accent | `#8478A8` | Lavender — highlights, links, italic words |
| Accent Soft | `#A99BD8` | Sparkles, decorative elements |
| Accent Tint | `#EEEAF7` | Subtle backgrounds, chip fills |
| Success | `#7C9A85` | Availability dot |

### Typography

- **Display:** Instrument Serif (with true italics)
- **Body/UI:** DM Sans
- **Eyebrow/Labels:** DM Mono (uppercase, tracked)
- **Wordmark:** Caveat (handwritten script)

## Accessibility

- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`)
- Skip-to-content link
- Visible focus states with lavender ring
- Keyboard-accessible mobile menu
- `prefers-reduced-motion` support throughout
- WCAG AA color contrast
- Touch targets at least 44px

## Project Structure

```
src/
  components/    Navbar, Hero, Hero3D, About, Skills, Projects, Timeline, Contact, Footer, Sparkle, Magnetic, Cursor, Preloader, ScrollProgress
  data/          content.ts — all editable content in one place
  hooks/         useLenis, useReducedMotion, useActiveSection, useMousePosition
  lib/           animations.ts, utils.ts
  styles/        globals.css — design tokens, font imports, grain overlay
```
