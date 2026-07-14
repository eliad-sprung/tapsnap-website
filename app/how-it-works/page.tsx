"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Upload, Smartphone, ScanLine, Building2, ArrowDown, ArrowRight } from "lucide-react";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.08 });
    obs.observe(el); return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className="fade-up">{children}</div>;
}

const phases = [
  { icon: Upload, n: "01", phase: "Phase 1", title: "Online Funding", color: "#0F172A", bg: "#F1F5F9", details: [{ label: "Methods", value: "ACH, Debit Card" }, { label: "Availability", value: "Same Business Day" }, { label: "Custody", value: "Regulated Banking Partners" }, { label: "KYC", value: "Real-Time Verify" }], desc: "The customer creates a TapSnap account and loads funds via ACH or debit card. Funds are held through regulated banking partners — never on TapSnap servers. Balances are available the same business day." },
  { icon: Smartphone, n: "02", phase: "Phase 2", title: "Digital Pass Balance", color: "#1E3A8A", bg: "#EEF3FF", details: [{ label: "Pass Type", value: "Apple & Google Wallet" }, { label: "QR Refresh", value: "Per-Transaction" }, { label: "Balance", value: "Real-Time Display" }, { label: "Offline", value: "Cached QR Supported" }], desc: "Once funded, the customer receives a digital wallet pass compatible with Apple Wallet and Google Pay. The pass displays their current balance and a dynamic QR code that refreshes for every transaction." },
  { icon: ScanLine, n: "03", phase: "Phase 3", title: "In-Store Scan", color: "#1A6BF5", bg: "#DBEAFE", details: [{ label: "Auth Time", value: "< 3 Seconds" }, { label: "Hardware", value: "Any Camera Device" }, { label: "Card Data on POS", value: "None — Zero Storage" }, { label: "License Check", value: "Real-Time at Auth" }], desc: "At the licensed merchant's register, the customer presents the QR code. The merchant's device scans it, TapSnap authorizes in under 3 seconds, and the customer's balance is debited instantly." },
  { icon: Building2, n: "04", phase: "Phase 4", title: "Merchant Settlement", color: "#10B981", bg: "#F0FDF9", details: [{ label: "Rail", value: "Next-Day ACH" }, { label: "Batching", value: "Nightly Automated" }, { label: "Reporting", value: "Itemized per Merchant" }, { label: "Notifications", value: "Email + Portal" }], desc: "Each evening, TapSnap batches all settled transactions and initiates ACH transfers to each merchant's business bank account. Funds arrive the next business day with a full transaction breakdown." },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg" style={{ padding: "96px 0 80px" }}>
        <div className="hero-grid-lines" />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", textAlign: "center" }}>
          <span className="badge" style={{ marginBottom: 24, display: "inline-flex" }}>How It Works</span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 20 }}>
            From Funding<br />to <span style={{ color: "#1A6BF5" }}>Settlement</span>
          </h1>
          <p style={{ fontSize: 17, color: "#64748B", lineHeight: 1.65, maxWidth: 520, margin: "0 auto" }}>
            A complete walkthrough of the TapSnap payment lifecycle — from the moment a customer loads funds to the moment a merchant receives their payout.
          </p>
        </div>
      </section>

      {/* Flow */}
      <section className="section" style={{ background: "#F8FAFC" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {phases.map((p, i) => (
              <div key={p.n}>
                <FadeUp delay={i * 60}>
                  <div className="card" style={{ padding: "40px 36px" }}>
                    <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                      <div style={{ width: 56, height: 56, borderRadius: 14, background: p.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <p.icon size={24} color={p.color} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: 11, fontWeight: 600, color: p.color, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{p.phase}</p>
                        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0F172A", letterSpacing: "-0.03em", marginBottom: 12 }}>{p.title}</h2>
                        <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65, marginBottom: 24 }}>{p.desc}</p>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10 }}>
                          {p.details.map((d) => (
                            <div key={d.label} style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 10, padding: "12px 14px" }}>
                              <p style={{ fontSize: 11, color: "#94A3B8", marginBottom: 3 }}>{d.label}</p>
                              <p style={{ fontSize: 12, fontWeight: 700, color: "#0F172A" }}>{d.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
                {i < phases.length - 1 && (
                  <div style={{ display: "flex", justifyContent: "center", padding: "8px 0" }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#EEF3FF", border: "1px solid #DBEAFE", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <ArrowDown size={14} color="#1A6BF5" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Promise */}
          <FadeUp delay={200}>
            <div style={{ marginTop: 40, background: "linear-gradient(135deg, #0F172A, #1E3A8A)", borderRadius: 20, padding: "36px", textAlign: "center" }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: "#10B981", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>The TapSnap Promise</p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 24px" }}>
                Every dollar is tracked, verified, and settled transparently. No raw card data ever touches a point-of-sale device. Funds are held through regulated partners at all times.
              </p>
              <Link href="/merchants" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "#fff", textDecoration: "none" }}>
                Merchant Platform <ArrowRight size={14} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
