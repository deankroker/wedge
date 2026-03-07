"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import OutpostIcon from "@/components/OutpostIcon";

const navLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "How It Works", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "About", href: "/about" },
];

export default function SubpageNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[rgba(39,25,0,0.1)] ${
        scrolled
          ? "bg-[rgba(250,248,245,0.85)] backdrop-blur-md"
          : "bg-transparent"
      }`}
      style={{ height: "var(--nav-height)" }}
    >
      <div
        className="mx-auto flex items-center justify-between px-6 h-full"
        style={{ maxWidth: "var(--page-width)" }}
      >
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <OutpostIcon size={18} fill="#271a00" />
          <span
            className="text-2xl font-light tracking-tight text-[#271a00]"
            style={{ fontFamily: "var(--nimbus-font-serif)" }}
          >
            Outpost
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors hover:opacity-70 text-[#271a00]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/pricing"
            className="ml-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors bg-[#271a00] text-[#faf8f5] hover:bg-[#271a00cc]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
