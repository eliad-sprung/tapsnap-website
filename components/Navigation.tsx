"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { href: "/customers", label: "For Customers" },
  { href: "/merchants", label: "For Merchants" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faqs", label: "FAQs" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(11, 22, 40, 0.95)"
          : "rgba(11, 22, 40, 0.6)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(16,185,129,0.15)"
          : "1px solid transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #10B981, #0D9668)" }}>
              <Zap size={16} className="text-white" fill="white" />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Tap<span className="text-gradient">Snap</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  color: pathname === link.href ? "#10B981" : "#94A3B8",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#10B981")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    pathname === link.href ? "#10B981" : "#94A3B8")
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://portal.tap-snap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-white text-sm font-semibold px-4 py-2 rounded-lg"
            >
              Merchant Portal
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden pb-4 border-t mt-1 pt-4"
            style={{ borderColor: "rgba(16,185,129,0.12)" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-sm font-medium transition-colors"
                style={{ color: pathname === link.href ? "#10B981" : "#94A3B8" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://portal.tap-snap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-white text-sm font-semibold px-4 py-2.5 rounded-lg mt-3 block text-center"
            >
              Merchant Portal
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
