# CLAUDE.md — Instructions for Claude Code

## Project
Perplexity Computer homepage clone (https://www.perplexity.ai/products/computer)

## Read First
- `SPEC.md` — full build spec with all sections, animations, and asset URLs

## Setup
```bash
pnpm create next-app@latest . --ts --tailwind --app --eslint --src-dir=false --import-alias="@/*" --turbopack
pnpm add framer-motion
```

## Reference CSS
The production CSS is at: https://pplx-marketing-static.perplexity.ai/assets/ComputerPageWrapper-Bt7gQvq2.css (62KB)
Download it and save to `reference/computer-full.css` for exact values. Use `curl` or `fetch`.

The partial version in `reference/computer-full.css` only has CSS variables. Get the full one.

Also grab the base site CSS: https://pplx-marketing-static.perplexity.ai/assets/index-szV7Ujvj.css

## Live Reference
The page is live at https://www.perplexity.ai/products/computer — open it in your browser to compare your work.

## Key Points
- This is a VISUAL CLONE only — buttons don't need to work
- All images/videos should be loaded directly from the Cloudinary URLs in the spec
- Use Tailwind where natural, but don't fight it — custom CSS is fine for complex animations
- The page has extensive scroll-driven animations — use Framer Motion's `useScroll` and `useTransform`
- Font fallbacks: Georgia for serif, system sans-serif for body
- No Three.js needed — skip the helix animation, just use the background images with a title overlay
- The hero video plays in a circular/spherical viewport — use CSS clip-path or a simple circle mask

## Structure
```
app/
  page.tsx          — main page, imports all sections
  layout.tsx        — root layout with fonts
  globals.css       — custom properties from reference CSS
components/
  Navbar.tsx
  Hero.tsx          — video bg + word rotator + query cards
  Manifesto.tsx     — large text paragraphs
  Unifies.tsx       — scroll-driven background section
  HowItWorks.tsx    — 3 stacked cards
  Features.tsx      — 4 feature rows
  GetStarted.tsx    — CTA section
  Footer.tsx
```

## When Done
Run: `openclaw system event --text "Done: Perplexity clone built — all sections implemented" --mode now`
