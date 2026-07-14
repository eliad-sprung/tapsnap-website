"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import TapSnapLogo from "./TapSnapLogo";

const navLinks = [
  { href: "/customers",    label: "For Customers"  },
  { href: "/merchants",    label: "For Merchants"   },
  { href: "/how-it-works", label: "How It Works"    },
  { href: "/faqs",         label: "FAQs"            },
];

export default function Navigation() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const linkColor  = (href: string) => pathname === href ? "#1A1A1A" : "#64748B";
  const linkBorder = (href: string) => pathname === href ? "2px solid #2DB84B" : "2px solid transparent";

  return (
    <header className={`nav-wrap${scrolled ? " scrolled" : ""}`}>
      <nav className="container">
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", height:72 }}>

          {/* Real PNG logo */}
          <Link href="/" style={{ textDecoration:"none", display:"flex", alignItems:"center" }}>
            <TapSnapLogo size="md" variant="light" />
          </Link>

          {/* Desktop links */}
          <div style={{ display:"flex", alignItems:"center", gap:28 }} className="d-nav">
            {navLinks.map(l => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize:13.5, fontWeight:500, fontFamily:"'Inter',sans-serif",
                  color: linkColor(l.href),
                  textDecoration:"none",
                  letterSpacing:"0.01em",
                  borderBottom: linkBorder(l.href),
                  paddingBottom:2,
                  transition:"color 0.15s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color="#1A1A1A"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color=linkColor(l.href); }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="d-nav">
            <Link href="/customers" className="btn-green" style={{ padding:"10px 20px", fontSize:13 }}>
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="m-toggle"
            style={{ background:"none", border:"none", cursor:"pointer", color:"#334155", padding:4, display:"none" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div style={{ borderTop:"1px solid #E2E8F0", padding:"14px 0 18px", display:"flex", flexDirection:"column", gap:2 }}>
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} style={{ fontSize:15, fontWeight:500, fontFamily:"'Inter',sans-serif", color:linkColor(l.href), textDecoration:"none", padding:"10px 4px", display:"block" }}>
                {l.label}
              </Link>
            ))}
            <Link href="/customers" className="btn-green" style={{ marginTop:10, justifyContent:"center" }}>
              Get Started
            </Link>
          </div>
        )}
      </nav>
      <style>{`
        @media (min-width: 769px) { .m-toggle { display: none !important; } }
        @media (max-width: 768px) { .d-nav { display: none !important; } .m-toggle { display: block !important; } }
      `}</style>
    </header>
  );
}
