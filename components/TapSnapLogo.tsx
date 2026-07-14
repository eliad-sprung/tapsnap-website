import Image from "next/image";

/**
 * TapSnap Logo — uses official PNG files.
 *
 * Files in /public:
 *   logo-wordmark.png     — icon + TAPSNAP text, no tagline (1184×210)
 *   logo-icon-only.png    — card icon only (408×210)
 *   logo@2x.png           — full logo with tagline (2x retina)
 *
 * variant="dark" inverts colors for dark backgrounds
 */

interface LogoProps {
  variant?: "light" | "dark";
  size?: "xs" | "sm" | "md" | "lg";
  iconOnly?: boolean;
  showTagline?: boolean;
}

// Height in px — wordmark aspect ratio = 1184/210 = 5.638
// Icon-only aspect ratio = 408/210 = 1.943
const heights = { xs: 24, sm: 36, md: 48, lg: 64 };

export default function TapSnapLogo({
  variant = "light",
  size = "sm",
  iconOnly = false,
}: LogoProps) {
  const h = heights[size];
  
  const invertStyle: React.CSSProperties = variant === "dark"
    ? { filter: "brightness(0) invert(1)" }
    : {};

  if (iconOnly) {
    // Icon-only: 408×210 → aspect 1.943
    const w = Math.round(h * 1.943);
    return (
      <Image
        src="/logo-icon-only.png"
        alt="TapSnap"
        width={w * 2}
        height={h * 2}
        style={{ width: w, height: h, objectFit: "contain", display: "block", ...invertStyle }}
        priority
      />
    );
  }

  // Wordmark (no tagline): 1184×210 → aspect 5.638
  const w = Math.round(h * 5.638);
  return (
    <Image
      src="/logo-wordmark.png"
      alt="TapSnap — Payments Made Simple"
      width={w * 2}
      height={h * 2}
      style={{ width: w, height: h, objectFit: "contain", display: "block", ...invertStyle }}
      priority
    />
  );
}
