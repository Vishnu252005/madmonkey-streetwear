"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import { WhatsAppIcon, ArrowRightIcon, CheckIcon } from "./icons";

export function Hero() {
  const { addToCart, checkoutWhatsApp } = useCart();
  const heroProduct = PRODUCTS[0];
  const [selectedSize, setSelectedSize] = useState("L");
  const [viewAngle, setViewAngle] = useState<"model" | "back">("model");
  const [activePin, setActivePin] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  const handleQuickAdd = () => {
    addToCart(heroProduct, selectedSize, heroProduct.colors[0].name);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <section className="relative w-full overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-28 border-b border-neutral-900 bg-[#060608]">
      {/* Mammoth Background Watermark Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none overflow-hidden opacity-[0.035]">
        <span className="text-[14vw] font-black tracking-tighter text-white uppercase whitespace-nowrap block leading-none">
          MAD MONKEY
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: High-Fashion Headline & Editorial Story */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Live Drop Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-neutral-900/90 border border-neutral-800 text-[11px] font-mono tracking-widest text-neutral-300 uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="font-bold text-white">COLLECTION 04 LIVE</span>
              <span className="text-neutral-700">/</span>
              <span>280 GSM CUSTOM TERRY</span>
            </div>

            {/* Mammoth Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-black tracking-tight text-white uppercase leading-[1.0] mb-6">
              HEAVYWEIGHT. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
                280 GSM DRAPE.
              </span> <br />
              NO APOLOGIES.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-xl font-normal leading-relaxed mb-8">
              Milled from dense 280 GSM super-combed French Terry cotton.
              Engineered with pronounced drop shoulders and a 1.25"
              anti-sag Lycra ribbed collar that holds an unyielding boxy drape.
            </p>

            {/* Technical Specification Chips */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-lg mb-8">
              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                  Fabric Density
                </span>
                <span className="text-sm font-bold text-white mt-1">280 GSM Terry</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                  Neckband Core
                </span>
                <span className="text-sm font-bold text-neutral-200 mt-1">1.25" Lycra Rib</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                  Batch Edition
                </span>
                <span className="text-sm font-bold text-amber-400 mt-1">150 Units Only</span>
              </div>
            </div>

            {/* Action Buttons (Strictly rectangular rounded radii) */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#drops"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_4px_25px_rgba(255,255,255,0.15)] active:scale-95"
              >
                <span>Shop Drop 04</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={checkoutWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 font-semibold text-xs uppercase tracking-wider transition-all hover:border-neutral-500"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span>Order via WhatsApp</span>
              </button>
            </div>

            {/* Social Proof Metric */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-neutral-800/80 w-full text-xs font-mono text-neutral-400">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>1,400+ VERIFIED TEES SHIPPED ACROSS INDIA · ZERO WASH SHRINKAGE</span>
            </div>
          </div>

          {/* Right Column: High-Fashion Editorial Model Showcase with Interactive Hotspot Pins */}
          <div className="lg:col-span-5 z-10">
            <div className="relative rounded-2xl bg-neutral-900/90 border border-neutral-800 p-4 sm:p-5 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)] overflow-hidden group">
              
              {/* Card Meta Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-neutral-800 text-[10px] font-mono font-bold tracking-wider text-neutral-300">
                    SIGNATURE ARCHIVE
                  </span>
                  <span className="text-xs text-neutral-500 font-mono">
                    {heroProduct.sku}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400 font-semibold">
                    {heroProduct.stockRemaining} units left
                  </span>
                </div>
              </div>

              {/* Photo Showcase with Interactive Hotspots */}
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800">
                <Image
                  src={
                    viewAngle === "model"
                      ? "/images/editorial/hero_tshirt_model.jpg"
                      : "/images/products/tee_studio_black.jpg"
                  }
                  alt={heroProduct.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Hotspot Pin 1: Collar Architecture */}
                <div
                  className="absolute top-[28%] left-[45%] z-20 cursor-pointer"
                  onMouseEnter={() => setActivePin("collar")}
                  onMouseLeave={() => setActivePin(null)}
                  onClick={() => setActivePin(activePin === "collar" ? null : "collar")}
                >
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white text-black text-[9px] font-bold font-mono items-center justify-center shadow-lg">
                      1
                    </span>
                  </span>
                  {activePin === "collar" && (
                    <div className="absolute left-6 -top-2 w-48 p-2.5 rounded-lg bg-black/95 backdrop-blur-md border border-neutral-700 text-[11px] font-mono text-neutral-200 shadow-2xl z-30">
                      <strong className="text-white block">1.25" Lycra Neckband</strong>
                      Anti-bacon circular collar engineered with heavy recovery core.
                    </div>
                  )}
                </div>

                {/* Hotspot Pin 2: Drop Shoulder Architecture */}
                <div
                  className="absolute top-[42%] left-[22%] z-20 cursor-pointer"
                  onMouseEnter={() => setActivePin("shoulder")}
                  onMouseLeave={() => setActivePin(null)}
                  onClick={() => setActivePin(activePin === "shoulder" ? null : "shoulder")}
                >
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white text-black text-[9px] font-bold font-mono items-center justify-center shadow-lg">
                      2
                    </span>
                  </span>
                  {activePin === "shoulder" && (
                    <div className="absolute left-6 -top-2 w-48 p-2.5 rounded-lg bg-black/95 backdrop-blur-md border border-neutral-700 text-[11px] font-mono text-neutral-200 shadow-2xl z-30">
                      <strong className="text-white block">Drop-Shoulder Cut</strong>
                      22.5" boxy chest drape calibrated for structured streetwear volume.
                    </div>
                  )}
                </div>

                {/* Hotspot Pin 3: 280 GSM Cotton Texture */}
                <div
                  className="absolute top-[56%] left-[60%] z-20 cursor-pointer"
                  onMouseEnter={() => setActivePin("fabric")}
                  onMouseLeave={() => setActivePin(null)}
                  onClick={() => setActivePin(activePin === "fabric" ? null : "fabric")}
                >
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white text-black text-[9px] font-bold font-mono items-center justify-center shadow-lg">
                      3
                    </span>
                  </span>
                  {activePin === "fabric" && (
                    <div className="absolute right-6 -top-2 w-48 p-2.5 rounded-lg bg-black/95 backdrop-blur-md border border-neutral-700 text-[11px] font-mono text-neutral-200 shadow-2xl z-30 text-left">
                      <strong className="text-white block">280 GSM French Terry</strong>
                      Custom-milled high-density cotton with zero polyester blends.
                    </div>
                  )}
                </div>

                {/* View Angle Switcher (Editorial / Studio) */}
                <div className="absolute bottom-4 right-4 z-10 flex items-center bg-black/85 backdrop-blur-md border border-neutral-700 rounded-lg p-0.5">
                  <button
                    type="button"
                    onClick={() => setViewAngle("model")}
                    className={`px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase transition-all ${
                      viewAngle === "model"
                        ? "bg-white text-black"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    On Model
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewAngle("back")}
                    className={`px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase transition-all ${
                      viewAngle === "back"
                        ? "bg-white text-black"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Flatlay Shot
                  </button>
                </div>
              </div>

              {/* Garment Details & Direct Add */}
              <div className="mt-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {heroProduct.name}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5 font-mono">
                      {heroProduct.fabric}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-black text-white font-mono">
                      ₹{heroProduct.price}
                    </span>
                    <span className="block text-[11px] font-mono text-neutral-500 line-through">
                      ₹{heroProduct.originalPrice}
                    </span>
                  </div>
                </div>

                {/* Size Selector */}
                <div className="mt-3 flex items-center justify-between gap-2">
                  <div className="grid grid-cols-5 gap-1.5 flex-1">
                    {heroProduct.sizes.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedSize(s)}
                        className={`py-1.5 rounded-lg text-xs font-mono font-bold border transition-all ${
                          selectedSize === s
                            ? "bg-white text-black border-white"
                            : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleQuickAdd}
                    className={`px-4 py-2 rounded-lg text-xs font-bold font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                      added
                        ? "bg-emerald-500 text-black"
                        : "bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white"
                    }`}
                  >
                    {added ? (
                      <>
                        <CheckIcon className="w-3.5 h-3.5" />
                        <span>Added</span>
                      </>
                    ) : (
                      <span>+ Bag</span>
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
