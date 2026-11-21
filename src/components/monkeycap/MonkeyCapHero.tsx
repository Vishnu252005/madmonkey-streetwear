"use client";

import React from "react";
import Image from "next/image";

export function MonkeyCapHero() {
  const scrollToCatalog = () => {
    const el = document.getElementById("catalog");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-[#fbf9f4] border-b border-[#ece8df] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Tag / Drop Specifier */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#eb3324] font-black text-sm">✱</span>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-600">
                MONKEY CAP / DROP 01
              </span>
            </div>

            {/* Massive Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-neutral-950 tracking-tight leading-[0.92] uppercase font-sans mb-6">
              Monkey <br />
              business.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-700 font-sans leading-relaxed max-w-md mb-8">
              A little weird. A lot of good. Tees for wherever the day takes you.
            </p>

            {/* CTA Button (Strictly rectangular rounded-lg, NO oval) */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={scrollToCatalog}
                className="px-7 py-4 rounded-lg bg-[#eb3324] hover:bg-[#d6281a] text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2.5 shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <span>Shop the drop</span>
                <span className="text-base">↘</span>
              </button>
            </div>

          </div>

          {/* Right Column: Hero Visual Photo with Right-Edge Editorial Tag */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden border border-[#ece8df] shadow-md bg-amber-50">
              <Image
                src="/images/monkeycap/hero_skater.jpg"
                alt="Monkey Cap Lifestyle Skater Tee"
                fill
                priority
                className="object-cover object-center"
              />

              {/* Right Vertical Editorial Text */}
              <div className="hidden sm:flex absolute right-4 inset-y-0 flex-col justify-between py-6 pointer-events-none select-none text-neutral-900 font-mono text-[10px] uppercase font-bold tracking-widest">
                <span className="rotate-90 origin-right translate-x-3 text-neutral-800 bg-white/70 backdrop-blur-sm px-2 py-0.5 rounded">
                  MADE FOR YOUR OFF-DUTY ERA
                </span>
                <span className="bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded text-neutral-950 font-bold self-end">
                  01 / 03
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
