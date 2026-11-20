"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBagIcon, SlidersIcon, FlameIcon } from "@/components/icons";

export function Navbar() {
  const { totalItems, openCart, openFitModal } = useCart();

  return (
    <>
      {/* Top Streetwear Drop Ticker */}
      <aside aria-label="Announcement" className="w-full bg-[#10121a] border-b border-[#202230] text-xs font-mono py-2 px-4 overflow-hidden select-none">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-[#ccff00]">
            <FlameIcon className="w-3.5 h-3.5 animate-bounce" />
            <span className="font-bold tracking-wider">DROP 04 ACTIVE</span>
            <span className="text-zinc-500 hidden sm:inline">|</span>
            <span className="text-zinc-300 hidden sm:inline">
              LIMITED 150 PIECES PER GRAPHIC
            </span>
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span className="text-[11px] font-semibold text-zinc-300">
              FREE SHIPPING OVER ₹999
            </span>
            <span className="text-zinc-600 hidden md:inline">·</span>
            <span className="text-zinc-400 hidden md:inline">
              PAN-INDIA 3-DAY EXPRESS
            </span>
          </div>
        </div>
      </aside>

      {/* Main Streetwear Sticky Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#09090b]/90 border-b border-[#1c1d29] px-4 lg:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Brand Mark & Typography */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#ccff00] to-[#99cc00] flex items-center justify-center font-black text-black text-lg tracking-tighter shadow-[0_0_20px_rgba(204,255,0,0.3)] transition-transform group-hover:scale-105">
              MM
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-widest text-white leading-none flex items-center gap-1.5">
                MAD MONKEY<span className="text-[#ccff00] font-sans">®</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-zinc-400 font-semibold uppercase mt-0.5">
                HEAVYWEIGHT STREETWEAR
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium">
            <a
              href="#drops"
              className="px-3 py-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors"
            >
              Latest Drops
            </a>
            <a
              href="#tees"
              className="px-3 py-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors"
            >
              Oversized Tees
            </a>
            <a
              href="#acid-wash"
              className="px-3 py-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors"
            >
              Acid Wash
            </a>
            <a
              href="#hoodies"
              className="px-3 py-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors"
            >
              380 GSM Hoodies
            </a>
            <a
              href="#lookbook"
              className="px-3 py-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors"
            >
              Lookbook
            </a>
          </nav>

          {/* Action Buttons (Fit Guide & Cart Drawer) */}
          <div className="flex items-center gap-2.5">
            {/* Interactive Fit Calculator Trigger */}
            <button
              type="button"
              onClick={openFitModal}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold font-mono bg-[#161722] hover:bg-[#1e202f] border border-[#2b2d3f] text-zinc-200 transition-all hover:border-[#ccff00]/50"
              title="Calculate your oversized fit"
            >
              <SlidersIcon className="w-3.5 h-3.5 text-[#ccff00]" />
              <span className="hidden sm:inline">Fit Finder</span>
            </button>

            {/* Cart Button */}
            <button
              type="button"
              onClick={openCart}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-black font-semibold text-xs tracking-wide transition-all shadow-[0_0_15px_rgba(204,255,0,0.25)] hover:shadow-[0_0_25px_rgba(204,255,0,0.4)]"
              aria-label="View Shopping Cart"
            >
              <ShoppingBagIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Bag</span>
              <span className="w-5 h-5 rounded-md bg-black text-[#ccff00] font-mono text-[10px] font-bold flex items-center justify-center">
                {totalItems}
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
