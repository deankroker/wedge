"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Give Computer tasks",
    description:
      "Prompt in natural language. Computer deploys subagents to handle the rest.",
    bgImage:
      "https://res.cloudinary.com/pplx/image/upload/t_w2400/pplx-web/Computer/images/step-bg-01.webp",
    screenshot:
      "https://pplx-res.cloudinary.com/image/upload/t_w2400/pplx-web/Computer/images/step-01.webp",
  },
  {
    num: "02",
    title: "Computer works",
    description:
      "Computer will browse, research, create, and connect your tools automatically and in the background.",
    bgImage:
      "https://res.cloudinary.com/pplx/image/upload/t_w2400/pplx-web/Computer/images/step-bg-02.webp",
    screenshot:
      "https://pplx-res.cloudinary.com/image/upload/t_w2400/pplx-web/Computer/images/step-02.webp",
  },
  {
    num: "03",
    title: "Iterate and improve",
    description:
      "Keep iterating and guiding Computer as it works. Or start Computer on a new task.",
    bgImage:
      "https://res.cloudinary.com/pplx/image/upload/t_w2400/pplx-web/Computer/images/step-bg-03.webp",
    screenshot:
      "https://pplx-res.cloudinary.com/image/upload/t_w2400/pplx-web/Computer/images/step-03.webp",
  },
];

function StepCard({
  step,
  index,
  total,
}: {
  step: (typeof steps)[0];
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  const isLast = index === total - 1;
  const cardScale = useTransform(
    scrollYProgress,
    [0, 1],
    isLast ? [1, 1] : [1, 0.92]
  );

  return (
    <div
      ref={cardRef}
      style={{
        marginBottom: isLast ? 0 : "5rem",
      }}
    >
      <motion.div
        className="overflow-hidden"
        style={{
          position: isLast ? "relative" : "sticky",
          top: isLast ? "auto" : "2.5rem",
          zIndex: index + 1,
          scale: cardScale,
          transformOrigin: "50%",
          willChange: "transform",
          background: "var(--astra-0)",
          borderRadius: "0.75rem",
          width: "100%",
          maxHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Text content on top */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.5rem",
            maxWidth: "30rem",
            padding: "1.5rem 2.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--nimbus-font-mono)",
              color: "var(--astra-2000-60)",
              fontSize: "0.75rem",
              fontWeight: 400,
              letterSpacing: "0.05em",
            }}
          >
            {step.num}
          </span>
          <h3
            style={{
              fontFamily: "var(--nimbus-font-serif)",
              color: "var(--astra-2000)",
              fontSize: "1.5rem",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: 0,
              margin: 0,
            }}
          >
            {step.title}
          </h3>
          <p
            style={{
              fontFamily: "var(--nimbus-font-sans)",
              color: "var(--astra-2000-60)",
              fontSize: "0.9375rem",
              fontWeight: 400,
              lineHeight: 1.5,
              maxWidth: "30rem",
              margin: 0,
            }}
          >
            {step.description}
          </p>
        </div>

        {/* Image area (16:9) with bg image + screenshot overlay */}
        <div
          style={{
            aspectRatio: "16/9",
            background: "var(--astra-2000-8)",
            width: "100%",
            position: "relative",
            overflow: "hidden",
            flexShrink: 1,
            minHeight: 0,
          }}
        >
          {/* Background nature image */}
          <img
            src={step.bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Screenshot overlay */}
          <div
            style={{
              position: "absolute",
              inset: "5% 2.8125%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pointerEvents: "none",
            }}
          >
            <img
              src={step.screenshot}
              alt={step.title}
              style={{
                objectFit: "contain",
                borderRadius: "0.75rem",
                width: "auto",
                maxWidth: "100%",
                height: "auto",
                maxHeight: "100%",
                display: "block",
                filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.2))",
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative"
      style={{ background: "var(--astra-200)", zIndex: 2 }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: "var(--page-width)",
          padding: "5rem 2.5rem 0",
        }}
      >
        {/* Section header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "14.5px",
            maxWidth: "400px",
            marginBottom: "2.5rem",
          }}
        >
          <span
            style={{
              color: "var(--astra-2000-60)",
              fontFamily: "var(--nimbus-font-mono)",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "100%",
            }}
          >
            STEPS
          </span>
          <h2
            style={{
              fontFamily: "var(--nimbus-font-serif)",
              fontSize: "48px",
              fontWeight: 400,
              color: "var(--astra-2000)",
              lineHeight: 1.12,
              margin: 0,
            }}
          >
            How it works
          </h2>
        </div>

        {/* Step cards stack */}
        <div style={{ width: "100%", position: "relative" }}>
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} total={steps.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
