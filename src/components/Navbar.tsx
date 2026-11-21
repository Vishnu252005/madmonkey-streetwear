"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBagIcon, SlidersIcon, WhatsAppIcon } from "@/components/icons";

export function Navbar() {
  const { totalItems, openCart, openFitModal, checkoutWhatsApp } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Streetwear Announcement Ticker */}
      <aside
        aria-label="Announcement"
        className="w-full bg-neutral-950 border-b border-neutral-900 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase py-2 px-4 select-none text-neutral-400"
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-bold text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              DROP 04 LIVE NOW
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
              PAN-INDIA 3-DAY EXPRESS
            </span>
          </div>
        </div>
      </aside>

      {/* Main Luxury Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 px-4 lg:px-8 py-3.5 border-b ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-neutral-800 shadow-xl"
            : "bg-black/70 backdrop-blur-md border-neutral-900"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-semibold uppercase tracking-[0.2em] font-mono text-neutral-400">
            <a
              href="#drops"
              className="px-2.5 py-1.5 rounded-md hover:text-white hover:bg-neutral-900 transition-colors"
            >
              Drops
            </a>
            <a
              href="#categories"
              className="px-2.5 py-1.5 rounded-md hover:text-white hover:bg-neutral-900 transition-colors"
            >
              Silhouettes
            </a>
            <a
              href="#philosophy"
              className="px-2.5 py-1.5 rounded-md hover:text-white hover:bg-neutral-900 transition-colors"
            >
              Philosophy
            </a>
            <a
              href="#specs"
              className="px-2.5 py-1.5 rounded-md hover:text-white hover:bg-neutral-900 transition-colors"
            >
              Atelier
            </a>
            <a
              href="#lookbook"
              className="px-2.5 py-1.5 rounded-md hover:text-white hover:bg-neutral-900 transition-colors"
            >
              Lookbook
            </a>
          </nav>

          {/* Center Brand Wordmark */}
          <a href="#" className="flex flex-col items-center group text-center">
            <span className="text-lg sm:text-xl font-black tracking-tight text-white leading-none flex items-center gap-1">
              MAD MONKEY<span className="text-neutral-500 text-xs">®</span>
            </span>
            <span className="text-[8px] font-mono tracking-[0.3em] text-neutral-500 font-semibold uppercase mt-0.5">
              ATELIER // TOKYO · MUMBAI
            </span>
          </a>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2">
            {/* Direct WhatsApp Hotline */}
            <button
              type="button"
              onClick={checkoutWhatsApp}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-medium bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 text-neutral-300 transition-all hover:border-emerald-500/50"
              title="Chat with atelier team"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </button>

            {/* Fit Finder Trigger */}
            <button
              type="button"
              onClick={openFitModal}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-medium bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 transition-all hover:border-neutral-600"
              title="Calculate your exact oversized size"
            >
              <SlidersIcon className="w-3.5 h-3.5 text-neutral-400" />
              <span className="hidden sm:inline">Fit Guide</span>
            </button>

            {/* Shopping Bag Button (Strictly rectangular, zero pill/oval) */}
            <button
              type="button"
              onClick={openCart}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold font-mono bg-white hover:bg-neutral-200 text-black transition-all shadow-md active:scale-95"
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
