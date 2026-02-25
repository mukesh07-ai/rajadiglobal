import type { Metadata } from "next";
import { Khand, Poppins, Space_Grotesk, Bebas_Neue } from "next/font/google";
import "./globals.css";

const khand = Khand({
  variable: "--font-khand",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Rajadi Global | AI-Powered Enterprise Solutions",
  description: "Scalable software, AI-powered analytics, and industry-specific digital platforms across DairyTech, AgriTech, and PropTech domains.",
};

import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${khand.variable} ${poppins.variable} ${spaceGrotesk.variable} ${bebasNeue.variable} font-poppins antialiased bg-slate-900 text-slate-100 selection:bg-blue-600/30 selection:text-blue-200 flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
