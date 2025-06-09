import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const hkModularFont = localFont({
  src: "./fonts/HKModularBold/font.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-modular",
  display: "swap",
});

export const metadata: Metadata = {
  title: "fuqkit: right now ready",
  description: "A discreet, travel-sized pouch containing just what you need to get the most out of a spontaneous sexual encounter.",
  keywords: [
    "gay", "sex", "men", "hookup", "lube", "condoms", "wipes", "mouthwash", "cock rings", "anal douche", "travel pouch", "sexual wellness",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${hkModularFont.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
