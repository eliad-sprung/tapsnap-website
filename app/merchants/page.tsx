"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { QrCode, Banknote, LayoutDashboard, BadgeCheck, ArrowRight, CheckCircle2 } from "lucide-react";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className="fade-up">{children}</div>;
}

const pillars = [
  { icon: QrCode, color: "#1A6BF5", bg: "#EEF3FF", title: "Accept Wallet Balances via QR", desc: "Customers present their TapSnap QR code. Your device scans once and authorizes in real time — no card readers, no PIN pads.", points: ["Works on any camera device", "Under 3-second authorization", "Offline fallback supported"] },
  { icon: Banknote, color: "#10B981", bg: "#F0FDF9", title: "Automated ACH Daily Payouts", desc: "Settled transactions are batched each evening and sent to your business bank account via next-day ACH — automatically.", points: ["No manual withdrawal steps", "Transparent fee breakdown", "Instant payout notifications"] },
  { icon: LayoutDashboard, color: "#7C3AED", bg: "#F8F4FF", title: "Multi-Location Dashboard", desc: "Manage all licensed locations from a single login. Real-time transaction feeds, daily volumes, per-location reports.", points: ["Unlimited locations per account", "Role-based staff access", "Exportable CSV reports"] },
  { icon: BadgeCheck, color: "#0F172A", bg: "#F1F5F9", title: "Real-Time License Verification", desc: "TapSnap verifies active merchant licenses at the time of each transaction — ensuring every sale is processed at compliant locations.", points: ["Automated license status check", "Instant block on expired licenses", "Full audit trail per transaction"] },
];

const requirements = [
  "Active state-issued merchant license",
  "Registered US business entity",
  "Business bank account for ACH settlement",
  "Smartphone or tablet for QR scanning",
  "Completion of TapSnap merchant onboarding",
];

export default function MerchantsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg" style={{ padding: "96px 0 80px" }}>
        <div className="hero-grid-lines" />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", textAlign: "center" }}>
          <span className="badge" style={{ marginBottom: 24, display: "inline-flex" }}>For Merchants</span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 20 }}>
            Built for modern<br /><span style={{ color: "#1A6BF5" }}>in-store checkout</span>
          </h1>
          <p style={{ fontSize: 17, color: "#64748B", lineHeight: 1.65, maxWidth: 520, margin: "0 auto 36px" }}>
            TapSnap gives licensed merchants a compliant, frictionless way to accept digital wallet payments — same-day setup, daily automated payouts.
          </p>
          <a href="https://portal.tap-snap.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Access Merchant Portal <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Pillars */}
      <section className="section" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: "#10B981", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10 }}>Platform pillars</p>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.03em" }}>Everything your checkout needs</h2>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {pillars.map((p, i) => (
              <FadeUp key={p.title} delay={i * 80}>
                <div className="card" style={{ padding: "32px 28px", height: "100%" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 11, background: p.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                    <p.icon size={20} color={p.color} />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0F172A", marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.65, marginBottom: 16 }}>{p.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                    {p.points.map((pt) => (
                      <li key={pt} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#64748B" }}>
                        <CheckCircle2 size={12} color="#10B981" style={{ flexShrink: 0 }} />{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section" style={{ background: "#F8FAFC" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
          <FadeUp>
            <div className="card" style={{ padding: "48px 40px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
                <div>
                  <h2 style={{ fontSize: 26, fontWeight: 800, color: "#0F172A", letterSpacing: "-0.03em", marginBottom: 12 }}>Merchant requirements</h2>
                  <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65, marginBottom: 24 }}>TapSnap onboards licensed merchants only. Apply through the Merchant Portal to begin.</p>
                  <a href="https://portal.tap-snap.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 14 }}>
                    Apply Now <ArrowRight size={14} />
                  </a>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {requirements.map((r) => (
                    <li key={r} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "#334155" }}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#EEF3FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                        <CheckCircle2 size={11} color="#10B981" />
                      </div>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
