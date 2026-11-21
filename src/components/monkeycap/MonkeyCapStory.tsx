"use client";

import React from "react";
import Image from "next/image";

export function MonkeyCapStory() {
  const scrollToCatalog = () => {
    const el = document.getElementById("catalog");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="story" className="w-full bg-[#1862ea] text-white py-20 lg:py-28 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Story Manifesto */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Big Yellow Brand Emblem */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-6xl sm:text-7xl font-black text-[#ffcc00] tracking-tighter">
                MC
              </span>
              <span className="text-3xl text-[#ffcc00] animate-spin-slow">✱</span>
            </div>

            {/* Subhead Tag */}
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-blue-200 mb-3 block">
              A NOTE FROM THE MONKEYS
            </span>

            {/* Massive Heading */}
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.05] uppercase font-sans mb-6">
              Dress like <br />
              you mean fun.
            </h2>

            {/* Body */}
            <p className="text-base sm:text-lg text-blue-100 font-sans leading-relaxed max-w-lg mb-8">
              Good cotton. Great color. A tiny bit of mischief. Monkey Cap is here for the days that don&apos;t take themselves too seriously.
            </p>

            {/* Action Link (Strictly rectangular rounded-lg, NO oval) */}
            <div>
              <button
                type="button"
                onClick={scrollToCatalog}
                className="text-[#ffcc00] hover:text-white font-mono font-bold text-sm tracking-wider uppercase inline-flex items-center gap-2 group transition-colors"
              >
                <span>Find your tee</span>
                <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>
              </button>
            </div>

          </div>

          {/* Right Column: Skater Lifestyle Card with Yellow Tape */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative aspect-[4/5] w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-amber-100">
              <Image
                src="/images/monkeycap/hero_skater.jpg"
                alt="Monkey Cap Everyday Uniform"
                fill
                className="object-cover object-center"
              />

              {/* Yellow Tape Badge at Bottom Right */}
              <div className="absolute bottom-4 right-4 z-10">
                <span className="bg-[#ffcc00] text-black font-mono font-black text-xs uppercase tracking-wider px-3 py-1.5 shadow-md rounded">
                  THE EVERYDAY UNIFORM / MC01
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
