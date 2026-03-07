"use client";

import { motion } from "framer-motion";
import SubpageNavbar from "@/components/SubpageNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const tiers = [
  {
    name: "Launch",
    price: "$500",
    period: "/mo",
    commitment: null,
    description:
      "Everything you need to start building. Self-service access to the Outpost platform with chat-driven development.",
    includes: [
      "Up to 2 projects",
      "Self-service portal at app.outpost.chat",
      "Chat UI to build & transform your webapp",
      "GitHub + Vercel deployment included",
      "Custom domain setup",
      "Database provisioning",
      "24-hour SLA on support requests",
    ],
    cta: "Get Started",
    href: "/get-started?plan=launch",
    featured: false,
  },
  {
    name: "Scale",
    price: "$2,500",
    period: "/mo",
    commitment: null,
    description:
      "For teams that need more projects and hands-on support from the collective. Own your infrastructure.",
    includes: [
      "Everything in Launch",
      "Up to 5 projects",
      "5 hours/month hands-on support from the team",
      "Own your infrastructure",
      "Access to the full creative collective",
    ],
    cta: "Get Started",
    href: "/get-started?plan=scale",
    featured: true,
  },
  {
    name: "Custom",
    price: "Custom",
    period: null,
    commitment: null,
    description:
      "Custom scope and pricing for larger teams or specialized requirements. Let's design something that fits.",
    includes: [
      "Unlimited projects",
      "Dedicated team allocation",
      "Custom integrations & workflows",
      "SLA customization",
      "Priority support",
    ],
    cta: "Talk to Us",
    href: "https://calendly.com/placeholder",
    featured: false,
  },
];

const hourPacks = [
  { hours: "5", price: "$3,000" },
  { hours: "10", price: "$5,500" },
  { hours: "20", price: "$10,000" },
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
              Plans that scale
              <br />
              with you.
            </h1>
            <p
              className="mt-6 text-lg leading-relaxed"
              style={{ color: "var(--astra-2000-60)" }}
            >
              Log in, describe what you want to build, and we ship it. Pick the plan that fits your pace.
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
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
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
                border: tier.featured
                  ? "2px solid var(--astra-2000)"
                  : "1px solid var(--astra-2000-8)",
              }}
            >
              {tier.featured && (
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
                {tier.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span
                  style={{
                    fontFamily: "var(--nimbus-font-serif)",
                    fontSize: "3rem",
                    color: "var(--astra-2000)",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  {tier.price}
                </span>
                {tier.period && (
                  <span
                    className="text-sm"
                    style={{ color: "var(--astra-2000-40)" }}
                  >
                    {tier.period}
                  </span>
                )}
              </div>

              {tier.commitment && (
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--astra-2000-40)" }}
                >
                  {tier.commitment}
                </p>
              )}

              <p
                className="mt-6 text-sm leading-relaxed flex-grow"
                style={{ color: "var(--astra-2000-60)" }}
              >
                {tier.description}
              </p>

              <ul className="mt-6 space-y-2">
                {tier.includes.map((item) => (
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

              <Link
                href={tier.href}
                target={tier.href.startsWith("/") ? undefined : "_blank"}
                rel={tier.href.startsWith("/") ? undefined : "noopener noreferrer"}
                className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80 ${
                  tier.featured ? "" : "border"
                }`}
                style={
                  tier.featured
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
                {tier.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Not ready for a plan? */}
      <section className="px-6 pb-32">
        <div className="mx-auto" style={{ maxWidth: "72rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2
              className="text-center mb-12"
              style={{
                fontFamily: "var(--nimbus-font-serif)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "var(--astra-2000)",
                fontWeight: 400,
              }}
            >
              Not ready for a plan?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Free call */}
              <div
                className="rounded-xl p-8"
                style={{
                  background: "var(--astra-0)",
                  border: "1px solid var(--astra-2000-8)",
                }}
              >
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "var(--nimbus-font-serif)",
                    fontSize: "1.5rem",
                    color: "var(--astra-2000)",
                    fontWeight: 400,
                  }}
                >
                  Book a free 10-min call
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--astra-2000-60)" }}
                >
                  Talk to Dean, CEO. No pitch. We&apos;ll listen to what you&apos;re building and tell you honestly if Outpost is the right fit.
                </p>
                <a
                  href="https://calendly.com/deankroker/outpost-intro-call"
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
              </div>

              {/* Hour packs */}
              <div
                className="rounded-xl p-8"
                style={{
                  background: "var(--astra-0)",
                  border: "1px solid var(--astra-2000-8)",
                }}
              >
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
                  Hour packs for consulting without the app. Skip the subscription — buy hours and we start building.
                </p>
                <div className="flex flex-col gap-3">
                  {hourPacks.map((pack) => (
                    <Link
                      key={pack.hours}
                      href={`/get-started/consulting?hours=${pack.hours}`}
                      className="inline-flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-80"
                      style={{
                        background: "var(--astra-300)",
                        color: "var(--astra-2000)",
                      }}
                    >
                      <span>{pack.hours} hours</span>
                      <span style={{ color: "var(--astra-2000-60)" }}>
                        {pack.price}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
