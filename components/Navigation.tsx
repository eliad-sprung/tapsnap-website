"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import TapSnapLogo from "./TapSnapLogo";

const navLinks = [
  { href: "/customers", label: "For Customers" },
  { href: "/merchants", label: "For Merchants" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faqs", label: "FAQs" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header className={`nav-wrap${scrolled ? " scrolled" : ""}`}>
      <nav style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex" }}>
            <TapSnapLogo size="sm" variant="light" />
          </Link>

          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: pathname === l.href ? "#1E3A8A" : "#64748B",
                  textDecoration: "none",
                  transition: "color 0.15s",
                  letterSpacing: "-0.01em",
                  borderBottom: pathname === l.href ? "2px solid #10B981" : "2px solid transparent",
                  paddingBottom: 2,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#0F172A"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = pathname === l.href ? "#1E3A8A" : "#64748B"; }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="desktop-nav">
            <a
              href="https://portal.tap-snap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "9px 20px", fontSize: 14 }}
            >
              Merchant Portal
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{ background: "none", border: "none", cursor: "pointer", color: "#334155", padding: 4 }}
            className="mobile-toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div style={{
            borderTop: "1px solid #E2E8F0",
            padding: "16px 0 20px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: pathname === l.href ? "#1E3A8A" : "#334155",
                  textDecoration: "none",
                  padding: "10px 4px",
                  display: "block",
                }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://portal.tap-snap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginTop: 8, justifyContent: "center" }}
            >
              Merchant Portal
            </a>
          </div>
        )}
      </nav>

      <style>{`
        @media (min-width: 768px) { .mobile-toggle { display: none !important; } }
        @media (max-width: 767px) { .desktop-nav { display: none !important; } }
      `}</style>
    </header>
  );
}
