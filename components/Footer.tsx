"use client";

import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "How It Works", href: "/services" },
      { label: "Get Started", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Customers",
    links: [
      { label: "Login", href: "https://app.outpost.chat/login" },
      { label: "Insiders", href: "https://app.outpost.chat/" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { label: "X (Twitter)", href: "https://x.com/outpost_chat" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/104468632" },
      { label: "GitHub", href: "https://github.com/outpost_chat" },
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
                Outpost
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--dark-text-muted)", maxWidth: "16rem" }}
            >
              Build your app with AI.
            </p>
            <a
              href="mailto:hi@outpost.chat"
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: "var(--umbra-1000)" }}
            >
              hi@outpost.chat
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
            © 2026 A collaboration between Spark Labs LLC and Western Hemlock LLC
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://spark.ooo/privacy"
              className="text-xs transition-opacity hover:opacity-70"
              style={{ color: "var(--dark-text-muted)" }}
            >
              Privacy
            </Link>
            <Link
              href="https://spark.ooo/terms"
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
