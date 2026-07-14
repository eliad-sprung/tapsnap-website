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
  { icon: Upload,    color:"#1A1A1A", bg:"#F1F5F9", phase:"Step 1", title:"Load Your Wallet",      desc:"Sign up and add funds via ACH or debit card. Held by regulated banking partners. Available same day.",         details:[{l:"Methods",v:"ACH, Debit"},{l:"Available",v:"Same Day"},{l:"Custody",v:"Regulated Partners"},{l:"KYC",v:"Real-Time"}] },
  { icon: Smartphone,color:"#155C26", bg:"#F0FDF4", phase:"Step 2", title:"Add to Apple / Google", desc:"Your TapSnap pass lands in your wallet app. Dynamic QR code refreshes every transaction.",                     details:[{l:"Pass",v:"Apple & Google"},{l:"QR",v:"Per-Transaction"},{l:"Balance",v:"Real-Time"},{l:"Offline",v:"Supported"}]   },
  { icon: ScanLine,  color:"#2DB84B", bg:"#F0FDF4", phase:"Step 3", title:"Scan at Checkout",      desc:"Show your QR. Merchant scans. Authorized in under 3 seconds. No card data on the terminal.",                  details:[{l:"Auth",v:"< 3 Seconds"},{l:"Hardware",v:"Any Camera"},{l:"Card Data",v:"None"},{l:"License",v:"Verified"}]         },
  { icon: Building2, color:"#2DB84B", bg:"#F0FDF4", phase:"Step 4", title:"Merchant Gets Paid",    desc:"TapSnap batches all transactions nightly and sends ACH to the merchant's bank. Next business day.",            details:[{l:"Rail",v:"Next-Day ACH"},{l:"Batch",v:"Nightly"},{l:"Report",v:"Itemized"},{l:"Alert",v:"Email + Portal"}]        },
];

export default function HowItWorksPage() {
  return (
    <>
      <section style={{ background:"#fff", padding:"72px 0 60px" }}>
        <div className="container" style={{ textAlign:"center" }}>
          <span className="badge"><span className="emerald-dot"/>How It Works</span>
          <h1 style={{ marginBottom:14 }}>Load. Scan. <span style={{ color:"#2DB84B" }}>Get Paid.</span></h1>
          <p style={{ fontSize:16, color:"#64748B", maxWidth:400, margin:"0 auto", lineHeight:1.7 }}>
            Four steps. Fully automated. From wallet load to merchant payout.
          </p>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <div style={{ maxWidth:680, margin:"0 auto", display:"flex", flexDirection:"column", gap:6 }}>
            {phases.map((p, i) => (
              <div key={p.phase}>
                <FadeUp delay={i * 60}>
                  <div className="card" style={{ padding:"32px 28px" }}>
                    <div style={{ display:"flex", gap:18, alignItems:"flex-start" }}>
                      <div style={{ width:48, height:48, borderRadius:12, background:p.bg, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                        <p.icon size={21} color={p.color}/>
                      </div>
                      <div style={{ flex:1 }}>
                        <p style={{ fontSize:10, fontWeight:600, color:p.color, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:4 }}>{p.phase}</p>
                        <h2 style={{ fontSize:19, marginBottom:9 }}>{p.title}</h2>
                        <p style={{ fontSize:14, lineHeight:1.7, marginBottom:18 }}>{p.desc}</p>
                        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(120px, 1fr))", gap:8 }}>
                          {p.details.map(d => (
                            <div key={d.l} style={{ background:"#F9FAFB", border:"1px solid #E2E8F0", borderRadius:9, padding:"10px 12px" }}>
                              <p style={{ fontSize:10, color:"#94A3B8", marginBottom:2 }}>{d.l}</p>
                              <p style={{ fontSize:12, fontWeight:700, color:"#1A1A1A" }}>{d.v}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
                {i < phases.length - 1 && (
                  <div style={{ display:"flex", justifyContent:"center", padding:"6px 0" }}>
                    <div style={{ width:28, height:28, borderRadius:"50%", background:"#F0FDF4", border:"1px solid #A7F3D0", display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <ArrowDown size={12} color="#2DB84B"/>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <FadeUp delay={200}>
              <div className="cta-band" style={{ marginTop:10 }}>
                <div style={{ position:"absolute", top:-50, right:-50, width:180, height:180, borderRadius:"50%", background:"rgba(45,184,75,0.12)", pointerEvents:"none" }}/>
                <div style={{ position:"relative" }}>
                  <h2 style={{ color:"#fff", fontSize:24, marginBottom:10 }}>Ready to start?</h2>
                  <Link href="/customers" className="btn-green">Get Started <ArrowRight size={14}/></Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
