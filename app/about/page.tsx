"use client";

import { motion } from "framer-motion";
import SubpageNavbar from "@/components/SubpageNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
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
              ABOUT
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
              About Outpost.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Full-width image */}
      <section className="px-6 pb-20">
        <div className="mx-auto" style={{ maxWidth: "72rem" }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="rounded-xl overflow-hidden"
            style={{ aspectRatio: "21/9" }}
          >
            <img
              src="https://images.unsplash.com/photo-1764947813446-37efef6c4401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODAzOTJ8MHwxfHNlYXJjaHwxfHxvbGQlMjBncm93dGglMjBmb3Jlc3QlMjBzdW5saWdodHxlbnwwfDB8fHwxNzcyODM0NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Old growth forest"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 pb-20">
        <div className="mx-auto" style={{ maxWidth: "48rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-8"
          >
            <p
              className="text-xl leading-relaxed"
              style={{
                fontFamily: "var(--nimbus-font-serif)",
                color: "var(--astra-2000)",
              }}
            >
              Outpost is an AI app builder created by a creative collective. You describe what you want — we ship it.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--astra-2000-60)" }}
            >
              We built Outpost because we saw the same problem everywhere: people with great ideas for apps but no way to build them without hiring a dev team, managing sprints, or learning to code. That felt wrong.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--astra-2000-60)" }}
            >
              So we built a platform where you log in, describe what you want in plain English, and we ship a real webapp — wired to GitHub and Vercel, deployed on your custom domain, backed by a real database. No mockups. No waiting. Just working software.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--astra-2000-60)" }}
            >
              Behind Outpost is a creative collective — a team of designers, developers, and AI specialists who keep the platform sharp and step in when you need hands-on help. We&apos;re not a faceless SaaS company. We&apos;re builders who care about what you&apos;re building.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--astra-2000-60)" }}
            >
              We don&apos;t believe in &ldquo;AI strategy decks.&rdquo; We believe in shipping. You bring the idea, we bring the infrastructure. Together, we build something real — this week, not next quarter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 pb-32">
        <div className="mx-auto" style={{ maxWidth: "72rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2
              className="mb-12"
              style={{
                fontFamily: "var(--nimbus-font-serif)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--astra-2000)",
                fontWeight: 400,
              }}
            >
              What we believe
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Ship, don't slide.",
                  text: "Presentations are where ideas go to die. We build working apps in the time it takes most agencies to finalize their PowerPoint.",
                },
                {
                  title: "Collective over hierarchy.",
                  text: "We're a creative collective, not a corporation. Everyone builds. Everyone ships. No layers between your idea and the people making it real.",
                },
                {
                  title: "Substance over hype.",
                  text: "We don't talk about AGI or the singularity. We talk about your app, your users, your launch. Real products. Real deployments. This week.",
                },
              ].map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-6 rounded-xl"
                  style={{
                    background: "var(--astra-0)",
                    border: "1px solid var(--astra-2000-8)",
                  }}
                >
                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: "var(--nimbus-font-serif)",
                      fontSize: "1.25rem",
                      color: "var(--astra-2000)",
                      fontWeight: 400,
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--astra-2000-60)" }}
                  >
                    {value.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto text-center" style={{ maxWidth: "36rem" }}>
          <p
            className="text-xl leading-relaxed"
            style={{
              fontFamily: "var(--nimbus-font-serif)",
              color: "var(--astra-2000)",
            }}
          >
            Ready to start building?
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80"
            style={{
              background: "var(--astra-2000)",
              color: "var(--astra-200)",
            }}
          >
            Get Started
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
