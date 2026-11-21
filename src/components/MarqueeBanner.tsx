"use client";

import React from "react";

export function MarqueeBanner() {
  const items = [
    "MAD MONKEY® CLOTHING CO.",
    "280 GSM CUSTOM-MILLED TERRY",
    "DROP 04 LIVE WORLDWIDE",
    "LIMITED TO 150 PIECES",
    "1.25\" ANTI-SAG LYCRA COLLAR",
    "COMPLIMENTARY SHIPPING OVER ₹999",
    "SHIBUYA × MUMBAI ATELIER",
    "PRE-SHRUNK BIO-ENZYME WASH",
    "ZERO POLYESTER BLENDS",
    "PAN-INDIA 3-DAY DISPATCH",
  ];

  return (
    <div className="w-full bg-neutral-950 border-y border-neutral-900 py-3 overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-8">
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-neutral-400 shrink-0">
            <span className="hover:text-white transition-colors cursor-default">
              {text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
          </div>
        ))}
      </div>
    </div>
  );
}
