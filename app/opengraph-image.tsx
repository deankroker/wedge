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

        {/* Op logomark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 32,
          }}
        >
          {/* Circle */}
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              backgroundColor: "#27251E",
            }}
          />
          {/* p */}
          <span
            style={{
              fontSize: 120,
              color: "#27251E",
              fontFamily: "Georgia, serif",
              lineHeight: 1,
              marginTop: -8,
            }}
          >
            p
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
