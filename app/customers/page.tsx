"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { UserPlus, CreditCard, Smartphone, ScanLine, ArrowRight, Shield, Lock, Zap } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Account",
    desc: "Sign up with your email. Identity verification takes under two minutes — no paperwork, no branch visit.",
    detail: "Email · Phone · ID Verify",
  },
  {
    icon: CreditCard,
    step: "02",
    title: "Add Funds",
    desc: "Load your TapSnap balance via ACH bank transfer or debit card. Funds are available the same business day.",
    detail: "ACH · Debit Card · Instant",
  },
  {
    icon: Smartphone,
    step: "03",
    title: "Save to Apple or Google Wallet",
    desc: "With one tap, your TapSnap pass lives alongside your other cards in Apple Wallet or Google Pay.",
    detail: "Apple Wallet · Google Pay",
  },
  {
    icon: ScanLine,
    step: "04",
    title: "Scan to Pay",
    desc: "At checkout, open your wallet and present the QR code. The merchant scans and the transaction settles instantly.",
    detail: "QR · Contactless · Instant",
  },
];

const trust = [
  { icon: Shield, title: "Your funds, your control", desc: "Non-custodial architecture means your balance is always yours — TapSnap never commingles customer funds." },
  { icon: Lock, title: "Zero raw card data stored", desc: "No cardholder data touches point-of-sale hardware. Every transaction uses tokenized identifiers only." },
  { icon: Zap, title: "Real-time balance", desc: "Your wallet balance updates the instant a transaction is processed — no end-of-day reconciliation delays." },
];

export default function CustomersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 hero-grid overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(16,185,129,0.07) 0%, transparent 70%)"
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold mb-6"
            style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", color: "#10B981" }}
          >
            For Customers
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Your wallet,<br /><span className="text-gradient">your way</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg max-w-xl mx-auto" style={{ color: "#94A3B8" }}
          >
            Load once, scan anywhere. TapSnap turns your phone into a secure digital wallet accepted at licensed merchants nationwide.
          </motion.p>
        </div>
      </section>

      {/* 4-Step Journey */}
      <section className="py-24" style={{ background: "#060E1C" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-3">Four steps to checkout</h2>
            <p className="text-sm" style={{ color: "#64748B" }}>From sign-up to first scan in minutes.</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.3), transparent)" }} />

            <div className="grid lg:grid-cols-4 gap-8">
              {steps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.45 }}
                  className="relative"
                >
                  {/* Step number bubble */}
                  <div className="flex lg:justify-center mb-6">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center emerald-glow"
                        style={{ background: "linear-gradient(135deg, #10B981, #0D9668)" }}>
                        <s.icon size={20} className="text-white" />
                      </div>
                      <span className="absolute -top-1 -right-1 text-xs font-black rounded-full w-5 h-5 flex items-center justify-center"
                        style={{ background: "#0B1628", color: "#10B981", border: "1px solid rgba(16,185,129,0.4)", fontSize: "9px" }}>
                        {s.step}
                      </span>
                    </div>
                  </div>

                  <div className="lg:text-center">
                    <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748B" }}>{s.desc}</p>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                      style={{ background: "rgba(16,185,129,0.08)", color: "#10B981", border: "1px solid rgba(16,185,129,0.15)" }}>
                      {s.detail}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-3">Built around your security</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {trust.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass rounded-2xl p-7"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(16,185,129,0.1)" }}>
                  <t.icon size={20} style={{ color: "#10B981" }} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{t.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#060E1C" }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to load your wallet?</h2>
          <p className="text-sm mb-8" style={{ color: "#94A3B8" }}>Questions about your balance or statement charge? Our support team replies same day.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:support@tap-snap.com" className="btn-primary text-white font-semibold px-6 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 text-sm">
              Contact Support <ArrowRight size={15} />
            </a>
            <Link href="/faqs" className="text-white font-semibold px-6 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 text-sm border transition-all"
              style={{ border: "1px solid rgba(148,163,184,0.2)" }}>
              Read FAQs <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
