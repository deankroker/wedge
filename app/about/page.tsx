"use client";

import { motion } from "framer-motion";
import SubpageNavbar from "@/components/SubpageNavbar";
import Footer from "@/components/Footer";

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
              Western Hemlock.
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
              The western hemlock is the most shade-tolerant tree in the Pacific Northwest. It doesn&apos;t need perfect conditions. It finds the gap, takes root, and grows — slowly, deliberately, until it dominates the canopy.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--astra-2000-60)" }}
            >
              That&apos;s the philosophy behind everything we do.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--astra-2000-60)" }}
            >
              Western Hemlock is a consulting practice built for this moment — the narrow window where AI tools are powerful enough to transform any business, but most businesses haven&apos;t figured out how yet. We live in that gap.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--astra-2000-60)" }}
            >
              We&apos;re not a big agency. We&apos;re not trying to be. We&apos;re a small, opinionated team that builds things — fast. We use agentic AI tools to ship software at a pace that doesn&apos;t make sense to traditional development teams. What used to require a team of ten and a quarter of roadmap, we do in a week with two people and a stack of AI-native tools.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--astra-2000-60)" }}
            >
              <strong style={{ color: "var(--astra-2000)" }}>Wedge</strong> is how we deliver that capability. It&apos;s the service arm — the consulting practice that takes what we&apos;ve learned building with AI and applies it to businesses that weren&apos;t born digital. Construction firms. Law practices. Manufacturing companies. Service businesses. Real companies with real operations that AI can make dramatically better.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--astra-2000-60)" }}
            >
              We don&apos;t believe in &ldquo;AI strategy decks.&rdquo; We believe in showing up, understanding your work, and building something that changes how you operate — this week, not next quarter.
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
                  text: "Presentations are where ideas go to die. We build working prototypes in the time it takes most consultants to finalize their PowerPoint. You can't evaluate what you can't touch.",
                },
                {
                  title: "Leverage over headcount.",
                  text: "The answer to 'we need more people' is almost always 'we need better tools.' AI is the biggest force multiplier in business history. Use it.",
                },
                {
                  title: "Substance over hype.",
                  text: "We don't talk about AGI or the singularity. We talk about your intake process, your proposal workflow, your reporting pipeline. Real problems. Real solutions. This week.",
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
            Ready to find your wedge?
          </p>
          <a
            href="mailto:dean@westernhemlock.com"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80"
            style={{
              background: "var(--astra-2000)",
              color: "var(--astra-200)",
            }}
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
