import { supabase, type Provider } from "@/lib/supabase";
import SubpageNavbar from "@/components/SubpageNavbar";
import Footer from "@/components/Footer";
import TeamGrid from "./TeamGrid";

async function getProviders(): Promise<Provider[]> {
  const { data, error } = await supabase
    .from("providers")
    .select("*")
    .eq("is_hidden", false)
    .eq("is_active", true)
    .order("reviews", { ascending: false });

  if (error) {
    console.error("Error fetching providers:", error);
    return [];
  }
  return data ?? [];
}

export default async function TeamPage() {
  const providers = await getProviders();

  return (
    <main style={{ background: "var(--astra-200)" }}>
      <SubpageNavbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto" style={{ maxWidth: "72rem" }}>
          <div>
            <p
              className="text-xs font-mono tracking-[0.3em] uppercase mb-6"
              style={{ color: "var(--astra-2000-60)" }}
            >
              COLLECTIVE
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
              The Collective.
            </h1>
            <p
              className="mt-6 text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--astra-2000-60)", maxWidth: "36rem" }}
            >
              Experts across design, engineering, product, and
              more — ready to help you level up.
            </p>
          </div>
        </div>
      </section>

      <TeamGrid providers={providers} />

      <Footer />
    </main>
  );
}
