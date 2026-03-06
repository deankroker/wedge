"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Unifies() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0.2, 0.35, 0.65, 0.8], [0, 1, 1, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const gradientTopOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const gradientBottomOpacity = useTransform(scrollYProgress, [0.88, 1], [0, 1]);

  return (
    <>
      {/* Fixed background — only visible during this section */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          opacity: bgOpacity,
        }}
      >
        {/* Black base */}
        <div className="absolute inset-0" style={{ background: "#000", zIndex: 1 }} />
        {/* Nature image at 60% opacity */}
        <img
          src="https://res.cloudinary.com/pplx/image/upload/t_w2400/pplx-web/Computer/images/step-bg-01.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.6, zIndex: 2 }}
        />
        {/* Top gradient fade from cream */}
        <motion.div
          className="absolute top-0 left-0 right-0"
          style={{
            zIndex: 3,
            height: "30vh",
            background: "linear-gradient(#faf8f5 0%, #faf8f500 100%)",
            opacity: gradientTopOpacity,
          }}
        />
        {/* Bottom gradient fade to cream */}
        <motion.div
          className="absolute bottom-0 left-0 right-0"
          style={{
            zIndex: 3,
            height: "30vh",
            background: "linear-gradient(#faf8f500 0%, #faf8f5 100%)",
            opacity: gradientBottomOpacity,
          }}
        />
      </motion.div>

      {/* Section content */}
      <section
        id="unifies"
        ref={sectionRef}
        style={{
          zIndex: 1,
          width: "100%",
          height: "300vh",
          marginTop: "-50vh",
          position: "relative",
        }}
      >
        <div
          className="w-full overflow-hidden"
          style={{
            height: "100dvh",
            position: "sticky",
            top: 0,
          }}
        >
          {/* Title */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              zIndex: 5,
              opacity: titleOpacity,
            }}
          >
            <h2
              style={{
                color: "var(--astra-200)",
                fontFamily: "var(--nimbus-font-serif)",
                textAlign: "center",
                fontSize: "48px",
                fontWeight: 400,
                lineHeight: "112%",
                margin: 0,
              }}
            >
              Computer<br />unifies
            </h2>
          </motion.div>

          {/* Decorative helix lines (simplified from Three.js) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 4 }}>
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `${5 + i * 8}%`,
                  top: "-20%",
                  width: "1px",
                  height: "140%",
                  background: `linear-gradient(to bottom, transparent 10%, rgba(250,248,245,${0.03 + i * 0.008}) 50%, transparent 90%)`,
                  transform: `rotate(${-20 + i * 3.3}deg)`,
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
