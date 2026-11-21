import React from "react";

export function PhilosophyGrid() {
  const manifesto = [
    {
      num: "01",
      statement: "HEAVYWEIGHT ONLY. ZERO POLYESTER.",
      detail:
        "Fast fashion blends synthetic plastic into tees to cut costs. We mill 100% long-staple combed cotton yarns at 280 GSM to create a dense, natural drape that breathes.",
    },
    {
      num: "02",
      statement: "WE ENGINEER DRAPE, NOT MERCHANDISE.",
      detail:
        "An oversized tee isn't just an XL blank. It's calibrated shoulder drops, tightened sleeve circumferences, and cropped waist proportions designed to sit cleanly above your beltline.",
    },
    {
      num: "03",
      statement: "NO BACON NECKS. REINFORCED LYCRA CORE.",
      detail:
        "We formulated our 1.25\" circular rib with a high-recovery spandex core. It stays flat, tight, and pristine across 50+ wash cycles without stretching into wavy bacon neck.",
    },
    {
      num: "04",
      statement: "150 PIECES PER DROP. NEVER RESTOCKED.",
      detail:
        "Every graphic is retired into our permanent archive once the 150th unit ships. You are purchasing a collector piece, not mass market retail surplus.",
    },
  ];

  return (
    <section className="bg-black text-white py-24 sm:py-32 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <p className="uppercase tracking-[0.3em] text-neutral-500 text-xs font-mono mb-3 font-semibold">
            // BRAND MANIFESTO
          </p>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-none uppercase">
            BUILT FROM <br />
            <span className="text-neutral-500">CONVICTION.</span>
          </h2>
        </div>

        {/* Minimalist Manifesto Lines (from RAAVN-ECOM) */}
        <div className="border-t border-neutral-800">
          {manifesto.map((item, idx) => (
            <div
              key={idx}
              className="py-10 sm:py-14 border-b border-neutral-800/90 group hover:bg-neutral-950/60 transition-colors"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 items-start">
                
                {/* Number */}
                <div className="md:col-span-2">
                  <span className="text-neutral-600 font-mono text-base font-bold group-hover:text-amber-400 transition-colors">
                    {item.num} // 04
                  </span>
                </div>

                {/* Big Statement */}
                <div className="md:col-span-6">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white group-hover:translate-x-1 transition-transform">
                    {item.statement}
                  </h3>
                </div>

                {/* Detail Description */}
                <div className="md:col-span-4">
                  <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                    {item.detail}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
