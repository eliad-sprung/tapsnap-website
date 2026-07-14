"use client";

import { useEffect, useRef } from "react";
import { Smartphone, ChevronRight, Zap, CheckCircle } from "lucide-react";

/* ─── tiny CSS keyframes injected once ─────────────────── */
const KEYFRAMES = `
@keyframes floatPhone {
  0%,100% { transform: translateY(0px) rotate(-1.5deg); }
  50%      { transform: translateY(-14px) rotate(-1.5deg); }
}
@keyframes floatPillL {
  0%,100% { transform: translateY(0px); }
  50%      { transform: translateY(-10px); }
}
@keyframes floatPillR {
  0%,100% { transform: translateY(0px); }
  50%      { transform: translateY(10px); }
}
@keyframes pulseGlow {
  0%,100% { opacity: 0.3; transform: scale(1); }
  50%      { opacity: 0.55; transform: scale(1.06); }
}
@keyframes shimmer {
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}
@keyframes fadeSlideIn {
  from { opacity:0; transform:translateY(8px); }
  to   { opacity:1; transform:translateY(0); }
}
`;

/* ─── Wallet card component ─────────────────────────────── */
function WalletCard() {
  return (
    <div style={{
      margin: "0 12px 10px",
      borderRadius: 18,
      padding: "20px 18px 18px",
      background: "linear-gradient(135deg, #1E3A8A 0%, #0066FF 100%)",
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 8px 28px rgba(0,102,255,0.35)",
    }}>
      {/* decorative circles */}
      <div style={{ position:"absolute",top:-28,right:-28,width:110,height:110,borderRadius:"50%",background:"rgba(255,255,255,0.07)" }}/>
      <div style={{ position:"absolute",bottom:-20,left:-20,width:70,height:70,borderRadius:"50%",background:"rgba(255,255,255,0.05)" }}/>

      <p style={{ fontSize:10,color:"rgba(255,255,255,0.6)",fontWeight:600,marginBottom:3,letterSpacing:"0.04em",position:"relative" }}>AVAILABLE BALANCE</p>
      <p style={{ fontSize:30,fontWeight:800,color:"#fff",letterSpacing:"-0.04em",lineHeight:1,marginBottom:16,position:"relative" }}>$248.00</p>

      <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end",position:"relative" }}>
        <div>
          <p style={{ fontSize:8,color:"rgba(255,255,255,0.45)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:2 }}>Card Holder</p>
          <p style={{ fontSize:11,fontWeight:700,color:"#fff" }}>J. CUSTOMER</p>
        </div>
        {/* Mini TapSnap mark */}
        <div style={{
          background:"rgba(255,255,255,0.15)",
          borderRadius:8,
          padding:"5px 9px",
          display:"flex",
          alignItems:"center",
          gap:3,
        }}>
          <svg width="14" height="14" viewBox="0 0 44 44" fill="none">
            <rect x="2" y="2" width="40" height="40" rx="10" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5"/>
            <path d="M14 22 Q14 16 19 12.5" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
            <path d="M14 22 Q14 28 19 31.5" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
            <path d="M20 22 Q20 14 26 9.5" stroke="#7EB2FF" strokeWidth="2.2" strokeLinecap="round"/>
            <path d="M20 22 Q20 30 26 34.5" stroke="#7EB2FF" strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
          <span style={{ fontSize:9,fontWeight:800,color:"#fff",letterSpacing:"-0.01em" }}>TAP</span>
          <span style={{ fontSize:9,fontWeight:800,color:"#93C5FD" }}>SNAP</span>
        </div>
      </div>
    </div>
  );
}

/* ─── QR tap row ─────────────────────────────────────────── */
function QRRow() {
  return (
    <div style={{
      margin:"0 12px 10px",
      borderRadius:13,
      padding:"13px 14px",
      background:"rgba(0,102,255,0.08)",
      border:"1px solid rgba(0,102,255,0.18)",
      display:"flex",
      alignItems:"center",
      gap:11,
    }}>
      <div style={{ width:38,height:38,borderRadius:10,background:"rgba(0,102,255,0.14)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
        <Smartphone size={17} color="#0066FF" />
      </div>
      <div style={{ flex:1 }}>
        <p style={{ fontSize:12,fontWeight:700,color:"#fff",marginBottom:1 }}>Scan to Pay</p>
        <p style={{ fontSize:10,color:"#64748B" }}>Show QR at checkout</p>
      </div>
      <ChevronRight size={13} color="#0066FF" />
    </div>
  );
}

/* ─── Transaction row ────────────────────────────────────── */
function TxRow({ name, amount, sub, positive, delay }: { name:string; amount:string; sub:string; positive:boolean; delay:number }) {
  return (
    <div style={{
      display:"flex", justifyContent:"space-between", alignItems:"center",
      padding:"8px 0",
      borderBottom:"1px solid rgba(255,255,255,0.05)",
      animation:`fadeSlideIn 0.4s ease ${delay}ms both`,
    }}>
      <div style={{ display:"flex", alignItems:"center", gap:9 }}>
        <div style={{
          width:28, height:28, borderRadius:8,
          background: positive ? "rgba(16,185,129,0.12)" : "rgba(0,102,255,0.12)",
          display:"flex", alignItems:"center", justifyContent:"center",
        }}>
          <div style={{ width:7,height:7,borderRadius:"50%",background: positive ? "#10B981" : "#0066FF" }} />
        </div>
        <div>
          <p style={{ fontSize:11,fontWeight:600,color:"#F1F5F9" }}>{name}</p>
          <p style={{ fontSize:9,color:"#475569" }}>{sub}</p>
        </div>
      </div>
      <p style={{ fontSize:11,fontWeight:700,color: positive ? "#10B981" : "#E2E8F0" }}>{amount}</p>
    </div>
  );
}

/* ─── Main HeroPhone ─────────────────────────────────────── */
export default function HeroPhone() {
  const injected = useRef(false);
  useEffect(() => {
    if (injected.current) return;
    injected.current = true;
    const style = document.createElement("style");
    style.textContent = KEYFRAMES;
    document.head.appendChild(style);
  }, []);

  return (
    <div style={{ position:"relative", display:"flex", justifyContent:"center", alignItems:"center", minHeight:560, userSelect:"none" }}>

      {/* ── Ambient glow ── */}
      <div style={{
        position:"absolute",
        top:"50%", left:"50%",
        transform:"translate(-50%,-50%)",
        width:360, height:360,
        borderRadius:"50%",
        background:"radial-gradient(circle, rgba(0,102,255,0.13) 0%, transparent 70%)",
        animation:"pulseGlow 4s ease-in-out infinite",
        pointerEvents:"none",
      }} />

      {/* ── Phone shell ── */}
      <div style={{
        width:252,
        borderRadius:40,
        background:"#0B1120",
        border:"7px solid #1E293B",
        boxShadow:"0 40px 100px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.05)",
        overflow:"hidden",
        display:"flex",
        flexDirection:"column",
        animation:"floatPhone 5s ease-in-out infinite",
        position:"relative",
        zIndex:2,
      }}>

        {/* Status bar */}
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 18px 8px" }}>
          <span style={{ fontSize:11,fontWeight:600,color:"#64748B" }}>9:41</span>
          <div style={{ width:76,height:16,borderRadius:10,background:"#1E293B" }} />
          <span style={{ fontSize:9,color:"#475569" }}>●●●</span>
        </div>

        {/* App header */}
        <div style={{ padding:"4px 14px 14px",display:"flex",alignItems:"center",gap:8 }}>
          <svg width="22" height="22" viewBox="0 0 44 44" fill="none">
            <rect x="2" y="2" width="40" height="40" rx="10" stroke="white" strokeWidth="2.5"/>
            <path d="M14 22 Q14 16 19 12.5" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
            <path d="M14 22 Q14 28 19 31.5" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
            <path d="M20 22 Q20 14 26 9.5" stroke="#4A9AFF" strokeWidth="2.2" strokeLinecap="round"/>
            <path d="M20 22 Q20 30 26 34.5" stroke="#4A9AFF" strokeWidth="2.2" strokeLinecap="round"/>
            <path d="M26 22 Q26 12 33 7" stroke="#4A9AFF" strokeWidth="2.2" strokeLinecap="round" opacity="0.45"/>
            <path d="M26 22 Q26 32 33 37" stroke="#4A9AFF" strokeWidth="2.2" strokeLinecap="round" opacity="0.45"/>
          </svg>
          <span style={{ fontSize:14,fontWeight:800,letterSpacing:"-0.02em",color:"#fff" }}>TAP<span style={{ color:"#4A9AFF" }}>SNAP</span></span>
        </div>

        {/* Wallet card */}
        <WalletCard />

        {/* QR row */}
        <QRRow />

        {/* Transactions */}
        <div style={{ padding:"4px 14px 16px" }}>
          <p style={{ fontSize:9,fontWeight:600,color:"#334155",textTransform:"uppercase",letterSpacing:"0.09em",marginBottom:6 }}>Recent</p>
          <TxRow name="Green Leaf Co." amount="-$52.00"  sub="Today"     positive={false} delay={0}   />
          <TxRow name="Balance Load"   amount="+$300.00" sub="Yesterday" positive={true}  delay={80}  />
          <TxRow name="City Dispensary"amount="-$88.00"  sub="Mon"       positive={false} delay={160} />
        </div>
      </div>

      {/* ── Floating pill: Non-Custodial (left) ── */}
      <div style={{
        position:"absolute",
        left:-8,
        top:"22%",
        background:"#fff",
        borderRadius:12,
        padding:"10px 14px",
        boxShadow:"0 6px 28px rgba(15,23,42,0.14)",
        border:"1px solid #E2E8F0",
        display:"flex",
        alignItems:"center",
        gap:8,
        animation:"floatPillL 3.8s ease-in-out infinite",
        zIndex:3,
        whiteSpace:"nowrap",
      }}>
        <div style={{ width:8,height:8,borderRadius:"50%",background:"#10B981",flexShrink:0 }} />
        <span style={{ fontSize:12,fontWeight:700,color:"#0F172A" }}>Non-Custodial</span>
      </div>

      {/* ── Floating pill: Instant Settle (right) ── */}
      <div style={{
        position:"absolute",
        right:-12,
        bottom:"26%",
        background:"#fff",
        borderRadius:12,
        padding:"10px 14px",
        boxShadow:"0 6px 28px rgba(15,23,42,0.14)",
        border:"1px solid #E2E8F0",
        display:"flex",
        alignItems:"center",
        gap:8,
        animation:"floatPillR 4.4s ease-in-out infinite",
        zIndex:3,
        whiteSpace:"nowrap",
      }}>
        <Zap size={12} color="#0066FF" fill="#0066FF" />
        <span style={{ fontSize:12,fontWeight:700,color:"#0F172A" }}>Instant Settle</span>
      </div>

      {/* ── Floating pill: Bank-Grade (top right) ── */}
      <div style={{
        position:"absolute",
        right:4,
        top:"12%",
        background:"#fff",
        borderRadius:12,
        padding:"9px 13px",
        boxShadow:"0 4px 20px rgba(15,23,42,0.10)",
        border:"1px solid #E2E8F0",
        display:"flex",
        alignItems:"center",
        gap:7,
        animation:"floatPillL 5s ease-in-out infinite 1s",
        zIndex:3,
        whiteSpace:"nowrap",
      }}>
        <CheckCircle size={12} color="#10B981" />
        <span style={{ fontSize:11,fontWeight:600,color:"#334155" }}>Bank-Grade Security</span>
      </div>
    </div>
  );
}
