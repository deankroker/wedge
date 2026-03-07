"use client";

import { motion } from "framer-motion";
import SubpageNavbar from "@/components/SubpageNavbar";
import Footer from "@/components/Footer";

const tools = [
  {
    name: "Claude Code",
    category: "Agentic Coding",
    description:
      "Anthropic's agentic coding system. Give it a task, it writes the code, runs the tests, debugs the failures, and ships the feature. We use this to build entire applications in hours that would take traditional teams weeks.",
    capability: "Full-stack development at 10x speed",
  },
  {
    name: "Agentic Harnesses",
    category: "Orchestration",
    description:
      "Custom orchestration layers that coordinate multiple AI agents working in parallel. One agent researches, another designs, another codes, another tests — all supervised by a master agent that keeps everything aligned.",
    capability: "Parallel AI workflows with human oversight",
  },
  {
    name: "pencil.dev",
    category: "Design",
    description:
      "Modern design paradigms that bridge the gap between design intent and working software. We use pencil.dev to rapidly prototype interfaces that ship as production code — not Figma files that sit in a folder.",
    capability: "Design-to-code in a single workflow",
  },
  {
    name: "OpenClaw",
    category: "Automation",
    description:
      "An AI chief of staff that manages your digital infrastructure. Monitors, schedules, coordinates, and executes — it's the connective tissue between all your tools and teams.",
    capability: "Autonomous operations and coordination",
  },
  {
    name: "AutoForge",
    category: "Autonomous Building",
    description:
      "Point it at a feature spec and walk away. AutoForge autonomously designs, builds, tests, and deploys features with minimal human intervention. Perfect for the backlog items your team never gets to.",
    capability: "Set-and-forget feature development",
  },
  {
    name: "Cursor",
    category: "AI-Native IDE",
    description:
      "The IDE rebuilt around AI. Every keystroke is augmented. Every refactor is assisted. We use Cursor for the hands-on work where human creativity meets AI speed — the craft layer of what we build.",
    capability: "AI-augmented development environment",
  },
  {
    name: "Linear",
    category: "Project Management",
    description:
      "The fastest project management tool in existence. We run every engagement through Linear — you get real-time visibility into what we're building, what's shipping, and what's next.",
    capability: "Real-time project visibility and tracking",
  },
  {
    name: "GitHub Copilot",
    category: "Pair Programming",
    description:
      "AI that thinks alongside you as you type. Copilot handles the boilerplate, suggests the patterns, and catches the bugs before they happen. It's like having a senior engineer looking over your shoulder 24/7.",
    capability: "Inline AI pair programming",
  },
];

export default function StackPage() {
  return (
    <main style={{ background: "var(--astra-200)" }}>
      <SubpageNavbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto" style={{ maxWidth: "72rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p
              className="text-xs font-mono tracking-[0.3em] uppercase mb-6"
              style={{ color: "var(--astra-2000-60)" }}
            >
              THE STACK
            </p>
            <h1
              style={{
                fontFamily: "var(--nimbus-font-serif)",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                color: "var(--astra-2000)",
                letterSpacing: "-0.02em",
                fontWeight: 400,
                lineHeight: 1.05,
              }}
            >
              The art of
              <br />
              the possible.
            </h1>
            <p
              className="mt-6 text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--astra-2000-60)", maxWidth: "40rem" }}
            >
              This is the toolkit we use to build things that shouldn&apos;t be possible yet.
              Every tool is bleeding-edge. Every workflow is battle-tested. This is how we
              ship in days what used to take months.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tool Grid */}
      <section className="px-6 pb-32">
        <div
          className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          style={{ maxWidth: "72rem" }}
        >
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: (i % 2) * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="rounded-xl p-8"
              style={{
                background: "var(--astra-0)",
                border: "1px solid var(--astra-2000-8)",
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span
                    className="text-xs font-mono tracking-widest uppercase block mb-2"
                    style={{ color: "var(--astra-2000-40)" }}
                  >
                    {tool.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--nimbus-font-serif)",
                      fontSize: "1.5rem",
                      color: "var(--astra-2000)",
                      fontWeight: 400,
                    }}
                  >
                    {tool.name}
                  </h3>
                </div>
                {/* Decorative wedge */}
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-1">
                  <polygon points="10,2 18,18 2,18" fill="var(--astra-2000)" opacity="0.08" />
                </svg>
              </div>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--astra-2000-60)" }}
              >
                {tool.description}
              </p>
              <div
                className="pt-4"
                style={{ borderTop: "1px solid var(--astra-2000-8)" }}
              >
                <span
                  className="text-xs font-mono"
                  style={{ color: "var(--astra-2000-40)" }}
                >
                  →
                </span>{" "}
                <span
                  className="text-xs font-medium"
                  style={{ color: "var(--astra-2000-80)" }}
                >
                  {tool.capability}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom callout */}
      <section className="px-6 pb-20">
        <div className="mx-auto text-center" style={{ maxWidth: "36rem" }}>
          <p
            className="text-lg leading-relaxed"
            style={{
              fontFamily: "var(--nimbus-font-serif)",
              color: "var(--astra-2000)",
            }}
          >
            &ldquo;We don&apos;t demo tools. We demo what tools make possible.&rdquo;
          </p>
          <a
            href="mailto:hi@outpost.chat?subject=Show%20me%20the%20art%20of%20the%20possible"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80"
            style={{
              background: "var(--astra-2000)",
              color: "var(--astra-200)",
            }}
          >
            See it in action
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
