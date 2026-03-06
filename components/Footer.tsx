"use client";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Search", href: "#" },
      { label: "Spaces", href: "#" },
      { label: "Computer", href: "#" },
      { label: "Enterprise", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Community", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
  {
    title: "API Platform",
    links: [
      { label: "pplx-api", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { label: "Twitter/X", href: "#" },
      { label: "Discord", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" },
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
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="https://pplx-marketing-static.perplexity.ai/assets/pplx-computer-main-DHpH_k7G.svg"
              alt="Perplexity"
              className="h-7 w-auto mb-6 invert brightness-200"
            />
            {/* App store badges */}
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-3 py-2 border rounded-lg text-xs transition-opacity hover:opacity-70"
                style={{
                  borderColor: "var(--astra-0-20)",
                  color: "var(--umbra-1000)",
                }}
              >
                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor">
                  <path d="M13.3 10.5c0-2.8 2.3-4.1 2.4-4.2-1.3-1.9-3.3-2.2-4-2.2-1.7-.2-3.3 1-4.2 1s-2.2-1-3.6-1c-1.9 0-3.6 1.1-4.5 2.7-1.9 3.4-.5 8.4 1.4 11.1.9 1.3 2 2.8 3.4 2.8 1.4-.1 1.9-.9 3.6-.9s2.1.9 3.6.8c1.5 0 2.3-1.3 3.2-2.7 1-1.5 1.4-3 1.5-3.1-.1 0-2.8-1.1-2.8-4.3zM10.7 2.7c.8-.9 1.3-2.2 1.1-3.5-1.1 0-2.4.7-3.2 1.6-.7.8-1.3 2.1-1.1 3.4 1.2.1 2.4-.6 3.2-1.5z" />
                </svg>
                App Store
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-3 py-2 border rounded-lg text-xs transition-opacity hover:opacity-70"
                style={{
                  borderColor: "var(--astra-0-20)",
                  color: "var(--umbra-1000)",
                }}
              >
                <svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor">
                  <path d="M1 1.2l7.4 7.4L1 16c-.4-.4-.6-1-.6-1.6V2.9c0-.7.2-1.3.6-1.7zM9.8 9.9l2-2L3.2.5c-.5-.3-1-.4-1.5-.3L9.8 9.9zm0-1.2L1.7 .3C2.2.1 2.8.2 3.2.5l8.6 5L9.8 8.7zM12.5 7.8L15 9.2c.6.3.9.9.9 1.5s-.3 1.2-.9 1.5l-2.5 1.4-2.2-2.2 2.2-2.6z" />
                </svg>
                Google Play
              </a>
            </div>
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
                    <a
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-70"
                      style={{ color: "var(--umbra-1000)" }}
                    >
                      {link.label}
                    </a>
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
            © 2026 Perplexity
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs transition-opacity hover:opacity-70"
              style={{ color: "var(--dark-text-muted)" }}
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs transition-opacity hover:opacity-70"
              style={{ color: "var(--dark-text-muted)" }}
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
