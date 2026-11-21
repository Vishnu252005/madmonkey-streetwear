"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { WhatsAppIcon, ArrowRightIcon } from "./icons";

interface Slide {
  image: string;
  badge: string;
  headline: string;
  subtext: string;
  category: string;
}

const SLIDES: Slide[] = [
  {
    image: "/images/editorial/hero_tshirt_model.jpg",
    badge: "DROP 04 ARCHIVE // JUST DROPPED",
    headline: "OVERSIZED,\nDONE RIGHT.",
    subtext: "280 GSM French Terry tees engineered with 1.25\" anti-sag Lycra collars and permanent boxy drape.",
    category: "oversized-tees",
  },
  {
    image: "/images/editorial/skater_tee.jpg",
    badge: "THE SCENE UNIFORM",
    headline: "BOXY.\nBAGGY.\nBOLD.",
    subtext: "Artisanal mineral wash treatments. Individually hand-distressed so no two garments are identical.",
    category: "acid-wash",
  },
  {
    image: "/images/editorial/lookbook_3.jpg",
    badge: "WINTER GRAIL // 420 GSM",
    headline: "BUILT LIKE\nARMOR.",
    subtext: "Double-lined crossover hoods with zero drawstrings and ultra-dense brushed cotton fleece.",
    category: "hoodies",
  },
];

export function HeroSection({ onSelectCategory }: { onSelectCategory?: (cat: string) => void }) {
  const { checkoutWhatsApp } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative w-full h-[90vh] min-h-[680px] flex items-end justify-center overflow-hidden bg-black pb-16 pt-24 select-none">
      {/* Background Campaign Slides with Cross-Fade */}
      {SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
        >
          <Image
            src={s.image}
            alt={s.headline}
            fill
            priority={idx === 0}
            className="object-cover object-center filter brightness-[0.7] contrast-[1.08] transition-transform duration-[7000ms]"
          />
          {/* Subtle Dark Vignette & Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/50" />
        </div>
      ))}

      {/* Floating Campaign Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
        
        {/* Minimal Drop Badge */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-neutral-700/80 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-neutral-300 uppercase mb-4 shadow-xl">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>{slide.badge}</span>
        </div>

        {/* Monumental Display Headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-[88px] font-black text-white uppercase tracking-tight leading-[0.92] max-w-4xl mb-4 drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] whitespace-pre-line">
          {slide.headline}
        </h1>

        {/* Editorial Subtext */}
        <p className="text-xs sm:text-sm text-neutral-300 max-w-xl font-mono tracking-wider uppercase mb-8 drop-shadow-md">
          {slide.subtext}
        </p>

        {/* Action Controls (Strictly rectangular rounded radii) */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto mb-10">
          <a
            href="#drops"
            onClick={() => onSelectCategory && onSelectCategory(slide.category)}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-widest font-mono transition-all shadow-[0_4px_25px_rgba(255,255,255,0.2)] active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Shop This Silhouette</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>

          <a
            href="#categories"
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-black/60 hover:bg-neutral-900/90 backdrop-blur-md border border-neutral-700 hover:border-neutral-500 text-white font-semibold text-xs uppercase tracking-widest font-mono transition-all flex items-center justify-center"
          >
            <span>All Categories</span>
          </a>

          <button
            type="button"
            onClick={checkoutWhatsApp}
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-neutral-950/80 hover:bg-neutral-900 backdrop-blur-md border border-neutral-700 text-white font-semibold text-xs uppercase tracking-widest font-mono transition-all flex items-center justify-center gap-2 hover:border-emerald-500/60"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
            <span>Order via WhatsApp</span>
          </button>
        </div>

        {/* Slide Selector Indicators (Represent Clo style) */}
        <div className="flex items-center gap-3 mb-8">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all rounded-sm ${
                idx === currentSlide
                  ? "w-8 bg-white"
                  : "w-3 bg-neutral-600 hover:bg-neutral-400"
              }`}
              title={`Slide 0${idx + 1}`}
            />
          ))}
        </div>

        {/* Bottom Ticker Specs */}
        <div className="w-full max-w-4xl pt-5 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4 text-[10px] sm:text-[11px] font-mono text-neutral-400 tracking-widest uppercase">
          <span>280 GSM FRENCH TERRY</span>
          <span className="hidden sm:inline text-neutral-700">·</span>
          <span>1.25" ANTI-SAG COLLAR</span>
          <span className="hidden sm:inline text-neutral-700">·</span>
          <span>PRE-SHRUNK BIO-WASH</span>
          <span className="hidden sm:inline text-neutral-700">·</span>
          <span>COMPLIMENTARY SHIPPING OVER ₹999</span>
        </div>

      </div>
    </section>
  );
}
