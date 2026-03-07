"use client";

import { motion } from "framer-motion";
import SubpageNavbar from "@/components/SubpageNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Pick a plan",
    description:
      "Choose Launch, Scale, or Custom on our pricing page. No sales calls required — just pick what fits and you're in.",
  },
  {
    num: "02",
    title: "Log in to app.outpost.chat",
    description:
      "Sign in with your email. You'll land in your personal workspace — a clean chat interface connected to your projects.",
  },
  {
    num: "03",
    title: "Describe what you want to build",
    description:
      "Tell the chat UI what you need in plain English. \"Build me a dashboard that tracks inventory.\" \"Make a booking page for my salon.\" Be as specific or vague as you want — we'll ask clarifying questions.",
  },
  {
    num: "04",
    title: "We spin up your app",
    description:
      "Your app gets created and wired to a GitHub repo and Vercel deployment automatically. Custom domain, database, the works. You'll see a live URL within hours.",
  },
  {
    num: "05",
    title: "Make changes anytime through chat",
    description:
      "Want to change the color scheme? Add a new page? Swap out a feature? Just tell the chat. Your app evolves as fast as your ideas do.",
  },
  {
    num: "06",
    title: "Get hands-on help from the team",
    description:
      "On Scale and Custom plans, the creative collective steps in directly. Complex integrations, custom workflows, or just a second opinion — we're here.",
  },
];

export default function HowItWorksPage() {
  return (
    <main style={{ background: "var(--astra-200)" }}>
      <SubpageNavbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto" style={{ maxWidth: "72rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p
              className="text-xs font-mono tracking-[0.3em] uppercase mb-6"
              style={{ color: "var(--astra-2000-60)" }}
            >
              HOW IT WORKS
            </p>
            <h1
              style={{
                fontFamily: "var(--nimbus-font-serif)",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                color: "var(--astra-2000)",
                letterSpacing: "-0.02em",
                fontWeight: 400,
                lineHeight: 1.05,
              }}
            >
              From idea to
              <br />
              live app.
            </h1>
            <p
              className="mt-6 text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--astra-2000-60)", maxWidth: "36rem" }}
            >
              Six steps. No code. No waiting. Describe what you want and watch it come to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 pb-32">
        <div className="mx-auto" style={{ maxWidth: "72rem" }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className={`${i > 0 ? "mt-12" : ""}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div
                className="rounded-xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 items-start"
                style={{
                  background: "var(--astra-0)",
                  border: "1px solid var(--astra-2000-8)",
                }}
              >
                <span
                  className="text-xs font-mono tracking-widest"
                  style={{ color: "var(--astra-2000-40)", paddingTop: "0.25rem" }}
                >
                  {step.num}
                </span>
                <div>
                  <h2
                    style={{
                      fontFamily: "var(--nimbus-font-serif)",
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      color: "var(--astra-2000)",
                      letterSpacing: "-0.015em",
                      fontWeight: 400,
                      lineHeight: 1.2,
                    }}
                  >
                    {step.title}
                  </h2>
                  <p
                    className="mt-4 text-base leading-relaxed"
                    style={{ color: "var(--astra-2000-60)", maxWidth: "36rem" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto text-center" style={{ maxWidth: "36rem" }}>
          <p className="text-lg leading-relaxed" style={{ color: "var(--astra-2000-60)" }}>
            Ready to build something?
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80"
            style={{
              background: "var(--astra-2000)",
              color: "var(--astra-200)",
            }}
          >
            Pick a Plan
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
