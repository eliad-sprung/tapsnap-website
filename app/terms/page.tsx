import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | TapSnap Technology LLC",
};

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing or using the TapSnap Technology LLC platform, website, or related services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Services. These Terms constitute a legally binding agreement between you and TapSnap Technology LLC, a Wyoming limited liability company ("TapSnap," "we," "our," or "us").`,
    },
    {
      title: "2. Description of Services",
      content: `TapSnap provides a non-custodial digital wallet software platform that enables users to store a digital balance, receive a wallet pass compatible with Apple Wallet and Google Pay, and initiate payments at participating licensed merchant locations via QR code scan. TapSnap is a technology intermediary only. We do not hold, transmit, or custody funds. Customer balances are maintained through regulated third-party banking and payment processing partners.`,
    },
    {
      title: "3. Eligibility",
      content: `You must be at least 18 years of age and a legal resident of the United States to create a TapSnap account. By using the Services, you represent and warrant that you meet these requirements and that all information you provide is accurate and complete. TapSnap reserves the right to verify your identity and to suspend or terminate your account if we determine that any information provided is false or misleading.`,
    },
    {
      title: "4. Account Registration and Security",
      content: `To access TapSnap Services, you must create an account by providing a valid email address, phone number, and completing identity verification as required. You are solely responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to notify TapSnap immediately at support@tap-snap.com of any unauthorized use of your account. TapSnap is not liable for any loss resulting from unauthorized use of your account credentials.`,
    },
    {
      title: "5. Funding and Balance",
      content: `TapSnap allows users to load funds into their account balance via ACH bank transfer or debit card, subject to applicable limits. Funds loaded into TapSnap are held by regulated third-party banking partners and are not held or commingled by TapSnap. TapSnap is not a depository institution, bank, or money services business. Balance availability is subject to standard ACH processing timelines and the policies of our banking partners. TapSnap does not guarantee specific availability windows and is not responsible for delays caused by banking partners or payment networks.`,
    },
    {
      title: "6. Merchant Transactions",
      content: `TapSnap facilitates payments between users and licensed merchant partners. All merchants onboarded to the TapSnap platform are independently responsible for maintaining valid applicable licenses. TapSnap performs automated license verification at transaction time but makes no warranties as to the ongoing legality, quality, or fitness of any merchant or any goods or services offered by merchants. Disputes regarding purchased goods or services must be resolved directly with the merchant. TapSnap has no obligation to mediate commercial disputes between users and merchants.`,
    },
    {
      title: "7. Prohibited Uses",
      content: `You agree not to use the Services for any unlawful purpose or in any manner inconsistent with these Terms. Prohibited uses include, without limitation: (a) loading funds derived from illegal activity; (b) attempting to circumvent identity verification or licensing requirements; (c) using the Services at unlicensed merchant locations; (d) interfering with or disrupting the integrity of the platform; (e) reverse engineering any portion of the TapSnap software; or (f) impersonating any person or entity. Violation of these prohibitions may result in immediate termination of your account and may be reported to appropriate authorities.`,
    },
    {
      title: "8. Privacy",
      content: `Your use of the Services is also governed by our Privacy Policy, which is incorporated herein by reference. By using the Services, you consent to the collection, use, and disclosure of your information as described in the Privacy Policy.`,
    },
    {
      title: "9. Intellectual Property",
      content: `All content, software, trademarks, service marks, and other intellectual property associated with the TapSnap platform are the exclusive property of TapSnap Technology LLC or its licensors. Nothing in these Terms grants you a license to use any of TapSnap's intellectual property except as expressly set forth herein for the purpose of accessing and using the Services.`,
    },
    {
      title: "10. Disclaimers",
      content: `THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TAPSNAP DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS. TAPSNAP EXPRESSLY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.`,
    },
    {
      title: "11. Limitation of Liability",
      content: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, TAPSNAP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICES, EVEN IF TAPSNAP HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. TAPSNAP'S TOTAL CUMULATIVE LIABILITY TO YOU FOR ANY AND ALL CLAIMS SHALL NOT EXCEED THE AMOUNT OF FUNDS HELD IN YOUR TAPSNAP ACCOUNT AT THE TIME THE CLAIM AROSE.`,
    },
    {
      title: "12. Indemnification",
      content: `You agree to indemnify, defend, and hold harmless TapSnap Technology LLC and its members, managers, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or relating to your use of the Services, your violation of these Terms, or your violation of any third-party rights.`,
    },
    {
      title: "13. Termination",
      content: `TapSnap reserves the right to suspend or terminate your account and access to the Services at any time, with or without cause and with or without notice. Upon termination, any remaining balance in your account will be returned to you via the original funding source, subject to applicable processing timelines and any amounts owed to TapSnap.`,
    },
    {
      title: "14. Governing Law; Dispute Resolution",
      content: `These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, without regard to its conflict of law provisions. Any dispute arising under or relating to these Terms or the Services shall be resolved by binding arbitration conducted by a single arbitrator under the rules of the American Arbitration Association, and shall take place in Wyoming. Notwithstanding the foregoing, either party may seek injunctive or other equitable relief in any court of competent jurisdiction.`,
    },
    {
      title: "15. Changes to Terms",
      content: `TapSnap reserves the right to modify these Terms at any time. We will notify you of material changes by posting an updated version on our website and, where required by applicable law, by direct notification. Your continued use of the Services following the effective date of any changes constitutes your acceptance of the revised Terms. If you do not agree to the revised Terms, you must discontinue use of the Services.`,
    },
    {
      title: "16. Contact",
      content: `If you have questions about these Terms, please contact TapSnap Technology LLC at support@tap-snap.com.`,
    },
  ];

  return (
    <section className="py-24" style={{ background: "#060E1C" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#10B981" }}>Legal</p>
          <h1 className="text-4xl font-extrabold text-white mb-4">Terms of Service</h1>
          <p className="text-sm" style={{ color: "#64748B" }}>
            <strong className="text-slate-400">TapSnap Technology LLC</strong> · Wyoming, USA<br />
            Effective Date: January 1, 2026
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-base font-bold text-white mb-3">{s.title}</h2>
              <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{s.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t text-sm" style={{ borderColor: "rgba(16,185,129,0.1)", color: "#475569" }}>
          Questions? Email <a href="mailto:support@tap-snap.com" className="underline" style={{ color: "#10B981" }}>support@tap-snap.com</a>
        </div>
      </div>
    </section>
  );
}
