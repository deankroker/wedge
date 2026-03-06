"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function GetStarted() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <section
      id="get-started"
      className="relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background image */}
      <img
        src="https://res.cloudinary.com/pplx/image/upload/t_w2400/pplx-web/Computer/images/footer-background.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: "100vh" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl"
        >
          <h2
            className="mb-6"
            style={{
              fontFamily: "var(--nimbus-font-serif)",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              color: "var(--dark-text)",
              letterSpacing: "-0.02em",
              fontWeight: 400,
              lineHeight: 1.05,
            }}
          >
            Put Computer
            <br />
            to work
          </h2>
          <p
            className="text-lg md:text-xl mb-10 leading-relaxed mx-auto"
            style={{
              color: "var(--dark-text-muted)",
              maxWidth: "36rem",
            }}
          >
            Available now to Perplexity Max subscribers. Coming soon to
            Enterprise and Pro users.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-200 hover:opacity-80"
            style={{
              background: "var(--dark-btn-bg)",
              color: "var(--dark-btn-text)",
              letterSpacing: "0.01em",
            }}
          >
            Try Computer
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="ml-1"
            >
              <path
                d="M3.5 8h9M9 4.5l3.5 3.5-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
