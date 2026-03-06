"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Stack", href: "/stack" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      // Switch to dark theme when over dark sections (Unifies, GetStarted, Footer)
      const unifiesEl = document.getElementById("unifies");
      const getStartedEl = document.getElementById("get-started");
      const footerEl = document.getElementById("footer");

      let isDark = false;
      [unifiesEl, getStartedEl, footerEl].forEach((el) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 64 && rect.bottom > 64) isDark = true;
        }
      });
      setDark(isDark);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = dark ? "text-[#d6d5d4]" : "text-[#271a00]";
  const borderColor = dark ? "border-[rgba(255,255,255,0.12)]" : "border-[rgba(39,25,0,0.1)]";
  const bgColor = scrolled
    ? dark
      ? "bg-[rgba(0,0,0,0.85)] backdrop-blur-md"
      : "bg-[rgba(250,248,245,0.85)] backdrop-blur-md"
    : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgColor} border-b ${borderColor}`}
      style={{ height: "var(--nav-height)" }}
    >
      <div
        className="mx-auto flex items-center justify-between px-6 h-full"
        style={{ maxWidth: "var(--page-width)" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span
            className={`text-2xl font-light tracking-tight ${textColor}`}
            style={{ fontFamily: "var(--nimbus-font-serif)" }}
          >
            Wedge
          </span>
          {/* Wedge triangle mark */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-1">
            <polygon
              points="10,2 18,18 2,18"
              fill={dark ? "#d6d5d4" : "#271a00"}
              opacity="0.8"
            />
          </svg>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:opacity-70 ${textColor}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`ml-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              dark
                ? "bg-[#d6d5d4] text-[#171615] hover:bg-[#d6d5d4cc]"
                : "bg-[#271a00] text-[#faf8f5] hover:bg-[#271a00cc]"
            }`}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-2 ${textColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 transition-all duration-300 ${
              dark ? "bg-[#d6d5d4]" : "bg-[#271a00]"
            } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 transition-all duration-300 ${
              dark ? "bg-[#d6d5d4]" : "bg-[#271a00]"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 transition-all duration-300 ${
              dark ? "bg-[#d6d5d4]" : "bg-[#271a00]"
            } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`md:hidden px-6 py-4 flex flex-col gap-4 border-t ${borderColor} ${
            dark ? "bg-[#000]" : "bg-[#faf8f5]"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium ${textColor}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold text-center ${
              dark
                ? "bg-[#d6d5d4] text-[#171615]"
                : "bg-[#271a00] text-[#faf8f5]"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
