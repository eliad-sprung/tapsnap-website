import Image from "next/image";

/**
 * TapSnap Logo — uses official PNG files.
 *
 * Default: full logo WITH "Payments Made Simple" tagline (logo@2x.png)
 * iconOnly: just the card icon (logo-icon-only.png)
 *
 * Full logo aspect ratio: 1184/300 = 3.947
 * Icon-only aspect ratio: 408/210 = 1.943
 */

interface LogoProps {
  variant?: "light" | "dark";
  size?: "xs" | "sm" | "md" | "lg";
  iconOnly?: boolean;
}

// Height in px
const heights = { xs: 28, sm: 40, md: 54, lg: 72 };

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

  // Full logo with tagline — aspect 3.947
  const w = Math.round(h * 3.947);
  return (
    <Image
      src="/logo@2x.png"
      alt="TapSnap — Payments Made Simple"
      width={w * 2}
      height={h * 2}
      style={{ width: w, height: h, objectFit: "contain", display: "block", ...invertStyle }}
      priority
    />
  );
}
