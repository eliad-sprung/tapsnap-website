import { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy | TapSnap Technology LLC" };

const sections = [
  { title:"1. Overview", content:"TapSnap Technology LLC is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our digital wallet platform and related services." },
  { title:"2. Information We Collect", content:"We collect information you provide directly, including name, email, phone number, and government-issued identification for identity verification; bank account or debit card information used to fund your wallet (processed by regulated payment partners — TapSnap does not store raw payment credentials); transaction history; and correspondence with our support team. We also collect certain information automatically including IP address, device type, browser type, and usage data." },
  { title:"3. How We Use Your Information", content:"We use the information we collect to create and maintain your account; verify your identity as required by law; process transactions and communicate confirmations; provide customer support; detect and prevent fraudulent activity; comply with AML and KYC requirements; and improve our Services." },
  { title:"4. Information Sharing and Disclosure", content:"TapSnap does not sell your personal information. We may share your information with regulated banking and payment processing partners; licensed merchant partners solely to confirm and settle authorized transactions; identity verification service providers; and law enforcement or regulatory authorities where required by law. All third parties are contractually required to protect your information." },
  { title:"5. Data Security", content:"TapSnap implements commercially reasonable security measures including encryption of data in transit and at rest, access controls, audit logging, and tokenization of payment credentials. No raw cardholder data is stored or processed on local point-of-sale hardware at merchant locations." },
  { title:"6. No Storage of Card Data on POS Hardware", content:"TapSnap's architecture ensures that no raw cardholder data — including card numbers, expiration dates, or CVV codes — is ever stored on, transmitted to, or processed by local merchant point-of-sale devices. All payment authorization occurs through TapSnap's cloud infrastructure using tokenized identifiers." },
  { title:"7. Data Retention", content:"We retain your personal information for as long as your account is active and for a period thereafter as required by applicable law. Transaction records are typically retained for a minimum of five years. You may request deletion by contacting support@tap-snap.com." },
  { title:"8. Your Rights and Choices", content:"Depending on your jurisdiction, you may have the right to access, correct, or delete your personal information; restrict processing; request a portable copy of your data; and withdraw consent. California residents may have additional rights under CCPA/CPRA. Contact support@tap-snap.com to exercise any of these rights." },
  { title:"9. Children's Privacy", content:"The Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected information from a minor, contact us immediately at support@tap-snap.com." },
  { title:"10. Changes to This Policy", content:"We may update this Privacy Policy from time to time. When we make material changes, we will update the effective date. Your continued use of the Services after the effective date constitutes your acceptance." },
  { title:"11. Contact Us", content:"Questions, concerns, or requests: TapSnap Technology LLC · support@tap-snap.com · Wyoming, USA" },
];

export default function PrivacyPage() {
  return (
    <section style={{ padding:"72px 0 80px", background:"#F9FAFB" }}>
      <div className="container" style={{ maxWidth:720 }}>
        <div style={{ marginBottom:40 }}>
          <span style={{ fontSize:11, fontWeight:600, color:"#2DB84B", letterSpacing:"0.12em", textTransform:"uppercase", fontFamily:"'Inter',sans-serif" }}>Legal</span>
          <h1 style={{ fontSize:38, marginTop:10, marginBottom:8 }}>Privacy Policy</h1>
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
          Privacy questions? Email <a href="mailto:support@tap-snap.com" style={{ color:"#2DB84B", textDecoration:"none" }}>support@tap-snap.com</a>
        </p>
      </div>
    </section>
  );
}
