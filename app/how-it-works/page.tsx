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
  { icon: Upload,    iconBg:"#F1F5F9", iconColor:"#0F172A", phase:"Phase 1", title:"Online Funding",           desc:"The customer creates a TapSnap account and loads funds via ACH or debit card. Funds are held through regulated banking partners — never on TapSnap servers. Balances are available the same business day.",                                                                  details:[{l:"Methods",v:"ACH, Debit Card"},{l:"Availability",v:"Same Business Day"},{l:"Custody",v:"Regulated Partners"},{l:"KYC",v:"Real-Time Verify"}]      },
  { icon: Smartphone,iconBg:"#EFF6FF", iconColor:"#1E3A8A", phase:"Phase 2", title:"Digital Pass Balance",      desc:"Once funded, the customer receives a digital wallet pass compatible with Apple Wallet and Google Pay. The pass displays the current balance and a dynamic QR code that refreshes for every transaction.",                                                                  details:[{l:"Pass Type",v:"Apple & Google"},{l:"QR Refresh",v:"Per-Transaction"},{l:"Balance",v:"Real-Time"},{l:"Offline",v:"Cached QR"}]                    },
  { icon: ScanLine,  iconBg:"#EFF6FF", iconColor:"#2DB84B", phase:"Phase 3", title:"In-Store Scan",             desc:"At the licensed merchant's register, the customer presents the QR code. The merchant's device scans it, TapSnap authorizes in under 3 seconds, and the customer's balance is debited instantly. No card data touches the POS.",                                       details:[{l:"Auth Time",v:"< 3 Seconds"},{l:"Hardware",v:"Any Camera"},{l:"Card Data on POS",v:"None"},{l:"License Check",v:"Real-Time"}]                    },
  { icon: Building2, iconBg:"#F0FDF2", iconColor:"#2DB84B", phase:"Phase 4", title:"Automated Merchant Settlement",desc:"Each evening, TapSnap batches all settled transactions and initiates ACH transfers to each merchant's business bank account. Funds arrive the next business day with a full itemized breakdown.",                                                                    details:[{l:"Rail",v:"Next-Day ACH"},{l:"Batching",v:"Nightly"},{l:"Reporting",v:"Itemized"},{l:"Notifications",v:"Email + Portal"}]                        },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background:"#fff", padding:"80px 0 72px" }}>
        <div className="container" style={{ textAlign:"center" }}>
          <span className="badge"><span className="emerald-dot" />How It Works</span>
          <h1 style={{ marginBottom:16 }}>From Funding to{" "}<span style={{ color:"#2DB84B" }}>Settlement</span></h1>
          <p style={{ fontSize:16, color:"#64748B", maxWidth:480, margin:"0 auto", lineHeight:1.75 }}>
            A complete walkthrough of the TapSnap payment lifecycle — from the moment a customer loads funds to the moment a merchant receives their payout.
          </p>
        </div>
      </section>

      {/* Flow */}
      <section className="section-soft">
        <div className="container">
          <div style={{ maxWidth:720, margin:"0 auto", display:"flex", flexDirection:"column", gap:6 }}>
            {phases.map((p, i) => (
              <div key={p.phase}>
                <FadeUp delay={i * 60}>
                  <div className="card" style={{ padding:"36px 32px" }}>
                    <div style={{ display:"flex", gap:20, alignItems:"flex-start" }}>
                      <div style={{ width:52, height:52, borderRadius:13, background:p.iconBg, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                        <p.icon size={22} color={p.iconColor} />
                      </div>
                      <div style={{ flex:1 }}>
                        <p style={{ fontSize:11, fontWeight:600, color:p.iconColor, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:4 }}>{p.phase}</p>
                        <h2 style={{ fontSize:20, marginBottom:10 }}>{p.title}</h2>
                        <p style={{ fontSize:14, lineHeight:1.7, marginBottom:20 }}>{p.desc}</p>
                        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(130px, 1fr))", gap:8 }}>
                          {p.details.map(d => (
                            <div key={d.l} style={{ background:"#F9FAFB", border:"1px solid #E2E8F0", borderRadius:10, padding:"11px 13px" }}>
                              <p style={{ fontSize:10, color:"#94A3B8", marginBottom:3 }}>{d.l}</p>
                              <p style={{ fontSize:12, fontWeight:700, color:"#0F172A" }}>{d.v}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
                {i < phases.length - 1 && (
                  <div style={{ display:"flex", justifyContent:"center", padding:"6px 0" }}>
                    <div style={{ width:30, height:30, borderRadius:"50%", background:"#EFF6FF", border:"1px solid #DBEAFE", display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <ArrowDown size={13} color="#2DB84B" />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Promise */}
            <FadeUp delay={200}>
              <div className="cta-band" style={{ marginTop:12 }}>
                <div style={{ position:"absolute", top:-50, right:-50, width:200, height:200, borderRadius:"50%", background:"rgba(0,102,255,0.12)", pointerEvents:"none" }} />
                <div style={{ position:"relative" }}>
                  <p style={{ fontSize:11, fontWeight:600, color:"#2DB84B", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:12 }}>The TapSnap Promise</p>
                  <p style={{ fontSize:14, color:"rgba(255,255,255,0.6)", lineHeight:1.75, maxWidth:460, margin:"0 auto 22px" }}>
                    Every dollar tracked, verified, and settled transparently. No raw card data ever touches a point-of-sale device. Funds are held through regulated partners at all times.
                  </p>
                  <Link href="/merchants" style={{ display:"inline-flex", alignItems:"center", gap:7, fontSize:14, fontWeight:600, color:"#fff", textDecoration:"none" }}>
                    Merchant Platform <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
