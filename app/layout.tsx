import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wedge — AI consulting for businesses that build real things",
  description:
    "Wedge by Western Hemlock. We don't make slides about AI. We build the tools that change how your business operates.",
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
