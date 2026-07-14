"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Zap, DollarSign, CheckCircle } from "lucide-react";
import HeroPhone from "@/components/HeroPhone";

function FadeUp({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className="fade-up" style={style}>{children}</div>;
}

const values = [
  { icon: Zap,       bg: "#EEF3FF", color: "#0066FF", title: "Effortless Setup",       desc: "Get started in minutes with zero hardware required. Your phone is all you need." },
  { icon: Shield,    bg: "#F0FDF9", color: "#10B981", title: "Bank-Grade Security",     desc: "Encrypted transactions designed to protect every payment and build customer trust." },
  { icon: DollarSign,bg: "#F8F4FF", color: "#7C3AED", title: "Transparent & Direct",   desc: "Clear pricing with zero hidden friction or unexpected fees. Ever." },
];

const steps = [
  { n:"01", bgCircle:"#0F172A", title:"Quick Onboarding",  desc:"Set up your account securely in a few simple steps. Verification takes under two minutes." },
  { n:"02", bgCircle:"#1E3A8A", title:"Tap to Accept",     desc:"Turn your phone or device into a payment terminal instantly. No extra hardware." },
  { n:"03", bgCircle:"#0066FF", title:"Get Paid Fast",     desc:"Receive direct, reliable ACH settlements to your business account without delay." },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-bg" style={{ minHeight:"92vh", display:"flex", alignItems:"center", position:"relative", overflow:"hidden" }}>
        <div className="hero-grid-lines" />

        {/* Large decorative circle */}
        <div style={{
          position:"absolute", top:"-15%", right:"-8%",
          width:640, height:640, borderRadius:"50%",
          background:"radial-gradient(circle, rgba(0,102,255,0.07) 0%, transparent 65%)",
          pointerEvents:"none",
        }} />

        <div style={{ maxWidth:1200, margin:"0 auto", padding:"80px 24px", width:"100%", position:"relative" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }}>

            {/* ── Left copy ── */}
            <div>
              <div style={{ marginBottom:28 }}>
                <span className="badge">
                  <span className="emerald-dot" />
                  Live in Production
                </span>
              </div>

              <h1 style={{
                fontSize:"clamp(34px, 4.8vw, 58px)",
                fontWeight:800,
                color:"#0F172A",
                lineHeight:1.07,
                letterSpacing:"-0.04em",
                marginBottom:22,
              }}>
                Smart Payments &amp;<br />
                <span style={{ color:"#0066FF" }}>Tap-to-Pay.</span><br />
                <span style={{ fontSize:"0.7em", fontWeight:700, color:"#334155", letterSpacing:"-0.03em" }}>
                  Simple, Secure, Instant.
                </span>
              </h1>

              <p style={{ fontSize:17, fontWeight:600, color:"#1E3A8A", marginBottom:10, letterSpacing:"-0.01em" }}>
                Tap to Pay. Simple, Fast, Safe.
              </p>

              <p style={{ fontSize:16, color:"#64748B", lineHeight:1.7, marginBottom:36, maxWidth:460 }}>
                Accept payments anywhere with just a tap. No bulky hardware, no complex setups — just a seamless experience for you and your customers.
              </p>

              <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:48 }}>
                <Link href="/customers" className="btn-primary" style={{ background:"#0066FF" }}>
                  Get Started <ArrowRight size={16} />
                </Link>
                <Link href="/how-it-works" className="btn-outline">
                  See How It Works
                </Link>
              </div>

              {/* Trust row */}
              <div style={{ display:"flex", gap:28, flexWrap:"wrap", paddingTop:28, borderTop:"1px solid #E2E8F0" }}>
                {[
                  { label:"Settlement", value:"Daily ACH" },
                  { label:"Verification", value:"Real-Time" },
                  { label:"Wallets", value:"Apple & Google" },
                ].map((s) => (
                  <div key={s.label}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#0F172A", marginBottom:2 }}>{s.value}</p>
                    <p style={{ fontSize:12, color:"#94A3B8" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: animated phone ── */}
            <div style={{ display:"flex", justifyContent:"center", alignItems:"center", padding:"20px 0" }}>
              <HeroPhone />
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-two-col { grid-template-columns: 1fr !important; }
            .hero-phone-col { display: none; }
          }
        `}</style>
      </section>

      {/* ── VALUE PROPS ── */}
      <section className="section" style={{ background:"#fff" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>
          <FadeUp>
            <div style={{ textAlign:"center", marginBottom:56 }}>
              <p style={{ fontSize:11, fontWeight:600, color:"#10B981", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:12 }}>Why TapSnap</p>
              <h2 style={{ fontSize:"clamp(26px, 3.5vw, 40px)", fontWeight:800, color:"#0F172A", letterSpacing:"-0.03em", lineHeight:1.15 }}>
                Built for merchants who demand more
              </h2>
            </div>
          </FadeUp>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:20 }}>
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 80}>
                <div className="card" style={{ padding:"36px 30px", height:"100%" }}>
                  <div style={{ width:48, height:48, borderRadius:12, background:v.bg, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:20 }}>
                    <v.icon size={22} color={v.color} />
                  </div>
                  <h3 style={{ fontSize:18, fontWeight:700, color:"#0F172A", marginBottom:10, letterSpacing:"-0.02em" }}>{v.title}</h3>
                  <p style={{ fontSize:14, color:"#64748B", lineHeight:1.65 }}>{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section" style={{ background:"#F8FAFC" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>
          <FadeUp>
            <div style={{ textAlign:"center", marginBottom:60 }}>
              <p style={{ fontSize:11, fontWeight:600, color:"#10B981", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:12 }}>How It Works</p>
              <h2 style={{ fontSize:"clamp(26px, 3.5vw, 40px)", fontWeight:800, color:"#0F172A", letterSpacing:"-0.03em" }}>
                Three steps to your first payment
              </h2>
            </div>
          </FadeUp>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap:32 }}>
            {steps.map((s, i) => (
              <FadeUp key={s.n} delay={i * 100}>
                <div>
                  <div style={{
                    width:52, height:52, borderRadius:"50%",
                    background:s.bgCircle,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    marginBottom:22,
                    boxShadow:"0 4px 18px rgba(15,23,42,0.15)",
                  }}>
                    <span style={{ fontSize:14, fontWeight:800, color:"#fff" }}>{s.n}</span>
                  </div>
                  <h3 style={{ fontSize:20, fontWeight:700, color:"#0F172A", marginBottom:10, letterSpacing:"-0.02em" }}>{s.title}</h3>
                  <p style={{ fontSize:14, color:"#64748B", lineHeight:1.65 }}>{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={300}>
            <div style={{ textAlign:"center", marginTop:52 }}>
              <Link href="/how-it-works" className="btn-primary" style={{ background:"#0066FF" }}>
                Full Walkthrough <ArrowRight size={16} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── COMPLIANCE STRIP ── */}
      <section style={{ background:"#EEF3FF", borderTop:"1px solid #DBEAFE", borderBottom:"1px solid #DBEAFE" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"28px 24px" }}>
          <div style={{ display:"flex", flexWrap:"wrap", gap:24, alignItems:"center", justifyContent:"center" }}>
            {[
              "Non-Custodial by Design",
              "Zero Raw Card Data on POS Hardware",
              "Real-Time License Verification",
              "Automated Daily ACH Settlements",
            ].map((item) => (
              <div key={item} style={{ display:"flex", alignItems:"center", gap:8 }}>
                <CheckCircle size={14} color="#10B981" />
                <span style={{ fontSize:13, fontWeight:500, color:"#334155" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="section" style={{ background:"#fff" }}>
        <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px", textAlign:"center" }}>
          <FadeUp>
            <div style={{
              background:"linear-gradient(135deg, #0F172A 0%, #1E3A8A 60%, #0066FF 100%)",
              borderRadius:24,
              padding:"64px 48px",
              position:"relative",
              overflow:"hidden",
            }}>
              <div style={{ position:"absolute",top:-60,right:-60,width:240,height:240,borderRadius:"50%",background:"rgba(0,102,255,0.18)",pointerEvents:"none" }} />
              <div style={{ position:"absolute",bottom:-40,left:-40,width:160,height:160,borderRadius:"50%",background:"rgba(16,185,129,0.08)",pointerEvents:"none" }} />

              <p style={{ fontSize:11, fontWeight:600, color:"#10B981", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:16, position:"relative" }}>
                Ready to accept wallet payments?
              </p>
              <h2 style={{ fontSize:"clamp(22px, 3.5vw, 34px)", fontWeight:800, color:"#fff", letterSpacing:"-0.03em", lineHeight:1.15, marginBottom:14, position:"relative" }}>
                Join licensed merchants already<br />processing with TapSnap
              </h2>
              <p style={{ fontSize:15, color:"rgba(255,255,255,0.5)", marginBottom:32, position:"relative" }}>
                Same-day setup. Daily payouts. Zero hardware.
              </p>
              <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap", position:"relative" }}>
                <Link href="/merchants" style={{
                  background:"#fff", color:"#0F172A",
                  fontWeight:700, borderRadius:10, padding:"13px 28px",
                  fontSize:15, textDecoration:"none", display:"inline-flex", alignItems:"center", gap:8,
                  transition:"transform 0.15s, box-shadow 0.15s",
                }}>
                  Merchant Info <ArrowRight size={16} />
                </Link>
                <Link href="/faqs" style={{
                  background:"transparent", color:"rgba(255,255,255,0.7)",
                  fontWeight:600, borderRadius:10, padding:"12px 24px",
                  fontSize:15, textDecoration:"none", display:"inline-flex", alignItems:"center", gap:8,
                  border:"1.5px solid rgba(255,255,255,0.15)",
                }}>
                  Read FAQs
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
