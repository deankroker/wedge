"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

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
  const [setIndex, setSetIndex] = useState(0);
  const [activeSlot, setActiveSlot] = useState(0);

  // Word rotator
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Card highlight + set cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlot((prev) => {
        if (prev >= 2) {
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
          Outpost
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
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80"
            style={{
              background: "var(--astra-2000)",
              color: "var(--astra-200)",
            }}
          >
            Get Started
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
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
                opacity: isActive ? 1 : 0.65,
                background: isActive ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.5)",
              }}
            >
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
          Outpost
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
          Build your app with AI. Describe what you want — we ship it.
        </p>

        {/* CTA button — mobile */}
        <div className="mt-8">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80"
            style={{
              background: "var(--astra-2000)",
              color: "var(--astra-200)",
            }}
          >
            Get Started
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom left: status */}
      <div
        className="absolute bottom-6 left-6 flex items-center gap-3"
        style={{ color: "var(--astra-2000-60)", zIndex: 2 }}
      >
        <span className="text-xs font-mono tracking-widest">AI APP BUILDER</span>
      </div>
    </section>
  );
}
