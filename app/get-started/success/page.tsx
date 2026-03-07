"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import SubpageNavbar from "@/components/SubpageNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

function SuccessContent() {
  const searchParams = useSearchParams();
  const isCustom = searchParams.get("type") === "custom";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="text-center"
    >
      <div
        className="w-16 h-16 rounded-full mx-auto mb-8 flex items-center justify-center text-2xl"
        style={{ background: "var(--astra-300)", color: "var(--astra-2000)" }}
      >
        &#10003;
      </div>

      <h1
        style={{
          fontFamily: "var(--nimbus-font-serif)",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          color: "var(--astra-2000)",
          fontWeight: 400,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}
      >
        {isCustom ? "Request submitted" : "You're all set"}
      </h1>

      <p className="mt-4 text-lg" style={{ color: "var(--astra-2000-60)" }}>
        {isCustom
          ? "We'll review your request and get back to you within 24 hours."
          : "Payment confirmed. We'll send a welcome email with next steps shortly."}
      </p>

      <div className="mt-10 flex items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80"
          style={{
            background: "var(--astra-2000)",
            color: "var(--astra-200)",
          }}
        >
          Back to home
        </Link>
      </div>
    </motion.div>
  );
}

export default function SuccessPage() {
  return (
    <main style={{ background: "var(--astra-200)" }}>
      <SubpageNavbar />
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto" style={{ maxWidth: "42rem" }}>
          <Suspense fallback={null}>
            <SuccessContent />
          </Suspense>
        </div>
      </section>
      <Footer />
    </main>
  );
}
