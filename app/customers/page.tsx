"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { UserPlus, CreditCard, Smartphone, ScanLine, ArrowRight, Shield, Lock, Zap, CheckCircle } from "lucide-react";

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

const steps = [
  { icon: UserPlus, n: "01", title: "Create Your Account", desc: "Sign up with your email. Identity verification takes under two minutes — no paperwork, no branch visit.", tag: "Email · Phone · ID Verify" },
  { icon: CreditCard, n: "02", title: "Add Funds", desc: "Load your TapSnap balance via ACH bank transfer or debit card. Funds available the same business day.", tag: "ACH · Debit Card · Instant" },
  { icon: Smartphone, n: "03", title: "Save to Wallet", desc: "One tap and your TapSnap pass lives alongside your cards in Apple Wallet or Google Pay.", tag: "Apple Wallet · Google Pay" },
  { icon: ScanLine, n: "04", title: "Scan to Pay", desc: "At checkout, present your QR code. The merchant scans once and the transaction settles instantly.", tag: "QR · Contactless · Instant" },
];

const trust = [
  { icon: Shield, title: "Your funds, your control", desc: "Non-custodial architecture means your balance is always yours. TapSnap never commingles customer funds.", color: "#10B981", bg: "#F0FDF9" },
  { icon: Lock, title: "Zero raw card data stored", desc: "No cardholder data touches point-of-sale hardware. Every transaction uses tokenized identifiers only.", color: "#1A6BF5", bg: "#EEF3FF" },
  { icon: Zap, title: "Real-time balance", desc: "Your wallet balance updates the instant a transaction is processed — no end-of-day delays.", color: "#7C3AED", bg: "#F8F4FF" },
];

export default function CustomersPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg" style={{ padding: "96px 0 80px" }}>
        <div className="hero-grid-lines" />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", textAlign: "center" }}>
          <span className="badge" style={{ marginBottom: 24, display: "inline-flex" }}>For Customers</span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 20 }}>
            Your wallet,<br /><span style={{ color: "#1A6BF5" }}>your way</span>
          </h1>
          <p style={{ fontSize: 18, color: "#64748B", lineHeight: 1.65, maxWidth: 520, margin: "0 auto 36px" }}>
            Load once, scan anywhere. TapSnap turns your phone into a secure digital wallet accepted at licensed merchants.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/how-it-works" className="btn-primary">See How It Works <ArrowRight size={16} /></Link>
            <Link href="/faqs" className="btn-outline">FAQs</Link>
          </div>
        </div>
      </section>

      {/* 4-Step Journey */}
      <section className="section" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: "#10B981", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10 }}>Four steps to checkout</p>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.03em" }}>From sign-up to first scan in minutes</h2>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {steps.map((s, i) => (
              <FadeUp key={s.n} delay={i * 80}>
                <div className="card" style={{ padding: "32px 28px", height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 12,
                      background: "linear-gradient(135deg, #0F172A, #1E3A8A)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <s.icon size={20} color="#fff" />
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#94A3B8", letterSpacing: "0.08em" }}>{s.n}</span>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0F172A", marginBottom: 10, letterSpacing: "-0.02em" }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.65, marginBottom: 16 }}>{s.desc}</p>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#1A6BF5", background: "#EEF3FF", padding: "4px 10px", borderRadius: 999 }}>{s.tag}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section" style={{ background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.03em" }}>Built around your security</h2>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {trust.map((t, i) => (
              <FadeUp key={t.title} delay={i * 80}>
                <div className="card" style={{ padding: "32px 28px" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 11, background: t.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                    <t.icon size={20} color={t.color} />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0F172A", marginBottom: 8 }}>{t.title}</h3>
                  <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.65 }}>{t.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0F172A", letterSpacing: "-0.03em", marginBottom: 12 }}>Questions about your balance?</h2>
          <p style={{ fontSize: 14, color: "#64748B", marginBottom: 28 }}>Our support team responds within one business day.</p>
          <a href="mailto:support@tap-snap.com" className="btn-primary">Email Support <ArrowRight size={15} /></a>
        </div>
      </section>
    </>
  );
}
