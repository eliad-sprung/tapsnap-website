"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Zap, DollarSign, CheckCircle } from "lucide-react";
import HeroPhone from "@/components/HeroPhone";
import Image from "next/image";

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

const values = [
  { icon: Zap,       bg:"#F0FDF4", color:"#2DB84B", title:"Zero Hardware",     desc:"Your phone is the terminal. Start accepting payments today." },
  { icon: Shield,    bg:"#F0FDF4", color:"#1FA83A", title:"Bank-Level Security",desc:"Every transaction encrypted. Every payment protected."         },
  { icon: DollarSign,bg:"#F0FDF4", color:"#2DB84B", title:"No Hidden Fees",    desc:"What you see is what you pay. Simple, always."                  },
];

const steps = [
  { n:"01", title:"Create Account",  desc:"Two minutes. No paperwork."          },
  { n:"02", title:"Tap to Accept",   desc:"Your phone becomes a payment terminal." },
  { n:"03", title:"Get Paid",        desc:"Daily ACH deposits. Automatic."        },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="container" style={{ padding:"72px 24px", width:"100%" }}>
          <div className="grid-2">
            <div>
              {/* Wordmark only in hero — headline already says Payments Made Simple */}
              <div style={{ marginBottom: 24 }}>
                <Image
                  src="/logo-wordmark.png"
                  alt="TapSnap"
                  width={1184}
                  height={210}
                  style={{ width: 280, height: "auto" }}
                  priority
                />
              </div>

              <h1 style={{ fontSize:"clamp(36px, 5vw, 58px)", marginBottom:16, marginTop:32 }}>
                Payments Made<br />
                <span style={{ color:"#2DB84B" }}>Simple.</span>
              </h1>

              <p style={{ fontSize:17, color:"#64748B", lineHeight:1.7, marginBottom:36, maxWidth:420 }}>
                Accept payments anywhere. Just tap.<br />
                No hardware. No friction. No delays.
              </p>

              <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginBottom:44 }}>
                <Link href="/customers" className="btn-green" style={{ fontSize:15, padding:"13px 28px" }}>
                  Get Started <ArrowRight size={16}/>
                </Link>
                <Link href="/how-it-works" className="btn-ghost" style={{ fontSize:15 }}>
                  See How It Works
                </Link>
              </div>

              <div style={{ display:"flex", gap:32, paddingTop:24, borderTop:"1px solid #E2E8F0", flexWrap:"wrap" }}>
                {[{v:"Daily ACH", l:"Settlements"},{v:"Real-Time", l:"Verification"},{v:"Apple & Google", l:"Wallet Support"}].map(s => (
                  <div key={s.l}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#1A1A1A" }}>{s.v}</p>
                    <p style={{ fontSize:12, color:"#94A3B8", marginTop:2 }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-phone" style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
              <HeroPhone />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY TAPSNAP — 3 cards, zero fluff ── */}
      <section className="section-soft">
        <div className="container">
          <FadeUp>
            <div className="section-header">
              <span className="eyebrow">Why TapSnap</span>
              <h2>Everything you need.<br />Nothing you don't.</h2>
            </div>
          </FadeUp>
          <div className="grid-3">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 80}>
                <div className="card" style={{ padding:"32px 28px", height:"100%" }}>
                  <div style={{ width:44, height:44, borderRadius:12, background:v.bg, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:18 }}>
                    <v.icon size={20} color={v.color}/>
                  </div>
                  <h3 style={{ marginBottom:8 }}>{v.title}</h3>
                  <p style={{ fontSize:14 }}>{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — stripped back ── */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <div className="section-header">
              <span className="eyebrow">How It Works</span>
              <h2>Up and running<br />in 3 steps.</h2>
            </div>
          </FadeUp>
          <div className="grid-3">
            {steps.map((s, i) => (
              <FadeUp key={s.n} delay={i * 90}>
                <div>
                  <div style={{ width:48, height:48, borderRadius:"50%", background: i===0?"#1A1A1A": i===1?"#155C26":"#2DB84B", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:20, boxShadow:"0 4px 14px rgba(15,23,42,0.12)" }}>
                    <span style={{ fontSize:13, fontWeight:800, color:"#fff" }}>{s.n}</span>
                  </div>
                  <h3 style={{ marginBottom:8 }}>{s.title}</h3>
                  <p style={{ fontSize:14 }}>{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={260}>
            <div style={{ textAlign:"center", marginTop:40 }}>
              <Link href="/how-it-works" className="btn-ghost">
                Full Details <ArrowRight size={14}/>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── COMPLIANCE — single line ── */}
      <div className="strip">
        <div className="container">
          <div style={{ display:"flex", flexWrap:"wrap", gap:24, justifyContent:"center", alignItems:"center" }}>
            {["Non-Custodial","Zero Card Data on POS","Real-Time License Check","Daily ACH Payouts"].map(item => (
              <div key={item} style={{ display:"flex", alignItems:"center", gap:7 }}>
                <CheckCircle size={13} color="#2DB84B"/>
                <span style={{ fontSize:13, fontWeight:500, color:"#334155" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA — one clear action ── */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <div className="cta-band">
              <div style={{ position:"absolute", top:-60, right:-60, width:220, height:220, borderRadius:"50%", background:"rgba(45,184,75,0.14)", pointerEvents:"none" }}/>
              <div style={{ position:"relative" }}>
                <h2 style={{ color:"#fff", marginBottom:12, fontSize:"clamp(22px, 3.5vw, 36px)" }}>
                  Ready to get paid?
                </h2>
                <p style={{ color:"rgba(255,255,255,0.5)", fontSize:15, marginBottom:28 }}>
                  Set up in minutes. No hardware needed.
                </p>
                <Link href="/customers" className="btn-green" style={{ fontSize:15, padding:"13px 32px" }}>
                  Get Started <ArrowRight size={16}/>
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
