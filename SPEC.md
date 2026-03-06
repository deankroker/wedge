# Perplexity Computer Homepage Clone — Build Spec

## Goal
Pixel-perfect clone of https://www.perplexity.ai/products/computer (homepage only). All animations, scroll logic, backgrounds, and SVGs should match exactly. Buttons don't need to work.

## Stack
- Next.js 16 (App Router)
- Tailwind CSS 4
- Framer Motion (for scroll animations)
- Three.js (for the 3D sphere/helix effects, or use a canvas-based approximation)
- pnpm

## Live Reference
Open https://www.perplexity.ai/products/computer in your browser and study it carefully. Use the CSS file at `reference/computer-full.css` (62KB) for exact values.

## Page Structure (Top to Bottom)

### 1. NAVBAR (fixed, transparent → blurred on scroll)
- Left: "perplexity computer" logo (SVG mask icon)
- Right: About, How it works, Features, Get started links + "Try Computer" button (dark pill)
- Theme switches between light/dark based on scroll position (data-theme attribute)
- Mobile: hamburger menu

### 2. HERO SECTION (height: 824px)
- **Background:** Video/canvas with nature sphere effect — a circular window showing lush garden/nature footage, centered slightly left. Radial gradient fade to cream (#FAF8F5) background. The video is at: `https://pplx-res.cloudinary.com/video/upload/v1771728928/pplx-web/Computer/videos/computer-hero-bg-2.webm`
- **Right side content:**
  - "Computer" in large serif/display font
  - Below: rotating word ("Researches", "Codes", "Browses", "Builds", "Monitors", "Works", "Schedules", "Creates", "Writes", "Edits", "Connects", "Automates") — cycles every ~600ms with slide-up animation
  - "Try Computer" dark pill button
- **Left side:** Query cards stack (3 visible at a time, cycling). Cards have:
  - Number (01-11)
  - Query text
  - "/query" tag at bottom
  - Light background with subtle border
- **Bottom left:** "BUILDING..." status indicator with braille progress bar (⠿⠿⠿...)
- **Bottom right:** "SOUND OFF" toggle with audio wave glyphs

### 3. MANIFESTO SECTION
- Cream background
- Large text paragraphs:
  - "🖥 Perplexity Computer is a general-purpose digital worker that operates the same interfaces you do."
  - "Computer creates and executes entire workflows, capable of running for hours or even months."
  - "Chat answers. Agents do tasks. **Computer works.**"
- The computer icon (🖥) is an SVG with animated eyes that follow cursor

### 4. "COMPUTER UNIFIES" SECTION (scroll-driven)
- Full-screen nature image background (step-bg-01.webp from Cloudinary)
- Gradient overlays (top and bottom)
- Sticky "Computer unifies" heading that fades in during scroll
- Three.js helix/DNA strand animation (front and back layers)
- This section is ~240vh tall for scroll-driven effects

### 5. "HOW IT WORKS" — 3 Stacked Cards
- Section label: "STEPS"
- Heading: "How it works"
- 3 cards stack on scroll (each ~940px tall area):
  1. "Give Computer tasks" — nature bg image + screenshot overlay
  2. "Computer works" — different nature bg + screenshot
  3. "Iterate and improve" — different nature bg + screenshot
- Cards have: step number (01/02/03), title, description, full-bleed image
- Parallax: cards scale down and blur as you scroll past them
- Nature background images from Cloudinary:
  - step-bg-01.webp, step-bg-02.webp, step-bg-03.webp
  - step-01.webp, step-02.webp, step-03.webp (screenshot overlays)

### 6. "WHAT COMPUTER DOES FOR YOU" — Feature Rows
- Section label: "FEATURES"  
- Heading: "What Computer does for you"
- 4 feature rows (two columns each: text left, image right):
  1. "Background tasks and continuous monitoring"
  2. "Parallel research and browser automation"
  3. "Connect tools and apps"
  4. "Create and build"
- Each has: number (01-04), title, description, full-bleed image on right
- Images: feature-task-monitoring.webp, feature-research-browse.webp, feature-connect-tools.webp, feature-create-build.webp

### 7. "GET STARTED" / CTA SECTION
- Full-bleed nature background image (footer-background.webp)
- Dark theme
- "Put Computer to work" heading
- Subtitle about Max subscribers
- "Try Computer" button

### 8. FOOTER (dark theme)
- 5 columns: Company, Product, Resources, API Platform, Follow Us
- App store badges
- Perplexity logo SVG + "© 2026 Perplexity"

## Key Design Tokens
- Background: `#FAF8F5` (--astra-200)
- Text: `#271A00` (--astra-2000)  
- Dark bg: `#000` (--umbra-0)
- Dark text: `#D6D5D4` (--umbra-1000)
- Font: "pplxSans" — use Inter or system sans-serif as fallback
- Serif headlines: Georgia or serif fallback
- Nav height: 4rem
- Page max-width: 108rem
- Border radius on buttons: 2.5rem

## Animations to Implement
1. **Word rotator** — cycling words with slide-up transition (600ms, ease-in-out)
2. **Query card stack** — cards cycle in/out with opacity + transform transitions
3. **Scroll-driven nav theme** — switches between light/dark based on section
4. **Sticky card stack** (How it Works) — cards scale down + blur on scroll
5. **Fade-in on scroll** — sections fade in as they enter viewport
6. **Nature sphere hero** — use the video with CSS clip-path circle or a simple Three.js sphere with video texture mapped onto it

## Image Assets
All images should be loaded from the Cloudinary CDN URLs listed in the HTML. Don't download them — just reference them directly:
- Hero video: `https://pplx-res.cloudinary.com/video/upload/v1771728928/pplx-web/Computer/videos/computer-hero-bg-2.webm`
- Step backgrounds: `https://res.cloudinary.com/pplx/image/upload/t_w2400/pplx-web/Computer/images/step-bg-{01,02,03}.webp`
- Step screenshots: `https://pplx-res.cloudinary.com/image/upload/t_w2400/pplx-web/Computer/images/step-{01,02,03}.webp`
- Feature images: `https://pplx-res.cloudinary.com/image/upload/t_w2400/pplx-web/Computer/images/feature-{task-monitoring,research-browse,connect-tools,create-build}.webp`
- Footer bg: `https://res.cloudinary.com/pplx/image/upload/t_w2400/pplx-web/Computer/images/footer-background.webp`
- Logo SVG: `https://pplx-marketing-static.perplexity.ai/assets/pplx-computer-main-DHpH_k7G.svg`

## Priority
1. Get the layout and sections right first
2. Then add scroll animations
3. Then refine the hero (video sphere + word rotator + query cards)
4. Polish responsive behavior last
