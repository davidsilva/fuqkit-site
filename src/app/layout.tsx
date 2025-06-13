import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
// import Script from "next/script";

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
        {/* <Script 
          id="mcjs"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/03fdccea8b87deb155af14abf/813b9579163e89e5b509aa596.js");`
          }}
          /> */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
