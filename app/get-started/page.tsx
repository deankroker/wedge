import SubpageNavbar from "@/components/SubpageNavbar";
import Footer from "@/components/Footer";
import IntakeForm from "@/components/IntakeForm";
import { redirect } from "next/navigation";

const VALID_PLANS = ["launch", "scale", "custom"] as const;
type Plan = (typeof VALID_PLANS)[number];

export default async function PlanIntakePage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan } = await searchParams;

  if (!plan || !VALID_PLANS.includes(plan as Plan)) {
    redirect("/pricing");
  }

  return (
    <main style={{ background: "var(--astra-200)" }}>
      <SubpageNavbar />
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto" style={{ maxWidth: "42rem" }}>
          <IntakeForm plan={plan as Plan} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
