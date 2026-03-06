"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    num: "01",
    title: "Background tasks and continuous monitoring",
    description:
      "Set up long-running tasks that work while you sleep. Computer monitors websites, tracks changes, and alerts you when something important happens — for hours, days, or months.",
    image:
      "https://pplx-res.cloudinary.com/image/upload/t_w2400/pplx-web/Computer/images/feature-task-monitoring.webp",
  },
  {
    num: "02",
    title: "Parallel research and browser automation",
    description:
      "Computer runs multiple research threads simultaneously, browsing the web, extracting data, and synthesizing findings — like having a team of research assistants.",
    image:
      "https://pplx-res.cloudinary.com/image/upload/t_w2400/pplx-web/Computer/images/feature-research-browse.webp",
  },
  {
    num: "03",
    title: "Connect tools and apps",
    description:
      "Bridge your existing tools without complex integrations. Computer works across Slack, GitHub, Google Workspace, databases, and APIs — just like you would.",
    image:
      "https://pplx-res.cloudinary.com/image/upload/t_w2400/pplx-web/Computer/images/feature-connect-tools.webp",
  },
  {
    num: "04",
    title: "Create and build",
    description:
      "From writing code and building dashboards to generating reports and designing workflows — Computer doesn't just plan, it builds.",
    image:
      "https://pplx-res.cloudinary.com/image/upload/t_w2400/pplx-web/Computer/images/feature-create-build.webp",
  },
];

function FeatureRow({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        index > 0 ? "mt-24 lg:mt-32" : ""
      }`}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Text */}
      <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <span
          className="text-xs font-mono tracking-widest mb-4 block"
          style={{ color: "var(--astra-2000-40)" }}
        >
          {feature.num}
        </span>
        <h3
          className="mb-6"
          style={{
            fontFamily: "var(--nimbus-font-serif)",
            fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
            color: "var(--astra-2000)",
            letterSpacing: "-0.015em",
            fontWeight: 400,
            lineHeight: 1.15,
          }}
        >
          {feature.title}
        </h3>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: "var(--astra-2000-60)", maxWidth: "32rem" }}
        >
          {feature.description}
        </p>
      </div>

      {/* Image */}
      <div
        className={`${isEven ? "lg:order-2" : "lg:order-1"} rounded-2xl overflow-hidden`}
        style={{
          background: "var(--astra-300)",
          boxShadow: "0 4px 24px rgba(39,25,0,0.06)",
        }}
      >
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="py-32 px-6"
      style={{ background: "var(--astra-200)" }}
    >
      <div className="mx-auto" style={{ maxWidth: "var(--page-width)" }}>
        {/* Section header */}
        <div className="mb-20">
          <p
            className="text-xs font-mono tracking-[0.3em] uppercase mb-6"
            style={{ color: "var(--astra-2000-60)" }}
          >
            FEATURES
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
            What Computer
            <br />
            does for you
          </h2>
        </div>

        {/* Feature rows */}
        {features.map((feature, i) => (
          <FeatureRow key={feature.num} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
}
