"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const rotatingWords = [
  "Ships", "Builds", "Automates", "Transforms",
  "Architects", "Designs", "Accelerates", "Integrates",
  "Deploys", "Optimizes",
];

const projectCards = [
  {
    num: "01",
    text: "Internal ops dashboard that replaced 3 spreadsheets and 2 weekly meetings. Built in 4 days.",
    tag: "/build",
  },
  {
    num: "02",
    text: "AI-powered proposal generator that cut sales cycle time by 40% for a 50-person services firm.",
    tag: "/automate",
  },
  {
    num: "03",
    text: "Custom intake + triage system for a law firm processing 200+ inquiries/week. Zero manual sorting.",
    tag: "/integrate",
  },
  {
    num: "04",
    text: "Agentic workflow that monitors competitors, summarizes changes, and briefs the exec team every Monday.",
    tag: "/monitor",
  },
  {
    num: "05",
    text: "A full e-commerce storefront with AI-generated product descriptions, deployed in 72 hours.",
    tag: "/ship",
  },
  {
    num: "06",
    text: "Document processing pipeline that extracts, validates, and routes 500+ invoices per day automatically.",
    tag: "/accelerate",
  },
  {
    num: "07",
    text: "Internal knowledge base with natural language search across 10K+ company docs. No training needed.",
    tag: "/design",
  },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  // Which set of 3 cards we're showing (0 = cards 0,1,2 | 1 = cards 3,4,5 | etc.)
  const [setIndex, setSetIndex] = useState(0);
  // Which card within the current set is "lit" (0, 1, or 2)
  const [activeSlot, setActiveSlot] = useState(0);
  const [soundOff, setSoundOff] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Word rotator
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Card highlight + set cycling
  // Each card gets highlighted for 2s, then move to next.
  // After card 3 (slot 2), swap all 3 cards to next set.
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlot((prev) => {
        if (prev >= 2) {
          // Move to next set of 3
          setSetIndex((s) => {
            const totalSets = Math.ceil(projectCards.length / 3);
            return (s + 1) % totalSets;
          });
          return 0;
        }
        return prev + 1;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Get the 3 cards for the current set
  const getCard = (slot: number) => {
    const idx = (setIndex * 3 + slot) % projectCards.length;
    return projectCards[idx];
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        height: "824px",
        background: "var(--astra-200)",
      }}
    >
      {/* Video background — large rect with radial gradient fade (Perplexity style) */}
      <div
        className="absolute"
        style={{
          zIndex: 1,
          width: "1610px",
          height: "906px",
          top: "-83px",
          left: "50%",
          transform: "translate(calc(-50% - 160px))",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted={soundOff}
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 1 }}
        >
          <source
            src="https://pplx-res.cloudinary.com/video/upload/v1771728928/pplx-web/Computer/videos/computer-hero-bg-2.webm"
            type="video/webm"
          />
        </video>
        {/* Radial gradient fade */}
        <div
          className="absolute inset-0"
          style={{
            zIndex: 2,
            pointerEvents: "none",
            background: `
              radial-gradient(804px 120% at calc(50% - 160px) 40%, #faf8f500 72%, #faf8f5 100%),
              linear-gradient(90deg, #faf8f5 0%, #faf8f500 12%),
              linear-gradient(270deg, #faf8f500 80%, #faf8f5 100%),
              linear-gradient(#faf8f5 0%, #faf8f500 16% 64%, #faf8f5eb 92%, #faf8f5 100%)
            `,
          }}
        />
      </div>

      {/* ===== DESKTOP LAYOUT ===== */}

      {/* Right side: headlines — hidden on mobile */}
      <div
        className="hidden md:flex flex-col justify-start items-end"
        style={{
          zIndex: 2,
          position: "absolute",
          top: "17.5rem",
          right: "clamp(4rem, 12vw, 18rem)",
          width: "fit-content",
          textAlign: "right",
          pointerEvents: "none",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--nimbus-font-serif)",
            color: "var(--astra-2000)",
            fontSize: "clamp(64px, 7vw, 96px)",
            fontWeight: 300,
            lineHeight: "100%",
            letterSpacing: 0,
            textAlign: "right",
            width: "100%",
          }}
        >
          Wedge
        </h1>

        {/* Word rotator */}
        <div
          style={{
            textAlign: "right",
            width: "100%",
            minWidth: "10ch",
            height: "1em",
            fontSize: "clamp(64px, 7vw, 96px)",
            lineHeight: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <AnimatePresence mode="popLayout">
            <motion.span
              key={wordIndex}
              initial={{ y: "40%", opacity: 0, filter: "blur(12px)" }}
              animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
              exit={{ y: "-40%", opacity: 0, filter: "blur(12px)" }}
              transition={{ duration: 0.35, ease: [0.72, 0, 0.12, 1] }}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "100%",
                minWidth: "max-content",
                whiteSpace: "nowrap",
                fontFamily: "var(--nimbus-font-serif)",
                color: "var(--astra-2000-60)",
                fontSize: "clamp(64px, 7vw, 96px)",
                fontWeight: 300,
                lineHeight: "100%",
                letterSpacing: 0,
                textAlign: "right",
              }}
            >
              {rotatingWords[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* CTA button */}
        <div className="mt-8" style={{ pointerEvents: "auto" }}>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80"
            style={{
              background: "var(--astra-2000)",
              color: "var(--astra-200)",
            }}
          >
            Start a Conversation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Left side: 3 cards in a column, highlight walks down, content swaps in-place */}
      <div
        className="hidden md:flex flex-col gap-4 absolute"
        style={{
          left: "clamp(1.5rem, 3%, 2.5rem)",
          top: "10.5rem",
          width: "min(240px, 20vw)",
          zIndex: 2,
        }}
      >
        {[0, 1, 2].map((slot) => {
          const card = getCard(slot);
          const isActive = slot === activeSlot;
          return (
            <div
              key={slot}
              className="border flex flex-col justify-between"
              style={{
                height: "140px",
                borderRadius: "8px",
                borderColor: isActive ? "var(--astra-2000-20, rgba(39,25,0,0.2))" : "var(--astra-2000-10)",
                boxShadow: isActive
                  ? "0 4px 20px rgba(39,25,0,0.12)"
                  : "0 2px 8px rgba(39,25,0,0.04)",
                padding: "0.75rem 1rem",
                overflow: "hidden",
                position: "relative",
                transition: "border-color 0.4s ease, box-shadow 0.4s ease, opacity 0.4s ease",
                opacity: isActive ? 1 : 0.55,
              }}
            >
              {/* Glass background */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: isActive ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.6)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  borderRadius: "8px",
                  zIndex: 0,
                  pointerEvents: "none",
                  transition: "background 0.4s ease",
                }}
              />
              {/* Content — fades in-place when card set changes */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${card.num}-${setIndex}`}
                  style={{ position: "relative", zIndex: 1 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span
                    style={{
                      fontFamily: "var(--nimbus-font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--astra-2000-40)",
                      display: "block",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {card.num}
                  </span>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      lineHeight: 1.4,
                      color: "var(--astra-2000)",
                      margin: 0,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical" as const,
                      overflow: "hidden",
                    }}
                  >
                    {card.text}
                  </p>
                </motion.div>
              </AnimatePresence>
              <div style={{ position: "relative", zIndex: 1 }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${card.tag}-${setIndex}`}
                    style={{
                      fontFamily: "var(--nimbus-font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--astra-2000-60)",
                      background: "var(--astra-300)",
                      padding: "2px 8px",
                      borderRadius: "9999px",
                      display: "inline-block",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {card.tag}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>

      {/* ===== MOBILE LAYOUT ===== */}
      <div
        className="md:hidden absolute inset-0 flex flex-col items-center justify-center px-6"
        style={{ zIndex: 2 }}
      >
        <h1
          style={{
            fontFamily: "var(--nimbus-font-serif)",
            color: "var(--astra-2000)",
            fontSize: "56px",
            fontWeight: 300,
            lineHeight: "100%",
            letterSpacing: 0,
            textAlign: "center",
          }}
        >
          Wedge
        </h1>

        {/* Word rotator — mobile */}
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: "56px",
            fontSize: "56px",
            lineHeight: "100%",
            position: "relative",
            overflow: "hidden",
            marginTop: "0.25rem",
          }}
        >
          <AnimatePresence mode="popLayout">
            <motion.span
              key={wordIndex}
              initial={{ y: "40%", opacity: 0, filter: "blur(12px)" }}
              animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
              exit={{ y: "-40%", opacity: 0, filter: "blur(12px)" }}
              transition={{ duration: 0.35, ease: [0.72, 0, 0.12, 1] }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                fontFamily: "var(--nimbus-font-serif)",
                color: "var(--astra-2000-60)",
                fontSize: "56px",
                fontWeight: 300,
                lineHeight: "100%",
                letterSpacing: 0,
                textAlign: "center",
              }}
            >
              {rotatingWords[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <p
          className="mt-6 text-center"
          style={{
            color: "var(--astra-2000-60)",
            fontSize: "1rem",
            lineHeight: 1.6,
            maxWidth: "20rem",
          }}
        >
          AI consulting that builds real tools for traditional businesses.
        </p>

        {/* CTA button — mobile */}
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80"
            style={{
              background: "var(--astra-2000)",
              color: "var(--astra-200)",
            }}
          >
            Start a Conversation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom left: status */}
      <div
        className="absolute bottom-6 left-6 flex items-center gap-3"
        style={{ color: "var(--astra-2000-60)", zIndex: 2 }}
      >
        <span className="text-xs font-mono tracking-widest">AI CONSULTING</span>
        <span className="text-xs font-mono" style={{ letterSpacing: "2px" }}>
          BY WESTERN HEMLOCK
        </span>
      </div>

      {/* Bottom right: SOUND toggle */}
      <button
        className="absolute bottom-6 right-6 hidden md:flex items-center gap-2 text-xs font-mono tracking-widest transition-opacity hover:opacity-70"
        style={{ color: "var(--astra-2000-60)", zIndex: 2 }}
        onClick={() => {
          setSoundOff(!soundOff);
          if (videoRef.current) videoRef.current.muted = !soundOff;
        }}
      >
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M1 4h3l4-3v10L4 8H1V4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          {soundOff ? (
            <path d="M13 1L9 5m4 5L9 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          ) : (
            <>
              <path d="M10 2c1.5 1 2.5 2.5 2.5 4s-1 3-2.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M12 0c2 1.5 3 3.5 3 6s-1 4.5-3 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </>
          )}
        </svg>
        {soundOff ? "SOUND OFF" : "SOUND ON"}
      </button>
    </section>
  );
}
