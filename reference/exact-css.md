# Perplexity Clone — Exact CSS Reference

## Hero Section

### Video Background
```css
.computer-hero-bg {
  z-index: 1;
  width: 1610px;
  height: 906px;
  position: absolute;
  top: -83px;
  left: 50%;
  transform: translate(calc(-50% - 160px));
}
/* NOT a circle — large rectangle shifted left */
/* Radial gradient fade creates the organic edge: */
.hero-bg:after {
  content: "";
  z-index: 1;
  pointer-events: none;
  background: radial-gradient(804px 120% at calc(50% - 160px) 40%, #faf8f500 72%, #faf8f5 100%),
    linear-gradient(90deg, #faf8f5 0%, #faf8f500 12%),
    linear-gradient(270deg, #faf8f500 80%, #faf8f5 100%),
    linear-gradient(#faf8f5 0%, #faf8f500 16% 64%, #faf8f5eb 92%, #faf8f5 100%);
  position: absolute;
  inset: 0;
}
```

### Hero Headlines (right side)
```css
.hero-headlines {
  z-index: 1;
  pointer-events: none;
  text-align: right;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: fit-content;
  display: flex;
  position: absolute;
  top: 17.5rem;
  right: 18rem;
  overflow: visible;
}
.hero-headline {
  width: 100%;
  font-family: var(--nimbus-font-serif);
  color: var(--astra-2000);
  letter-spacing: 0;
  font-size: 96px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%;
}
```

### Word Rotator
```css
.hero-headline-rotator {
  text-align: right;
  width: 100%;
  min-width: 14ch;
  height: 1em;
  font-size: 96px;
  line-height: 100%;
  position: relative;
  overflow: hidden;
}
.hero-headline-word {
  white-space: nowrap;
  opacity: 0;
  filter: blur(12px);
  width: 100%;
  min-width: max-content;
  transition: opacity var(--rotator-word-duration-ms) var(--rotator-word-ease),
    transform var(--rotator-word-duration-ms) var(--rotator-word-ease),
    filter var(--rotator-word-duration-ms) var(--rotator-word-ease);
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(40%);
}
.hero-headline-word--active, .hero-headline-word--entering {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0);
}
.hero-headline-word--exit {
  opacity: 0;
  filter: blur(12px);
}
.hero-headline-word--exit-up { transform: translateY(-40%); }
.hero-headline-word--exit-down { transform: translateY(40%); }
```

### Query Cards (left side)
```css
.query-stack {
  z-index: 2;
  pointer-events: auto;
  cursor: pointer;
  flex-direction: column;
  gap: 1.5rem;
  width: 15rem;
  display: flex;
  position: absolute;
  top: 10.5rem;
  left: 0;
  overflow: visible;
}
.query-card {
  aspect-ratio: auto;
  box-sizing: border-box;
  border: 1px solid var(--astra-2000-10, #271a001a);
  border-radius: 4px;
  flex-direction: column;
  flex: 0 0 10rem;
  justify-content: space-between;
  width: 15rem;
  height: 10rem;
  padding: 0.625rem 0.75rem;
  display: flex;
  position: relative;
  overflow: hidden;
}
.query-card:before {
  content: "";
  z-index: 0;
  background: var(--astra-0-60, #fff9);
  backdrop-filter: blur(20px);
  pointer-events: none;
  border-radius: 4px;
  position: absolute;
  inset: 0;
  transform: translateZ(0);
}
```

## How It Works — Step Cards

**IMPORTANT: Cards have WHITE backgrounds, not dark nature images!**

```css
.step-card {
  z-index: 1;
  box-sizing: border-box;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 0 0 5rem;
  display: flex;
  position: sticky;
  top: 2.5rem;
}
.step-card:last-child {
  margin-bottom: 0;
  position: relative;
  top: auto;
}
.step-card .step-card-inner {
  background: var(--astra-0); /* WHITE */
  width: 100%;
  max-height: 100vh;
  transform: scale(var(--card-scale, 1));
  transform-origin: 50%;
  will-change: transform;
  border: none;
  border-radius: 0.75rem;
  flex-direction: column;
  display: flex;
  overflow: hidden;
}
.step-card-inner .step-card-content {
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  max-width: 30rem;
  padding: 1.5rem 2.5rem;
  display: flex;
}
.step-card-inner .step-image {
  aspect-ratio: 16/9;
  background: var(--astra-2000-8);
  flex-shrink: 1;
  width: 100%;
  min-height: 0;
  max-height: calc(100dvh - 11rem);
  position: relative;
  overflow: hidden;
}
/* Video overlay inside image */
.step-card-inner .step-video {
  pointer-events: none;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  inset: 5% 2.8125%;
}
```

## Unifies Section

```css
.unifies-bg-fixed {
  z-index: 0;
  pointer-events: none;
  position: fixed;
  inset: 0;
}
.unifies-bg-fixed .unifies-bg-base {
  z-index: 1;
  background: #000;
  position: absolute;
  inset: 0;
}
.unifies-bg-fixed .unifies-bg-img {
  object-fit: cover;
  opacity: 0.6;
  z-index: 2;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
}
.computer-unifies {
  z-index: 1;
  width: 100%;
  height: var(--unifies-section-height-vh, 300vh);
  margin-top: var(--unifies-overlap-vh, -50vh);
  position: relative;
}
.unifies-sticky {
  width: 100%;
  height: 100dvh;
  position: sticky;
  top: 0;
  overflow: hidden;
}
.unifies-title {
  z-index: 5;
  pointer-events: none;
  opacity: 0; /* animated via scroll */
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  inset: 0;
}
.unifies-title h2 {
  color: var(--Text-Primary-Inverse, #faf8f5);
  font-family: var(--nimbus-font-serif);
  text-align: center;
  font-size: 48px;
  font-weight: 400;
  line-height: 112%;
}
```

## Feature Rows
```css
.feature-row {
  /* has opacity/filter animation via scroll */
}
.section-label {
  color: var(--color-black-60, #0009);
  font-family: var(--nimbus-font-mono);
  font-size: 12px;
  font-weight: 400;
  line-height: 100%;
}
.section-heading {
  color: var(--color-black-off-black, #121516);
  font-family: var(--nimbus-font-serif);
  font-size: 48px;
  font-weight: 400;
}
```
