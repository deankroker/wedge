"use client";

import { motion } from "framer-motion";
import SubpageNavbar from "@/components/SubpageNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const tiers = [
  {
    name: "Advisory",
    tagline: "See what's possible.",
    description:
      "Most engagements start here. We spend focused time understanding your business, mapping your workflows, and identifying the highest-leverage opportunities for AI. You walk away with a clear picture of what's possible — not a 90-page PDF, but actual prototypes and proof of concepts.",
    includes: [
      "Workflow audit and AI opportunity mapping",
      "Live prototyping sessions — we build while you watch",
      "Competitive landscape analysis for your industry's AI adoption",
      "Prioritized roadmap of quick wins vs. long-term plays",
      "Direct access to senior consultants (no handoffs to juniors)",
    ],
    bestFor: "Business owners who know AI matters but aren't sure where to start. Teams evaluating whether to build in-house or outsource.",
    cta: "Start Advisory",
    href: "mailto:dean@westernhemlock.com?subject=Advisory%20Engagement",
  },
  {
    name: "Build",
    tagline: "We ship it for you.",
    description:
      "You've seen the possibilities. Now we execute. We design, build, and deploy custom AI tools that integrate directly into your workflows. Real software. Real impact. Shipped in weeks, not quarters.",
    includes: [
      "Full design + development of custom AI tools",
      "Integration with your existing systems (CRM, ERP, email, etc.)",
      "Agentic workflow development — AI that acts, not just answers",
      "Deployment, testing, and iteration until it works perfectly",
      "30-day post-launch support included",
    ],
    bestFor: "Companies ready to move. Teams that have identified the opportunity and need someone to ship the solution yesterday.",
    cta: "Start Building",
    href: "mailto:dean@westernhemlock.com?subject=Build%20Engagement",
  },
  {
    name: "Operate",
    tagline: "We run it with you.",
    description:
      "The tools are built. Now we make sure they keep getting better. Operate is our ongoing partnership model — we embed with your team, optimize what's running, and continuously ship new capabilities as AI evolves.",
    includes: [
      "Ongoing optimization of deployed AI systems",
      "New tool development as needs emerge",
      "Team training and upskilling on AI-native workflows",
      "Monthly strategy sessions and performance reviews",
      "Priority access for urgent builds and pivots",
    ],
    bestFor: "Companies that want a permanent edge. Teams that see AI as a core competency, not a one-time project.",
    cta: "Explore Operate",
    href: "mailto:dean@westernhemlock.com?subject=Operate%20Engagement",
  },
];

export default function ServicesPage() {
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
              SERVICES
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
              Three ways in.
              <br />
              One goal: leverage.
            </h1>
            <p
              className="mt-6 text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--astra-2000-60)", maxWidth: "36rem" }}
            >
              Every business is different. But the pattern is the same: find the wedge, drive it home, watch everything accelerate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="px-6 pb-32">
        <div className="mx-auto" style={{ maxWidth: "72rem" }}>
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`${i > 0 ? "mt-24" : ""}`}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div
                className="rounded-xl p-8 md:p-12"
                style={{
                  background: "var(--astra-0)",
                  border: "1px solid var(--astra-2000-8)",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left: Overview */}
                  <div>
                    <span
                      className="text-xs font-mono tracking-widest mb-4 block"
                      style={{ color: "var(--astra-2000-40)" }}
                    >
                      0{i + 1}
                    </span>
                    <h2
                      style={{
                        fontFamily: "var(--nimbus-font-serif)",
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        color: "var(--astra-2000)",
                        letterSpacing: "-0.015em",
                        fontWeight: 400,
                        lineHeight: 1.15,
                      }}
                    >
                      {tier.name}
                    </h2>
                    <p
                      className="mt-2 text-lg"
                      style={{
                        fontFamily: "var(--nimbus-font-serif)",
                        color: "var(--astra-2000-60)",
                        fontStyle: "italic",
                      }}
                    >
                      {tier.tagline}
                    </p>
                    <p
                      className="mt-6 text-base leading-relaxed"
                      style={{ color: "var(--astra-2000-60)" }}
                    >
                      {tier.description}
                    </p>
                    <a
                      href={tier.href}
                      className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80"
                      style={{
                        background: "var(--astra-2000)",
                        color: "var(--astra-200)",
                      }}
                    >
                      {tier.cta}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>

                  {/* Right: Details */}
                  <div>
                    <h4
                      className="text-xs font-mono tracking-widest uppercase mb-4"
                      style={{ color: "var(--astra-2000-40)" }}
                    >
                      What&apos;s included
                    </h4>
                    <ul className="space-y-3">
                      {tier.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-relaxed"
                          style={{ color: "var(--astra-2000-80)" }}
                        >
                          <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "var(--astra-2000-40)" }} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--astra-2000-8)" }}>
                      <h4
                        className="text-xs font-mono tracking-widest uppercase mb-3"
                        style={{ color: "var(--astra-2000-40)" }}
                      >
                        Best for
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--astra-2000-60)" }}>
                        {tier.bestFor}
                      </p>
                    </div>
                  </div>
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
            Not sure which tier? Most clients start with Advisory. It&apos;s the fastest way to see what&apos;s possible.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 mt-6 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "var(--astra-2000)" }}
          >
            View pricing →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
