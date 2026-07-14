"use client";

import { useEffect, useRef } from "react";
import { Zap, CheckCircle, ShieldCheck } from "lucide-react";

const KF = `
@keyframes floatPhone {
  0%,100% { transform: translateY(0px) rotate(-1.2deg); }
  50%      { transform: translateY(-13px) rotate(-1.2deg); }
}
@keyframes floatL {
  0%,100% { transform: translateY(0px); }
  50%      { transform: translateY(-9px); }
}
@keyframes floatR {
  0%,100% { transform: translateY(0px); }
  50%      { transform: translateY(9px); }
}
@keyframes floatT {
  0%,100% { transform: translateY(0px); }
  50%      { transform: translateY(-6px); }
}
@keyframes glowPulse {
  0%,100% { opacity: 0.28; transform: scale(1); }
  50%      { opacity: 0.48; transform: scale(1.05); }
}
@keyframes txIn {
  from { opacity:0; transform:translateY(6px); }
  to   { opacity:1; transform:translateY(0); }
}
@keyframes scanLine {
  0%,100% { top: 12%; opacity: 0.9; }
  50%      { top: 78%; opacity: 0.7; }
}
`;

/* ── QR Code SVG (real-looking pattern) ────────────────── */
function QRCode({ size = 80 }: { size?: number }) {
  // 7×7 grid of cells — simplified but visually authentic
  const cells = [
    [1,1,1,1,1,1,1, 0, 1,0,1,0,1, 0, 1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1, 0, 0,1,0,0,0, 0, 1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1, 0, 1,0,1,0,1, 0, 1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1, 0, 0,1,1,0,0, 0, 1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1, 0, 1,0,0,1,1, 0, 1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1, 0, 0,0,1,1,0, 0, 1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1, 0, 1,0,1,0,1, 0, 1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0, 0, 0,1,0,0,1, 0, 0,0,0,0,0,0,0],
    [1,1,0,1,1,0,1, 1, 0,1,1,0,1, 1, 0,1,0,0,1,1,0],
    [0,0,1,0,0,1,0, 0, 1,0,0,1,0, 0, 1,0,1,1,0,0,1],
    [1,0,1,1,0,1,1, 0, 0,1,1,0,1, 0, 1,1,0,1,0,1,0],
    [0,1,0,0,1,0,0, 1, 1,0,0,1,0, 1, 0,0,1,0,1,0,1],
    [1,1,1,0,1,1,0, 0, 1,0,1,1,1, 0, 1,0,0,1,1,0,1],
    [0,0,0,0,0,0,0, 1, 0,1,0,0,0, 1, 0,1,0,0,0,1,0],
    [1,1,1,1,1,1,1, 0, 1,0,1,0,1, 0, 1,1,0,1,0,0,1],
    [1,0,0,0,0,0,1, 0, 0,0,0,1,0, 0, 1,0,1,0,1,1,0],
    [1,0,1,1,1,0,1, 1, 1,1,0,0,1, 1, 0,1,1,0,0,1,1],
    [1,0,0,0,0,0,1, 0, 0,0,1,1,0, 0, 1,0,0,1,0,0,1],
    [1,1,1,1,1,1,1, 1, 1,0,1,0,0, 1, 0,1,1,0,1,0,0],
  ];
  const cols = 19;
  const rows = cells.length;
  const cell = size / cols;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
      <rect width={size} height={size} fill="white" rx="3"/>
      {cells.map((row, ri) =>
        row.map((v, ci) =>
          v === 1 ? (
            <rect
              key={`${ri}-${ci}`}
              x={ci * cell + 0.5}
              y={ri * cell + 0.5}
              width={cell - 0.5}
              height={cell - 0.5}
              fill="#0F172A"
              rx={cell > 3 ? 0.8 : 0}
            />
          ) : null
        )
      )}
    </svg>
  );
}

/* ── Balance card ───────────────────────────────────────── */
function BalanceCard() {
  return (
    <div style={{
      margin: "0 11px 10px",
      borderRadius: 16,
      padding: "18px 16px 14px",
      background: "linear-gradient(135deg, #0F172A 0%, #155C26 100%)",
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 6px 24px rgba(16,185,129,0.25)",
    }}>
      <div style={{ position:"absolute", top:-24, right:-24, width:96, height:96, borderRadius:"50%", background:"rgba(16,185,129,0.12)" }}/>
      <div style={{ position:"absolute", bottom:-16, left:-16, width:60, height:60, borderRadius:"50%", background:"rgba(255,255,255,0.04)" }}/>
      <p style={{ fontSize:9, color:"rgba(255,255,255,0.55)", fontWeight:600, letterSpacing:"0.06em", marginBottom:3, position:"relative" }}>AVAILABLE BALANCE</p>
      <p style={{ fontSize:28, fontWeight:800, color:"#fff", letterSpacing:"-0.04em", lineHeight:1, marginBottom:14, position:"relative" }}>$248.00</p>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", position:"relative" }}>
        <div>
          <p style={{ fontSize:8, color:"rgba(255,255,255,0.38)", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:1 }}>Holder</p>
          <p style={{ fontSize:10, fontWeight:700, color:"#fff" }}>J. CUSTOMER</p>
        </div>
        {/* mini brand mark */}
        <div style={{ background:"rgba(255,255,255,0.1)", borderRadius:7, padding:"4px 8px", display:"flex", alignItems:"center", gap:3 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo@2x.png" alt="TapSnap" style={{ height:20, width:"auto", filter:"brightness(0) invert(1)", display:"block" }} />
        </div>
      </div>
    </div>
  );
}

/* ── QR scan card ───────────────────────────────────────── */
function QRCard() {
  return (
    <div style={{
      margin: "0 11px 10px",
      borderRadius: 14,
      padding: "14px 13px",
      background: "#F0FDF2",
      border: "1.5px solid #93E4A4",
      display: "flex",
      alignItems: "center",
      gap: 12,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* QR code */}
      <div style={{ flexShrink:0, borderRadius:8, overflow:"hidden", border:"1.5px solid #C8F5D0" }}>
        <QRCode size={52} />
      </div>
      <div style={{ flex:1 }}>
        <p style={{ fontSize:11, fontWeight:700, color:"#1A6B2F", marginBottom:2 }}>Scan to Pay</p>
        <p style={{ fontSize:9, color:"#6B7280", lineHeight:1.4 }}>Show this at checkout — no card needed</p>
        {/* animated scan line */}
        <div style={{ marginTop:6, height:3, borderRadius:2, background:"#C8F5D0", overflow:"hidden", position:"relative" }}>
          <div style={{
            position:"absolute", height:"100%", width:"30%",
            background:"linear-gradient(90deg, transparent, #2DB84B, transparent)",
            animation:"scanBar 1.8s ease-in-out infinite",
          }}/>
        </div>
      </div>
    </div>
  );
}

/* ── Transaction row ────────────────────────────────────── */
function TxRow({ name, amount, sub, positive, delay }: { name:string; amount:string; sub:string; positive:boolean; delay:number }) {
  return (
    <div style={{
      display:"flex", justifyContent:"space-between", alignItems:"center",
      padding:"7px 0", borderBottom:"1px solid rgba(255,255,255,0.05)",
      animation:`txIn 0.4s ease ${delay}ms both`,
    }}>
      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
        <div style={{ width:26, height:26, borderRadius:7, background: positive ? "rgba(16,185,129,0.14)" : "rgba(255,255,255,0.07)", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <div style={{ width:7, height:7, borderRadius:"50%", background: positive ? "#2DB84B" : "#82DEAD" }}/>
        </div>
        <div>
          <p style={{ fontSize:10, fontWeight:600, color:"#F1F5F9" }}>{name}</p>
          <p style={{ fontSize:8, color:"#475569" }}>{sub}</p>
        </div>
      </div>
      <p style={{ fontSize:10, fontWeight:700, color: positive ? "#2DB84B" : "#E2E8F0" }}>{amount}</p>
    </div>
  );
}

/* ── Main HeroPhone ─────────────────────────────────────── */
export default function HeroPhone() {
  const injected = useRef(false);
  useEffect(() => {
    if (injected.current) return; injected.current = true;
    const el = document.createElement("style");
    el.textContent = KF + `
      @keyframes scanBar {
        0%,100%{left:-30%} 50%{left:100%}
      }
    `;
    document.head.appendChild(el);
  }, []);

  return (
    <div style={{ position:"relative", display:"flex", justifyContent:"center", alignItems:"center", minHeight:580, userSelect:"none" }}>

      {/* Ambient glow */}
      <div style={{
        position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)",
        width:340, height:340, borderRadius:"50%",
        background:"radial-gradient(circle, rgba(16,185,129,0.11) 0%, transparent 70%)",
        animation:"glowPulse 4s ease-in-out infinite",
        pointerEvents:"none",
      }}/>

      {/* Phone shell */}
      <div style={{
        width:248,
        borderRadius:40,
        background:"#0B1120",
        border:"7px solid #1E293B",
        boxShadow:"0 40px 100px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)",
        overflow:"hidden",
        display:"flex",
        flexDirection:"column",
        animation:"floatPhone 5s ease-in-out infinite",
        position:"relative",
        zIndex:2,
      }}>
        {/* Status bar */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"13px 16px 7px" }}>
          <span style={{ fontSize:10, fontWeight:600, color:"#64748B" }}>9:41</span>
          <div style={{ width:72, height:15, borderRadius:9, background:"#1E293B" }}/>
          <span style={{ fontSize:8, color:"#475569" }}>●●●</span>
        </div>

        {/* App header */}
        <div style={{ padding:"3px 13px 13px", display:"flex", alignItems:"center", gap:7 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo@2x.png" alt="TapSnap" style={{ height:24, width:"auto", filter:"brightness(0) invert(1)", display:"block" }} />
        </div>

        <BalanceCard />
        <QRCard />

        {/* Transactions */}
        <div style={{ padding:"2px 13px 14px" }}>
          <p style={{ fontSize:8, fontWeight:600, color:"#334155", textTransform:"uppercase", letterSpacing:"0.09em", marginBottom:5 }}>Recent</p>
          <TxRow name="Green Leaf Co."   amount="-$52.00"  sub="Today"     positive={false} delay={0}  />
          <TxRow name="Balance Load"     amount="+$300.00" sub="Yesterday" positive={true}  delay={70} />
          <TxRow name="City Dispensary"  amount="-$88.00"  sub="Mon"       positive={false} delay={140}/>
        </div>
      </div>

      {/* Pill: Non-Custodial */}
      <div style={{
        position:"absolute", left:-10, top:"20%",
        background:"#fff", borderRadius:12, padding:"9px 13px",
        boxShadow:"0 4px 20px rgba(15,23,42,0.12)", border:"1px solid #E2E8F0",
        display:"flex", alignItems:"center", gap:7,
        animation:"floatL 3.8s ease-in-out infinite", zIndex:3, whiteSpace:"nowrap",
      }}>
        <div style={{ width:8,height:8,borderRadius:"50%",background:"#2DB84B" }}/>
        <span style={{ fontSize:12,fontWeight:700,color:"#0F172A",fontFamily:"'Inter',sans-serif" }}>Non-Custodial</span>
      </div>

      {/* Pill: Instant Settle */}
      <div style={{
        position:"absolute", right:-14, bottom:"24%",
        background:"#fff", borderRadius:12, padding:"9px 13px",
        boxShadow:"0 4px 20px rgba(15,23,42,0.12)", border:"1px solid #E2E8F0",
        display:"flex", alignItems:"center", gap:7,
        animation:"floatR 4.4s ease-in-out infinite", zIndex:3, whiteSpace:"nowrap",
      }}>
        <Zap size={11} color="#2DB84B" fill="#2DB84B"/>
        <span style={{ fontSize:12,fontWeight:700,color:"#0F172A",fontFamily:"'Inter',sans-serif" }}>Instant Settle</span>
      </div>

      {/* Pill: Bank-Grade */}
      <div style={{
        position:"absolute", right:2, top:"10%",
        background:"#fff", borderRadius:12, padding:"8px 12px",
        boxShadow:"0 3px 16px rgba(15,23,42,0.09)", border:"1px solid #E2E8F0",
        display:"flex", alignItems:"center", gap:6,
        animation:"floatT 5s ease-in-out infinite 1s", zIndex:3, whiteSpace:"nowrap",
      }}>
        <ShieldCheck size={11} color="#2DB84B"/>
        <span style={{ fontSize:11,fontWeight:600,color:"#334155",fontFamily:"'Inter',sans-serif" }}>Bank-Grade Security</span>
      </div>
    </div>
  );
}
