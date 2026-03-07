"use client";

import { useId } from "react";

export default function PortalIcon({
  size = 20,
  fill = "#271a00",
}: {
  size?: number;
  fill?: string;
}) {
  const id = useId();
  const glowId = `portal-glow-${id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 24"
      fill="none"
      className="portal-icon"
    >
      <defs>
        <radialGradient id={glowId} cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#c9913c" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#c9913c" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Glow behind the doorway — visible on hover */}
      <ellipse
        cx="10"
        cy="16"
        rx="5"
        ry="8"
        fill={`url(#${glowId})`}
        className="portal-glow"
      />

      {/* Outer wall with hollow archway cutout (evenodd) */}
      <path
        d="M0 24V10C0 4.477 4.477 0 10 0s10 4.477 10 10v14H14V13c0-2.21-1.79-4-4-4s-4 1.79-4 4v11H0Z M6 24V13c0-2.21 1.79-4 4-4s4 1.79 4 4v11H6Z"
        fill={fill}
        fillRule="evenodd"
      />

      <style>{`
        .portal-icon .portal-glow {
          opacity: 0;
          transition: opacity 300ms ease;
        }
        .member-portal-fab:hover .portal-icon .portal-glow {
          opacity: 1;
        }
      `}</style>
    </svg>
  );
}
