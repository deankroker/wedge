import { supabase, type Provider } from "@/lib/supabase";
import { notFound } from "next/navigation";
import SubpageNavbar from "@/components/SubpageNavbar";
import Footer from "@/components/Footer";
import IntakeForm from "@/components/IntakeForm";

async function getProvider(handle: string): Promise<Provider | null> {
  const { data } = await supabase
    .from("providers")
    .select("*")
    .eq("is_hidden", false)
    .eq("is_active", true);

  return data?.find((p) => p.handle.toLowerCase() === handle.toLowerCase()) ?? null;
}

export default async function ProviderIntakePage({
  params,
}: {
  params: Promise<{ provider: string }>;
}) {
  const { provider: handle } = await params;
  const provider = await getProvider(handle);

  if (!provider) notFound();

  return (
    <main style={{ background: "var(--astra-200)" }}>
      <SubpageNavbar />
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto" style={{ maxWidth: "42rem" }}>
          <IntakeForm plan="scale" provider={provider} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
