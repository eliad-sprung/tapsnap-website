import React from "react";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  iconOnly?: boolean;
}

const sizes = {
  sm: { icon: 32, tapSize: 18, snapSize: 18, gap: 9 },
  md: { icon: 40, tapSize: 22, snapSize: 22, gap: 11 },
  lg: { icon: 52, tapSize: 30, snapSize: 30, gap: 14 },
};

export default function TapSnapLogo({
  variant = "light",
  size = "md",
  iconOnly = false,
}: LogoProps) {
  const s = sizes[size];
  const navyText   = variant === "dark" ? "#FFFFFF"  : "#0F172A";
  const blueText   = variant === "dark" ? "#4A9AFF"  : "#0066FF";
  const frameStroke = variant === "dark" ? "#FFFFFF"  : "#0F172A";
  const arcOuter   = variant === "dark" ? "#4A9AFF"  : "#0066FF";
  const arcInner   = variant === "dark" ? "#FFFFFF"  : "#0F172A";

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: s.gap, lineHeight: 1 }}>
      {/* ── Icon mark ── */}
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0, display: "block" }}
      >
        {/* Rounded rectangle device frame */}
        <rect
          x="2" y="2" width="40" height="40" rx="10"
          stroke={frameStroke}
          strokeWidth="2.5"
          fill="none"
        />
        {/* Contactless signal arcs — left-to-right, centered vertically */}
        {/* Inner arc */}
        <path
          d="M14 22 Q14 16 19 12.5"
          fill="none" stroke={arcInner} strokeWidth="2.3" strokeLinecap="round"
        />
        <path
          d="M14 22 Q14 28 19 31.5"
          fill="none" stroke={arcInner} strokeWidth="2.3" strokeLinecap="round"
        />
        {/* Mid arc */}
        <path
          d="M20 22 Q20 14 26 9.5"
          fill="none" stroke={arcOuter} strokeWidth="2.3" strokeLinecap="round"
        />
        <path
          d="M20 22 Q20 30 26 34.5"
          fill="none" stroke={arcOuter} strokeWidth="2.3" strokeLinecap="round"
        />
        {/* Outer arc */}
        <path
          d="M26 22 Q26 12 33 7"
          fill="none" stroke={arcOuter} strokeWidth="2.3" strokeLinecap="round"
          opacity="0.45"
        />
        <path
          d="M26 22 Q26 32 33 37"
          fill="none" stroke={arcOuter} strokeWidth="2.3" strokeLinecap="round"
          opacity="0.45"
        />
      </svg>

      {/* ── Wordmark ── */}
      {!iconOnly && (
        <span
          style={{
            display: "inline-flex",
            alignItems: "baseline",
            fontFamily:
              "'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          <span style={{ fontSize: s.tapSize, color: navyText }}>TAP</span>
          <span style={{ fontSize: s.snapSize, color: blueText }}>SNAP</span>
        </span>
      )}
    </div>
  );
}
