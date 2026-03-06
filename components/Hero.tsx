"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const rotatingWords = [
  "Researches", "Codes", "Browses", "Builds", "Monitors",
  "Works", "Schedules", "Creates", "Writes", "Edits",
  "Connects", "Automates",
];

const queryCards = [
  {
    num: "01",
    text: "Create an interactive map of the United States showing the geographic density of the impact of DOGE layoffs.",
  },
  {
    num: "02",
    text: "Build an Excel workbook with 1950-present S&P 500 and CPI data, including returns, drawdowns, and rolling stats charts.",
  },
  {
    num: "03",
    text: "Create an animated bar chart race of Billboard Hot 100 genre dominance (1958-2025) with a monthly date counter.",
  },
  {
    num: "04",
    text: "Build a mobile-friendly rent-vs-buy web app using zip code data and 30-year Monte Carlo financial simulations.",
  },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [soundOff, setSoundOff] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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
      {/* Video background — NOT a circle, large rect with radial gradient fade */}
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
        {/* "Computer" */}
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
          Computer
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

        {/* Try Computer button */}
        <div className="mt-8" style={{ pointerEvents: "auto" }}>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80"
            style={{
              background: "var(--astra-2000)",
              color: "var(--astra-200)",
            }}
          >
            Try Computer
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Left side: Query card stack — vertical with gap */}
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
        {queryCards.map((card, i) => (
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
                /query
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom left: BUILDING */}
      <div
        className="absolute bottom-6 left-6 flex items-center gap-3"
        style={{ color: "var(--astra-2000-60)", zIndex: 2 }}
      >
        <span className="text-xs font-mono tracking-widest">BUILDING...</span>
        <span className="text-xs font-mono" style={{ letterSpacing: "2px" }}>
          ⠿⠿⠿⠧⠀⠀⠀
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
