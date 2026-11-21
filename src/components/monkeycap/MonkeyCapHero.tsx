"use client";

import React from "react";
import Image from "next/image";
import { Tilt3DCard } from "@/components/ui/Tilt3DCard";

export function MonkeyCapHero() {
  const scrollToCatalog = () => {
    const el = document.getElementById("catalog");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-[#fbf9f4] border-b border-[#ece8df] overflow-hidden select-none">
      
      {/* Background Decorative Kinetic Badges & Subtle Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Floating Background Stars */}
      <div className="absolute top-12 left-10 text-amber-400 text-2xl font-black pointer-events-none animate-float-slow">
        ✱
      </div>
      <div className="absolute bottom-16 left-1/3 text-[#eb3324] text-xl font-black pointer-events-none animate-float-reverse">
        ✱
      </div>
      <div className="absolute top-24 right-1/4 text-[#1862ea] text-lg font-black pointer-events-none animate-float-slow">
        ✦
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Copy & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Tag / Drop Specifier */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#eb3324] font-black text-sm">✱</span>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-600">
                MONKEY CAP / DROP 01
              </span>
            </div>

            {/* Massive Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-neutral-950 tracking-tight leading-[0.92] uppercase font-sans mb-6 drop-shadow-xs">
              Monkey <br />
              <span className="relative inline-block">
                business.
                {/* Playful Yellow Underline Highlight */}
                <span className="absolute -bottom-1 left-0 right-0 h-3 bg-[#ffcc00] -z-10 -rotate-1 rounded-sm opacity-80" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-700 font-sans leading-relaxed max-w-md mb-8">
              A little weird. A lot of good. Tees engineered with heavy 280 GSM cotton drape for wherever the day takes you.
            </p>

            {/* CTAs (Strictly rectangular rounded-lg, NO oval) */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={scrollToCatalog}
                className="px-7 py-4 rounded-lg bg-[#eb3324] hover:bg-[#d6281a] text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2.5 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 group"
              >
                <span>Shop the drop</span>
                <span className="text-base group-hover:translate-x-1 group-hover:translate-y-1 transition-transform">
                  ↘
                </span>
              </button>

              <a
                href="#story"
                className="px-5 py-4 rounded-lg bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-900 font-bold text-sm uppercase tracking-wider flex items-center gap-2 shadow-xs transition-all active:scale-95 hover:border-[#eb3324] hover:text-[#eb3324]"
              >
                <span>Our Story</span>
                <span>→</span>
              </a>
            </div>

            {/* Feature Micro-Badges */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#ece8df] text-[11px] font-mono text-neutral-600 font-bold uppercase">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600">✓</span> 280 GSM Cotton
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600">✓</span> Free Stickers
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600">✓</span> 3-Day Dispatch
              </span>
            </div>

          </div>

          {/* Right Column: 3D Interactive Card with Clean Photo & Floating Stickers */}
          <div className="lg:col-span-7 relative">
            
            {/* Floating 3D Sticker Badge 1 (Top Left) */}
            <div className="absolute -top-4 -left-4 z-30 pointer-events-none animate-float-slow hidden sm:block">
              <div className="bg-[#ffcc00] text-black border-2 border-black font-black text-xs font-mono px-3.5 py-1.5 rounded-lg shadow-lg rotate-[-6deg] flex items-center gap-1.5">
                <span>✱</span>
                <span>100% COMBED COTTON</span>
              </div>
            </div>

            {/* Floating 3D Sticker Badge 2 (Bottom Left) */}
            <div className="absolute -bottom-4 -left-3 z-30 pointer-events-none animate-float-reverse hidden sm:block">
              <div className="bg-black text-[#dfff00] font-black text-[11px] font-mono px-3 py-1.5 rounded-lg shadow-xl rotate-[4deg] flex items-center gap-2 border border-neutral-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dfff00] animate-pulse" />
                <span>LIMITED 100 PIECES PER DROP</span>
              </div>
            </div>

            {/* Main 3D Tilt Card (Clean photo with zero red dots) */}
            <Tilt3DCard maxTilt={10} scale={1.02} glare={true} className="w-full">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden border-2 border-neutral-900 shadow-2xl bg-amber-50">
                
                <Image
                  src="/images/monkeycap/hero_skater.jpg"
                  alt="Monkey Cap Lifestyle Skater Tee"
                  fill
                  priority
                  className="object-cover object-center"
                />

                {/* Right Vertical Editorial Text */}
                <div className="hidden sm:flex absolute right-4 inset-y-0 flex-col justify-between py-6 pointer-events-none select-none text-neutral-900 font-mono text-[10px] uppercase font-bold tracking-widest z-10">
                  <span className="rotate-90 origin-right translate-x-3 text-neutral-900 bg-white/80 backdrop-blur-md px-2.5 py-1 rounded shadow-sm border border-neutral-300">
                    MADE FOR YOUR OFF-DUTY ERA
                  </span>
                  <span className="bg-white/90 backdrop-blur-md px-2 py-1 rounded text-neutral-950 font-bold self-end shadow-sm border border-neutral-300">
                    01 / 03
                  </span>
                </div>

              </div>
            </Tilt3DCard>

          </div>

        </div>
      </div>
    </section>
  );
}
