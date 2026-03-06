"use client";

import Link from "next/link";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Advisory", href: "/services" },
      { label: "Build", href: "/services" },
      { label: "Accelerate", href: "/services" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Our Stack", href: "/stack" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Get Started", href: "/contact" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { label: "X (Twitter)", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative"
      style={{
        background: "var(--umbra-0)",
        color: "var(--umbra-1000)",
        borderTop: "1px solid var(--astra-0-12)",
      }}
    >
      <div
        className="mx-auto px-6 py-16 md:py-20"
        style={{ maxWidth: "var(--page-width)" }}
      >
        {/* Top: Logo + columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span
                className="text-2xl font-light tracking-tight"
                style={{
                  fontFamily: "var(--nimbus-font-serif)",
                  color: "var(--umbra-1000)",
                }}
              >
                Wedge
              </span>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="ml-1">
                <polygon
                  points="10,2 18,18 2,18"
                  fill="#d6d5d4"
                  opacity="0.8"
                />
              </svg>
            </Link>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--dark-text-muted)", maxWidth: "16rem" }}
            >
              AI consulting for businesses that build real things.
              <br />
              By Western Hemlock.
            </p>
            <a
              href="mailto:dean@westernhemlock.com"
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: "var(--umbra-1000)" }}
            >
              dean@westernhemlock.com
            </a>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4
                className="text-xs font-mono tracking-widest uppercase mb-4"
                style={{ color: "var(--dark-text-muted)" }}
              >
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-70"
                      style={{ color: "var(--umbra-1000)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--astra-0-12)" }}
        >
          <p className="text-xs" style={{ color: "var(--dark-text-muted)" }}>
            © 2026 Western Hemlock LLC
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs transition-opacity hover:opacity-70"
              style={{ color: "var(--dark-text-muted)" }}
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs transition-opacity hover:opacity-70"
              style={{ color: "var(--dark-text-muted)" }}
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
