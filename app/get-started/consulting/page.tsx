import SubpageNavbar from "@/components/SubpageNavbar";
import Footer from "@/components/Footer";
import IntakeForm from "@/components/IntakeForm";
import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";

const VALID_HOURS = [5, 10, 20] as const;

async function getActiveProviders() {
  const { data } = await supabase
    .from("providers")
    .select("*")
    .eq("is_hidden", false)
    .eq("is_active", true);
  return data ?? [];
}

export default async function ConsultingIntakePage({
  searchParams,
}: {
  searchParams: Promise<{ hours?: string }>;
}) {
  const { hours: hoursParam } = await searchParams;
  const hours = hoursParam ? parseInt(hoursParam, 10) : null;

  if (!hours || !VALID_HOURS.includes(hours as 5 | 10 | 20)) {
    redirect("/pricing");
  }

  const providers = await getActiveProviders();

  return (
    <main style={{ background: "var(--astra-200)" }}>
      <SubpageNavbar />
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto" style={{ maxWidth: "42rem" }}>
          <IntakeForm plan="consulting" hours={hours} providers={providers} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
