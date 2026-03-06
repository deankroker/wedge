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
  const [cardIndex, setCardIndex] = useState(0);
  const [soundOff, setSoundOff] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Word rotator
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Card cycler
  useEffect(() => {
    const interval = setInterval(() => {
      setCardIndex((i) => (i + 1) % projectCards.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const visibleCards = [
    projectCards[cardIndex % projectCards.length],
    projectCards[(cardIndex + 1) % projectCards.length],
    projectCards[(cardIndex + 2) % projectCards.length],
  ];

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
        {/* Radial gradient fade — the key to the organic edge look */}
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

      {/* Right side: headlines */}
      <div
        className="flex flex-col justify-start items-start"
        style={{
          zIndex: 2,
          position: "absolute",
          top: "17.5rem",
          right: "18rem",
          width: "fit-content",
          textAlign: "right",
          pointerEvents: "none",
        }}
      >
        {/* "Wedge" */}
        <h1
          style={{
            fontFamily: "var(--nimbus-font-serif)",
            color: "var(--astra-2000)",
            fontSize: "96px",
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
            minWidth: "14ch",
            height: "1em",
            fontSize: "96px",
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
                left: 0,
                width: "100%",
                minWidth: "max-content",
                whiteSpace: "nowrap",
                fontFamily: "var(--nimbus-font-serif)",
                color: "var(--astra-2000-60)",
                fontSize: "96px",
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

        {/* CTA button — right below the word rotator */}
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

      {/* Left side: Cycling card stack with animation */}
      <div
        className="absolute"
        style={{
          left: "3%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "min(320px, 28%)",
          paddingTop: "var(--nav-height)",
          zIndex: 2,
        }}
      >
        <div className="relative" style={{ height: "320px" }}>
          {visibleCards.map((card, i) => (
            <motion.div
              key={`${card.num}-${cardIndex}`}
              className="absolute w-full rounded-2xl border p-4 flex flex-col justify-between"
              style={{
                top: `${i * 18}px`,
                left: `${i * 8}px`,
                right: `${i * -8}px`,
                height: "160px",
                background: "var(--astra-0)",
                borderColor: "var(--astra-400)",
                boxShadow: "0 2px 12px rgba(39,25,0,0.06)",
                zIndex: 3 - i,
                opacity: 1 - i * 0.25,
                scale: 1 - i * 0.03,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1 - i * 0.25,
                y: 0,
                scale: 1 - i * 0.03,
              }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div>
                <span
                  className="text-xs font-mono mb-2 block"
                  style={{ color: "var(--astra-2000-40)" }}
                >
                  {card.num}
                </span>
                <p
                  className="text-sm leading-snug"
                  style={{ color: "var(--astra-2000)" }}
                >
                  {card.text}
                </p>
              </div>
              <div>
                <span
                  className="text-xs font-mono px-2 py-1 rounded-full"
                  style={{
                    background: "var(--astra-300)",
                    color: "var(--astra-2000-60)",
                  }}
                >
                  {card.tag}
                </span>
              </div>
            </motion.div>
          ))}
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
        className="absolute bottom-6 right-6 flex items-center gap-2 text-xs font-mono tracking-widest transition-opacity hover:opacity-70"
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
