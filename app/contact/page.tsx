"use client";

import { motion } from "framer-motion";
import SubpageNavbar from "@/components/SubpageNavbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main style={{ background: "var(--astra-200)" }}>
      <SubpageNavbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
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
              CONTACT
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
              Let&apos;s talk about
              <br />
              what&apos;s possible.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="px-6 pb-32">
        <div
          className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{ maxWidth: "72rem" }}
        >
          {/* Option 1: Email */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-xl p-8"
            style={{
              background: "var(--astra-0)",
              border: "1px solid var(--astra-2000-8)",
            }}
          >
            <span
              className="text-xs font-mono tracking-widest uppercase block mb-4"
              style={{ color: "var(--astra-2000-40)" }}
            >
              01 — WRITE
            </span>
            <h3
              className="mb-4"
              style={{
                fontFamily: "var(--nimbus-font-serif)",
                fontSize: "1.5rem",
                color: "var(--astra-2000)",
                fontWeight: 400,
              }}
            >
              Email us
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--astra-2000-60)" }}
            >
              Tell us about your business and what you&apos;re trying to solve. We read every email and respond within 24 hours. No forms. No chatbots. Just humans.
            </p>
            <a
              href="mailto:dean@westernhemlock.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80"
              style={{
                background: "var(--astra-2000)",
                color: "var(--astra-200)",
              }}
            >
              dean@westernhemlock.com
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* Option 2: Call */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-xl p-8"
            style={{
              background: "var(--astra-0)",
              border: "1px solid var(--astra-2000-8)",
            }}
          >
            <span
              className="text-xs font-mono tracking-widest uppercase block mb-4"
              style={{ color: "var(--astra-2000-40)" }}
            >
              02 — TALK
            </span>
            <h3
              className="mb-4"
              style={{
                fontFamily: "var(--nimbus-font-serif)",
                fontSize: "1.5rem",
                color: "var(--astra-2000)",
                fontWeight: 400,
              }}
            >
              Book a 10-min call
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--astra-2000-60)" }}
            >
              10 minutes. No pitch deck. We listen to what you&apos;re dealing with and tell you honestly if we can help. If we can&apos;t, we&apos;ll point you to someone who can.
            </p>
            <a
              href="https://calendly.com/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80 border"
              style={{
                color: "var(--astra-2000)",
                borderColor: "var(--astra-2000-20)",
              }}
            >
              Schedule on Calendly
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* Option 3: Buy */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-xl p-8"
            style={{
              background: "var(--astra-0)",
              border: "1px solid var(--astra-2000-8)",
            }}
          >
            <span
              className="text-xs font-mono tracking-widest uppercase block mb-4"
              style={{ color: "var(--astra-2000-40)" }}
            >
              03 — BUY
            </span>
            <h3
              className="mb-4"
              style={{
                fontFamily: "var(--nimbus-font-serif)",
                fontSize: "1.5rem",
                color: "var(--astra-2000)",
                fontWeight: 400,
              }}
            >
              Buy a starter engagement
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--astra-2000-60)" }}
            >
              Know what you need? Skip the call. Buy hours, send us a brief, and we&apos;ll start building within 48 hours. No contracts. No procurement process.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://buy.stripe.com/placeholder-5hr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-80"
                style={{
                  background: "var(--astra-300)",
                  color: "var(--astra-2000)",
                }}
              >
                <span>5 hours</span>
                <span style={{ color: "var(--astra-2000-60)" }}>$3,000</span>
              </a>
              <a
                href="https://buy.stripe.com/placeholder-10hr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-80"
                style={{
                  background: "var(--astra-300)",
                  color: "var(--astra-2000)",
                }}
              >
                <span>10 hours</span>
                <span style={{ color: "var(--astra-2000-60)" }}>$5,500</span>
              </a>
              <a
                href="https://buy.stripe.com/placeholder-20hr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-80"
                style={{
                  background: "var(--astra-300)",
                  color: "var(--astra-2000)",
                }}
              >
                <span>20 hours</span>
                <span style={{ color: "var(--astra-2000-60)" }}>$10,000</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calendly embed placeholder */}
      <section className="px-6 pb-20">
        <div
          className="mx-auto rounded-xl p-12 text-center"
          style={{
            maxWidth: "72rem",
            background: "var(--astra-300)",
            border: "1px solid var(--astra-2000-8)",
          }}
        >
          <p
            className="text-sm font-mono"
            style={{ color: "var(--astra-2000-40)" }}
          >
            [ Calendly embed will appear here ]
          </p>
          <p
            className="mt-4 text-base"
            style={{ color: "var(--astra-2000-60)" }}
          >
            Or email us directly at{" "}
            <a
              href="mailto:dean@westernhemlock.com"
              className="underline"
              style={{ color: "var(--astra-2000)" }}
            >
              dean@westernhemlock.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
