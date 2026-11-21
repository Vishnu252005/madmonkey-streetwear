"use client";

import React from "react";

export function MonkeyCapSpecs() {
  const specs = [
    {
      num: "01",
      badge: "CUSTOM-MILLED",
      title: "280 GSM French Terry",
      desc: "Fast fashion blends cheap polyester plastic into tees. We custom-mill 100% long-staple combed cotton yarns to give you a weighted, structured drape that breathes naturally all day.",
      stat: "280",
      unit: "GSM WEIGHT",
      highlightColor: "#ffcc00",
    },
    {
      num: "02",
      badge: "LIFETIME RECOVERY",
      title: "1.25\" Anti-Sag Collar",
      desc: "Nothing ruins a great graphic tee faster than a wavy bacon neck. Our circular neckband features an embedded high-recovery spandex core that stays crisp through 50+ wash cycles.",
      stat: "50+",
      unit: "WASH RIGOR",
      highlightColor: "#a3ff00",
    },
    {
      num: "03",
      badge: "TACTILE ARTWORK",
      title: "High-Density Puff Ink",
      desc: "Hand-screenprinted in small artisan batches with zero-feel discharge inks and 3D tactile puff rubber. The graphics pop with subtle physical texture that never peels or cracks.",
      stat: "3D",
      unit: "PUFF TEXTURE",
      highlightColor: "#eb3324",
    },
    {
      num: "04",
      badge: "COLLECTOR EDITION",
      title: "150 Pieces Per Drop",
      desc: "Every design is produced in a strictly capped 150-unit run. Once the drop sells out, the screenprint screens are destroyed and retired into our permanent Tokyo & Mumbai archive.",
      stat: "150",
      unit: "UNITS WORLDWIDE",
      highlightColor: "#1862ea",
    },
  ];

  return (
    <section className="w-full bg-[#fbf9f4] py-20 sm:py-28 border-b border-[#ece8df] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#eb3324] block mb-2">
              ENGINEERED DRAPE // ZERO SHORTCUTS
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-neutral-950 tracking-tight font-sans">
              The anatomy of a <br />
              better tee<span className="text-[#eb3324]">.</span>
            </h2>
          </div>
          <p className="text-sm text-neutral-600 font-sans max-w-md">
            We spent 8 months perfecting our garment blanks before printing a single monkey. Here is why our oversized cut feels unlike any standard t-shirt in your closet.
          </p>
        </div>

        {/* 4-Column Bento Spec Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((item) => (
            <div
              key={item.num}
              className="p-6 rounded-2xl bg-white border-2 border-neutral-900 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-neutral-400 group-hover:text-black transition-colors">
                    {item.num} // 04
                  </span>
                  <span
                    className="text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded border border-black shadow-2xs"
                    style={{ backgroundColor: item.highlightColor, color: item.highlightColor === "#1862ea" ? "#fff" : "#000" }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black text-neutral-950 uppercase tracking-tight mb-3 font-sans">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#ece8df] flex items-baseline gap-2">
                <span className="text-3xl font-black font-mono text-neutral-950">
                  {item.stat}
                </span>
                <span className="text-[10px] font-mono font-bold uppercase text-neutral-500">
                  {item.unit}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
