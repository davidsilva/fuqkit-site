import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";
// import localFont from "next/font/local";

Amplify.configure(outputs);

// const hkModular = localFont({
//   src: "./fonts/HKModularBold/font.woff2",
//   variable: "--font-modular",
//   display: "swap",
// });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-white">
      <main className="flex-1 flex flex-col items-center justify-center w-full">
        {/* <h1 className={`${hkModular.className} text-6xl`}>fuqkit</h1> */}
        <h1 className={`font-main text-6xl`}>fuqkit</h1>
        <p className="font-inter text-xl text-gray-500 italic tracking-wide mb-8">
          right now ready
        </p>
        <p className="font-inter text-lg text-gray-700 max-w-2xl text-center mb-8">
          A discreet, travel-sized pouch containing just what you need to get the most out of a spontaneous sexual encounter.
        </p>
        <ul className="font-inter text-base text-gray-800 max-w-md mx-auto space-y-3 mb-10">
          <li className="flex items-center gap-2">
            <span className="text-green-500">Luxurious Lube</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">Top-Quality Condoms</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">Moist Wipes for Before and After</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">Mouthwash for Fresh Kisses</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">Silicone Cock Rings to Make Pleasure Last as Long as You Want</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">Compact Bulb-Type Anal Douche</span>
          </li>
        </ul>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div><span className="text-sm">&copy;2025 fuqkit llc</span></div>
      </footer>
    </div>
  );
}
