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
  { icon: QrCode,          bg:"#F0FDF4", color:"#2DB84B", title:"QR Checkout",        desc:"Customer scans. You get paid. Under 3 seconds."          },
  { icon: Banknote,        bg:"#F0FDF4", color:"#1FA83A", title:"Daily Payouts",       desc:"ACH to your bank every business day. Automatic."         },
  { icon: LayoutDashboard, bg:"#F0FDF4", color:"#2DB84B", title:"One Dashboard",       desc:"All locations. All transactions. One login."             },
  { icon: BadgeCheck,      bg:"#F1F5F9", color:"#1A1A1A", title:"License Verified",    desc:"Every transaction checks your license in real time."     },
];

export default function MerchantsPage() {
  return (
    <>
      <section style={{ background:"#fff", padding:"72px 0 60px" }}>
        <div className="container" style={{ textAlign:"center" }}>
          <span className="badge"><span className="emerald-dot"/>For Merchants</span>
          <h1 style={{ marginBottom:14 }}>Accept payments.<br /><span style={{ color:"#2DB84B" }}>No hardware needed.</span></h1>
          <p style={{ fontSize:16, color:"#64748B", maxWidth:420, margin:"0 auto 28px", lineHeight:1.7 }}>
            Turn any phone into a checkout terminal. Set up today. Get paid tomorrow.
          </p>
          <a href="https://portal.tap-snap.com" target="_blank" rel="noopener noreferrer" className="btn-green">
            Open Merchant Portal <ArrowRight size={15}/>
          </a>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <FadeUp><div className="section-header"><span className="eyebrow">Platform</span><h2>Four things that matter.</h2></div></FadeUp>
          <div className="grid-3" style={{ gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))" }}>
            {pillars.map((p, i) => (
              <FadeUp key={p.title} delay={i * 70}>
                <div className="card" style={{ padding:"28px 24px", height:"100%" }}>
                  <div style={{ width:42, height:42, borderRadius:11, background:p.bg, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:16 }}>
                    <p.icon size={19} color={p.color}/>
                  </div>
                  <h3 style={{ fontSize:16, marginBottom:8 }}>{p.title}</h3>
                  <p style={{ fontSize:13 }}>{p.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeUp>
            <div className="card" style={{ maxWidth:680, margin:"0 auto", padding:"40px 36px" }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:32 }}>
                <div>
                  <span className="eyebrow">Requirements</span>
                  <h2 style={{ fontSize:22, marginBottom:12 }}>Who can apply?</h2>
                  <p style={{ fontSize:14, lineHeight:1.7, marginBottom:22 }}>Licensed merchants only. Apply takes 5 minutes.</p>
                  <a href="https://portal.tap-snap.com" target="_blank" rel="noopener noreferrer" className="btn-green" style={{ fontSize:13 }}>
                    Apply Now <ArrowRight size={13}/>
                  </a>
                </div>
                <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>
                  {["Active merchant license","US registered business","Business bank account","Phone or tablet","5-min onboarding"].map(r => (
                    <li key={r} style={{ display:"flex", alignItems:"center", gap:9, fontSize:13, color:"#334155" }}>
                      <CheckCircle2 size={12} color="#2DB84B" style={{ flexShrink:0 }}/>{r}
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
