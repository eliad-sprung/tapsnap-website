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
  { icon: UserPlus,   n:"01", title:"Create Account",  desc:"Sign up in 2 minutes.", tag:"Email · Phone · ID"        },
  { icon: CreditCard, n:"02", title:"Add Funds",        desc:"ACH or debit. Same-day.", tag:"ACH · Debit · Instant"    },
  { icon: Smartphone, n:"03", title:"Add to Wallet",    desc:"Apple or Google Pay.", tag:"Apple · Google"              },
  { icon: ScanLine,   n:"04", title:"Scan & Pay",       desc:"Show QR. Done.", tag:"QR · Contactless"                  },
];

const trust = [
  { icon: Shield, bg:"#F0FDF4", color:"#2DB84B", title:"Your money, your control", desc:"Funds held by regulated banking partners. Never by TapSnap." },
  { icon: Lock,   bg:"#F0FDF4", color:"#1FA83A", title:"No card data on POS",      desc:"Every transaction uses a one-time token. Your card stays private." },
  { icon: Zap,    bg:"#F0FDF4", color:"#2DB84B", title:"Real-time balance",         desc:"Balance updates the instant you pay. No delays."              },
];

export default function CustomersPage() {
  return (
    <>
      <section style={{ background:"#fff", padding:"72px 0 60px" }}>
        <div className="container" style={{ textAlign:"center" }}>
          <span className="badge"><span className="emerald-dot"/>For Customers</span>
          <h1 style={{ marginBottom:14 }}>Pay with your phone.<br /><span style={{ color:"#2DB84B" }}>That's it.</span></h1>
          <p style={{ fontSize:16, color:"#64748B", maxWidth:400, margin:"0 auto 28px", lineHeight:1.7 }}>Load your wallet once. Scan anywhere. No cards, no hardware.</p>
          <div style={{ display:"flex", gap:10, justifyContent:"center" }}>
            <Link href="/how-it-works" className="btn-green">See How <ArrowRight size={15}/></Link>
            <Link href="/faqs" className="btn-ghost">FAQs</Link>
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <FadeUp><div className="section-header"><span className="eyebrow">4 Steps</span><h2>Live in minutes.</h2></div></FadeUp>
          <div className="grid-4">
            {steps.map((s, i) => (
              <FadeUp key={s.n} delay={i * 70}>
                <div className="card" style={{ padding:"26px 22px", height:"100%" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
                    <div style={{ width:40, height:40, borderRadius:10, background:"#1A1A1A", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                      <s.icon size={17} color="#fff"/>
                    </div>
                    <span style={{ fontSize:10, fontWeight:700, color:"#94A3B8", letterSpacing:"0.06em" }}>{s.n}</span>
                  </div>
                  <h3 style={{ fontSize:15, marginBottom:6 }}>{s.title}</h3>
                  <p style={{ fontSize:13, marginBottom:12 }}>{s.desc}</p>
                  <span style={{ fontSize:10, fontWeight:600, color:"#2DB84B", background:"#F0FDF4", padding:"3px 9px", borderRadius:999 }}>{s.tag}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeUp><div className="section-header"><span className="eyebrow">Security</span><h2>Built around you.</h2></div></FadeUp>
          <div className="grid-3">
            {trust.map((t, i) => (
              <FadeUp key={t.title} delay={i * 80}>
                <div className="card" style={{ padding:"28px 24px" }}>
                  <div style={{ width:42, height:42, borderRadius:11, background:t.bg, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:16 }}>
                    <t.icon size={19} color={t.color}/>
                  </div>
                  <h3 style={{ fontSize:16, marginBottom:8 }}>{t.title}</h3>
                  <p style={{ fontSize:13 }}>{t.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm-soft" style={{ textAlign:"center" }}>
        <div className="container">
          <h2 style={{ fontSize:24, marginBottom:10 }}>Questions?</h2>
          <p style={{ fontSize:14, color:"#64748B", marginBottom:22 }}>We reply within one business day.</p>
          <a href="mailto:support@tap-snap.com" className="btn-green">Email Us <ArrowRight size={14}/></a>
        </div>
      </section>
    </>
  );
}
