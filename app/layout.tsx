import type { Metadata } from "next";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TapSnap | Smart Payments & Tap-to-Pay Technology",
  description: "Accept payments anywhere with just a tap. No bulky hardware, no complex setups — just a seamless experience for you and your customers.",
  keywords: "tap to pay, digital wallet, payment technology, merchant payments, TapSnap",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
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
