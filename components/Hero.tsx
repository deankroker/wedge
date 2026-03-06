"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rotatingWords = [
  "Researches",
  "Codes",
  "Browses",
  "Builds",
  "Monitors",
  "Works",
  "Schedules",
  "Creates",
  "Writes",
  "Edits",
  "Connects",
  "Automates",
];

const queryCards = [
  {
    num: "01",
    text: "Create an interactive map of the United States showing the geographic density of the impact of DOGE layoffs.",
    tag: "/query",
  },
  {
    num: "02",
    text: "Build an Excel workbook with 1950-present S&P 500 and CPI data, including returns, drawdowns, and rolling stats charts.",
    tag: "/query",
  },
  {
    num: "03",
    text: "Create an animated bar chart race of Billboard Hot 100 genre dominance (1958-2025) with a monthly date counter.",
    tag: "/query",
  },
  {
    num: "04",
    text: "Build a mobile-friendly rent-vs-buy web app using zip code data and 30-year Monte Carlo financial simulations.",
    tag: "/query",
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
      setCardIndex((i) => (i + 1) % queryCards.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const visibleCards = [
    queryCards[cardIndex % queryCards.length],
    queryCards[(cardIndex + 1) % queryCards.length],
    queryCards[(cardIndex + 2) % queryCards.length],
  ];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        height: "824px",
        background: "var(--astra-200)",
      }}
    >
      {/* Video sphere background */}
      <div
        className="absolute"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-68%, -50%)",
          width: "640px",
          height: "640px",
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow: "0 0 120px 60px rgba(250,248,245,0.8)",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted={soundOff}
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
        >
          <source
            src="https://pplx-res.cloudinary.com/video/upload/v1771728928/pplx-web/Computer/videos/computer-hero-bg-2.webm"
            type="video/webm"
          />
        </video>
        {/* Radial fade overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 60%, var(--astra-200) 100%)",
          }}
        />
      </div>

      {/* Radial gradient fade on sides */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 30% 50%, transparent 40%, var(--astra-200) 80%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, var(--astra-200) 0%, transparent 25%, transparent 75%, var(--astra-200) 100%)",
        }}
      />

      {/* Right side content */}
      <div
        className="absolute right-0 top-0 bottom-0 flex flex-col justify-center pr-12 pl-8"
        style={{ width: "48%", paddingTop: "var(--nav-height)" }}
      >
        {/* "Computer" heading */}
        <h1
          className="font-serif leading-none mb-4"
          style={{
            fontFamily: "var(--nimbus-font-serif)",
            fontSize: "clamp(4rem, 7vw, 6.5rem)",
            color: "var(--astra-2000)",
            letterSpacing: "-0.02em",
          }}
        >
          Computer
        </h1>

        {/* Word rotator */}
        <div
          className="overflow-hidden mb-8"
          style={{ height: "clamp(3rem, 5.5vw, 4.75rem)" }}
        >
          <AnimatePresence mode="popLayout">
            <motion.p
              key={wordIndex}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.32, 0, 0.67, 0] }}
              className="font-serif leading-none"
              style={{
                fontFamily: "var(--nimbus-font-serif)",
                fontSize: "clamp(3rem, 5.5vw, 4.75rem)",
                color: "var(--astra-2000-60)",
                letterSpacing: "-0.02em",
              }}
            >
              {rotatingWords[wordIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Try Computer button */}
        <div>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80"
            style={{
              background: "var(--astra-2000)",
              color: "var(--astra-200)",
              letterSpacing: "0.01em",
            }}
          >
            Try Computer
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="ml-1"
            >
              <path
                d="M3 7h8M8 4l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Left query card stack */}
      <div
        className="absolute"
        style={{
          left: "3%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "min(320px, 28%)",
          paddingTop: "var(--nav-height)",
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

      {/* Bottom left: BUILDING status */}
      <div
        className="absolute bottom-6 left-6 flex items-center gap-3"
        style={{ color: "var(--astra-2000-60)" }}
      >
        <span className="text-xs font-mono tracking-widest">BUILDING...</span>
        <span className="text-xs font-mono" style={{ letterSpacing: "2px" }}>
          ⠿⠿⠿⠧⠀⠀⠀
        </span>
      </div>

      {/* Bottom right: SOUND OFF toggle */}
      <button
        className="absolute bottom-6 right-6 flex items-center gap-2 text-xs font-mono tracking-widest transition-opacity hover:opacity-70"
        style={{ color: "var(--astra-2000-60)" }}
        onClick={() => {
          setSoundOff(!soundOff);
          if (videoRef.current) {
            videoRef.current.muted = !soundOff;
          }
        }}
      >
        {soundOff ? (
          <>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path
                d="M1 4h3l4-3v10L4 8H1V4z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 1L9 5m4 5L9 6"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            SOUND OFF
          </>
        ) : (
          <>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path
                d="M1 4h3l4-3v10L4 8H1V4z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 2c1.5 1 2.5 2.5 2.5 4s-1 3-2.5 4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M12 0c2 1.5 3 3.5 3 6s-1 4.5-3 6"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            SOUND ON
          </>
        )}
      </button>
    </section>
  );
}
