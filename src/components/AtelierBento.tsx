"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheckIcon, TruckIcon, SparklesIcon, FlameIcon } from "./icons";

export function AtelierBento() {
  return (
    <section id="specs" className="py-24 bg-black border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2.5 uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>THE 21ST-CENTURY STREETWEAR ATELIER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Blueprint & Craft.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md font-mono leading-relaxed">
            Every millimeter of our garment architecture is engineered for heavy drape, structural rigidity, and permanent neckline shape.
          </p>
        </div>

        {/* 21st.dev Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Heavyweight 280 GSM Fabric (Large 2-col) */}
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden bg-neutral-900/80 border border-neutral-800 p-7 flex flex-col justify-between min-h-[360px] group hover:border-neutral-700 transition-all">
            <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity">
              <Image
                src="/images/editorial/fabric_macro.jpg"
                alt="Fabric Grain Macro"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 rounded-md bg-neutral-800/90 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase font-bold text-neutral-200 border border-neutral-700">
                FABRIC ARCHITECTURE
              </span>
              <span className="text-xs font-mono text-neutral-400">01 // HEAVYWEIGHT</span>
            </div>

            <div className="relative z-10 mt-auto pt-16">
              <span className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight block">
                280 GSM French Terry
              </span>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-2 max-w-lg leading-relaxed">
                Milled from 100% compact super-combed cotton. High-density looped reverse side creates an insulated, breathable drape that holds its boxy structure in all conditions.
              </p>
              <div className="flex items-center gap-4 mt-5 text-[11px] font-mono text-neutral-400 pt-4 border-t border-neutral-800/80">
                <span>ZERO POLYESTER</span>
                <span>·</span>
                <span>COMPACT COMBED YARN</span>
                <span>·</span>
                <span>RING-SPUN FINISH</span>
              </div>
            </div>
          </div>

          {/* Card 2: Live Drop Batch Tracker */}
          <div className="relative rounded-2xl bg-neutral-900/80 border border-neutral-800 p-6 flex flex-col justify-between group hover:border-neutral-700 transition-all">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded bg-neutral-800 text-[10px] font-mono tracking-wider font-bold text-amber-400 border border-amber-400/20 uppercase">
                BATCH MM-SS26
              </span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
            </div>

            <div className="my-6">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-3xl font-black text-white font-mono">142/150</span>
                <span className="text-xs font-mono text-neutral-400">Units Claimed</span>
              </div>
              <div className="w-full h-2 rounded bg-neutral-800 overflow-hidden">
                <div className="h-full bg-amber-400 w-[94.6%]" />
              </div>
              <p className="text-[11px] font-mono text-neutral-400 mt-3">
                Only 8 pieces remain in inventory before Drop 04 vault closure.
              </p>
            </div>

            <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span>VAULT CLOSURE:</span>
              <strong className="text-white">48 HRS</strong>
            </div>
          </div>

          {/* Card 3: Anti-Sag Lycra Rib Neck */}
          <div className="relative rounded-2xl bg-neutral-900/80 border border-neutral-800 p-6 flex flex-col justify-between group hover:border-neutral-700 transition-all">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded bg-neutral-800 text-[10px] font-mono tracking-wider font-bold text-neutral-300 border border-neutral-700 uppercase">
                COLLAR TECH
              </span>
              <ShieldCheckIcon className="w-4 h-4 text-white" />
            </div>

            <div className="my-4">
              <span className="text-2xl font-black text-white uppercase tracking-tight block">
                1.25" Lycra Rib
              </span>
              <p className="text-xs text-neutral-400 mt-2 font-sans leading-relaxed">
                Dense 1x1 circular rib knit with spandex core. Guaranteed to hold its flat, snug neckline without curling or stretching into bacon neck.
              </p>
            </div>

            <div className="pt-3 border-t border-neutral-800 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
              <span>COLLAR RETENTION</span>
              <span className="text-emerald-400 font-bold">100% SHAPE LOCK</span>
            </div>
          </div>

          {/* Card 4: Pre-Shrunk Bio-Enzyme Wash */}
          <div className="md:col-span-2 relative rounded-2xl bg-neutral-900/80 border border-neutral-800 p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group hover:border-neutral-700 transition-all">
            <div className="max-w-md">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-neutral-800 text-[10px] font-mono font-bold text-neutral-300 uppercase mb-2">
                <span>LAB-CERTIFIED BIO-WASH</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                Pre-Shrunk Bio-Enzyme Treatment.
              </h3>
              <p className="text-xs text-neutral-400 mt-2 font-sans leading-relaxed">
                Every meter of fabric is washed in organic cellulose enzymes before cutting. Strips surface fuzz, softens cotton drape, and locks garment dimensions so your tee never shrinks.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black border border-neutral-800 shrink-0 text-center font-mono w-full sm:w-auto">
              <span className="text-3xl font-black text-white block">0.0%</span>
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest block mt-0.5">
                WASH SHRINKAGE
              </span>
            </div>
          </div>

          {/* Card 5: Atelier Express Logistics */}
          <div className="md:col-span-2 relative rounded-2xl bg-neutral-900/80 border border-neutral-800 p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group hover:border-neutral-700 transition-all">
            <div className="max-w-md">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-neutral-800 text-[10px] font-mono font-bold text-neutral-300 uppercase mb-2">
                <span>PAN-INDIA DISPATCH</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                Express Delivery & Fit Exchanges.
              </h3>
              <p className="text-xs text-neutral-400 mt-2 font-sans leading-relaxed">
                Shipped within 24 hours from Kerala with Bluedart Air express. Complimentary 7-day doorstep size swaps if the oversized box cut is too loose or snug.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black border border-neutral-800 shrink-0 text-center font-mono w-full sm:w-auto">
              <span className="text-3xl font-black text-white block">3 DAYS</span>
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest block mt-0.5">
                PAN-INDIA AVERAGE
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
