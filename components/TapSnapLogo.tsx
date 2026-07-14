import Image from "next/image";

/**
 * TapSnap Logo — uses official PNG files from /public/
 * logo.png      = 1184×300  (1x)
 * logo@2x.png   = 2368×600  (2x)
 * logo-large.png = 3552×900  (3x)
 *
 * Aspect ratio: 1184/300 = 3.947
 */

interface LogoProps {
  variant?: "light" | "dark";
  size?: "xs" | "sm" | "md" | "lg";
  iconOnly?: boolean;
  showTagline?: boolean;  // kept for API compatibility, tagline is part of the PNG
}

// Height in px — width auto-calculated from aspect ratio (3.947)
const heights = { xs: 22, sm: 30, md: 40, lg: 56 };

export default function TapSnapLogo({
  variant = "light",
  size = "sm",
}: LogoProps) {
  const h = heights[size];
  const w = Math.round(h * 3.947);

  // On dark backgrounds we can't invert the PNG cleanly,
  // so we use a CSS filter to make black → white
  const style: React.CSSProperties = {
    display: "block",
    width: w,
    height: h,
    objectFit: "contain",
    ...(variant === "dark" ? { filter: "brightness(0) invert(1)" } : {}),
  };

  return (
    <Image
      src="/logo@2x.png"
      alt="TapSnap — Payments Made Simple"
      width={w * 2}
      height={h * 2}
      style={style}
      priority
    />
  );
}
