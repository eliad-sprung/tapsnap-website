"use client";

import Link from "next/link";
import { Mail, Globe } from "lucide-react";
import TapSnapLogo from "./TapSnapLogo";

export default function Footer() {
  return (
    <footer className="footer-bg">
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px 40px" }}>

        {/* Top grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <TapSnapLogo size="sm" variant="dark" />
            <p style={{ marginTop: 16, fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", maxWidth: 220 }}>
              Non-custodial digital wallet technology for modern commerce.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 20 }}>
              <a href="mailto:support@tap-snap.com" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
                <Mail size={13} />
                support@tap-snap.com
              </a>
              <a href="https://tap-snap.com" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
                <Globe size={13} />
                tap-snap.com
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#10B981", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Platform</p>
            {[
              { href: "/customers", label: "For Customers" },
              { href: "/merchants", label: "For Merchants" },
              { href: "/how-it-works", label: "How It Works" },
              { href: "/faqs", label: "FAQs" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none", marginBottom: 10, transition: "color 0.15s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"; }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#10B981", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Legal</p>
            {[
              { href: "/terms", label: "Terms of Service" },
              { href: "/privacy", label: "Privacy Policy" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none", marginBottom: 10, transition: "color 0.15s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"; }}
              >
                {l.label}
              </Link>
            ))}
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", marginTop: 8 }}>TapSnap Technology LLC<br />Wyoming, USA</p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 32 }}>

          {/* Legal disclaimer */}
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "16px 20px", marginBottom: 24, borderLeft: "3px solid #10B981" }}>
            <p style={{ fontSize: 11, lineHeight: 1.7, color: "rgba(255,255,255,0.35)", margin: 0 }}>
              <strong style={{ color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>Legal Notice: </strong>
              TapSnap operates as a non-custodial software technology provider and digital wallet platform. Funds loaded into TapSnap balances are held separately through regulated banking and payment partners. TapSnap is not a depository bank or money transmitter, and no raw cardholder data is stored or processed on local point-of-sale hardware.
            </p>
          </div>

          {/* Copyright */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", margin: 0 }}>© 2026 TapSnap. All rights reserved.</p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", margin: 0 }}>TapSnap Technology LLC · Wyoming, USA</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
