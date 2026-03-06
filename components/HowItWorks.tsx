"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Give Computer tasks",
    description:
      "Describe what you need in natural language. Computer understands complex, multi-step workflows — from research to code to deployment.",
    bgImage:
      "https://res.cloudinary.com/pplx/image/upload/t_w2400/pplx-web/Computer/images/step-bg-01.webp",
    screenshot:
      "https://pplx-res.cloudinary.com/image/upload/t_w2400/pplx-web/Computer/images/step-01.webp",
  },
  {
    num: "02",
    title: "Computer works",
    description:
      "Watch as Computer browses the web, writes code, connects APIs, and executes your workflow — autonomously running for hours or days.",
    bgImage:
      "https://res.cloudinary.com/pplx/image/upload/t_w2400/pplx-web/Computer/images/step-bg-02.webp",
    screenshot:
      "https://pplx-res.cloudinary.com/image/upload/t_w2400/pplx-web/Computer/images/step-02.webp",
  },
  {
    num: "03",
    title: "Iterate and improve",
    description:
      "Review results, provide feedback, and refine. Computer learns from your preferences and improves over time.",
    bgImage:
      "https://res.cloudinary.com/pplx/image/upload/t_w2400/pplx-web/Computer/images/step-bg-03.webp",
    screenshot:
      "https://pplx-res.cloudinary.com/image/upload/t_w2400/pplx-web/Computer/images/step-03.webp",
  },
];

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.92, 0.85]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [0, 2, 6]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.4]);

  return (
    <motion.div
      ref={cardRef}
      className="sticky overflow-hidden rounded-3xl"
      style={{
        top: `calc(var(--nav-height) + ${index * 24}px + 1rem)`,
        height: "calc(100vh - var(--nav-height) - 4rem)",
        scale,
        filter: blur as unknown as string,
        opacity,
        zIndex: index,
      }}
    >
      {/* Background image */}
      <img
        src={step.bgImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
        <div className="max-w-2xl">
          <span
            className="text-xs font-mono tracking-widest mb-4 block"
            style={{ color: "var(--dark-text-muted)" }}
          >
            {step.num}
          </span>
          <h3
            className="mb-4"
            style={{
              fontFamily: "var(--nimbus-font-serif)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "var(--dark-text)",
              letterSpacing: "-0.02em",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            {step.title}
          </h3>
          <p
            className="text-base md:text-lg leading-relaxed max-w-lg"
            style={{ color: "var(--dark-text-muted)" }}
          >
            {step.description}
          </p>
        </div>

        {/* Screenshot overlay */}
        <div className="absolute right-8 top-1/4 bottom-1/4 w-[45%] hidden lg:block">
          <img
            src={step.screenshot}
            alt={step.title}
            className="w-full h-full object-contain object-right-bottom rounded-xl"
            style={{
              filter: "drop-shadow(0 8px 40px rgba(0,0,0,0.3))",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative px-4 md:px-6"
      style={{ background: "var(--astra-200)" }}
    >
      {/* Section header */}
      <div className="pt-32 pb-8 text-center">
        <p
          className="text-xs font-mono tracking-[0.3em] uppercase mb-6"
          style={{ color: "var(--astra-2000-60)" }}
        >
          STEPS
        </p>
        <h2
          style={{
            fontFamily: "var(--nimbus-font-serif)",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            color: "var(--astra-2000)",
            letterSpacing: "-0.02em",
            fontWeight: 400,
          }}
        >
          How it works
        </h2>
      </div>

      {/* Stacking cards */}
      <div className="mx-auto pb-32" style={{ maxWidth: "var(--page-width)" }}>
        {steps.map((step, i) => (
          <div key={step.num} style={{ height: "100vh" }}>
            <StepCard step={step} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
