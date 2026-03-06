"use client";

import { motion } from "framer-motion";

const paragraphs = [
  {
    id: "p1",
    content: (
      <>
        <WedgeIcon /> <strong>Your business wasn&apos;t built for AI.</strong> That&apos;s exactly
        why it needs it.
      </>
    ),
  },
  {
    id: "p2",
    content: (
      <>
        Wedge doesn&apos;t make decks about &ldquo;digital transformation.&rdquo; We build the actual
        tools — custom AI systems that slot into your existing workflows and make
        everything run faster.
      </>
    ),
  },
  {
    id: "p3",
    content: (
      <>
        Most consultants sell you a roadmap.{" "}
        <strong style={{ fontStyle: "italic" }}>We ship the product.</strong>
      </>
    ),
  },
];

function WedgeIcon() {
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
        {/* Wedge / triangle element */}
        <polygon
          points="22,4 40,38 4,38"
          fill="none"
          stroke="var(--astra-2000)"
          strokeWidth="2.5"
        />
        <polygon
          points="22,14 32,34 12,34"
          fill="var(--astra-2000)"
          opacity="0.15"
        />
        <line x1="22" y1="4" x2="22" y2="38" stroke="var(--astra-2000)" strokeWidth="1" opacity="0.3" />
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
          fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
          color: "var(--astra-2000)",
          letterSpacing: "-0.01em",
          fontWeight: 400,
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
      style={{ background: "var(--astra-200)" }}
    >
      <div
        className="mx-auto flex flex-col gap-16"
        style={{ maxWidth: "72rem" }}
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
