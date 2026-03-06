"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const paragraphs = [
  {
    id: "p1",
    content: (
      <>
        <ComputerIcon /> Perplexity Computer is a general-purpose digital worker
        that operates the same interfaces you do.
      </>
    ),
  },
  {
    id: "p2",
    content: (
      <>
        Computer creates and executes entire workflows, capable of running for
        hours or even months.
      </>
    ),
  },
  {
    id: "p3",
    content: (
      <>
        Chat answers. Agents do tasks.{" "}
        <strong style={{ fontStyle: "italic" }}>Computer works.</strong>
      </>
    ),
  },
];

function ComputerIcon() {
  const iconRef = useRef<SVGSVGElement>(null);
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!iconRef.current) return;
      const rect = iconRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 2;
      const x = dist > 0 ? (dx / dist) * Math.min(dist / 80, maxDist) : 0;
      const y = dist > 0 ? (dy / dist) * Math.min(dist / 80, maxDist) : 0;
      setEyePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <span className="inline-block align-middle mr-2" style={{ lineHeight: 1 }}>
      <svg
        ref={iconRef}
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "inline-block", verticalAlign: "middle" }}
      >
        {/* Monitor body */}
        <rect
          x="4"
          y="6"
          width="36"
          height="24"
          rx="3"
          fill="var(--astra-2000)"
        />
        {/* Screen */}
        <rect x="7" y="9" width="30" height="18" rx="1.5" fill="#fff" />
        {/* Left eye */}
        <circle cx="15" cy="18" r="3.5" fill="var(--astra-2000)" />
        <circle
          cx={15 + eyePos.x}
          cy={18 + eyePos.y}
          r="1.5"
          fill="white"
        />
        {/* Right eye */}
        <circle cx="29" cy="18" r="3.5" fill="var(--astra-2000)" />
        <circle
          cx={29 + eyePos.x}
          cy={18 + eyePos.y}
          r="1.5"
          fill="white"
        />
        {/* Stand */}
        <rect x="18" y="30" width="8" height="6" rx="1" fill="var(--astra-2000)" />
        {/* Base */}
        <rect x="13" y="36" width="18" height="3" rx="1.5" fill="var(--astra-2000)" />
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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref}>
      <motion.p
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
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
      </motion.p>
    </div>
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
