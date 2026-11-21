"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { WhatsAppIcon, ArrowRightIcon } from "./icons";

export function Hero() {
  const { checkoutWhatsApp } = useCart();

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[88vh] flex items-end justify-center overflow-hidden bg-black pb-16 pt-32">
      {/* Full-Bleed High-Fashion Campaign Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/editorial/hero_tshirt_model.jpg"
          alt="Mad Monkey Streetwear Campaign"
          fill
          priority
          className="object-cover object-center filter brightness-[0.75] contrast-[1.08] scale-[1.02] transition-transform duration-1000"
        />
        {/* Cinematic Vignette & Bottom Gradient for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Floating Campaign Headline & Action Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
        
        {/* Minimal Drop Tag */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-neutral-700/80 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-neutral-300 uppercase mb-4 shadow-xl">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>DROP 04 ARCHIVE // TOKYO × MUMBAI</span>
        </div>

        {/* Monumental Fashion Title */}
        <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[0.95] max-w-5xl mb-4 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          HEAVYWEIGHT SILHOUETTES.
        </h1>

        {/* Editorial Subheading */}
        <p className="text-xs sm:text-base text-neutral-300 max-w-2xl font-mono tracking-wider uppercase mb-8 drop-shadow-md">
          Custom-milled 280 GSM French Terry · 1.25" Anti-Bacon Rib Collar · Limited to 150 pieces worldwide
        </p>

        {/* Sleek CTA Controls (Strictly rectangular rounded radii, matching global rules) */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto mb-10">
          <a
            href="#drops"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-widest font-mono transition-all shadow-[0_4px_25px_rgba(255,255,255,0.2)] active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Explore Collection</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>

          <a
            href="#categories"
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-black/60 hover:bg-neutral-900/90 backdrop-blur-md border border-neutral-700 hover:border-neutral-500 text-white font-semibold text-xs uppercase tracking-widest font-mono transition-all flex items-center justify-center"
          >
            <span>View Categories</span>
          </a>

          <button
            type="button"
            onClick={checkoutWhatsApp}
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-neutral-950/80 hover:bg-neutral-900 backdrop-blur-md border border-neutral-700 text-white font-semibold text-xs uppercase tracking-widest font-mono transition-all flex items-center justify-center gap-2 hover:border-emerald-500/60"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
            <span>VIP WhatsApp Order</span>
          </button>
        </div>

        {/* Minimal Bottom Editorial Spec Line */}
        <div className="w-full max-w-4xl pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-neutral-400 tracking-widest uppercase">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-sm bg-neutral-500" />
            280 GSM FRENCH TERRY
          </span>
          <span className="hidden sm:inline text-neutral-700">·</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-sm bg-neutral-500" />
            ANTI-SAG LYCRA COLLAR
          </span>
          <span className="hidden sm:inline text-neutral-700">·</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-sm bg-neutral-500" />
            PRE-SHRUNK BIO-WASH
          </span>
          <span className="hidden sm:inline text-neutral-700">·</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-sm bg-neutral-500" />
            COMPLIMENTARY SHIPPING OVER ₹999
          </span>
        </div>

      </div>
    </section>
  );
}
