"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GetStarted() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background image — dramatic mountain */}
      <img
        src="https://images.unsplash.com/photo-1767286669935-e466c9ebb881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODAzOTJ8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHJpZGdlJTIwZHJhbWF0aWMlMjBsaWdodHxlbnwwfDB8fHwxNzcyODM0NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
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
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: "100vh" }}
      >
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
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
            Ready to start
            <br />
            building?
          </h2>
          <p
            className="text-lg md:text-xl mb-12 leading-relaxed mx-auto"
            style={{
              color: "var(--dark-text-muted)",
              maxWidth: "36rem",
            }}
          >
            Pick a plan, log in, and describe what you want. We&apos;ll ship it — wired
            to GitHub and Vercel.
          </p>

          {/* 3-tier CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Tier 1: Pick a Plan */}
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-200 hover:opacity-80"
              style={{
                background: "var(--dark-btn-bg)",
                color: "var(--dark-btn-text)",
                letterSpacing: "0.01em",
              }}
            >
              Pick a Plan
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                <path
                  d="M3.5 8h9M9 4.5l3.5 3.5-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* Tier 2: Book a call */}
            <a
              href="https://calendly.com/deankroker/outpost-intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-200 hover:opacity-80 border"
              style={{
                background: "transparent",
                color: "var(--dark-text)",
                borderColor: "var(--dark-border)",
                letterSpacing: "0.01em",
              }}
            >
              Book a Free 10-Min Call
            </a>

            {/* Tier 3: Starter engagement */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-200 hover:opacity-80 border"
              style={{
                background: "transparent",
                color: "var(--dark-text-muted)",
                borderColor: "rgba(255,255,255,0.08)",
                letterSpacing: "0.01em",
              }}
            >
              Starter Engagement
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
