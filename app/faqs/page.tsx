"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

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

const faqs = [
  { q:"Is TapSnap a bank?",                              a:"No. TapSnap is a technology platform. Your funds are held by regulated banking partners — not by us." },
  { q:"What does non-custodial mean?",                   a:"We never hold your money. It stays in a segregated account at a licensed banking institution at all times." },
  { q:"Is my card data stored at the merchant?",        a:"Never. The merchant only sees a one-time token. Your account details stay completely private." },
  { q:"How fast do merchants get paid?",                 a:"Every business day. We batch the previous day's transactions and ACH to the merchant's bank overnight." },
  { q:"Why do I see TAPSNAP LLC on my statement?",      a:"That's our legal entity name and it means a legitimate wallet load was processed. Questions? Email support@tap-snap.com." },
  { q:"Which wallets are supported?",                    a:"Apple Wallet and Google Wallet. Add your TapSnap pass with one tap — no extra app needed." },
  { q:"How are merchant licenses verified?",            a:"Automatically, on every single transaction. Expired or revoked license? The payment is blocked instantly." },
  { q:"How do I get help?",                             a:"Email support@tap-snap.com. We respond within one business day, usually faster." },
];

function Item({ faq, i }: { faq:{q:string;a:string}; i:number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeUp delay={i * 40}>
      <div style={{ border:`1px solid ${open?"#A7F3D0":"#E2E8F0"}`, borderRadius:14, overflow:"hidden", background:"#fff", transition:"border-color 0.2s" }}>
        <button onClick={() => setOpen(!open)} style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"18px 20px", background:"none", border:"none", cursor:"pointer", textAlign:"left", gap:14 }}>
          <span style={{ fontSize:15, fontWeight:600, color:"#1A1A1A", lineHeight:1.4, fontFamily:"'Inter',sans-serif" }}>{faq.q}</span>
          <ChevronDown size={17} color="#64748B" style={{ flexShrink:0, transform:open?"rotate(180deg)":"rotate(0)", transition:"transform 0.25s" }}/>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} transition={{ duration:0.22 }}>
              <div style={{ padding:"0 20px 18px", borderTop:"1px solid #F1F5F9" }}>
                <p style={{ fontSize:14, color:"#64748B", lineHeight:1.7, paddingTop:12 }}>{faq.a}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeUp>
  );
}

export default function FAQsPage() {
  return (
    <>
      <section style={{ background:"#fff", padding:"72px 0 60px" }}>
        <div className="container" style={{ textAlign:"center" }}>
          <span className="badge"><span className="emerald-dot"/>FAQs</span>
          <h1 style={{ marginBottom:14 }}>Quick <span style={{ color:"#2DB84B" }}>answers.</span></h1>
          <p style={{ fontSize:16, color:"#64748B", maxWidth:360, margin:"0 auto" }}>Everything you need. Nothing extra.</p>
        </div>
      </section>
      <section className="section-soft">
        <div className="container">
          <div style={{ maxWidth:640, margin:"0 auto", display:"flex", flexDirection:"column", gap:8 }}>
            {faqs.map((f, i) => <Item key={i} faq={f} i={i}/>)}
            <FadeUp delay={340}>
              <div className="cta-band" style={{ marginTop:10 }}>
                <div style={{ position:"absolute", top:-50, right:-50, width:160, height:160, borderRadius:"50%", background:"rgba(45,184,75,0.12)", pointerEvents:"none" }}/>
                <div style={{ position:"relative" }}>
                  <h3 style={{ fontSize:20, color:"#fff", marginBottom:8 }}>Still have a question?</h3>
                  <a href="mailto:support@tap-snap.com" style={{ display:"inline-flex", alignItems:"center", gap:7, background:"#fff", color:"#1A1A1A", fontWeight:700, fontFamily:"'Inter',sans-serif", borderRadius:10, padding:"11px 22px", fontSize:14, textDecoration:"none" }}>
                    Email support@tap-snap.com
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
