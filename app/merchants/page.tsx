"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { QrCode, Banknote, LayoutDashboard, BadgeCheck, ArrowRight, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    icon: QrCode,
    title: "Accept Wallet Balances via QR",
    desc: "Customers present their TapSnap pass QR code. Your point-of-sale scans once and the transaction authorizes in real time — no card readers, no PIN pads.",
    points: ["Works on any device with a camera", "Under 3-second authorization", "Offline fallback supported"],
  },
  {
    icon: Banknote,
    title: "Automated ACH Daily Payouts",
    desc: "Settled transactions are batched each evening and sent to your registered business bank account via next-day ACH — every business day, automatically.",
    points: ["No manual withdrawal steps", "Transparent fee breakdown per payout", "Instant payout notifications"],
  },
  {
    icon: LayoutDashboard,
    title: "Multi-Location Dashboard",
    desc: "Manage all your licensed locations from a single login. View real-time transaction feeds, daily volumes, and per-location reports in one unified interface.",
    points: ["Unlimited locations per account", "Role-based staff access", "Exportable CSV reports"],
  },
  {
    icon: BadgeCheck,
    title: "Real-Time License Verification",
    desc: "TapSnap verifies active merchant licenses at the time of each transaction — ensuring every sale is processed only at compliant, authorized locations.",
    points: ["Automated license status check", "Instant block on expired licenses", "Full audit trail per transaction"],
  },
];

const requirements = [
  "Active state-issued merchant license",
  "Registered US business entity",
  "Business bank account for ACH settlement",
  "Smartphone or tablet for QR scanning",
  "Completion of TapSnap merchant onboarding",
];

export default function MerchantsPage() {
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
            For Merchants
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Built for modern<br /><span className="text-gradient">in-store checkout</span> experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto mb-10" style={{ color: "#94A3B8" }}
          >
            TapSnap gives licensed merchants a compliant, frictionless way to accept digital wallet payments — with same-day setup and daily automated payouts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          >
            <a href="https://portal.tap-snap.com" target="_blank" rel="noopener noreferrer"
              className="btn-primary text-white font-semibold px-7 py-4 rounded-xl inline-flex items-center gap-2 text-sm">
              Access Merchant Portal <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-24" style={{ background: "#060E1C" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-3">Four pillars of the TapSnap merchant platform</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass rounded-2xl p-8 group hover:border-emerald-500/25 transition-all"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(16,185,129,0.12)" }}>
                    <p.icon size={22} style={{ color: "#10B981" }} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748B" }}>{p.desc}</p>
                    <ul className="space-y-1.5">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2 text-xs" style={{ color: "#94A3B8" }}>
                          <CheckCircle2 size={12} style={{ color: "#10B981" }} className="flex-shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24" style={{ background: "var(--navy)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-glass rounded-3xl p-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Merchant requirements</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                  TapSnap onboards licensed merchants only. Complete our application through the Merchant Portal to begin.
                </p>
                <a href="https://portal.tap-snap.com" target="_blank" rel="noopener noreferrer"
                  className="btn-primary text-white font-semibold px-5 py-3 rounded-xl inline-flex items-center gap-2 text-sm mt-6">
                  Apply Now <ArrowRight size={15} />
                </a>
              </div>
              <ul className="space-y-3">
                {requirements.map((r) => (
                  <li key={r} className="flex items-center gap-3 text-sm" style={{ color: "#94A3B8" }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(16,185,129,0.15)" }}>
                      <CheckCircle2 size={11} style={{ color: "#10B981" }} />
                    </div>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works teaser */}
      <section className="py-20" style={{ background: "#060E1C" }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">See the full payment flow</h2>
          <p className="text-sm mb-7" style={{ color: "#94A3B8" }}>From customer funding to merchant settlement — every step documented.</p>
          <Link href="/how-it-works" className="btn-primary text-white font-semibold px-6 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 text-sm">
            How It Works <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
