"use client";

import { motion } from "framer-motion";
import { Upload, Smartphone, ScanLine, Building2, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: Upload,
    phase: "Phase 1",
    title: "Online Funding",
    color: "#10B981",
    desc: "The customer creates a TapSnap account and loads funds via ACH bank transfer or debit card. Funds are held through regulated banking partners — never on TapSnap servers. Balances are available the same business day.",
    details: [
      { label: "Methods", value: "ACH, Debit Card" },
      { label: "Availability", value: "Same Business Day" },
      { label: "Custody", value: "Regulated Banking Partners" },
      { label: "KYC", value: "Real-Time Identity Verify" },
    ],
  },
  {
    icon: Smartphone,
    phase: "Phase 2",
    title: "Digital Pass Balance",
    color: "#10B981",
    desc: "Once funded, the customer receives a digital wallet pass — compatible with Apple Wallet and Google Pay. The pass displays their current balance and a dynamic QR code that refreshes for every transaction.",
    details: [
      { label: "Pass Type", value: "Apple & Google Wallet" },
      { label: "QR Refresh", value: "Per-Transaction Dynamic" },
      { label: "Balance Display", value: "Real-Time" },
      { label: "Offline Support", value: "Yes (cached QR)" },
    ],
  },
  {
    icon: ScanLine,
    phase: "Phase 3",
    title: "In-Store Scan",
    color: "#10B981",
    desc: "At the licensed merchant's register, the customer opens their wallet app and presents the QR code. The merchant's device scans it, TapSnap authorizes the transaction in under 3 seconds, and the customer's balance is debited instantly.",
    details: [
      { label: "Auth Time", value: "< 3 Seconds" },
      { label: "Hardware Req.", value: "Any Camera Device" },
      { label: "Card Data on POS", value: "None — Zero Storage" },
      { label: "License Check", value: "Real-Time at Auth" },
    ],
  },
  {
    icon: Building2,
    phase: "Phase 4",
    title: "Automated Merchant Settlement",
    color: "#10B981",
    desc: "Each evening, TapSnap batches all settled transactions and initiates ACH transfers to each merchant's registered business bank account. Merchants receive funds the next business day with a full transaction breakdown.",
    details: [
      { label: "Settlement Rail", value: "Next-Day ACH" },
      { label: "Batching", value: "Nightly Automated" },
      { label: "Reporting", value: "Per-Merchant Itemized" },
      { label: "Notifications", value: "Email + Portal" },
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 hero-grid overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(16,185,129,0.07) 0%, transparent 70%)"
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold mb-6"
            style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", color: "#10B981" }}
          >
            How It Works
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            From Funding<br />to <span className="text-gradient">Settlement</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg max-w-xl mx-auto" style={{ color: "#94A3B8" }}
          >
            A complete walkthrough of the TapSnap payment lifecycle — from the moment a customer loads funds to the moment a merchant receives their payout.
          </motion.p>
        </div>
      </section>

      {/* Flow */}
      <section className="py-24" style={{ background: "#060E1C" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={s.phase}>
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.45 }}
                  className="card-glass rounded-2xl p-8"
                >
                  <div className="flex items-start gap-6">
                    {/* Phase indicator */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{ background: "rgba(16,185,129,0.12)" }}>
                        <s.icon size={24} style={{ color: s.color }} />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#10B981" }}>{s.phase}</span>
                      </div>
                      <h2 className="text-xl font-bold text-white mb-3">{s.title}</h2>
                      <p className="text-sm leading-relaxed mb-6" style={{ color: "#94A3B8" }}>{s.desc}</p>

                      {/* Details grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {s.details.map((d) => (
                          <div key={d.label} className="rounded-xl p-3"
                            style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.1)" }}>
                            <p className="text-xs font-medium mb-1" style={{ color: "#475569" }}>{d.label}</p>
                            <p className="text-xs font-bold text-white">{d.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Connector arrow */}
                {i < steps.length - 1 && (
                  <div className="flex justify-center py-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.15)" }}>
                      <ArrowDown size={14} style={{ color: "#10B981" }} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary bar */}
      <section className="py-20" style={{ background: "var(--navy)" }}>
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-2xl p-8 text-center"
            style={{ background: "rgba(15,30,56,0.9)", border: "1px solid rgba(16,185,129,0.15)" }}
          >
            <p className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: "#10B981" }}>The TapSnap Promise</p>
            <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
              Every dollar that flows through TapSnap is tracked, verified, and settled transparently. No raw card data ever touches a point-of-sale device. Funds are held through regulated banking partners at all times. Merchants are verified, licensed, and re-checked on every transaction.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
