"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "We audit your workflows",
    description:
      "We map every process, bottleneck, and manual step in your operation. No assumptions — just honest analysis of where AI can actually move the needle.",
    bgImage:
      "https://images.unsplash.com/photo-1536736368159-ea9093d4a213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODAzOTJ8MHwxfHNlYXJjaHwxfHxwYWNpZmljJTIwbm9ydGh3ZXN0JTIwZm9yZXN0JTIwZm9nfGVufDB8MHx8fDE3NzI4MzQ1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    num: "02",
    title: "We build the wedge",
    description:
      "Custom AI tools designed for your exact workflows. Not off-the-shelf. Not a chatbot wrapper. Real software that your team actually uses — built in days, not months.",
    bgImage:
      "https://images.unsplash.com/photo-1572214856336-67e55541a3b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODAzOTJ8MHwxfHNlYXJjaHwyfHxwYWNpZmljJTIwbm9ydGh3ZXN0JTIwZm9yZXN0JTIwZm9nfGVufDB8MHx8fDE3NzI4MzQ1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    num: "03",
    title: "Your business runs faster",
    description:
      "The work that took your team days now takes hours. The decisions that required guesswork now have data. You keep the tools. We move on to the next wedge.",
    bgImage:
      "https://images.unsplash.com/photo-1550566609-7ff4a8dc23f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODAzOTJ8MHwxfHNlYXJjaHwzfHxwYWNpZmljJTIwbm9ydGh3ZXN0JTIwZm9yZXN0JTIwZm9nfGVufDB8MHx8fDE3NzI4MzQ1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
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

        {/* Image area (16:9) with bg image */}
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
            alt={step.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtle overlay with step number */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(0,0,0,0.2) 0%, transparent 60%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--nimbus-font-serif)",
                fontSize: "8rem",
                color: "rgba(250,248,245,0.12)",
                fontWeight: 300,
              }}
            >
              {step.num}
            </span>
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
            PROCESS
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
