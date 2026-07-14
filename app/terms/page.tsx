import { Metadata } from "next";
export const metadata: Metadata = { title: "Terms of Service | TapSnap Technology LLC" };

const sections = [
  { title:"1. Acceptance of Terms", content:"By accessing or using the TapSnap Technology LLC platform, website, or related services (the \"Services\"), you agree to be bound by these Terms of Service. If you do not agree, you may not use the Services. These Terms constitute a legally binding agreement between you and TapSnap Technology LLC, a Wyoming limited liability company." },
  { title:"2. Description of Services", content:"TapSnap provides a non-custodial digital wallet software platform enabling users to store a digital balance, receive a wallet pass compatible with Apple Wallet and Google Pay, and initiate payments at participating licensed merchant locations via QR code. TapSnap is a technology intermediary only. We do not hold, transmit, or custody funds. Customer balances are maintained through regulated third-party banking and payment processing partners." },
  { title:"3. Eligibility", content:"You must be at least 18 years of age and a legal resident of the United States to create a TapSnap account. By using the Services, you represent and warrant that all information you provide is accurate and complete." },
  { title:"4. Account Registration and Security", content:"To access TapSnap Services, you must create an account and complete identity verification as required. You are solely responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Notify TapSnap immediately at support@tap-snap.com of any unauthorized use." },
  { title:"5. Funding and Balance", content:"TapSnap allows users to load funds via ACH bank transfer or debit card, subject to applicable limits. Funds are held by regulated third-party banking partners and are not held or commingled by TapSnap. TapSnap is not a depository institution, bank, or money services business." },
  { title:"6. Merchant Transactions", content:"TapSnap facilitates payments between users and licensed merchant partners. All merchants are independently responsible for maintaining valid applicable licenses. TapSnap performs automated license verification at transaction time but makes no warranties as to the ongoing legality, quality, or fitness of any merchant or goods or services offered." },
  { title:"7. Prohibited Uses", content:"You agree not to use the Services for any unlawful purpose. Prohibited uses include loading funds derived from illegal activity; attempting to circumvent identity verification or licensing requirements; using the Services at unlicensed merchant locations; interfering with the integrity of the platform; or reverse engineering any portion of the TapSnap software." },
  { title:"8. Privacy", content:"Your use of the Services is governed by our Privacy Policy, incorporated herein by reference. By using the Services, you consent to the collection, use, and disclosure of your information as described therein." },
  { title:"9. Intellectual Property", content:"All content, software, trademarks, and other intellectual property associated with the TapSnap platform are the exclusive property of TapSnap Technology LLC or its licensors. Nothing in these Terms grants you a license to use TapSnap's intellectual property except as expressly set forth herein." },
  { title:"10. Disclaimers", content:"THE SERVICES ARE PROVIDED \"AS IS\" WITHOUT WARRANTIES OF ANY KIND. TAPSNAP EXPRESSLY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE." },
  { title:"11. Limitation of Liability", content:"TO THE MAXIMUM EXTENT PERMITTED BY LAW, TAPSNAP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES. TAPSNAP'S TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT OF FUNDS HELD IN YOUR TAPSNAP ACCOUNT AT THE TIME THE CLAIM AROSE." },
  { title:"12. Governing Law", content:"These Terms are governed by the laws of the State of Wyoming. Any dispute shall be resolved by binding arbitration under the rules of the American Arbitration Association, conducted in Wyoming." },
  { title:"13. Changes to Terms", content:"TapSnap may modify these Terms at any time by posting an updated version on our website. Your continued use of the Services constitutes acceptance of the revised Terms." },
  { title:"14. Contact", content:"Questions about these Terms? Contact TapSnap Technology LLC at support@tap-snap.com." },
];

export default function TermsPage() {
  return (
    <section style={{ padding:"72px 0 80px", background:"#F9FAFB" }}>
      <div className="container" style={{ maxWidth:720 }}>
        <div style={{ marginBottom:40 }}>
          <span style={{ fontSize:11, fontWeight:600, color:"#2DB84B", letterSpacing:"0.12em", textTransform:"uppercase", fontFamily:"'Inter',sans-serif" }}>Legal</span>
          <h1 style={{ fontSize:38, marginTop:10, marginBottom:8 }}>Terms of Service</h1>
          <p style={{ fontSize:13, color:"#94A3B8" }}>TapSnap Technology LLC · Wyoming, USA · Effective: January 1, 2026</p>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          {sections.map(s => (
            <div key={s.title} className="legal-card">
              <h2>{s.title}</h2>
              <p>{s.content}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop:32, fontSize:13, color:"#94A3B8", fontFamily:"'Inter',sans-serif" }}>
          Questions? Email <a href="mailto:support@tap-snap.com" style={{ color:"#2DB84B", textDecoration:"none" }}>support@tap-snap.com</a>
        </p>
      </div>
    </section>
  );
}
