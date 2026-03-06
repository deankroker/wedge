"use client";

import { motion } from "framer-motion";
import SubpageNavbar from "@/components/SubpageNavbar";
import Footer from "@/components/Footer";

const packages = [
  {
    hours: "5",
    price: "$3,000",
    rate: "$600/hr",
    name: "Starter",
    description: "Perfect for an initial audit or a focused prototype. Most companies start here to see what's possible before going deeper.",
    includes: [
      "Workflow audit for one department or process",
      "1-2 working prototypes",
      "Written summary with prioritized opportunities",
      "Follow-up call to discuss next steps",
    ],
    cta: "Buy 5 Hours",
    href: "https://buy.stripe.com/placeholder-5hr",
    featured: false,
  },
  {
    hours: "10",
    price: "$5,500",
    rate: "$550/hr",
    name: "Builder",
    description: "Enough time to go from audit to working tool. This is where real impact happens — we identify the wedge and drive it home.",
    includes: [
      "Everything in Starter",
      "Full design + development of one AI tool",
      "Integration with one existing system",
      "Team walkthrough and handoff documentation",
      "2 weeks post-delivery support",
    ],
    cta: "Buy 10 Hours",
    href: "https://buy.stripe.com/placeholder-10hr",
    featured: true,
  },
  {
    hours: "20",
    price: "$10,000",
    rate: "$500/hr",
    name: "Accelerator",
    description: "The full engagement. Multiple tools, deep integration, and team training. This is for companies ready to fundamentally change how they operate.",
    includes: [
      "Everything in Builder",
      "Multiple AI tools across departments",
      "Deep integration architecture",
      "Team training on AI-native workflows",
      "30 days post-delivery support",
      "Monthly strategy call for 3 months",
    ],
    cta: "Buy 20 Hours",
    href: "https://buy.stripe.com/placeholder-20hr",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <main style={{ background: "var(--astra-200)" }}>
      <SubpageNavbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="mx-auto text-center" style={{ maxWidth: "48rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p
              className="text-xs font-mono tracking-[0.3em] uppercase mb-6"
              style={{ color: "var(--astra-2000-60)" }}
            >
              PRICING
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
              Simple. Transparent.
              <br />
              No surprises.
            </h1>
            <p
              className="mt-6 text-lg leading-relaxed"
              style={{ color: "var(--astra-2000-60)" }}
            >
              Buy a bucket of hours. We fill them with impact. No retainers, no minimums, no enterprise sales process. Just work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-32">
        <div
          className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ maxWidth: "72rem" }}
        >
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="rounded-xl p-8 flex flex-col"
              style={{
                background: "var(--astra-0)",
                border: pkg.featured
                  ? "2px solid var(--astra-2000)"
                  : "1px solid var(--astra-2000-8)",
              }}
            >
              {pkg.featured && (
                <span
                  className="text-xs font-mono tracking-widest uppercase mb-4 self-start px-3 py-1 rounded-full"
                  style={{
                    background: "var(--astra-2000)",
                    color: "var(--astra-200)",
                  }}
                >
                  MOST POPULAR
                </span>
              )}

              <h3
                style={{
                  fontFamily: "var(--nimbus-font-serif)",
                  fontSize: "1.5rem",
                  color: "var(--astra-2000)",
                  fontWeight: 400,
                }}
              >
                {pkg.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-2">
                <span
                  style={{
                    fontFamily: "var(--nimbus-font-serif)",
                    fontSize: "3rem",
                    color: "var(--astra-2000)",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  {pkg.price}
                </span>
                <span
                  className="text-sm"
                  style={{ color: "var(--astra-2000-40)" }}
                >
                  / {pkg.hours} hours
                </span>
              </div>

              <p
                className="text-xs mt-1"
                style={{ color: "var(--astra-2000-40)" }}
              >
                {pkg.rate} effective rate
              </p>

              <p
                className="mt-6 text-sm leading-relaxed flex-grow"
                style={{ color: "var(--astra-2000-60)" }}
              >
                {pkg.description}
              </p>

              <ul className="mt-6 space-y-2">
                {pkg.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "var(--astra-2000-80)" }}
                  >
                    <span className="mt-1 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={pkg.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80 ${
                  pkg.featured ? "" : "border"
                }`}
                style={
                  pkg.featured
                    ? {
                        background: "var(--astra-2000)",
                        color: "var(--astra-200)",
                      }
                    : {
                        background: "transparent",
                        color: "var(--astra-2000)",
                        borderColor: "var(--astra-2000-20)",
                      }
                }
              >
                {pkg.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Custom engagements */}
      <section className="px-6 pb-20">
        <div className="mx-auto text-center" style={{ maxWidth: "36rem" }}>
          <p className="text-lg leading-relaxed" style={{ color: "var(--astra-2000-60)" }}>
            Need something bigger? Custom engagements available for teams that want to go deep.
          </p>
          <a
            href="mailto:dean@westernhemlock.com?subject=Custom%20Engagement"
            className="inline-flex items-center gap-2 mt-6 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "var(--astra-2000)" }}
          >
            Talk to us about custom work →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
