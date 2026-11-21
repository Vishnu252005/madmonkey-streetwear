"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Tilt3DCard } from "@/components/ui/Tilt3DCard";

export function MonkeyCapStory() {
  const [isCopied, setIsCopied] = useState(false);

  const scrollToCatalog = () => {
    const el = document.getElementById("catalog");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <section id="story" className="w-full bg-[#1862ea] text-white py-20 lg:py-28 overflow-hidden select-none relative">
      
      {/* Background Animated Floating Graphic Elements */}
      <div className="absolute top-10 right-12 text-[#ffcc00] text-3xl font-black pointer-events-none opacity-20 animate-float-slow">
        ✦
      </div>
      <div className="absolute bottom-12 left-10 text-white text-2xl font-black pointer-events-none opacity-15 animate-float-reverse">
        ✱
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Story Manifesto */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* 3D Interactive Brand Emblem */}
            <div className="inline-flex items-center gap-3 mb-8 w-max group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-[#ffcc00] border-2 border-black flex items-center justify-center shadow-xl group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                <span className="text-3xl font-black text-black tracking-tighter">
                  MC
                </span>
              </div>
              <span className="text-3xl text-[#ffcc00] animate-spin-slow">✱</span>
            </div>

            {/* Subhead Tag */}
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-blue-200 mb-3 block">
              A NOTE FROM THE MONKEYS
            </span>

            {/* Massive Heading */}
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.05] uppercase font-sans mb-6">
              Dress like <br />
              <span className="text-[#ffcc00] underline decoration-wavy decoration-2">you mean fun</span>.
            </h2>

            {/* Body */}
            <p className="text-base sm:text-lg text-blue-100 font-sans leading-relaxed max-w-lg mb-8">
              Good cotton. Great color. A tiny bit of mischief. Monkey Cap is here for the days that don&apos;t take themselves too seriously. Milled from heavy 280 GSM cotton with zero synthetic cheap shortcuts.
            </p>

            {/* Action Links & Badges (Strictly rectangular rounded-lg, NO oval) */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToCatalog}
                className="px-6 py-3.5 rounded-lg bg-[#ffcc00] hover:bg-[#ffe135] text-black font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all active:scale-95"
              >
                <span>Find your tee</span>
                <span className="text-sm">↗</span>
              </button>

              <button
                type="button"
                onClick={handleShare}
                className="px-4 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all"
              >
                {isCopied ? "✓ Link Copied!" : "Share Drop"}
              </button>
            </div>

            {/* Playful Manifesto Pillars */}
            <div className="grid grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/15">
              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                <span className="text-[#ffcc00] font-black text-xs block mb-1">01 // NO BACON NECKS</span>
                <p className="text-[11px] text-blue-100 leading-snug">
                  1.25&quot; circular Lycra rib collar engineered to never stretch out.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                <span className="text-[#ffcc00] font-black text-xs block mb-1">02 // 150 PER DROP</span>
                <p className="text-[11px] text-blue-100 leading-snug">
                  Strictly limited runs. Never restocked once the drop sells out.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Skater Card with Yellow Tape Badge */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <Tilt3DCard maxTilt={12} scale={1.03} glare={true} className="w-full max-w-md">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30 bg-amber-100">
                <Image
                  src="/images/monkeycap/hero_skater.jpg"
                  alt="Monkey Cap Everyday Uniform"
                  fill
                  className="object-cover object-center"
                />

                {/* Yellow Tape Badge at Bottom Right with 3D Pop */}
                <div
                  className="absolute bottom-4 right-4 z-20"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <span className="bg-[#ffcc00] text-black font-mono font-black text-xs uppercase tracking-wider px-3.5 py-1.5 shadow-xl rounded border border-black inline-block rotate-[-2deg]">
                    THE EVERYDAY UNIFORM / MC01
                  </span>
                </div>

                {/* Floating Stamp */}
                <div
                  className="absolute top-4 left-4 z-20"
                  style={{ transform: "translateZ(25px)" }}
                >
                  <span className="bg-black/80 backdrop-blur-sm text-white font-mono font-bold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded border border-white/20">
                    LOS ANGELES // MUMBAI
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
