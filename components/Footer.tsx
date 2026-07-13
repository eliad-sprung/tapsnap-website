import Link from "next/link";
import { Zap, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#060E1C", borderTop: "1px solid rgba(16,185,129,0.1)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #10B981, #0D9668)" }}>
                <Zap size={16} className="text-white" fill="white" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Tap<span className="text-gradient">Snap</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
              Non-custodial digital wallet technology for modern commerce.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest" style={{ color: "#10B981" }}>Platform</h4>
            <div className="space-y-3">
              {[
                { href: "/customers", label: "For Customers" },
                { href: "/merchants", label: "For Merchants" },
                { href: "/how-it-works", label: "How It Works" },
                { href: "/faqs", label: "FAQs" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-sm transition-colors hover:text-white" style={{ color: "#64748B" }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest" style={{ color: "#10B981" }}>Legal & Support</h4>
            <div className="space-y-3">
              <Link href="/terms" className="block text-sm transition-colors hover:text-white" style={{ color: "#64748B" }}>Terms of Service</Link>
              <Link href="/privacy" className="block text-sm transition-colors hover:text-white" style={{ color: "#64748B" }}>Privacy Policy</Link>
              <a href="mailto:support@tap-snap.com" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: "#64748B" }}>
                <Mail size={14} />
                support@tap-snap.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mb-8" style={{ borderColor: "rgba(16,185,129,0.08)" }} />

        {/* Legal Disclaimer */}
        <div className="rounded-xl p-5 mb-8" style={{ background: "rgba(16,185,129,0.04)", border: "1px solid rgba(16,185,129,0.08)" }}>
          <p className="text-xs leading-relaxed" style={{ color: "#475569" }}>
            <strong className="font-semibold" style={{ color: "#64748B" }}>Legal Notice: </strong>
            TapSnap operates as a non-custodial software technology provider and digital wallet platform. Funds loaded into TapSnap balances are held separately through regulated banking and payment partners. TapSnap is not a depository bank or money transmitter, and no raw cardholder data is stored or processed on local point-of-sale hardware.
          </p>
        </div>

        {/* Copyright bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "#334155" }}>
            © 2026 TapSnap Technology LLC. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#334155" }}>
            TapSnap Technology LLC · Wyoming, USA
          </p>
        </div>
      </div>
    </footer>
  );
}
