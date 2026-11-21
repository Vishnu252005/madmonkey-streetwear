"use client";

import React from "react";

export function MonkeyCapMarquee() {
  const tapeText = [
    "EVERYDAY COMFORT",
    "OVERSIZED FITS",
    "BIG MONKEY ENERGY",
    "EVERYDAY COMFORT",
    "OVERSIZED FITS",
    "BIG MONKEY ENERGY",
    "EVERYDAY COMFORT",
    "OVERSIZED FITS",
    "BIG MONKEY ENERGY",
  ];

  return (
    <div className="w-full bg-[#dfff00] py-3 border-y-2 border-black overflow-hidden select-none">
      <div className="flex w-max animate-marquee">
        {tapeText.concat(tapeText).map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-3">
            <span className="text-black font-black text-xs sm:text-sm tracking-widest uppercase font-mono">
              {item}
            </span>
            <span className="text-black text-xs">✱</span>
          </div>
        ))}
      </div>
    </div>
  );
}
