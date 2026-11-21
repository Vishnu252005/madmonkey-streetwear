"use client";

import React from "react";
import { Tilt3DCard } from "@/components/ui/Tilt3DCard";

export function MonkeyCapStickers() {
  const stickers = [
    {
      id: "01",
      title: "The Classic Ape",
      tag: "GLOSS DIE-CUT",
      bg: "#a3ff00",
      icon: "🐵",
      note: "3.5\" Heavy Vinyl",
    },
    {
      id: "02",
      title: "Monkey Cap Hat",
      tag: "MATTE COATED",
      bg: "#eb3324",
      icon: "🧢",
      note: "Weatherproof UV Ink",
    },
    {
      id: "03",
      title: "Big Monkey Energy",
      tag: "HOLOGRAPHIC FOIL",
      bg: "#ffcc00",
      icon: "💥",
      note: "Rainbow Sheen Finish",
    },
    {
      id: "04",
      title: "Off-Duty Stamp",
      tag: "ARCHIVAL EMBOSS",
      bg: "#1862ea",
      icon: "⚡",
      note: "Individually Numbered",
    },
  ];

  return (
    <section className="w-full bg-[#fbf9f4] py-20 sm:py-28 border-b border-[#ece8df] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 bg-[#ffcc00] border border-black px-3.5 py-1 rounded-md shadow-2xs font-mono text-[11px] font-black uppercase text-black">
            <span>🎁</span>
            <span>COMPLIMENTARY WITH EVERY DROP</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-neutral-950 tracking-tight font-sans mb-4">
            Free collectible stickers<span className="text-[#eb3324]">.</span>
          </h2>
          <p className="text-sm text-neutral-600 font-sans">
            Every garment ships in our custom biodegradable box stuffed with a limited 4-pack of weatherproof vinyl die-cut stickers. Slap them on your board, laptop, or street poles.
          </p>
        </div>

        {/* 4 Die-Cut Sticker Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stickers.map((item) => (
            <Tilt3DCard key={item.id} maxTilt={18} scale={1.05} glare={true}>
              <div
                className="relative aspect-square w-full rounded-2xl p-6 flex flex-col justify-between border-2 border-neutral-900 shadow-xl overflow-hidden group cursor-pointer"
                style={{ backgroundColor: item.bg }}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-black uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded shadow-xs">
                    {item.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-black/70">
                    #{item.id}
                  </span>
                </div>

                {/* Big Center Icon / Sticker Mascot */}
                <div className="flex items-center justify-center my-auto text-6xl sm:text-7xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-300">
                  {item.icon}
                </div>

                {/* Bottom Label */}
                <div>
                  <h4 className="text-base sm:text-lg font-black uppercase text-black tracking-tight font-sans leading-tight">
                    {item.title}
                  </h4>
                  <span className="text-[10px] font-mono font-bold text-black/70 block mt-0.5">
                    {item.note}
                  </span>
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>

      </div>
    </section>
  );
}
