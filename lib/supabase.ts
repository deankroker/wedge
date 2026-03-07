import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export type Provider = {
  id: number;
  handle: string;
  name: string;
  image_url: string | null;
  work_position: string;
  primary_field: string;
  rating: number;
  reviews: number;
  details: string | null;
  what_to_expect: string | null;
  linkedin_url: string | null;
  website: string | null;
  is_hidden: boolean;
  is_active: boolean;
  answer_types: string[];
  response_time_days: number;
  video_links: string[];
};

export type Engagement = {
  id: string;
  created_at: string;
  plan: "launch" | "scale" | "custom" | "consulting";
  provider_handle: string | null;
  hours: number | null;
  name: string;
  email: string;
  company: string | null;
  projects: { name: string; description: string }[] | null;
  stripe_payment_intent_id: string | null;
  status: "pending" | "paid" | "submitted";
};
