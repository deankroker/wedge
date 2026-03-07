import { supabase, type Provider } from "@/lib/supabase";
import { notFound } from "next/navigation";
import PersonProfile from "./PersonProfile";
import type { Metadata } from "next";

async function getProvider(handle: string): Promise<Provider | null> {
  const { data, error } = await supabase
    .from("providers")
    .select("*")
    .eq("is_hidden", false)
    .eq("is_active", true);

  if (error || !data) return null;
  return (
    data.find((p) => p.handle.toLowerCase() === handle.toLowerCase()) ?? null
  );
}

async function getAllHandles(): Promise<string[]> {
  const { data } = await supabase
    .from("providers")
    .select("handle")
    .eq("is_hidden", false)
    .eq("is_active", true);

  return data?.map((p) => p.handle.toLowerCase()) ?? [];
}

export async function generateStaticParams() {
  const handles = await getAllHandles();
  return handles.map((handle) => ({ person: handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ person: string }>;
}): Promise<Metadata> {
  const { person } = await params;
  const provider = await getProvider(person);

  if (!provider) return {};

  const title = `${provider.name} — Outpost`;
  const description = provider.details
    ? `${provider.details.slice(0, 150)}...`
    : `Work with ${provider.name} on Outpost — ${provider.work_position}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: provider.image_url
        ? [{ url: provider.image_url }]
        : [{ url: "/og-image.png" }],
      siteName: "Outpost",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: provider.image_url ? [provider.image_url] : ["/og-image.png"],
    },
  };
}

export default async function PersonPage({
  params,
  searchParams,
}: {
  params: Promise<{ person: string }>;
  searchParams: Promise<{ embed?: string }>;
}) {
  const { person } = await params;
  const { embed } = await searchParams;
  const provider = await getProvider(person);

  if (!provider) {
    notFound();
  }

  return <PersonProfile provider={provider} embed={embed === "1"} />;
}
