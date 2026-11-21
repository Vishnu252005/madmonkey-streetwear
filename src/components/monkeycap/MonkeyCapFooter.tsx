"use client";

import React from "react";

export function MonkeyCapFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#fbf9f4] border-t border-[#ece8df] py-8 px-4 sm:px-8 text-neutral-800 text-xs font-mono select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Brand Name */}
        <div className="flex items-center gap-2 font-black uppercase tracking-wider text-black">
          <span>MONKEY CAP</span>
          <span className="text-[#eb3324]">✱</span>
        </div>

        {/* Center: Playful Slogan */}
        <div className="text-neutral-500 font-medium font-sans italic text-sm text-center">
          Make room for a little nonsense.
        </div>

        {/* Right: Back to top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="font-bold uppercase tracking-wider text-neutral-900 hover:text-[#eb3324] transition-colors flex items-center gap-1.5"
        >
          <span>Back to top</span>
          <span>↑</span>
        </button>

      </div>
    </footer>
  );
}
