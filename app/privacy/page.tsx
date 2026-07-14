import { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy | TapSnap Technology LLC" };

const sections = [
  { title: "1. Overview", content: "TapSnap Technology LLC (\"TapSnap,\" \"we,\" \"us,\" or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our digital wallet platform and related services (the \"Services\")." },
  { title: "2. Information We Collect", content: "We collect information you provide directly to us, including: name, email address, phone number, and government-issued identification for identity verification; bank account or debit card information used to fund your wallet balance (processed by regulated payment partners — TapSnap does not store raw payment credentials); transaction history; and correspondence with our support team. We also collect certain information automatically including IP address, device type, browser type, and usage data." },
  { title: "3. How We Use Your Information", content: "We use the information we collect to: create and maintain your TapSnap account; verify your identity as required by applicable law; process transactions and communicate transaction confirmations; provide customer support; detect, investigate, and prevent fraudulent or unauthorized activity; comply with legal obligations including AML and KYC requirements; and improve and develop our Services." },
  { title: "4. Information Sharing and Disclosure", content: "TapSnap does not sell your personal information. We may share your information with: regulated banking and payment processing partners who hold your balance and facilitate transactions; licensed merchant partners solely to confirm and settle authorized transactions; identity verification service providers for KYC and fraud prevention; and law enforcement or regulatory authorities where required by applicable law. All third parties are contractually required to protect your information." },
  { title: "5. Data Security", content: "TapSnap implements commercially reasonable technical and organizational security measures including encryption of data in transit and at rest, access controls and audit logging, tokenization of payment credentials, and regular security reviews. No raw cardholder data is stored or processed on local point-of-sale hardware at merchant locations." },
  { title: "6. No Storage of Card Data on POS Hardware", content: "TapSnap's architecture is specifically designed so that no raw cardholder data — including card numbers, expiration dates, or CVV codes — is ever stored on, transmitted to, or processed by local merchant point-of-sale devices. All payment authorization occurs through TapSnap's cloud infrastructure using tokenized identifiers. This is a core privacy and security principle." },
  { title: "7. Data Retention", content: "We retain your personal information for as long as your account is active and for a period thereafter as required by applicable law or legitimate business purposes. Transaction records are typically retained for a minimum of five years. You may request deletion by contacting support@tap-snap.com." },
  { title: "8. Your Rights and Choices", content: "Depending on your jurisdiction, you may have the right to access, correct, or delete your personal information; object to or restrict certain processing; request a portable copy of your data; and withdraw consent. California residents may have additional rights under CCPA/CPRA. To exercise any of these rights, contact support@tap-snap.com." },
  { title: "9. Children's Privacy", content: "The Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected information from a minor, please contact us immediately at support@tap-snap.com." },
  { title: "10. Changes to This Policy", content: "We may update this Privacy Policy from time to time. When we make material changes, we will update the effective date and, where required, provide additional notice. Your continued use of the Services after the effective date constitutes your acceptance." },
  { title: "11. Contact Us", content: "If you have questions, concerns, or requests regarding this Privacy Policy, please contact: TapSnap Technology LLC · support@tap-snap.com · Wyoming, USA" },
];

export default function PrivacyPage() {
  return (
    <section style={{ padding: "80px 0", background: "#F8FAFC", minHeight: "80vh" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 48 }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: "#10B981", letterSpacing: "0.12em", textTransform: "uppercase" }}>Legal</span>
          <h1 style={{ fontSize: 40, fontWeight: 800, color: "#0F172A", letterSpacing: "-0.03em", marginTop: 8, marginBottom: 8 }}>Privacy Policy</h1>
          <p style={{ fontSize: 13, color: "#94A3B8" }}>TapSnap Technology LLC · Wyoming, USA · Effective: January 1, 2026</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {sections.map((s) => (
            <div key={s.title} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 14, padding: "28px 32px" }}>
              <h2 style={{ fontSize: 15, fontWeight: 700, color: "#0F172A", marginBottom: 12 }}>{s.title}</h2>
              <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.75 }}>{s.content}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 40, fontSize: 13, color: "#94A3B8" }}>
          Privacy questions? Email <a href="mailto:support@tap-snap.com" style={{ color: "#1A6BF5" }}>support@tap-snap.com</a>
        </p>
      </div>
    </section>
  );
}
