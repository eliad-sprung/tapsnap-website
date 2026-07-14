"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
  { q:"Is TapSnap a bank or money transmitter?",                                   a:"No. TapSnap is a non-custodial software technology provider. We do not hold, transmit, or custody funds directly. Customer balances are held through regulated banking and payment partners, not by TapSnap. We are a technology layer — not a financial institution." },
  { q:"What does 'non-custodial' mean for my funds?",                              a:"Non-custodial means TapSnap never takes ownership of your money. Your loaded balance is held in a segregated account at a regulated banking partner. TapSnap's software facilitates the transaction authorization, but the funds themselves are always under the control of a licensed, regulated institution." },
  { q:"Is my card or bank information stored on merchant point-of-sale devices?",  a:"Never. TapSnap's architecture ensures that no raw cardholder data is stored or processed on local point-of-sale hardware. Every transaction uses a tokenized QR identifier valid for a single transaction only. The merchant's device never sees your account details." },
  { q:"How quickly do merchants receive their payouts?",                            a:"Merchants receive daily automated ACH payouts. Each evening, TapSnap batches all settled transactions and initiates transfers to the merchant's registered business bank account. Funds typically arrive by the next business day." },
  { q:"Why do I see 'TAPSNAP LLC' on my bank statement?",                          a:"When you load funds into your TapSnap wallet via ACH or debit card, the transaction is initiated by TapSnap Technology LLC. This is a legitimate charge. If you have a question about a specific charge, please email support@tap-snap.com with the date and amount." },
  { q:"Which digital wallets are supported?",                                       a:"TapSnap digital passes are compatible with Apple Wallet (iPhone and Apple Watch) and Google Wallet (Android). Once your account is funded, you can add your TapSnap pass to either wallet with a single tap." },
  { q:"How does TapSnap verify that a merchant is properly licensed?",              a:"TapSnap performs real-time license verification at the time of every transaction. Before authorizing a payment, our system checks the merchant's current license status against state regulatory databases. If a license has expired or been revoked, the transaction is blocked automatically." },
  { q:"How do I get support if I have a problem?",                                 a:"For all support inquiries, email support@tap-snap.com. Our team responds within one business day. Please include your account email, the date and amount of any relevant transaction, and a brief description of your question." },
];

function AccordionItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeUp delay={index * 45}>
      <div style={{
        border:`1px solid ${open ? "#BFDBFE" : "#E2E8F0"}`,
        borderRadius:14, overflow:"hidden", background:"#fff",
        transition:"border-color 0.2s",
      }}>
        <button onClick={() => setOpen(!open)} style={{
          width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between",
          padding:"20px 22px", background:"none", border:"none", cursor:"pointer", textAlign:"left", gap:14,
        }}>
          <span style={{ fontSize:15, fontWeight:600, color:"#0F172A", lineHeight:1.4, fontFamily:"'Inter',sans-serif" }}>{faq.q}</span>
          <ChevronDown size={17} color="#64748B" style={{ flexShrink:0, transform:open?"rotate(180deg)":"rotate(0)", transition:"transform 0.25s" }} />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} transition={{ duration:0.22 }}>
              <div style={{ padding:"0 22px 20px", borderTop:"1px solid #F1F5F9" }}>
                <p style={{ fontSize:14, color:"#64748B", lineHeight:1.75, paddingTop:14 }}>{faq.a}</p>
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
      <section style={{ background:"#fff", padding:"80px 0 72px" }}>
        <div className="container" style={{ textAlign:"center" }}>
          <span className="badge"><span className="emerald-dot" />FAQs</span>
          <h1 style={{ marginBottom:16 }}>Common <span style={{ color:"#2DB84B" }}>questions</span></h1>
          <p style={{ fontSize:16, color:"#64748B", maxWidth:440, margin:"0 auto", lineHeight:1.75 }}>
            Everything you need to know about TapSnap — for customers and merchants alike.
          </p>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <div style={{ maxWidth:680, margin:"0 auto", display:"flex", flexDirection:"column", gap:8 }}>
            {faqs.map((faq, i) => <AccordionItem key={i} faq={faq} index={i} />)}

            <FadeUp delay={380}>
              <div className="cta-band" style={{ marginTop:12 }}>
                <div style={{ position:"absolute", top:-50, right:-50, width:180, height:180, borderRadius:"50%", background:"rgba(0,102,255,0.12)", pointerEvents:"none" }} />
                <div style={{ position:"relative" }}>
                  <h3 style={{ fontSize:20, color:"#fff", marginBottom:8 }}>Still have a question?</h3>
                  <p style={{ fontSize:14, color:"rgba(255,255,255,0.5)", marginBottom:22 }}>Our support team responds within one business day.</p>
                  <a href="mailto:support@tap-snap.com" style={{
                    display:"inline-flex", alignItems:"center", gap:7,
                    background:"#fff", color:"#0F172A", fontWeight:700, fontFamily:"'Inter',sans-serif",
                    borderRadius:10, padding:"11px 22px", fontSize:14, textDecoration:"none",
                  }}>
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
