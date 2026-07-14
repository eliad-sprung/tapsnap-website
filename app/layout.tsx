import type { Metadata } from "next";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TapSnap | Smart Payments & Tap-to-Pay",
  description: "Accept payments anywhere with just a tap. No hardware, no friction, no delays.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32",   type: "image/png" },
      { url: "/favicon-64.png", sizes: "64x64",   type: "image/png" },
      { url: "/favicon-128.png",sizes: "128x128", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-128.png", sizes: "128x128", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-64.png" type="image/png" sizes="64x64" />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon-128.png" />
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
