"use client";

export default function MemberPortalFAB() {
  return (
    <a
      href="https://app.outpost.chat"
      target="_blank"
      rel="noopener noreferrer"
      className="member-portal-fab"
      aria-label="Member Access"
    >
      <span className="member-portal-fab-inner">
        <svg
          width={18}
          height={18}
          viewBox="0 0 20 24"
          fill="none"
          className="portal-icon shrink-0"
        >
          <defs>
            <radialGradient id="fab-glow" cx="50%" cy="60%" r="50%">
              <stop offset="0%" stopColor="#c9913c" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#c9913c" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse
            cx="10"
            cy="16"
            rx="5"
            ry="8"
            fill="url(#fab-glow)"
            className="portal-glow"
          />
          <path
            d="M0 24V10C0 4.477 4.477 0 10 0s10 4.477 10 10v14H14V13c0-2.21-1.79-4-4-4s-4 1.79-4 4v11H0Z M6 24V13c0-2.21 1.79-4 4-4s4 1.79 4 4v11H6Z"
            fill="#271a00"
            fillRule="evenodd"
          />
        </svg>
        <span className="member-portal-fab-label">Member Access</span>
      </span>

      <style>{`
        .member-portal-fab {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 40;
          background: white;
          border-radius: 9999px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.08);
          cursor: pointer;
          text-decoration: none;
          overflow: hidden;
          transition: box-shadow 300ms ease;
        }
        .member-portal-fab:hover {
          box-shadow: 0 6px 20px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1);
        }
        .member-portal-fab-inner {
          display: flex;
          align-items: center;
          gap: 0;
          height: 44px;
          padding: 0 13px;
          max-width: 44px;
          overflow: hidden;
          transition: max-width 300ms ease, gap 300ms ease, padding 300ms ease;
          white-space: nowrap;
        }
        .member-portal-fab:hover .member-portal-fab-inner {
          max-width: 200px;
          gap: 8px;
          padding: 0 16px 0 13px;
        }
        .member-portal-fab-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: #271a00;
          opacity: 0;
          transition: opacity 200ms ease 80ms;
        }
        .member-portal-fab:hover .member-portal-fab-label {
          opacity: 1;
        }
        .member-portal-fab .portal-glow {
          opacity: 0;
          transition: opacity 300ms ease;
        }
        .member-portal-fab:hover .portal-glow {
          opacity: 1;
        }
      `}</style>
    </a>
  );
}
