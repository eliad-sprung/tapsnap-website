import { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service | TapSnap Technology LLC" };

const sections = [
  { title: "1. Acceptance of Terms", content: "By accessing or using the TapSnap Technology LLC platform, website, or related services (collectively, the \"Services\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to these Terms, you may not use the Services. These Terms constitute a legally binding agreement between you and TapSnap Technology LLC, a Wyoming limited liability company (\"TapSnap,\" \"we,\" \"our,\" or \"us\")." },
  { title: "2. Description of Services", content: "TapSnap provides a non-custodial digital wallet software platform that enables users to store a digital balance, receive a wallet pass compatible with Apple Wallet and Google Pay, and initiate payments at participating licensed merchant locations via QR code scan. TapSnap is a technology intermediary only. We do not hold, transmit, or custody funds. Customer balances are maintained through regulated third-party banking and payment processing partners." },
  { title: "3. Eligibility", content: "You must be at least 18 years of age and a legal resident of the United States to create a TapSnap account. By using the Services, you represent and warrant that you meet these requirements and that all information you provide is accurate and complete." },
  { title: "4. Account Registration and Security", content: "To access TapSnap Services, you must create an account by providing a valid email address, phone number, and completing identity verification as required. You are solely responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to notify TapSnap immediately at support@tap-snap.com of any unauthorized use of your account." },
  { title: "5. Funding and Balance", content: "TapSnap allows users to load funds into their account balance via ACH bank transfer or debit card, subject to applicable limits. Funds loaded into TapSnap are held by regulated third-party banking partners and are not held or commingled by TapSnap. TapSnap is not a depository institution, bank, or money services business." },
  { title: "6. Merchant Transactions", content: "TapSnap facilitates payments between users and licensed merchant partners. All merchants onboarded to the TapSnap platform are independently responsible for maintaining valid applicable licenses. TapSnap performs automated license verification at transaction time but makes no warranties as to the ongoing legality, quality, or fitness of any merchant or goods or services offered by merchants." },
  { title: "7. Prohibited Uses", content: "You agree not to use the Services for any unlawful purpose or in any manner inconsistent with these Terms. Prohibited uses include: loading funds derived from illegal activity; attempting to circumvent identity verification or licensing requirements; using the Services at unlicensed merchant locations; interfering with the integrity of the platform; or reverse engineering any portion of the TapSnap software." },
  { title: "8. Privacy", content: "Your use of the Services is also governed by our Privacy Policy, which is incorporated herein by reference. By using the Services, you consent to the collection, use, and disclosure of your information as described in the Privacy Policy." },
  { title: "9. Intellectual Property", content: "All content, software, trademarks, service marks, and other intellectual property associated with the TapSnap platform are the exclusive property of TapSnap Technology LLC or its licensors. Nothing in these Terms grants you a license to use any of TapSnap's intellectual property except as expressly set forth herein." },
  { title: "10. Disclaimers", content: "THE SERVICES ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TAPSNAP DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS. TAPSNAP EXPRESSLY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT." },
  { title: "11. Limitation of Liability", content: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, TAPSNAP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICES. TAPSNAP'S TOTAL CUMULATIVE LIABILITY SHALL NOT EXCEED THE AMOUNT OF FUNDS HELD IN YOUR TAPSNAP ACCOUNT AT THE TIME THE CLAIM AROSE." },
  { title: "12. Governing Law", content: "These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, without regard to its conflict of law provisions. Any dispute shall be resolved by binding arbitration under the rules of the American Arbitration Association, conducted in Wyoming." },
  { title: "13. Changes to Terms", content: "TapSnap reserves the right to modify these Terms at any time. We will notify you of material changes by posting an updated version on our website. Your continued use of the Services constitutes your acceptance of the revised Terms." },
  { title: "14. Contact", content: "If you have questions about these Terms, please contact TapSnap Technology LLC at support@tap-snap.com." },
];

export default function TermsPage() {
  return (
    <section style={{ padding: "80px 0", background: "#F8FAFC", minHeight: "80vh" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 48 }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: "#10B981", letterSpacing: "0.12em", textTransform: "uppercase" }}>Legal</span>
          <h1 style={{ fontSize: 40, fontWeight: 800, color: "#0F172A", letterSpacing: "-0.03em", marginTop: 8, marginBottom: 8 }}>Terms of Service</h1>
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
          Questions? Email <a href="mailto:support@tap-snap.com" style={{ color: "#1A6BF5" }}>support@tap-snap.com</a>
        </p>
      </div>
    </section>
  );
}
