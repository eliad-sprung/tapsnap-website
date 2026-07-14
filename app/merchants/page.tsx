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
  { icon: QrCode,          iconBg:"#EFF6FF", iconColor:"#2DB84B", title:"Accept Wallet Balances via QR",    desc:"Customers present their TapSnap QR code. Your device authorizes in real time — no card readers, no PIN pads.",               points:["Works on any camera device","Under 3-second authorization","Offline fallback supported"]          },
  { icon: Banknote,        iconBg:"#F0FDF2", iconColor:"#2DB84B", title:"Automated ACH Daily Payouts",      desc:"Settled transactions are batched each evening and sent to your business bank account via next-day ACH — automatically.",    points:["No manual withdrawal steps","Transparent fee breakdown","Instant payout notifications"]         },
  { icon: LayoutDashboard, iconBg:"#F5F3FF", iconColor:"#7C3AED", title:"Multi-Location Dashboard",         desc:"Manage all licensed locations from a single login. Real-time transaction feeds, daily volumes, per-location reports.",        points:["Unlimited locations per account","Role-based staff access","Exportable CSV reports"]             },
  { icon: BadgeCheck,      iconBg:"#F9FAFB", iconColor:"#0F172A", title:"Real-Time License Verification",   desc:"TapSnap verifies active merchant licenses at the time of each transaction — ensuring every sale is compliant.",             points:["Automated license status check","Instant block on expired licenses","Full audit trail"]           },
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
      <section style={{ background:"#fff", padding:"80px 0 72px" }}>
        <div className="container" style={{ textAlign:"center" }}>
          <span className="badge"><span className="emerald-dot" />For Merchants</span>
          <h1 style={{ marginBottom:16 }}>Built for modern{" "}<span style={{ color:"#2DB84B" }}>in-store checkout</span></h1>
          <p style={{ fontSize:16, color:"#64748B", maxWidth:500, margin:"0 auto 32px", lineHeight:1.75 }}>
            TapSnap gives licensed merchants a compliant, frictionless way to accept digital wallet payments — same-day setup, daily automated payouts.
          </p>
          <a href="https://portal.tap-snap.com" target="_blank" rel="noopener noreferrer" className="btn-green">
            Access Merchant Portal <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-soft">
        <div className="container">
          <FadeUp>
            <div className="section-header">
              <span className="eyebrow">Platform pillars</span>
              <h2>Everything your checkout needs</h2>
            </div>
          </FadeUp>
          <div className="grid-3" style={{ gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))" }}>
            {pillars.map((p, i) => (
              <FadeUp key={p.title} delay={i * 70}>
                <div className="card" style={{ padding:"30px 26px", height:"100%" }}>
                  <div style={{ width:44, height:44, borderRadius:11, background:p.iconBg, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:16 }}>
                    <p.icon size={20} color={p.iconColor} />
                  </div>
                  <h3 style={{ fontSize:16, marginBottom:8 }}>{p.title}</h3>
                  <p style={{ fontSize:13, lineHeight:1.7, marginBottom:14 }}>{p.desc}</p>
                  <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:6 }}>
                    {p.points.map(pt => (
                      <li key={pt} style={{ display:"flex", alignItems:"center", gap:7, fontSize:12, color:"#64748B" }}>
                        <CheckCircle2 size={11} color="#2DB84B" style={{ flexShrink:0 }} />{pt}
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
      <section className="section">
        <div className="container">
          <FadeUp>
            <div className="card" style={{ maxWidth:740, margin:"0 auto", padding:"44px 40px" }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:36 }}>
                <div>
                  <span className="eyebrow">Eligibility</span>
                  <h2 style={{ fontSize:24, marginBottom:12 }}>Merchant requirements</h2>
                  <p style={{ fontSize:14, lineHeight:1.7, marginBottom:24 }}>TapSnap onboards licensed merchants only. Apply through the Merchant Portal to begin same-day.</p>
                  <a href="https://portal.tap-snap.com" target="_blank" rel="noopener noreferrer" className="btn-green" style={{ fontSize:13 }}>
                    Apply Now <ArrowRight size={13} />
                  </a>
                </div>
                <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:12 }}>
                  {requirements.map(r => (
                    <li key={r} style={{ display:"flex", alignItems:"flex-start", gap:10, fontSize:13, color:"#334155", lineHeight:1.5 }}>
                      <div style={{ width:20, height:20, borderRadius:"50%", background:"#F0FDF2", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>
                        <CheckCircle2 size={11} color="#2DB84B" />
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
