"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { UserPlus, CreditCard, Smartphone, ScanLine, ArrowRight, Shield, Lock, Zap } from "lucide-react";

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
  { icon: UserPlus,   n:"01", title:"Create Your Account", desc:"Sign up with your email. Identity verification takes under two minutes — no paperwork, no branch visit.",      tag:"Email · Phone · ID Verify"   },
  { icon: CreditCard, n:"02", title:"Add Funds",           desc:"Load your TapSnap balance via ACH bank transfer or debit card. Funds available the same business day.",         tag:"ACH · Debit Card · Instant"   },
  { icon: Smartphone, n:"03", title:"Save to Wallet",      desc:"One tap and your TapSnap pass lives in Apple Wallet or Google Pay alongside your other cards.",                 tag:"Apple Wallet · Google Pay"    },
  { icon: ScanLine,   n:"04", title:"Scan to Pay",         desc:"At checkout, present your QR code. The merchant scans once and the transaction settles instantly.",             tag:"QR · Contactless · Instant"   },
];

const trust = [
  { icon: Shield, iconBg:"#F0FDF2", iconColor:"#2DB84B", title:"Your funds, your control",   desc:"Non-custodial architecture means your balance is always yours. TapSnap never commingles customer funds." },
  { icon: Lock,   iconBg:"#EFF6FF", iconColor:"#2DB84B", title:"Zero raw card data stored",  desc:"No cardholder data touches point-of-sale hardware. Every transaction uses tokenized identifiers only."  },
  { icon: Zap,    iconBg:"#F5F3FF", iconColor:"#7C3AED", title:"Real-time balance",          desc:"Your wallet balance updates the instant a transaction is processed — no end-of-day delays."              },
];

export default function CustomersPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background:"#fff", padding:"80px 0 72px" }}>
        <div className="container" style={{ textAlign:"center" }}>
          <span className="badge"><span className="emerald-dot" />For Customers</span>
          <h1 style={{ marginBottom:16 }}>Your wallet,{" "}<span style={{ color:"#2DB84B" }}>your way</span></h1>
          <p style={{ fontSize:16, color:"#64748B", maxWidth:480, margin:"0 auto 32px", lineHeight:1.75 }}>
            Load once, scan anywhere. TapSnap turns your phone into a secure digital wallet accepted at licensed merchants.
          </p>
          <div style={{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/how-it-works" className="btn-green">See How It Works <ArrowRight size={15} /></Link>
            <Link href="/faqs" className="btn-ghost">FAQs</Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-soft">
        <div className="container">
          <FadeUp>
            <div className="section-header">
              <span className="eyebrow">Four steps to checkout</span>
              <h2>From sign-up to first scan in minutes</h2>
            </div>
          </FadeUp>
          <div className="grid-4">
            {steps.map((s, i) => (
              <FadeUp key={s.n} delay={i * 70}>
                <div className="card" style={{ padding:"28px 24px", height:"100%" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
                    <div style={{ width:44, height:44, borderRadius:11, background:"#0F172A", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                      <s.icon size={18} color="#fff" />
                    </div>
                    <span style={{ fontSize:11, fontWeight:700, color:"#94A3B8", letterSpacing:"0.06em" }}>{s.n}</span>
                  </div>
                  <h3 style={{ fontSize:16, marginBottom:8 }}>{s.title}</h3>
                  <p style={{ fontSize:13, lineHeight:1.7, marginBottom:14 }}>{s.desc}</p>
                  <span style={{ fontSize:11, fontWeight:600, color:"#2DB84B", background:"#EFF6FF", padding:"4px 10px", borderRadius:999 }}>{s.tag}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <div className="section-header">
              <span className="eyebrow">Security first</span>
              <h2>Built around your security</h2>
            </div>
          </FadeUp>
          <div className="grid-3">
            {trust.map((t, i) => (
              <FadeUp key={t.title} delay={i * 80}>
                <div className="card" style={{ padding:"30px 26px" }}>
                  <div style={{ width:44, height:44, borderRadius:11, background:t.iconBg, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:16 }}>
                    <t.icon size={20} color={t.iconColor} />
                  </div>
                  <h3 style={{ fontSize:16, marginBottom:8 }}>{t.title}</h3>
                  <p style={{ fontSize:13, lineHeight:1.7 }}>{t.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ background:"#F9FAFB" }}>
        <div className="container" style={{ textAlign:"center" }}>
          <h2 style={{ fontSize:26, marginBottom:10 }}>Questions about your balance?</h2>
          <p style={{ fontSize:14, color:"#64748B", marginBottom:24 }}>Our support team responds within one business day.</p>
          <a href="mailto:support@tap-snap.com" className="btn-green">Email Support <ArrowRight size={14} /></a>
        </div>
      </section>
    </>
  );
}
