import type { Metadata } from "next";
import "./globals.css";
import MemberPortalFAB from "@/components/MemberPortalFAB";

export const metadata: Metadata = {
  title: "Outpost — Build your app with AI",
  description:
    "Outpost is an AI app builder. Log in, describe what you want, and we ship it — wired to GitHub and Vercel.",
  openGraph: {
    title: "Outpost — Build your app with AI",
    description:
      "Log in, describe what you want, and we ship it. Wired to GitHub and Vercel.",
    siteName: "Outpost",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outpost — Build your app with AI",
    description:
      "Log in, describe what you want, and we ship it. Wired to GitHub and Vercel.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <MemberPortalFAB />
      </body>
    </html>
  );
}
