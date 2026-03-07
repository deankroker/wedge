"use client";

import { useState, useEffect, FormEvent } from "react";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getStripe } from "@/lib/stripe-client";
import { supabase, type Provider } from "@/lib/supabase";
import ProjectGrid, { type Project } from "@/components/ProjectGrid";
import { useRouter } from "next/navigation";

type Plan = "launch" | "scale" | "custom" | "consulting";

const PLAN_INFO: Record<Plan, { label: string; price: string; tagline: string }> = {
  launch: { label: "Launch", price: "$500/mo", tagline: "Up to 2 projects · Self-service portal · 24hr SLA" },
  scale: { label: "Scale", price: "$2,500/mo", tagline: "Up to 5 projects · 5hrs/mo hands-on support · Full collective access" },
  custom: { label: "Custom", price: "Custom pricing", tagline: "Let's design something that fits your team" },
  consulting: { label: "Starter Engagement", price: "", tagline: "Schedule with any of our pros — from the CEO to specialists." },
};

const HOURS_PRICING: Record<number, string> = {
  5: "$3,000",
  10: "$5,500",
  20: "$10,000",
};

const MAX_PROJECTS: Record<Plan, number> = {
  launch: 2,
  scale: 5,
  custom: 0,
  consulting: 0,
};

function PaymentForm({
  plan,
  hours,
  provider,
  providers,
}: {
  plan: Plan;
  hours?: number;
  provider?: Provider;
  providers?: Provider[];
}) {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projects, setProjects] = useState<Project[]>([{ name: "", description: "" }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const maxProjects = MAX_PROJECTS[plan];
  const isCustom = plan === "custom";
  const isConsulting = plan === "consulting";
  const needsPayment = !isCustom;

  const firstName = provider?.name.split(" ")[0];
  const heading = provider
    ? `Get ready to work with ${firstName}`
    : isConsulting
    ? "Book a starter engagement"
    : `Get started with ${PLAN_INFO[plan].label}`;

  const subheading = isConsulting && hours
    ? `${hours} hours · ${HOURS_PRICING[hours]}`
    : PLAN_INFO[plan].price;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Insert engagement row
      const { data: engagement, error: insertError } = await supabase
        .from("engagements")
        .insert({
          plan,
          provider_handle: provider?.handle.toLowerCase() ?? null,
          hours: isConsulting ? hours : null,
          name,
          email,
          company: company || null,
          projects: maxProjects > 0 ? projects.filter((p) => p.name.trim()) : null,
          status: isCustom ? "submitted" : "pending",
        })
        .select("id")
        .single();

      if (insertError) throw new Error(insertError.message);

      if (isCustom) {
        router.push("/get-started/success?type=custom");
        return;
      }

      if (!stripe || !elements) {
        throw new Error("Stripe not loaded");
      }

      const { error: stripeError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/get-started/success?engagement=${engagement.id}`,
        },
      });

      if (stripeError) {
        // Update engagement status to reflect failure (leave as pending)
        setError(stripeError.message ?? "Payment failed");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Header */}
      <div>
        <h1
          style={{
            fontFamily: "var(--nimbus-font-serif)",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            color: "var(--astra-2000)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          {heading}
        </h1>
        <p className="mt-2 text-lg" style={{ color: "var(--astra-2000-60)" }}>
          {subheading}
        </p>
        <p className="mt-1 text-sm" style={{ color: "var(--astra-2000-40)" }}>
          {PLAN_INFO[plan].tagline}
        </p>
      </div>

      {/* Consulting: provider avatars */}
      {isConsulting && providers && providers.length > 0 && (
        <div>
          <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: "var(--astra-2000-40)" }}>
            Our collective
          </p>
          <div className="flex -space-x-2">
            {providers.map((p) => (
              <div
                key={p.id}
                className="w-9 h-9 rounded-full overflow-hidden border-2 flex items-center justify-center text-xs font-medium"
                style={{
                  borderColor: "var(--astra-200)",
                  background: "var(--astra-300)",
                  color: "var(--astra-2000-40)",
                }}
                title={p.name}
              >
                {p.image_url ? (
                  <img src={p.image_url} alt={p.name} className="w-full h-full object-cover" />
                ) : (
                  p.name[0]
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact fields */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-mono tracking-widest uppercase mb-2" style={{ color: "var(--astra-2000-40)" }}>
            Name *
          </label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
            style={{
              background: "var(--astra-0)",
              border: "1px solid var(--astra-2000-8)",
              color: "var(--astra-2000)",
            }}
          />
        </div>
        <div>
          <label className="block text-xs font-mono tracking-widest uppercase mb-2" style={{ color: "var(--astra-2000-40)" }}>
            Email *
          </label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
            style={{
              background: "var(--astra-0)",
              border: "1px solid var(--astra-2000-8)",
              color: "var(--astra-2000)",
            }}
          />
        </div>
        <div>
          <label className="block text-xs font-mono tracking-widest uppercase mb-2" style={{ color: "var(--astra-2000-40)" }}>
            Company
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
            style={{
              background: "var(--astra-0)",
              border: "1px solid var(--astra-2000-8)",
              color: "var(--astra-2000)",
            }}
          />
        </div>
      </div>

      {/* Project Grid */}
      {maxProjects > 0 && (
        <ProjectGrid projects={projects} maxProjects={maxProjects} onChange={setProjects} />
      )}

      {/* Stripe Payment Element */}
      {needsPayment && (
        <div
          className="rounded-lg p-6"
          style={{
            background: "var(--astra-0)",
            border: "1px solid var(--astra-2000-8)",
          }}
        >
          <h3 className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "var(--astra-2000-40)" }}>
            Payment
          </h3>
          <PaymentElement
            options={{
              layout: "tabs",
              wallets: { applePay: "auto", googlePay: "auto" },
              paymentMethodOrder: ["apple_pay", "google_pay", "card"],
            }}
          />
        </div>
      )}

      {/* Error */}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading || (needsPayment && (!stripe || !elements))}
        className="w-full py-4 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 disabled:opacity-50"
        style={{
          background: "var(--astra-2000)",
          color: "var(--astra-200)",
        }}
      >
        {loading ? "Processing..." : isCustom ? "Submit Request" : "Complete Purchase"}
      </button>
    </form>
  );
}

export default function IntakeForm({
  plan,
  provider,
  hours,
  providers,
}: {
  plan: Plan;
  provider?: Provider;
  hours?: number;
  providers?: Provider[];
}) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const isCustom = plan === "custom";

  useEffect(() => {
    if (isCustom) return;

    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan, hours }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          setLoadError(data.error || "Failed to initialize payment");
        }
      })
      .catch(() => setLoadError("Failed to connect to payment service"));
  }, [plan, hours, isCustom]);

  if (loadError) {
    return (
      <div className="text-center py-20">
        <p className="text-sm" style={{ color: "var(--astra-2000-60)" }}>{loadError}</p>
      </div>
    );
  }

  // Custom plan doesn't need Stripe
  if (isCustom) {
    return <PaymentForm plan={plan} provider={provider} providers={providers} />;
  }

  if (!clientSecret) {
    return (
      <div className="text-center py-20">
        <p className="text-sm" style={{ color: "var(--astra-2000-40)" }}>Loading payment...</p>
      </div>
    );
  }

  return (
    <Elements
      stripe={getStripe()}
      options={{
        clientSecret,
        appearance: {
          theme: "flat",
          variables: {
            colorPrimary: "#1a1a1a",
            colorBackground: "#ffffff",
            fontFamily: "system-ui, sans-serif",
            borderRadius: "8px",
          },
        },
      }}
    >
      <PaymentForm plan={plan} hours={hours} provider={provider} providers={providers} />
    </Elements>
  );
}
