import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Outpost — Build your app with AI",
  description:
    "Outpost is an AI app builder. Log in, describe what you want, and we ship it — wired to GitHub and Vercel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
