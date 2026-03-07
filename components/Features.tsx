"use client";

import { motion } from "framer-motion";

const features = [
  {
    num: "01",
    title: "Workflow Automation",
    description:
      "We find the repetitive, soul-crushing processes your team does every day and replace them with AI-powered workflows that run themselves. Intake forms, data processing, report generation — all on autopilot.",
    image:
      "https://images.unsplash.com/photo-1612885594304-ca622fff47e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODAzOTJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGxpZ2h0JTIwbWluaW1hbHxlbnwwfDB8fHwxNzcyODM0NTczfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    num: "02",
    title: "Custom AI Tools",
    description:
      "Not chatbot wrappers. Real tools built for your specific business logic. Proposal generators, competitive intelligence dashboards, client matching engines — whatever your wedge demands.",
    image:
      "https://images.unsplash.com/photo-1758678527840-12d011853eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODAzOTJ8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGxpZ2h0JTIwbWluaW1hbHxlbnwwfDB8fHwxNzcyODM0NTczfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    num: "03",
    title: "Integration Architecture",
    description:
      "Your tools don't talk to each other. We fix that. CRM to invoicing, intake to scheduling, email to project management — we wire AI into the connective tissue of your business.",
    image:
      "https://images.unsplash.com/photo-1558932129-58b0867c4985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODAzOTJ8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMGxpZ2h0JTIwbWluaW1hbHxlbnwwfDB8fHwxNzcyODM0NTczfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    num: "04",
    title: "Team Acceleration",
    description:
      "Your people are the asset. We level them up with AI-native tools and workflows so they produce 3x the output without 3x the burnout. Think force multiplier, not replacement.",
    image:
      "https://images.unsplash.com/photo-1612885488634-0a698136fed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODAzOTJ8MHwxfHNlYXJjaHw0fHxhYnN0cmFjdCUyMGxpZ2h0JTIwbWluaW1hbHxlbnwwfDB8fHwxNzcyODM0NTczfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

function FeatureRow({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        index > 0 ? "mt-24 lg:mt-32" : ""
      }`}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
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
            CAPABILITIES
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
            What you can build
            <br />
            with Outpost
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
