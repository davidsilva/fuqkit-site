import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

Amplify.configure(outputs);

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script 
        async
        type="text/javascript"
        src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=QQBuLY"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
