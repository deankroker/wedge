"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Unifies() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const headingOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const headingScale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.9, 1, 1, 0.95]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.1], [0.3, 0.55]);

  return (
    <section
      id="unifies"
      ref={sectionRef}
      className="relative"
      style={{ height: "240vh", background: "var(--umbra-0)" }}
    >
      {/* Background nature image */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <img
          src="https://res.cloudinary.com/pplx/image/upload/t_w2400/pplx-web/Computer/images/step-bg-01.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            opacity: overlayOpacity,
          }}
        />

        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center px-6"
            style={{
              opacity: headingOpacity,
              scale: headingScale,
            }}
          >
            <p
              className="text-xs font-mono tracking-[0.3em] uppercase mb-6"
              style={{ color: "var(--dark-text-muted)" }}
            >
              VISION
            </p>
            <h2
              className="leading-tight"
              style={{
                fontFamily: "var(--nimbus-font-serif)",
                fontSize: "clamp(3rem, 8vw, 7rem)",
                color: "var(--dark-text)",
                letterSpacing: "-0.02em",
                fontWeight: 400,
              }}
            >
              Computer
              <br />
              unifies
            </h2>
            <p
              className="mt-8 max-w-xl mx-auto text-lg leading-relaxed"
              style={{ color: "var(--dark-text-muted)" }}
            >
              Search, code, browse, build, monitor, automate — all in one place.
              No more switching between a dozen tools.
            </p>
          </motion.div>
        </div>

        {/* Decorative helix lines (simplified CSS version of Three.js helix) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 10}%`,
                top: "-10%",
                width: "1px",
                height: "120%",
                background: `linear-gradient(to bottom, transparent, rgba(214,213,212,${0.04 + i * 0.01}), transparent)`,
                transform: `rotate(${-15 + i * 3.5}deg)`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
