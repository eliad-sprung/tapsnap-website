import type { Metadata } from "next";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TapSnap Technology | Digital Wallet & Instant Checkout",
  description: "TapSnap powers non-custodial digital wallets and instant in-store checkout rails for licensed merchants. Load. Scan. Settle.",
  keywords: "digital wallet, payment processing, QR checkout, merchant payments, TapSnap",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AnnouncementBar />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
