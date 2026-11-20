"use client";

import React from "react";
import { ArrowRightIcon } from "./icons";

export function Lookbook() {
  const looks = [
    {
      title: "LOOK 01 // TOKYO DRIFT",
      location: "INDIRANAGAR ROOFTOP // BLR",
      fit: "Cyber Ape 260 GSM Tee (XL) + Vintage Cargo Shorts",
      accent: "border-[#ccff00]/40",
      bgGradient: "from-zinc-900 via-neutral-900 to-black",
      tag: "OVERSIZED STREET",
    },
    {
      title: "LOOK 02 // ACID NIGHTS",
      location: "FORT KOCHI BEACH ROAD // KL",
      fit: "Acid Wash Gorilla Tee (L) + Raw Denim",
      accent: "border-[#ff4d00]/40",
      bgGradient: "from-stone-900 via-zinc-950 to-neutral-900",
      tag: "DISTRESSED VINTAGE",
    },
    {
      title: "LOOK 03 // 380 GSM ARMOR",
      location: "BANDRA SKATEPARK // BOM",
      fit: "Monkey Syndicate Hoodie (L) + Washed Chinos",
      accent: "border-blue-500/40",
      bgGradient: "from-blue-950/30 via-zinc-950 to-black",
      tag: "HEAVY FLEECE",
    },
  ];

  return (
    <section id="lookbook" className="py-20 bg-[#09090b] border-b border-[#1b1c28]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono text-[#ccff00] font-bold uppercase tracking-wider block mb-2">
              // EDITORIAL ARCHIVE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Community Lookbook.
            </h2>
          </div>
          <a
            href="#drops"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-zinc-300 hover:text-[#ccff00] transition-colors"
          >
            <span>VIEW ALL 18 LOOKS</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Lookbook Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {looks.map((look, i) => (
            <div
              key={i}
              className={`relative rounded-2xl bg-gradient-to-b ${look.bgGradient} border ${look.accent} p-6 flex flex-col justify-between min-h-[380px] overflow-hidden group hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-black/60 border border-zinc-800 text-[#ccff00]">
                  {look.tag}
                </span>
                <span className="text-[10px] font-mono text-zinc-500">
                  LOOK 0{i + 1}
                </span>
              </div>

              {/* Graphic Motif Center */}
              <div className="my-auto flex flex-col items-center justify-center text-center py-8">
                <div className="w-20 h-20 rounded-2xl bg-black/80 border border-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-[#ccff00] transition-all duration-300">
                  <span className="text-3xl font-black text-[#ccff00]">
                    🐒
                  </span>
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  {look.title}
                </h3>
                <span className="text-xs font-mono text-zinc-400 mt-1">
                  {look.location}
                </span>
              </div>

              <div className="pt-4 border-t border-zinc-800/60">
                <p className="text-xs text-zinc-300 font-mono mb-3">
                  {look.fit}
                </p>
                <a
                  href="#drops"
                  className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-[#ccff00] hover:text-black border border-zinc-800 text-zinc-300 font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Shop This Fit</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
