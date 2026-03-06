import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Perplexity Computer — AI that works for you",
  description:
    "Perplexity Computer is a general-purpose digital worker that operates the same interfaces you do.",
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
