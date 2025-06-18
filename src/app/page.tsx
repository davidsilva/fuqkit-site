export default function Home() {
  return (
    <div className="min-h-full flex flex-col items-center justify-between p-8 relative" style={{
      backgroundImage: "url(/shutterstock_413245453.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="absolute inset-0 bg-blue-500/60 z-10 w-full h-full pointer-events-none" aria-hidden="true"></div>
      <main className="z-20 flex-1 flex flex-col items-center justify-center w-full">
        <h1 className={`font-logo text-5xl sm:text-7xl md:text-8xl text-foreground`}>fuqkit</h1>
        <p className="font-inter text-2xl sm:text-3xl  md:text-4xl italic tracking-wide mb-8 text-foreground">
          right now ready
        </p>
        <p className="font-inter text-xl sm:text-2xl md:text-3xl text-foreground max-w-2xl text-center mb-8">
          A discreet, travel-sized pouch containing just what you need to get the most out of a spontaneous sexual encounter.
        </p>
        <ul className="font-inter text-lg sm:text-2xl md:text-3xl text-foreground max-w-md mx-auto space-y-3 mb-10 ">
          <li className="flex items-center gap-2">
            <span className="">Luxurious Lube</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="">Top-Quality Condoms</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="">Moist Wipes for Before and After</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="">Mouthwash</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="">A Cock Ring to Make It Last</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="">Compact Bulb-Type Anal Douche for a Fresh Bottom</span>
          </li>
        </ul>
        <p className="font-inter text-4xl italic tracking-wide mb-8">
          Cumming Soon?
        </p>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center font-inter">
        <div><span className="text-sm">&copy;2025 fuqkit llc</span></div>
      </footer>
    </div>
  );
}
