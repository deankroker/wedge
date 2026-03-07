"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Provider } from "@/lib/supabase";

const fieldColors: Record<string, string> = {
  Design: "#7c3aed",
  Engineering: "#2563eb",
  Product: "#059669",
  Marketing: "#d97706",
  Sales: "#dc2626",
};

export default function TeamGrid({ providers }: { providers: Provider[] }) {
  return (
    <section className="px-6 pb-32">
      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        style={{ maxWidth: "72rem" }}
      >
        {providers.map((provider, i) => (
          <motion.div
            key={provider.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          >
            <Link
              href={`/${provider.handle.toLowerCase()}`}
              className="flex flex-col rounded-xl p-8 h-full transition-all duration-200 hover:shadow-lg group"
              style={{
                background: "var(--astra-0)",
                border: "1px solid var(--astra-2000-8)",
              }}
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full mb-6 overflow-hidden flex items-center justify-center text-2xl font-light"
                style={{
                  background: "var(--astra-300)",
                  color: "var(--astra-2000-40)",
                  fontFamily: "var(--nimbus-font-serif)",
                }}
              >
                {provider.image_url ? (
                  <img
                    src={provider.image_url}
                    alt={provider.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  provider.name[0]
                )}
              </div>

              <h3
                style={{
                  fontFamily: "var(--nimbus-font-serif)",
                  fontSize: "1.5rem",
                  color: "var(--astra-2000)",
                  fontWeight: 400,
                }}
              >
                {provider.name}
              </h3>

              <p
                className="text-xs font-mono tracking-widest uppercase mt-1 mb-2"
                style={{ color: "var(--astra-2000-40)" }}
              >
                {provider.work_position}
              </p>

              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full"
                  style={{
                    background: `${fieldColors[provider.primary_field] ?? "#6b7280"}15`,
                    color: fieldColors[provider.primary_field] ?? "#6b7280",
                  }}
                >
                  {provider.primary_field}
                </span>
                {provider.reviews > 0 && (
                  <span
                    className="text-xs"
                    style={{ color: "var(--astra-2000-40)" }}
                  >
                    {provider.reviews} happy customers
                  </span>
                )}
              </div>

              {provider.details && (
                <p
                  className="text-sm leading-relaxed line-clamp-3"
                  style={{ color: "var(--astra-2000-60)" }}
                >
                  {provider.details}
                </p>
              )}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
