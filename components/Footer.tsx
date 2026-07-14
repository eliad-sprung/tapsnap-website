"use client";

import Link from "next/link";
import { Mail, Globe } from "lucide-react";
import TapSnapLogo from "./TapSnapLogo";

const muted: React.CSSProperties = {
  display:"block", fontSize:13, color:"rgba(255,255,255,0.42)",
  textDecoration:"none", marginBottom:9, fontFamily:"'Inter',sans-serif",
  transition:"color 0.15s",
};

const columns = [
  { label:"Platform", links:[
    { href:"/customers",    label:"For Customers" },
    { href:"/merchants",    label:"For Merchants"  },
    { href:"/how-it-works", label:"How It Works"   },
    { href:"/faqs",         label:"FAQs"           },
  ]},
  { label:"Legal", links:[
    { href:"/terms",   label:"Terms of Service" },
    { href:"/privacy", label:"Privacy Policy"   },
  ]},
];

export default function Footer() {
  return (
    <footer className="footer-bg">
      <div className="container" style={{ padding:"60px 24px 36px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))", gap:40, marginBottom:44 }}>

          {/* Brand — PNG logo inverted for dark bg */}
          <div>
            <TapSnapLogo size="md" variant="dark" />
            <p style={{ marginTop:14, fontSize:13, lineHeight:1.7, color:"rgba(255,255,255,0.36)", maxWidth:200, fontFamily:"'Inter',sans-serif" }}>
              Non-custodial digital wallet technology for modern commerce.
            </p>
            <div style={{ marginTop:16, display:"flex", flexDirection:"column", gap:7 }}>
              <a href="mailto:support@tap-snap.com" style={{ ...muted, display:"flex", alignItems:"center", gap:7 }}>
                <Mail size={13}/>support@tap-snap.com
              </a>
              <a href="https://tap-snap.com" style={{ ...muted, display:"flex", alignItems:"center", gap:7 }}>
                <Globe size={13}/>tap-snap.com
              </a>
            </div>
          </div>

          {columns.map(c => (
            <div key={c.label}>
              <p style={{ fontSize:10, fontWeight:600, color:"#2DB84B", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:14, fontFamily:"'Inter',sans-serif" }}>
                {c.label}
              </p>
              {c.links.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={muted}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color="rgba(255,255,255,0.8)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color="rgba(255,255,255,0.42)"; }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div style={{ borderTop:"1px solid rgba(255,255,255,0.07)", paddingTop:26 }}>
          <div style={{ borderLeft:"3px solid #2DB84B", padding:"13px 15px", marginBottom:20, background:"rgba(255,255,255,0.02)", borderRadius:"0 8px 8px 0" }}>
            <p style={{ fontSize:11, lineHeight:1.75, color:"rgba(255,255,255,0.3)", fontFamily:"'Inter',sans-serif" }}>
              <strong style={{ color:"rgba(255,255,255,0.46)", fontWeight:600 }}>Legal Notice: </strong>
              TapSnap operates as a non-custodial software technology provider and digital wallet platform. Funds are held through regulated banking and payment partners. TapSnap is not a depository bank or money transmitter, and no raw cardholder data is stored on point-of-sale hardware.
            </p>
          </div>
          <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center", gap:10 }}>
            <p style={{ fontSize:12, color:"rgba(255,255,255,0.22)", fontFamily:"'Inter',sans-serif" }}>© 2026 TapSnap. All rights reserved.</p>
            <p style={{ fontSize:12, color:"rgba(255,255,255,0.18)", fontFamily:"'Inter',sans-serif" }}>TapSnap Technology LLC · Wyoming, USA</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
