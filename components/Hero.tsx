"use client";

import { useEffect, useState } from "react";
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
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        height: "824px",
        background: "var(--astra-200)",
      }}
    >
      {/* Hero image background — PNW forest fog */}
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
        <img
          src="https://images.unsplash.com/photo-1536736368159-ea9093d4a213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODAzOTJ8MHwxfHNlYXJjaHwxfHxwYWNpZmljJTIwbm9ydGh3ZXN0JTIwZm9yZXN0JTIwZm9nfGVufDB8MHx8fDE3NzI4MzQ1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Pacific Northwest forest in fog"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 1 }}
        />
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

      {/* Left side: Project card stack */}
      <div
        style={{
          zIndex: 2,
          position: "absolute",
          top: "10.5rem",
          left: "0",
          width: "15rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          paddingLeft: "2.5rem",
        }}
      >
        {projectCards.map((card, i) => (
          <div
            key={card.num}
            style={{
              position: "relative",
              boxSizing: "border-box",
              border: "1px solid var(--astra-2000-10)",
              borderRadius: "4px",
              width: "15rem",
              height: "10rem",
              padding: "0.625rem 0.75rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
              opacity: i === 0 ? 1 : 0.6 - i * 0.15,
            }}
          >
            {/* Glass background */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "var(--astra-0-60, #fff9)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "4px",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
            {/* Content */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <span
                style={{
                  fontFamily: "var(--nimbus-font-mono)",
                  fontSize: "0.75rem",
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
            </div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <span
                style={{
                  fontFamily: "var(--nimbus-font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--astra-2000-60)",
                  background: "var(--astra-300)",
                  padding: "2px 8px",
                  borderRadius: "9999px",
                }}
              >
                {card.tag}
              </span>
            </div>
          </div>
        ))}
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
    </section>
  );
}
