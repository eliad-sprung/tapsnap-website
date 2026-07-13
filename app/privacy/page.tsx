import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | TapSnap Technology LLC",
};

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Overview",
      content: `TapSnap Technology LLC ("TapSnap," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our digital wallet platform and related services (the "Services"). Please read this policy carefully. If you disagree with its terms, please discontinue use of the Services.`,
    },
    {
      title: "2. Information We Collect",
      content: `We collect information you provide directly to us, including: name, email address, phone number, and government-issued identification for identity verification purposes; bank account or debit card information used to fund your wallet balance (processed by our regulated payment partners — TapSnap does not store raw payment credentials on our servers); transaction history associated with your account; and correspondence with our support team.\n\nWe also collect certain information automatically when you access the Services, including IP address, device type and operating system, browser type, and usage data such as pages viewed and actions taken within the platform.`,
    },
    {
      title: "3. How We Use Your Information",
      content: `We use the information we collect to: create and maintain your TapSnap account; verify your identity as required by applicable law; process transactions and communicate transaction confirmations; provide customer support; detect, investigate, and prevent fraudulent or unauthorized activity; comply with legal obligations, including anti-money laundering (AML) and know-your-customer (KYC) requirements; improve and develop our Services; and communicate with you about your account, updates to these policies, and service announcements.`,
    },
    {
      title: "4. Information Sharing and Disclosure",
      content: `TapSnap does not sell your personal information. We may share your information with: regulated banking and payment processing partners who hold your balance and facilitate transactions, solely to the extent necessary to provide the Services; licensed merchant partners solely to confirm and settle authorized transactions initiated by you; identity verification service providers for KYC and fraud prevention purposes; and law enforcement or regulatory authorities where required by applicable law, valid legal process, or to protect the rights, property, or safety of TapSnap, our users, or the public.\n\nAll third parties with whom we share data are contractually required to protect your information and use it only for the purposes for which it was disclosed.`,
    },
    {
      title: "5. Data Security",
      content: `TapSnap implements commercially reasonable technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption of data in transit and at rest, access controls and audit logging, tokenization of payment credentials, and regular security reviews. No raw cardholder data is stored or processed on local point-of-sale hardware at merchant locations.\n\nWhile we take security seriously, no system is completely secure. We cannot guarantee the absolute security of your information, and you use the Services at your own risk.`,
    },
    {
      title: "6. Data Retention",
      content: `We retain your personal information for as long as your account is active and for a period thereafter as required by applicable law, regulatory obligations, or legitimate business purposes such as dispute resolution and fraud prevention. Transaction records are typically retained for a minimum of five (5) years in accordance with financial recordkeeping requirements. You may request deletion of your account and associated data by contacting support@tap-snap.com; however, we may retain certain information as required by law or for legitimate compliance purposes.`,
    },
    {
      title: "7. No Storage of Card Data on POS Hardware",
      content: `TapSnap's architecture is specifically designed so that no raw cardholder data — including card numbers, expiration dates, or CVV codes — is ever stored on, transmitted to, or processed by local merchant point-of-sale devices. All payment authorization occurs through TapSnap's cloud infrastructure using tokenized identifiers. This design is a core privacy and security principle of the TapSnap platform.`,
    },
    {
      title: "8. Cookies and Tracking Technologies",
      content: `Our website and platform may use cookies and similar tracking technologies to maintain session state, remember your preferences, and analyze usage patterns. You may configure your browser to refuse cookies, but doing so may affect the functionality of certain features. We do not use cookies to serve third-party advertising. We may use analytics tools such as server-side logging to understand aggregate usage patterns and improve the Services.`,
    },
    {
      title: "9. Children's Privacy",
      content: `The Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected information from a minor, please contact us immediately at support@tap-snap.com and we will take steps to delete that information.`,
    },
    {
      title: "10. Your Rights and Choices",
      content: `Depending on your jurisdiction, you may have the right to: access, correct, or delete your personal information; object to or restrict certain processing of your information; request a portable copy of your data; and withdraw consent where processing is based on consent. To exercise any of these rights, contact us at support@tap-snap.com. We will respond to verifiable requests within 30 days as required by applicable law.`,
    },
    {
      title: "11. State-Specific Disclosures",
      content: `California residents may have additional rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), including the right to know what personal information is collected, the right to delete, the right to opt out of sale or sharing (note: we do not sell personal information), and the right to non-discrimination for exercising privacy rights. To submit a California privacy request, email support@tap-snap.com with the subject line "CCPA Request."`,
    },
    {
      title: "12. Changes to This Policy",
      content: `We may update this Privacy Policy from time to time. When we make material changes, we will update the effective date at the top of this page and, where required, provide additional notice. Your continued use of the Services after the effective date of any revision constitutes your acceptance of the updated policy.`,
    },
    {
      title: "13. Contact Us",
      content: `If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:\n\nTapSnap Technology LLC\nsupport@tap-snap.com\nWyoming, USA`,
    },
  ];

  return (
    <section className="py-24" style={{ background: "#060E1C" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#10B981" }}>Legal</p>
          <h1 className="text-4xl font-extrabold text-white mb-4">Privacy Policy</h1>
          <p className="text-sm" style={{ color: "#64748B" }}>
            <strong className="text-slate-400">TapSnap Technology LLC</strong> · Wyoming, USA<br />
            Effective Date: January 1, 2026
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-base font-bold text-white mb-3">{s.title}</h2>
              <div className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                {s.content.split('\n\n').map((para, i) => (
                  <p key={i} className={i > 0 ? "mt-3" : ""}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t text-sm" style={{ borderColor: "rgba(16,185,129,0.1)", color: "#475569" }}>
          Privacy questions? Email <a href="mailto:support@tap-snap.com" className="underline" style={{ color: "#10B981" }}>support@tap-snap.com</a>
        </div>
      </div>
    </section>
  );
}
