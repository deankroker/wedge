"use client";

import { motion } from "framer-motion";

const paragraphs = [
  {
    id: "p1",
    content: (
      <>
        <OutpostIcon /> <strong>You have an idea for an app.</strong> Outpost turns it
        into reality.
      </>
    ),
  },
  {
    id: "p2",
    content: (
      <>
        Outpost doesn&apos;t make decks about &ldquo;digital transformation.&rdquo; You describe
        what you want in plain English, and we build it — a real webapp, wired to
        GitHub and Vercel, ready to ship.
      </>
    ),
  },
  {
    id: "p3",
    content: (
      <>
        You build with Outpost.{" "}
        <strong style={{ fontStyle: "italic" }}>We handle the infrastructure.</strong>
      </>
    ),
  },
];

function OutpostIcon() {
  return (
    <span className="inline-block align-middle mr-2" style={{ lineHeight: 1 }}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "inline-block", verticalAlign: "middle" }}
      >
        <circle
          cx="22"
          cy="22"
          r="18"
          fill="none"
          stroke="var(--astra-2000)"
          strokeWidth="2.5"
        />
        <circle
          cx="22"
          cy="22"
          r="10"
          fill="var(--astra-2000)"
          opacity="0.15"
        />
        <circle
          cx="22"
          cy="22"
          r="4"
          fill="var(--astra-2000)"
          opacity="0.4"
        />
      </svg>
    </span>
  );
}

function ManifestoParagraph({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <p
        className="leading-tight"
        style={{
          fontFamily: "var(--nimbus-font-serif)",
          fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)",
          color: "var(--astra-2000)",
          letterSpacing: "-0.01em",
          fontWeight: 400,
          lineHeight: 1.4,
        }}
      >
        {children}
      </p>
    </motion.div>
  );
}

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="py-32 px-6"
      style={{ background: "#fffdf9" }}
    >
      <div
        className="mx-auto flex flex-col gap-12"
        style={{ maxWidth: "32rem" }}
      >
        {paragraphs.map((p, i) => (
          <ManifestoParagraph key={p.id} delay={i * 0.1}>
            {p.content}
          </ManifestoParagraph>
        ))}
      </div>
    </section>
  );
}
