"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Zap, DollarSign, CheckCircle, QrCode } from "lucide-react";
import HeroPhone from "@/components/HeroPhone";

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

// Small inline QR visual for the feature card
function MiniQR() {
  const pattern = [
    [1,1,1,0,1,1,1],[1,0,1,0,1,0,1],[1,0,1,0,1,0,1],[0,0,0,0,0,0,0],[1,0,1,0,1,0,1],[1,0,1,0,1,0,1],[1,1,1,0,1,1,1],
  ];
  const cell = 5;
  return (
    <svg width={7*cell} height={7*cell} viewBox={`0 0 ${7*cell} ${7*cell}`}>
      <rect width={7*cell} height={7*cell} fill="white" rx="2"/>
      {pattern.map((row,ri) => row.map((v,ci) => v ? (
        <rect key={`${ri}-${ci}`} x={ci*cell+0.5} y={ri*cell+0.5} width={cell-0.5} height={cell-0.5} fill="#0F172A" rx="0.6"/>
      ) : null))}
    </svg>
  );
}

const values = [
  { icon: Zap,      bg:"#F0FDF2", color:"#2DB84B", title:"Effortless Setup",     desc:"Get started in minutes with zero hardware required. Your phone is your payment terminal."            },
  { icon: Shield,   bg:"#F0FDF2", color:"#1FA83A", title:"Bank-Grade Security",  desc:"Encrypted transactions designed to protect every payment and build lasting customer trust."         },
  { icon: DollarSign,bg:"#F0FDF2",color:"#2DB84B", title:"Transparent & Direct", desc:"Clear pricing with zero hidden friction or unexpected fees — ever."                                },
];

const steps = [
  { n:"01", title:"Quick Onboarding",  desc:"Set up your account securely in a few simple steps. Verification takes under two minutes." },
  { n:"02", title:"Tap to Accept",     desc:"Turn your phone or device into a payment terminal instantly. No extra hardware needed."     },
  { n:"03", title:"Get Paid Fast",     desc:"Receive direct, reliable ACH settlements to your business account without delay."           },
];

const compliance = [
  "Non-Custodial by Design",
  "Zero Raw Card Data on POS",
  "Real-Time License Verification",
  "Automated Daily ACH Settlements",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="container" style={{ padding:"80px 24px", width:"100%" }}>
          <div className="grid-2">

            {/* Copy */}
            <div>
              <span className="badge"><span className="emerald-dot"/>Live in Production</span>

              <h1 style={{ marginBottom:16 }}>
                Smart Payments &amp; Tap-to-Pay.<br />
                <span style={{ color:"#2DB84B" }}>Simple, Secure, Instant.</span>
              </h1>

              <p style={{ fontSize:16, color:"#475569", fontWeight:500, marginBottom:10 }}>
                Tap to Pay. Simple, Fast, Safe.
              </p>
              <p style={{ fontSize:15, color:"#64748B", lineHeight:1.75, marginBottom:36, maxWidth:440 }}>
                Accept payments anywhere with just a tap. No bulky hardware, no complex setups — just a seamless experience for you and your customers.
              </p>

              <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginBottom:44 }}>
                <Link href="/customers" className="btn-green">
                  Get Started <ArrowRight size={15}/>
                </Link>
                <Link href="/how-it-works" className="btn-ghost">
                  How It Works
                </Link>
              </div>

              {/* Trust stats */}
              <div style={{ display:"flex", gap:32, paddingTop:26, borderTop:"1px solid #E2E8F0", flexWrap:"wrap" }}>
                {[{v:"Daily ACH",l:"Settlement"},{v:"Real-Time",l:"Verification"},{v:"Apple & Google",l:"Wallets"}].map(s => (
                  <div key={s.l}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#1A1A1A", lineHeight:1.3 }}>{s.v}</p>
                    <p style={{ fontSize:12, color:"#94A3B8", marginTop:2 }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div className="hero-phone" style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
              <HeroPhone />
            </div>
          </div>
        </div>
      </section>

      {/* ── QR / DUAL FEATURE ── */}
      <section className="section-soft">
        <div className="container">
          <FadeUp>
            <div className="section-header">
              <span className="eyebrow">Scan to Pay · Tap to Pay</span>
              <h2>One wallet. Two ways to pay.</h2>
              <p>Whether customers scan a QR code or tap their device, TapSnap makes checkout frictionless for everyone.</p>
            </div>
          </FadeUp>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20, maxWidth:840, margin:"0 auto" }}>
            {/* QR card */}
            <FadeUp delay={0}>
              <div className="card qr-module" style={{ padding:"32px 28px", background:"linear-gradient(135deg, #F0FDF2, #ECFDF5)", border:"1.5px solid #93E4A4" }}>
                <div style={{ display:"flex", alignItems:"flex-start", gap:16, marginBottom:18 }}>
                  <div style={{ flexShrink:0, background:"#fff", borderRadius:10, padding:8, boxShadow:"0 2px 10px rgba(0,0,0,0.06)", border:"1px solid #C8F5D0" }}>
                    <MiniQR />
                  </div>
                  <div>
                    <h3 style={{ fontSize:16, marginBottom:6, color:"#1A6B2F" }}>QR Scan Checkout</h3>
                    <p style={{ fontSize:13, color:"#1A8C36", lineHeight:1.6 }}>Customer opens their TapSnap wallet and shows the QR code. Merchant scans — transaction authorizes in under 3 seconds.</p>
                  </div>
                </div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                  {["Any camera device","< 3 sec auth","No POS hardware"].map(t => (
                    <span key={t} style={{ fontSize:11, fontWeight:600, color:"#1A6B2F", background:"rgba(16,185,129,0.12)", borderRadius:999, padding:"3px 10px" }}>{t}</span>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Tap card */}
            <FadeUp delay={80}>
              <div className="card" style={{ padding:"32px 28px" }}>
                <div style={{ display:"flex", alignItems:"flex-start", gap:16, marginBottom:18 }}>
                  <div style={{ flexShrink:0, width:36, height:36, borderRadius:10, background:"#F0FDF2", display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <QrCode size={20} color="#2DB84B"/>
                  </div>
                  <div>
                    <h3 style={{ fontSize:16, marginBottom:6 }}>Tap-to-Pay Wallet</h3>
                    <p style={{ fontSize:13, color:"#64748B", lineHeight:1.6 }}>Balance lives in Apple Wallet or Google Pay. Open the app, tap your phone, done — seamless NFC or QR checkout.</p>
                  </div>
                </div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                  {["Apple Wallet","Google Pay","NFC + QR"].map(t => (
                    <span key={t} style={{ fontSize:11, fontWeight:600, color:"#334155", background:"#F1F5F9", borderRadius:999, padding:"3px 10px" }}>{t}</span>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── VALUE PROPS ── */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <div className="section-header">
              <span className="eyebrow">Why TapSnap</span>
              <h2>Built for merchants who demand more</h2>
              <p>Everything you need to accept tap-to-pay — nothing you don't.</p>
            </div>
          </FadeUp>
          <div className="grid-3">
            {values.map((v,i) => (
              <FadeUp key={v.title} delay={i*80}>
                <div className="card" style={{ padding:"30px 26px", height:"100%" }}>
                  <div style={{ width:44,height:44,borderRadius:12,background:v.bg,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:18 }}>
                    <v.icon size={20} color={v.color}/>
                  </div>
                  <h3 style={{ fontSize:17, marginBottom:9 }}>{v.title}</h3>
                  <p style={{ fontSize:14 }}>{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-soft">
        <div className="container">
          <FadeUp>
            <div className="section-header">
              <span className="eyebrow">How It Works</span>
              <h2>Three steps to your first payment</h2>
              <p>From account creation to your first settled transaction — measured in minutes, not days.</p>
            </div>
          </FadeUp>
          <div className="grid-3">
            {steps.map((s,i) => (
              <FadeUp key={s.n} delay={i*90}>
                <div style={{ padding:"8px 0" }}>
                  <div style={{ width:48,height:48,borderRadius:"50%",background: i===0?"#0F172A": i===1?"#155C26":"#2DB84B",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:20,boxShadow:"0 4px 14px rgba(15,23,42,0.14)" }}>
                    <span style={{ fontSize:13,fontWeight:800,color:"#fff" }}>{s.n}</span>
                  </div>
                  <h3 style={{ marginBottom:9 }}>{s.title}</h3>
                  <p style={{ fontSize:14 }}>{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={260}>
            <div style={{ textAlign:"center", marginTop:44 }}>
              <Link href="/how-it-works" className="btn-ghost">Full Walkthrough <ArrowRight size={14}/></Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── COMPLIANCE STRIP ── */}
      <div className="strip">
        <div className="container">
          <div style={{ display:"flex",flexWrap:"wrap",gap:28,justifyContent:"center",alignItems:"center" }}>
            {compliance.map(item => (
              <div key={item} style={{ display:"flex",alignItems:"center",gap:7 }}>
                <CheckCircle size={13} color="#2DB84B"/>
                <span style={{ fontSize:13,fontWeight:500,color:"#334155",fontFamily:"'Inter',sans-serif" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA BAND ── */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <div className="cta-band">
              <div style={{ position:"absolute",top:-60,right:-60,width:220,height:220,borderRadius:"50%",background:"rgba(16,185,129,0.14)",pointerEvents:"none" }}/>
              <div style={{ position:"absolute",bottom:-40,left:-40,width:160,height:160,borderRadius:"50%",background:"rgba(16,185,129,0.07)",pointerEvents:"none" }}/>
              <div style={{ position:"relative" }}>
                <span style={{ fontSize:11,fontWeight:600,color:"#2DB84B",letterSpacing:"0.12em",textTransform:"uppercase",display:"block",marginBottom:14,fontFamily:"'Inter',sans-serif" }}>
                  Ready to accept wallet payments?
                </span>
                <h2 style={{ color:"#fff", marginBottom:12 }}>
                  Join licensed merchants already<br />processing with TapSnap
                </h2>
                <p style={{ color:"rgba(255,255,255,0.5)",fontSize:15,marginBottom:30 }}>
                  Same-day setup. Daily payouts. Zero hardware.
                </p>
                <div style={{ display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap" }}>
                  <Link href="/merchants" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#2DB84B",color:"#fff",fontWeight:700,fontFamily:"'Inter',sans-serif",borderRadius:10,padding:"12px 24px",fontSize:14,textDecoration:"none",transition:"background 0.18s,transform 0.15s" }}
                    onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.background="#1FA83A"; el.style.transform="translateY(-1px)"; }}
                    onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.background="#2DB84B"; el.style.transform=""; }}
                  >
                    Merchant Info <ArrowRight size={15}/>
                  </Link>
                  <Link href="/faqs" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"transparent",color:"rgba(255,255,255,0.65)",fontWeight:600,fontFamily:"'Inter',sans-serif",borderRadius:10,padding:"11px 22px",fontSize:14,textDecoration:"none",border:"1.5px solid rgba(255,255,255,0.15)" }}>
                    Read FAQs
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
