"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is TapSnap a bank or money transmitter?",
    a: "No. TapSnap is a non-custodial software technology provider. We do not hold, transmit, or custody funds directly. Customer balances are held through regulated banking and payment partners, not by TapSnap. We are a technology layer — not a financial institution.",
  },
  {
    q: "What does 'non-custodial' mean for my funds?",
    a: "Non-custodial means TapSnap never takes ownership of your money. Your loaded balance is held in a segregated account at a regulated banking partner. TapSnap's software facilitates the transaction authorization, but the funds themselves are always under the control of a licensed, regulated institution.",
  },
  {
    q: "Is my card or bank account information stored on merchant point-of-sale devices?",
    a: "Never. TapSnap's architecture ensures that no raw cardholder data is stored or processed on local point-of-sale hardware. Every transaction uses a tokenized QR identifier that is valid for a single transaction only. The merchant's device never sees your account details.",
  },
  {
    q: "How quickly do merchants receive their payouts?",
    a: "Merchants receive daily automated ACH payouts. Each evening, TapSnap batches all settled transactions from that business day and initiates transfers to the merchant's registered business bank account. Funds typically arrive by the next business day, depending on your bank's ACH processing schedule.",
  },
  {
    q: "Why do I see 'TAPSNAP LLC' on my bank statement?",
    a: "When you load funds into your TapSnap wallet via ACH or debit card, the transaction is initiated by TapSnap Technology LLC, which is how it appears on your bank or card statement. This is a legitimate charge. If you have a question about a specific charge, please email support@tap-snap.com with the date and amount and we'll respond within one business day.",
  },
  {
    q: "Which digital wallets are supported?",
    a: "TapSnap digital passes are compatible with Apple Wallet (on iPhone and Apple Watch) and Google Wallet (on Android devices). Once your account is funded, you can add your TapSnap pass to either wallet with a single tap — no app download required beyond your native wallet application.",
  },
  {
    q: "How does TapSnap verify that a merchant is properly licensed?",
    a: "TapSnap performs real-time license verification at the time of every transaction. Before authorizing a payment, our system checks the merchant's current license status against state regulatory databases. If a license has expired or been revoked, the transaction is blocked automatically. This protects both customers and compliant merchants.",
  },
  {
    q: "How do I get support if I have a problem?",
    a: "For all customer and merchant support inquiries, email support@tap-snap.com. Our team responds to all inquiries within one business day. Please include your account email address, the date and amount of any relevant transaction, and a brief description of your question. For urgent merchant settlement issues, note 'URGENT SETTLEMENT' in your subject line.",
  },
];

function AccordionItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="rounded-xl overflow-hidden"
      style={{ border: open ? "1px solid rgba(16,185,129,0.25)" : "1px solid rgba(16,185,129,0.1)", background: "rgba(15,30,56,0.6)" }}
    >
      <button
        className="w-full flex items-center justify-between p-6 text-left group transition-all"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-semibold text-white pr-4 leading-snug">{faq.q}</span>
        <ChevronDown
          size={18}
          className="flex-shrink-0 transition-transform duration-300"
          style={{ color: "#10B981", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 border-t" style={{ borderColor: "rgba(16,185,129,0.08)" }}>
              <p className="text-sm leading-relaxed pt-4" style={{ color: "#94A3B8" }}>{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQsPage() {
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
            FAQs
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-extrabold text-white mb-6"
          >
            Common <span className="text-gradient">questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg max-w-xl mx-auto" style={{ color: "#94A3B8" }}
          >
            Everything you need to know about how TapSnap works — for customers and merchants alike.
          </motion.p>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-20" style={{ background: "#060E1C" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} faq={faq} index={i} />
            ))}
          </div>

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-12 rounded-2xl p-8 text-center"
            style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.12)" }}
          >
            <h3 className="text-white font-bold text-lg mb-2">Still have a question?</h3>
            <p className="text-sm mb-5" style={{ color: "#64748B" }}>Our support team responds within one business day.</p>
            <a href="mailto:support@tap-snap.com"
              className="btn-primary text-white font-semibold px-5 py-3 rounded-xl inline-flex items-center gap-2 text-sm">
              Email support@tap-snap.com
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
