import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Outpost — Build your app with AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAF8F5",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            backgroundColor: "#27251E",
          }}
        />

        {/* Arch logomark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 20 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 24V10C0 4.477 4.477 0 10 0s10 4.477 10 10v14H0ZM6 24V13c0-2.21 1.79-4 4-4s4 1.79 4 4v11H6Z"
              fill="#27251E"
            />
          </svg>
          <span
            style={{
              fontSize: 64,
              color: "#27251E",
              fontFamily: "Georgia, serif",
              lineHeight: 1,
              fontWeight: 300,
              letterSpacing: "-0.02em",
            }}
          >
            Outpost
          </span>
        </div>

        {/* Tagline */}
        <span
          style={{
            fontSize: 36,
            color: "#271A0099",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Build your app with AI
        </span>

        {/* URL */}
        <span
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            color: "#271A0066",
            letterSpacing: 3,
            fontFamily: "monospace",
          }}
        >
          outpost.chat
        </span>
      </div>
    ),
    { ...size }
  );
}
