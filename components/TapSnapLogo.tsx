import React from "react";

/**
 * Official TapSnap logo — matched exactly to WhatsApp reference image.
 *
 * Icon: Card-slot shape open on right, inner card rectangle visible,
 *       3 NFC arcs in green, frame in near-black (#1A1A1A).
 * TAP:  Near-black (#1A1A1A), Inter 900, wide tracking
 * SNAP: Green (#2DB84B), same weight/tracking
 * Underline: Green bar under TAP (matches reference)
 * Tagline: "PAYMENTS MADE SIMPLE" — shown when showTagline=true
 */

const BLACK = "#1A1A1A";
const GREEN = "#2DB84B";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "xs" | "sm" | "md" | "lg";
  iconOnly?: boolean;
  showTagline?: boolean;
}

const sizes = {
  xs: { icon: 24, iconH: 19, word: 14, gap: 8,  tagline: 7  },
  sm: { icon: 32, iconH: 25, word: 19, gap: 10, tagline: 9  },
  md: { icon: 44, iconH: 34, word: 26, gap: 13, tagline: 11 },
  lg: { icon: 60, iconH: 47, word: 36, gap: 16, tagline: 14 },
};

export default function TapSnapLogo({
  variant = "light",
  size = "sm",
  iconOnly = false,
  showTagline = false,
}: LogoProps) {
  const s = sizes[size];
  const frameColor = variant === "dark" ? "#FFFFFF" : BLACK;
  const tapColor   = variant === "dark" ? "#FFFFFF" : BLACK;
  const snapColor  = GREEN; // always green

  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-start", gap: 4 }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: s.gap, lineHeight: 1 }}>

        {/* ── ICON MARK ──────────────────────────────────────────
            ViewBox 110 × 86 — matches reference proportions.
            Outer frame: card-slot open on right (3 sides).
            Inner card: small rounded rect inside frame.
            NFC arcs: 3 concentric arcs pointing right.
        ─────────────────────────────────────────────────────── */}
        <svg
          width={s.icon}
          height={s.iconH}
          viewBox="0 0 110 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ display: "block", flexShrink: 0 }}
        >
          {/* Outer card-slot frame — open on right */}
          <path
            d="M 68 7 H 20 Q 6 7 6 20 V 66 Q 6 79 20 79 H 68"
            stroke={frameColor}
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Inner card rectangle — small, inside the frame */}
          <rect
            x="14" y="22" width="38" height="42" rx="6"
            stroke={frameColor}
            strokeWidth="5"
            fill="none"
          />
          {/* NFC arc 1 — innermost */}
          <path
            d="M 62 34 A 14 14 0 0 1 62 52"
            stroke={GREEN}
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          {/* NFC arc 2 — mid */}
          <path
            d="M 73 25 A 24 24 0 0 1 73 61"
            stroke={GREEN}
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          {/* NFC arc 3 — outer, slightly faded */}
          <path
            d="M 84 16 A 34 34 0 0 1 84 70"
            stroke={GREEN}
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            opacity="0.5"
          />
        </svg>

        {/* ── WORDMARK ── */}
        {!iconOnly && (
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <span
              aria-label="TapSnap"
              style={{
                display: "inline-flex",
                alignItems: "baseline",
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
                fontSize: s.word,
                fontWeight: 900,
                letterSpacing: "0.06em",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              <span style={{ color: tapColor }}>TAP</span>
              <span style={{ color: snapColor }}>SNAP</span>
            </span>
            {/* Green underline — under TAP portion only, matching reference */}
            <div style={{
              height: Math.max(2, Math.round(s.word * 0.1)),
              width: `${Math.round(s.word * 2.2)}px`,
              background: GREEN,
              borderRadius: 2,
              marginTop: 1,
            }} />
          </div>
        )}
      </div>

      {/* ── TAGLINE ── */}
      {showTagline && !iconOnly && (
        <span style={{
          fontFamily: "'Inter', -apple-system, sans-serif",
          fontSize: s.tagline,
          fontWeight: 400,
          letterSpacing: "0.28em",
          color: variant === "dark" ? "rgba(255,255,255,0.55)" : "#6B7280",
          textTransform: "uppercase",
          userSelect: "none",
          marginTop: 2,
          paddingLeft: s.icon + s.gap,
        }}>
          Payments Made Simple
        </span>
      )}
    </div>
  );
}
