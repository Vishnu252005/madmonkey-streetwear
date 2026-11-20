"use client";

import React, { useState } from "react";
import { TShirtGraphic } from "./TShirtGraphic";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import { FlameIcon, WhatsAppIcon, ArrowRightIcon, SparklesIcon, CheckIcon } from "./icons";

export function Hero() {
  const { addToCart, checkoutWhatsApp } = useCart();
  const heroProduct = PRODUCTS[0];
  const [selectedColor, setSelectedColor] = useState(heroProduct.colors[0]);
  const [selectedSize, setSelectedSize] = useState("L");

  return (
    <section className="relative w-full overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-[#1b1c28]">
      {/* Background Streetwear Atmospheric Gradients & Grid */}
      <div className="absolute inset-0 noise-bg pointer-events-none" />
      <div className="absolute inset-0 streetwear-grid-pattern pointer-events-none opacity-40" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#ccff00]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Streetwear Headline & Story */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Live Drop Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141620] border border-[#2b2d3d] text-xs font-mono text-zinc-300 mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ccff00]"></span>
              </span>
              <span className="font-bold text-[#ccff00]">DROP 04 LIVE</span>
              <span className="text-zinc-600">/</span>
              <span>260 GSM COMBER COTTON</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.05] mb-5">
              Heavyweight <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-[#e5ff80] to-white">
                Oversized Graphics.
              </span>
              <br />
              Zero Apologies.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-xl font-normal leading-relaxed mb-8">
              Crafted from dense 260 GSM super-combed French Terry cotton with
              custom 3D tactile puff prints. Relaxed drop-shoulder silhouettes
              designed to hold their structured drape without sagging.
            </p>

            {/* Tech Badges Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg mb-8">
              <div className="p-3 rounded-xl bg-[#12131a] border border-[#20222e] flex flex-col">
                <span className="text-[11px] font-mono uppercase text-zinc-500 font-semibold">Fabric</span>
                <span className="text-sm font-bold text-white mt-0.5">260 GSM Terry</span>
              </div>
              <div className="p-3 rounded-xl bg-[#12131a] border border-[#20222e] flex flex-col">
                <span className="text-[11px] font-mono uppercase text-zinc-500 font-semibold">Print Tech</span>
                <span className="text-sm font-bold text-[#ccff00] mt-0.5">3D Puff Rubber</span>
              </div>
              <div className="p-3 rounded-xl bg-[#12131a] border border-[#20222e] flex flex-col col-span-2 sm:col-span-1">
                <span className="text-[11px] font-mono uppercase text-zinc-500 font-semibold">Fit Style</span>
                <span className="text-sm font-bold text-white mt-0.5">Boxy Drop Cut</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#drops"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.5)]"
              >
                <span>Shop Drop 04</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={checkoutWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#161722] hover:bg-[#1e202f] border border-[#2d3042] text-zinc-200 font-semibold text-sm tracking-wide transition-all hover:border-[#25D366]/50"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Instant WhatsApp Order</span>
              </button>
            </div>

            {/* Social Proof Metric */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#1d1f2b] w-full">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center text-[10px] font-bold text-zinc-300">BLR</div>
                <div className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-black flex items-center justify-center text-[10px] font-bold text-zinc-200">BOM</div>
                <div className="w-8 h-8 rounded-full bg-zinc-600 border-2 border-black flex items-center justify-center text-[10px] font-bold text-white">KL</div>
              </div>
              <div className="text-xs text-zinc-400">
                <strong className="text-white font-semibold">1,400+ verified tees</strong> shipped across India this month
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Drop Spotlight Product Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#12131c] border border-[#262838] p-5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden">
              
              {/* Card Header Status */}
              <div className="flex items-center justify-between gap-2 pb-4 mb-2 border-b border-[#1f212f]">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-[#ccff00]/10 border border-[#ccff00]/30 text-[11px] font-mono font-bold text-[#ccff00]">
                    FEATURED DROP
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    {heroProduct.sku}
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {heroProduct.stockRemaining} left in stock
                </span>
              </div>

              {/* Interactive Mockup Graphic */}
              <div className="rounded-xl bg-[#0b0c10] border border-[#1d1e29] overflow-hidden relative">
                <TShirtGraphic
                  colorHex={selectedColor.hex}
                  theme="CYBER APE"
                  badge={`${selectedColor.name} · 260 GSM`}
                />
              </div>

              {/* Product Info & Pricing */}
              <div className="mt-5">
                <h3 className="text-lg font-bold text-white">
                  {heroProduct.name}
                </h3>
                <div className="flex items-baseline gap-2.5 mt-1.5">
                  <span className="text-2xl font-black text-[#ccff00] font-mono">
                    ₹{heroProduct.price}
                  </span>
                  <span className="text-sm font-mono text-zinc-500 line-through">
                    ₹{heroProduct.originalPrice}
                  </span>
                  <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {heroProduct.discount}
                  </span>
                </div>

                {/* Colorway Selector */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-zinc-400 font-mono uppercase text-[11px]">
                      Colorway: <strong className="text-white">{selectedColor.name}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {heroProduct.colors.map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => setSelectedColor(c)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 border transition-all ${
                          selectedColor.name === c.name
                            ? "bg-zinc-800 border-[#ccff00] text-white shadow-[0_0_10px_rgba(204,255,0,0.2)]"
                            : "bg-[#161720] border-[#252736] text-zinc-400 hover:text-white"
                        }`}
                      >
                        <span
                          className="w-3 h-3 rounded-sm border border-black/40"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span>{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selector */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-zinc-400 font-mono uppercase text-[11px]">
                      Select Boxy Size:
                    </span>
                    <span className="text-[11px] text-[#ccff00] font-mono">
                      Boxy oversized drape
                    </span>
                  </div>
                  <div className="grid grid-cols-5 gap-1.5">
                    {heroProduct.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 rounded-lg text-xs font-mono font-bold border transition-all ${
                          selectedSize === size
                            ? "bg-[#ccff00] text-black border-[#ccff00] shadow-[0_0_12px_rgba(204,255,0,0.3)]"
                            : "bg-[#161720] border-[#252736] text-zinc-300 hover:text-white hover:border-zinc-600"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Row */}
                <div className="grid grid-cols-2 gap-2 mt-5">
                  <button
                    type="button"
                    onClick={() => addToCart(heroProduct, selectedSize, selectedColor.name)}
                    className="w-full py-3 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(204,255,0,0.25)]"
                  >
                    Add To Bag
                  </button>
                  <button
                    type="button"
                    onClick={checkoutWhatsApp}
                    className="w-full py-3 rounded-xl bg-[#181a25] hover:bg-[#202332] border border-[#2b2e40] text-zinc-200 font-semibold text-xs tracking-wider flex items-center justify-center gap-1.5 transition-all"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp Order</span>
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
