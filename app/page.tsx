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
  { icon: Zap,        bg:"#F0FDF4", color:"#2DB84B", title:"Zero Hardware",      desc:"Your phone is the terminal. Start accepting payments today without any extra devices."                        },
  { icon: Shield,     bg:"#F0FDF4", color:"#1FA83A", title:"Bank-Grade Security", desc:"Every transaction encrypted. Every payment protected with zero raw card data stored on-site."             },
  { icon: DollarSign, bg:"#F0FDF4", color:"#2DB84B", title:"No Hidden Fees",      desc:"What you see is what you pay. Clear, simple pricing with direct automated ACH deposits."                  },
];

const steps = [
  { n:"01", title:"Create Account", desc:"Two minutes. No complicated paperwork."                                        },
  { n:"02", title:"Scan to Accept", desc:"Display your QR code or tap to accept payments instantly on any phone."        },
  { n:"03", title:"Get Paid Fast",  desc:"Automatic daily ACH deposits directly to your business account."              },
];

const trust = [
  { v:"Daily ACH",  l:"Settlements"  },
  { v:"Real-Time",  l:"Verification" },
  { v:"Instant QR", l:"Scan & Pay"   },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container" style={{ padding:"72px 24px", width:"100%" }}>
          <div className="grid-2">
            <div>
              <div style={{ marginBottom:28 }}>
                <Image src="/logo-wordmark.png" alt="TapSnap" width={1184} height={210} style={{ width:240, height:"auto" }} priority />
              </div>
              <h1 style={{ fontSize:"clamp(40px, 5.5vw, 64px)", marginBottom:18, lineHeight:1.05 }}>
                Scan. Pay. Done.
              </h1>
              <p style={{ fontSize:17, color:"#64748B", lineHeight:1.75, marginBottom:36, maxWidth:440 }}>
                Fast and Secure. Accept instant payments with a simple QR scan. No card readers, no hardware, no friction.
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
                {trust.map(s => (
                  <div key={s.l}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#1A1A1A", lineHeight:1.3 }}>{s.v}</p>
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

      <section className="section-soft">
        <div className="container">
          <FadeUp>
            <div className="section-header">
              <span className="eyebrow">Why TapSnap</span>
              <h2>Everything you need. Nothing you do not.</h2>
            </div>
          </FadeUp>
          <div className="grid-3">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 80}>
                <div className="card" style={{ padding:"32px 28px", height:"100%" }}>
                  <div style={{ width:44, height:44, borderRadius:12, background:v.bg, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:18 }}>
                    <v.icon size={20} color={v.color}/>
                  </div>
                  <h3 style={{ marginBottom:10 }}>{v.title}</h3>
                  <p style={{ fontSize:14 }}>{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeUp>
            <div className="section-header">
              <span className="eyebrow">How It Works</span>
              <h2>Up and running in 3 steps.</h2>
            </div>
          </FadeUp>
          <div className="grid-3">
            {steps.map((s, i) => (
              <FadeUp key={s.n} delay={i * 90}>
                <div>
                  <div style={{ width:48, height:48, borderRadius:"50%", background: i===0?"#1A1A1A": i===1?"#155C26":"#2DB84B", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:20, boxShadow:"0 4px 14px rgba(15,23,42,0.12)" }}>
                    <span style={{ fontSize:13, fontWeight:800, color:"#fff" }}>{s.n}</span>
                  </div>
                  <h3 style={{ marginBottom:9 }}>{s.title}</h3>
                  <p style={{ fontSize:14 }}>{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={260}>
            <div style={{ textAlign:"center", marginTop:44 }}>
              <Link href="/how-it-works" className="btn-ghost">Full Details <ArrowRight size={14}/></Link>
            </div>
          </FadeUp>
        </div>
      </section>

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

      <section className="section">
        <div className="container">
          <FadeUp>
            <div className="cta-band">
              <div style={{ position:"absolute", top:-60, right:-60, width:220, height:220, borderRadius:"50%", background:"rgba(45,184,75,0.14)", pointerEvents:"none" }}/>
              <div style={{ position:"relative" }}>
                <h2 style={{ color:"#fff", marginBottom:10, fontSize:"clamp(24px, 3.5vw, 38px)" }}>Ready to get paid?</h2>
                <p style={{ color:"rgba(255,255,255,0.55)", fontSize:15, marginBottom:28 }}>Set up in minutes. No hardware needed.</p>
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
