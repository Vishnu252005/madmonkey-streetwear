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
  const [added, setAdded] = useState(false);

  const handleQuickAdd = () => {
    addToCart(heroProduct, selectedSize, heroProduct.colors[0].name);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <section className="relative w-full overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-neutral-900 bg-[#09090b]">
      {/* Subtle luxury ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/20 via-black to-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Streetwear Editorial Story */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Drop Archival Tag */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-mono tracking-widest text-neutral-300 uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="font-bold text-white">COLLECTION 04</span>
              <span className="text-neutral-700">/</span>
              <span>280 GSM FRENCH TERRY</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.02] mb-6">
              Engineered <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-500">
                Heavyweight Drape.
              </span>
              <br />
              Zero Apologies.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-xl font-normal leading-relaxed mb-8">
              Milled from dense 280 GSM super-combed French Terry cotton.
              Engineered with pronounced drop-shoulder architecture and a 1.25"
              anti-sag Lycra ribbed collar that holds a sharp boxy silhouette forever.
            </p>

            {/* Technical Specification Chips */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-lg mb-8">
              <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                  Fabric Weight
                </span>
                <span className="text-sm font-bold text-white mt-1">280 GSM Terry</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                  Neckband
                </span>
                <span className="text-sm font-bold text-neutral-200 mt-1">1.25" Lycra Rib</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                  Batch Run
                </span>
                <span className="text-sm font-bold text-amber-400 mt-1">150 Units Only</span>
              </div>
            </div>

            {/* Action Buttons (Strictly rectangular rounded radii) */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#drops"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(255,255,255,0.12)] active:scale-95"
              >
                <span>Explore Drop 04</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={checkoutWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 font-semibold text-xs uppercase tracking-wider transition-all hover:border-neutral-500"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span>Instant WhatsApp Order</span>
              </button>
            </div>

            {/* Proof Tagline */}
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-neutral-800/80 w-full text-xs font-mono text-neutral-500">
              <span className="w-2 h-2 rounded-sm bg-neutral-600" />
              <span>HAND-FINISHED IN LIMITED RUNS · PRE-SHRUNK BIO-WASHED COTTON</span>
            </div>
          </div>

          {/* Right Column: High-Fashion Editorial Spotlight Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-neutral-900/90 border border-neutral-800 p-4 sm:p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden group">
              
              {/* Card Meta Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-neutral-800 text-[10px] font-mono font-bold tracking-wider text-neutral-300">
                    SIGNATURE PIECE
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

              {/* Photo Showcase with Model / Back Angle Toggle */}
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

                {/* Subtle Garment Architecture Overlays */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 pointer-events-none">
                  <span className="px-2 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-neutral-300 border border-white/10">
                    [22.5" BOX CHEST]
                  </span>
                  <span className="px-2 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-neutral-300 border border-white/10">
                    [DROP SHOULDER SEAM]
                  </span>
                </div>

                {/* View Angle Switcher (Front/Back) */}
                <div className="absolute bottom-4 right-4 z-10 flex items-center bg-black/80 backdrop-blur-md border border-neutral-700 rounded-lg p-0.5">
                  <button
                    type="button"
                    onClick={() => setViewAngle("model")}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase transition-all ${
                      viewAngle === "model"
                        ? "bg-white text-black"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Editorial
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewAngle("back")}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase transition-all ${
                      viewAngle === "back"
                        ? "bg-white text-black"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Back Graphic
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
                    <p className="text-xs text-neutral-400 mt-0.5">
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
