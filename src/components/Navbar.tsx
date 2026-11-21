"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBagIcon, SlidersIcon } from "@/components/icons";

export function Navbar() {
  const { totalItems, openCart, openFitModal } = useCart();

  return (
    <>
      {/* Top Editorial Ticker Bar */}
      <aside
        aria-label="Announcement"
        className="w-full bg-neutral-950 border-b border-neutral-900 text-[11px] font-mono tracking-widest uppercase py-2 px-4 select-none text-neutral-400"
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-bold text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              DROP 04 LIVE
            </span>
            <span className="text-neutral-700 hidden sm:inline">/</span>
            <span className="hidden sm:inline text-neutral-400">
              CUSTOM-MILLED 280 GSM FRENCH TERRY
            </span>
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span className="text-neutral-300 font-medium">
              COMPLIMENTARY SHIPPING OVER ₹999
            </span>
            <span className="text-neutral-700 hidden md:inline">·</span>
            <span className="hidden md:inline text-neutral-500">
              PAN-INDIA 3-DAY DISPATCH
            </span>
          </div>
        </div>
      </aside>

      {/* Main Luxury Streetwear Sticky Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-black/90 border-b border-neutral-900 px-4 lg:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Brand Wordmark & Heritage */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-center font-black text-white text-base tracking-tighter group-hover:border-neutral-400 transition-colors">
              MM
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-white leading-none flex items-center gap-1">
                MAD MONKEY<span className="text-neutral-500 text-xs">®</span>
              </span>
              <span className="text-[9px] font-mono tracking-[0.2em] text-neutral-500 font-semibold uppercase mt-0.5">
                CLOTHING CO. // TOKYO · MUMBAI
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
            <a
              href="#drops"
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-neutral-900 transition-colors"
            >
              Drops
            </a>
            <a
              href="#drops"
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-neutral-900 transition-colors"
            >
              Heavyweight Tees
            </a>
            <a
              href="#drops"
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-neutral-900 transition-colors"
            >
              Mineral Wash
            </a>
            <a
              href="#drops"
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-neutral-900 transition-colors"
            >
              Hoodies
            </a>
            <a
              href="#lookbook"
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-neutral-900 transition-colors"
            >
              Lookbook
            </a>
            <a
              href="#specs"
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-neutral-900 transition-colors"
            >
              Fabric Specs
            </a>
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-2.5">
            {/* Fit Finder Modal Trigger */}
            <button
              type="button"
              onClick={openFitModal}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono font-medium bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 transition-all hover:border-neutral-600"
              title="Calculate your exact oversized size"
            >
              <SlidersIcon className="w-3.5 h-3.5 text-neutral-400" />
              <span className="hidden sm:inline">Fit Guide</span>
            </button>

            {/* Shopping Bag Button (Rectangular, NOT oval/pill) */}
            <button
              type="button"
              onClick={openCart}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold font-mono bg-white hover:bg-neutral-200 text-black transition-all shadow-[0_2px_10px_rgba(255,255,255,0.1)] active:scale-95"
              aria-label="View shopping bag"
            >
              <ShoppingBagIcon className="w-3.5 h-3.5 text-black" />
              <span className="uppercase tracking-wider">Bag</span>
              <span className="px-1.5 py-0.2 rounded bg-black text-white text-[11px] font-bold">
                {totalItems}
              </span>
            </button>
          </div>

        </div>
      </header>
    </>
  );
}
