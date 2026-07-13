"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Zap, BarChart3, QrCode, CheckCircle2 } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

function WalletMockup() {
  return (
    <div className="relative flex justify-center items-center">
      {/* Phone outline */}
      <div className="relative w-64 h-[520px] rounded-[3rem] border-4 shadow-2xl flex items-center justify-center"
        style={{ background: "#0B1628", borderColor: "rgba(16,185,129,0.3)", boxShadow: "0 0 80px rgba(16,185,129,0.2)" }}>
        
        {/* Screen */}
        <div className="w-56 h-[460px] rounded-[2.5rem] overflow-hidden flex flex-col"
          style={{ background: "linear-gradient(180deg, #111D35 0%, #0B1628 100%)" }}>
          
          {/* Status bar */}
          <div className="flex justify-between items-center px-6 pt-4 pb-2">
            <span className="text-xs font-semibold" style={{ color: "#94A3B8" }}>9:41</span>
            <div className="w-16 h-4 rounded-full" style={{ background: "#1E293B" }} />
            <span className="text-xs font-semibold" style={{ color: "#94A3B8" }}>●●●</span>
          </div>

          {/* Header */}
          <div className="px-5 pt-2 pb-4">
            <p className="text-xs font-medium" style={{ color: "#64748B" }}>TapSnap Wallet</p>
            <p className="text-2xl font-bold text-white mt-1">$248.00</p>
          </div>

          {/* Wallet Pass Card */}
          <div className="mx-3 rounded-2xl p-4 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0D4A3A 0%, #10B981 100%)", minHeight: "120px" }}>
            {/* Decorative circles */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20" style={{ background: "#fff" }} />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-10" style={{ background: "#fff" }} />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-medium text-white opacity-75">Available Balance</p>
                  <p className="text-xl font-bold text-white mt-0.5">$248.00</p>
                </div>
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center opacity-90">
                  <Zap size={14} className="text-emerald-600" fill="currentColor" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-white opacity-60">CARD HOLDER</p>
                  <p className="text-xs font-semibold text-white">J. CUSTOMER</p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-xs text-white opacity-60">PASS TYPE</p>
                  <p className="text-xs font-semibold text-white">Apple Wallet</p>
                </div>
              </div>
            </div>
          </div>

          {/* QR section */}
          <div className="mx-3 mt-3 rounded-xl p-3 flex items-center gap-3"
            style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.15)" }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(16,185,129,0.15)" }}>
              <QrCode size={20} style={{ color: "#10B981" }} />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Scan to Pay</p>
              <p className="text-xs" style={{ color: "#64748B" }}>Show QR at checkout</p>
            </div>
          </div>

          {/* Recent txn */}
          <div className="px-4 mt-4">
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#475569" }}>Recent</p>
            {[
              { name: "Green Leaf Dispensary", amount: "-$52.00", time: "Today" },
              { name: "Balance Load", amount: "+$300.00", time: "Yesterday" },
            ].map((tx, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b" style={{ borderColor: "rgba(16,185,129,0.06)" }}>
                <div>
                  <p className="text-xs font-medium text-white">{tx.name}</p>
                  <p className="text-xs" style={{ color: "#475569" }}>{tx.time}</p>
                </div>
                <p className="text-xs font-semibold" style={{ color: tx.amount.startsWith("+") ? "#10B981" : "#F8FAFC" }}>{tx.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-8 top-20 rounded-xl px-3 py-2 text-xs font-medium text-white card-glass"
      >
        <CheckCircle2 size={12} className="inline mr-1.5" style={{ color: "#10B981" }} />
        Non-Custodial
      </motion.div>

      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-8 bottom-32 rounded-xl px-3 py-2 text-xs font-medium text-white card-glass"
      >
        <Zap size={12} className="inline mr-1.5" style={{ color: "#10B981" }} />
        Instant Settle
      </motion.div>
    </div>
  );
}

const stats = [
  { label: "Settlement Time", value: "Daily ACH" },
  { label: "License Verified", value: "Real-Time" },
  { label: "Wallet Support", value: "Apple & Google" },
];

const pillars = [
  { icon: Shield, title: "Non-Custodial", desc: "Your funds are held through regulated banking partners — never on our servers." },
  { icon: QrCode, title: "Instant QR Checkout", desc: "Customers scan once at the register. No card swipe, no PIN, no friction." },
  { icon: BarChart3, title: "Real-Time Dashboard", desc: "Live transaction feeds and multi-location reporting for every merchant." },
  { icon: Zap, title: "Automated Payouts", desc: "ACH settlements pushed to your business account every business day." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center hero-grid overflow-hidden">
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 10%, rgba(16,185,129,0.08) 0%, transparent 70%)"
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left copy */}
            <div>
              <motion.div
                initial="hidden" animate="show" custom={0} variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold mb-6"
                style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", color: "#10B981" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live in Production
              </motion.div>

              <motion.h1
                initial="hidden" animate="show" custom={1} variants={fadeUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
              >
                A smarter way to{" "}
                <span className="text-gradient">store, verify,</span>{" "}
                and spend
              </motion.h1>

              <motion.p
                initial="hidden" animate="show" custom={2} variants={fadeUp}
                className="text-lg leading-relaxed mb-8 max-w-lg"
                style={{ color: "#94A3B8" }}
              >
                TapSnap powers non-custodial digital wallets and instant in-store checkout rails for licensed merchants.
              </motion.p>

              <motion.div
                initial="hidden" animate="show" custom={3} variants={fadeUp}
                className="flex items-center gap-3 mb-10"
              >
                {["LOAD", "SCAN", "SETTLE"].map((word, i) => (
                  <div key={word}>
                    <span className="text-sm font-black tracking-widest" style={{ color: "#10B981" }}>{word}</span>
                    {i < 2 && <span className="ml-3 text-slate-600">·</span>}
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial="hidden" animate="show" custom={4} variants={fadeUp}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link href="/customers" className="btn-primary text-white font-semibold px-6 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 text-sm">
                  Get Started as Customer <ArrowRight size={16} />
                </Link>
                <Link href="/merchants" className="text-white font-semibold px-6 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 text-sm border transition-all hover:border-emerald-500/40"
                  style={{ border: "1px solid rgba(148,163,184,0.2)" }}>
                  Merchant Info <ArrowRight size={16} />
                </Link>
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial="hidden" animate="show" custom={5} variants={fadeUp}
                className="flex gap-8 mt-12 pt-8 border-t"
                style={{ borderColor: "rgba(16,185,129,0.1)" }}
              >
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-sm font-bold text-white">{s.value}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#64748B" }}>{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Phone mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="flex justify-center"
            >
              <WalletMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value pillars */}
      <section className="py-24" style={{ background: "#060E1C" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Built for the future of <span className="text-gradient">compliant commerce</span>
            </motion.h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#64748B" }}>
              Every layer of TapSnap is designed with compliance, speed, and merchant experience at the center.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="card-glass rounded-2xl p-6 group hover:border-emerald-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(16,185,129,0.12)" }}>
                  <p.icon size={20} style={{ color: "#10B981" }} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{p.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20" style={{ background: "var(--navy)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl p-12 emerald-glow"
            style={{ background: "rgba(15,30,56,0.9)", border: "1px solid rgba(16,185,129,0.2)" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to accept wallet payments?
            </h2>
            <p className="mb-8 text-base" style={{ color: "#94A3B8" }}>
              Join licensed merchants already processing with TapSnap.
            </p>
            <Link href="/merchants" className="btn-primary text-white font-semibold px-8 py-4 rounded-xl inline-flex items-center gap-2 text-sm">
              Learn About the Merchant Platform <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
