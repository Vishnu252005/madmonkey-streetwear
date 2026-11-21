"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export function MonkeyCapNav() {
  const { totalItems, openCart } = useCart();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full font-sans">
      {/* Red Announcement Ticker */}
      <div className="bg-[#eb3324] text-white text-[11px] sm:text-xs font-bold tracking-widest uppercase py-2 px-4 text-center flex items-center justify-center gap-2 select-none shadow-inner">
        <span>THE FIRST DROP IS HERE</span>
        <span className="text-amber-300">💥</span>
        <span>GOOD TEES. GOOFY MONKEYS.</span>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-[#fbf9f4]/95 backdrop-blur-md border-b border-[#ece8df] px-4 sm:px-8 py-3.5 flex items-center justify-between transition-all">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-[#ffcc00] border-2 border-black flex items-center justify-center font-black text-black text-xs tracking-tighter shadow-sm group-hover:scale-105 transition-transform">
            MC
          </div>
          <span className="font-black text-lg tracking-tight text-neutral-950 uppercase font-sans">
            Monkey Cap
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden sm:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-neutral-800">
          <button
            type="button"
            onClick={() => scrollToSection("catalog")}
            className="hover:text-[#eb3324] transition-colors"
          >
            Shop tees
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("story")}
            className="hover:text-[#eb3324] transition-colors"
          >
            Our thing
          </button>
        </div>

        {/* Right: Cart Button (Strictly rectangular rounded-lg, NO oval) */}
        <button
          type="button"
          onClick={openCart}
          className="px-3.5 py-2 rounded-lg bg-white hover:bg-neutral-100 border border-neutral-900 text-neutral-950 text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all active:scale-95"
        >
          <svg
            className="w-4 h-4 text-neutral-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span>Bag</span>
          <span className="bg-[#ffcc00] text-black px-1.5 py-0.5 rounded text-[10px] font-black border border-black">
            {totalItems}
          </span>
        </button>
      </nav>
    </header>
  );
}
