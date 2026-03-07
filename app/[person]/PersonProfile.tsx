"use client";

import { motion } from "framer-motion";
import SubpageNavbar from "@/components/SubpageNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Provider } from "@/lib/supabase";
import OutpostIcon from "@/components/OutpostIcon";

const fieldColors: Record<string, string> = {
  Design: "#7c3aed",
  Engineering: "#2563eb",
  Product: "#059669",
  Marketing: "#d97706",
  Sales: "#dc2626",
};

// Extra links for specific providers (keyed by lowercase handle)
const providerLinks: Record<
  string,
  { label: string; href: string; style?: "primary" | "secondary" }[]
> = {
  dean: [
    { label: "Work with me", href: "/get-started/dean", style: "primary" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/deankroker/" },
    { label: "The Lab", href: "https://dean.coffee" },
    { label: "Spark Labs", href: "https://spark.ooo" },
  ],
};

function EmbedFooter() {
  return (
    <footer className="py-8 px-6 text-center">
      <a
        href="https://outpost.chat"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-mono tracking-wider uppercase transition-opacity hover:opacity-70"
        style={{ color: "var(--astra-2000-30)" }}
      >
        Powered by Outpost
      </a>
    </footer>
  );
}

export default function PersonProfile({
  provider,
  embed = false,
}: {
  provider: Provider;
  embed?: boolean;
}) {
  const handle = provider.handle.toLowerCase();
  const extraLinks = providerLinks[handle] ?? [];

  // Merge provider's own links with extra links (avoid duplicates)
  const allLinks = [...extraLinks];
  if (
    provider.linkedin_url &&
    !allLinks.some((l) => l.href.includes("linkedin"))
  ) {
    allLinks.push({ label: "LinkedIn", href: provider.linkedin_url });
  }
  if (
    provider.website &&
    !allLinks.some((l) => l.href === provider.website)
  ) {
    allLinks.push({ label: "Website", href: provider.website! });
  }

  return (
    <main style={{ background: "var(--astra-200)" }}>
      {!embed && <SubpageNavbar />}

      <section className={`${embed ? "pt-16 md:pt-24" : "pt-32"} pb-20 px-6`}>
        <div className="mx-auto" style={{ maxWidth: "48rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {!embed && (
              <div className="flex items-center justify-between mb-8">
                <Link
                  href="/team"
                  className="text-xs font-mono tracking-widest uppercase transition-opacity hover:opacity-70"
                  style={{ color: "var(--astra-2000-40)" }}
                >
                  &larr; TEAM
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-2 transition-opacity hover:opacity-70"
                >
                  <OutpostIcon size={16} fill="var(--astra-2000)" />
                  <span
                    className="text-sm font-medium tracking-tight"
                    style={{ color: "var(--astra-2000)", fontFamily: "var(--nimbus-font-serif)" }}
                  >
                    Outpost
                  </span>
                </Link>
              </div>
            )}

            {/* Avatar */}
            <div
              className="w-24 h-24 rounded-full mb-8 overflow-hidden flex items-center justify-center text-3xl font-light"
              style={{
                background: "var(--astra-300)",
                color: "var(--astra-2000-40)",
                fontFamily: "var(--nimbus-font-serif)",
              }}
            >
              {provider.image_url ? (
                <img
                  src={provider.image_url}
                  alt={provider.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                provider.name[0]
              )}
            </div>

            <h1
              style={{
                fontFamily: "var(--nimbus-font-serif)",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                color: "var(--astra-2000)",
                letterSpacing: "-0.02em",
                fontWeight: 400,
                lineHeight: 1.05,
              }}
            >
              {provider.name}
            </h1>

            <p
              className="text-xs font-mono tracking-widest uppercase mt-2 mb-4"
              style={{ color: "var(--astra-2000-40)" }}
            >
              {provider.work_position}
            </p>

            <div className="flex items-center gap-3 mb-8">
              <span
                className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full"
                style={{
                  background: `${fieldColors[provider.primary_field] ?? "#6b7280"}15`,
                  color: fieldColors[provider.primary_field] ?? "#6b7280",
                }}
              >
                {provider.primary_field}
              </span>
              {provider.reviews > 0 && (
                <span
                  className="text-xs"
                  style={{ color: "var(--astra-2000-40)" }}
                >
                  {provider.reviews} happy customers
                </span>
              )}
              <span
                className="text-xs"
                style={{ color: "var(--astra-2000-40)" }}
              >
                responds in ~{provider.response_time_days}d
              </span>
            </div>

            {provider.details && (
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: "var(--astra-2000-60)" }}
              >
                {provider.details}
              </p>
            )}

            {provider.what_to_expect && (
              <div className="mb-8">
                <h2
                  className="text-sm font-mono tracking-widest uppercase mb-3"
                  style={{ color: "var(--astra-2000-40)" }}
                >
                  What to expect
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--astra-2000-60)" }}
                >
                  {provider.what_to_expect}
                </p>
              </div>
            )}

            {/* Links */}
            {allLinks.length > 0 && !embed && (
              <div className="flex flex-wrap items-center gap-3 mt-8">
                {allLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("/") ? undefined : "_blank"}
                    rel={link.href.startsWith("/") ? undefined : "noopener noreferrer"}
                    className="text-sm font-medium px-4 py-2 rounded-full transition-colors"
                    style={
                      link.style === "primary"
                        ? {
                            background: "var(--astra-2000)",
                            color: "var(--astra-0)",
                          }
                        : {
                            border: "1px solid var(--astra-2000-20)",
                            color: "var(--astra-2000)",
                          }
                    }
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {/* Work with CTA */}
            <Link
              href={`/get-started/${handle}`}
              className={`block ${embed ? "mt-10" : "mt-12"} rounded-xl p-8 transition-all duration-200 hover:opacity-90`}
              style={{
                background: "var(--astra-2000)",
                color: "var(--astra-0)",
              }}
            >
              <h3
                className="mb-2"
                style={{
                  fontFamily: "var(--nimbus-font-serif)",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                }}
              >
                Work with {provider.name.split(" ")[0]}
              </h3>
              <p className="text-sm leading-relaxed opacity-60 mb-4">
                Scale plan &middot; $2,500/mo &middot; Up to 5 projects
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                Get started
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {embed ? <EmbedFooter /> : <Footer />}
    </main>
  );
}
