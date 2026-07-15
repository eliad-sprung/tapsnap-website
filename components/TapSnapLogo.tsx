import React from "react";

/**
 * TapSnap Logo — pixel-matched to official brand guide + WhatsApp reference.
 *
 * Icon: Landscape card shape, open on right (3-sided frame),
 *       small inner rounded rect, 3 NFC arcs pointing right.
 * TAP:  #1A1A1A near-black, Inter 900
 * SNAP: #2DB84B green, Inter 900
 * No underline in horizontal/nav lockup.
 * showTagline: "PAYMENTS MADE SIMPLE" for hero/stacked use.
 */

const BLACK = "#1A1A1A";
const GREEN = "#2DB84B";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "xs" | "sm" | "md" | "lg";
  iconOnly?: boolean;
  showTagline?: boolean;
}

// Icon is landscape: width > height (matches card shape)
const sizes = {
  xs: { w: 28,  h: 22,  word: 13, gap: 7  },
  sm: { w: 38,  h: 30,  word: 18, gap: 10 },
  md: { w: 52,  h: 41,  word: 24, gap: 13 },
  lg: { w: 70,  h: 55,  word: 32, gap: 16 },
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

  return (
    <div style={{
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "flex-start",
      lineHeight: 1,
    }}>
      {/* Horizontal lockup */}
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: s.gap,
      }}>

        {/* ── ICON ──────────────────────────────────────────────
            ViewBox: 0 0 130 100
            Card frame: landscape rectangle open on right side.
            Inner rect: smaller card inside, showing it's a reader.
            Arcs: 3 NFC arcs on the right, pointing outward.
        ─────────────────────────────────────────────────────── */}
        <svg
          width={s.w}
          height={s.h}
          viewBox="0 0 130 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ display: "block", flexShrink: 0 }}
        >
          {/* Outer frame — 3 sides, open on right */}
          <path
            d="M 78 8 H 22 Q 8 8 8 22 V 78 Q 8 92 22 92 H 78"
            stroke={frameColor}
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Inner card — small rounded rect */}
          <rect
            x="18" y="25"
            width="44" height="50"
            rx="7"
            stroke={frameColor}
            strokeWidth="6"
            fill="none"
          />
          {/* NFC arc 1 — innermost */}
          <path
            d="M 74 38 A 17 17 0 0 1 74 62"
            stroke={GREEN}
            strokeWidth="7.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* NFC arc 2 — mid */}
          <path
            d="M 88 27 A 29 29 0 0 1 88 73"
            stroke={GREEN}
            strokeWidth="7.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* NFC arc 3 — outer, faded */}
          <path
            d="M 102 16 A 41 41 0 0 1 102 84"
            stroke={GREEN}
            strokeWidth="7.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.45"
          />
        </svg>

        {/* ── WORDMARK ── */}
        {!iconOnly && (
          <span
            aria-label="TapSnap"
            style={{
              display: "inline-block",
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
              fontSize: s.word,
              fontWeight: 900,
              letterSpacing: "0.05em",
              lineHeight: 1,
              userSelect: "none",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: tapColor }}>TAP</span>
            <span style={{ color: GREEN }}>SNAP</span>
          </span>
        )}
      </div>

      {/* ── TAGLINE — only when requested ── */}
      {showTagline && !iconOnly && (
        <div style={{ marginTop: Math.round(s.word * 0.35) }}>
          {/* Green underline bar — sits under wordmark for stacked version */}
          <div style={{
            height: Math.max(2, Math.round(s.word * 0.09)),
            width: Math.round(s.word * 2.8),
            background: GREEN,
            borderRadius: 2,
            marginLeft: s.w + s.gap,
            marginBottom: Math.round(s.word * 0.3),
          }} />
          <span style={{
            display: "block",
            fontFamily: "'Inter', -apple-system, sans-serif",
            fontSize: Math.round(s.word * 0.44),
            fontWeight: 400,
            letterSpacing: "0.26em",
            color: variant === "dark" ? "rgba(255,255,255,0.5)" : "#9CA3AF",
            textTransform: "uppercase",
            userSelect: "none",
            paddingLeft: s.w + s.gap,
          }}>
            Payments Made Simple
          </span>
        </div>
      )}
    </div>
  );
}
