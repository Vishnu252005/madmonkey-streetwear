"use client";

import React, { useState } from "react";
import { WhatsAppIcon, CheckIcon } from "./icons";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
    setEmail("");
  };

  return (
    <footer className="w-full bg-black border-t border-neutral-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* VIP Drop Access Newsletter */}
        <div className="p-8 sm:p-10 rounded-2xl bg-neutral-900/60 border border-neutral-800 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-[11px] font-mono text-neutral-400 font-bold uppercase tracking-widest block mb-1.5">
              PRIVATE LAUNCH ACCESS
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Get Early Access To Drop 05.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-sans">
              Subscribers receive password-protected store access 2 hours before the public drop. Zero spam.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full lg:w-auto max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-black border border-neutral-700 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
              required
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-lg bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-wider shrink-0 transition-all font-mono"
            >
              {subscribed ? "Subscribed ✓" : "Join Waitlist"}
            </button>
          </form>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-center font-black text-white text-base">
                MM
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                MAD MONKEY<span className="text-neutral-500 text-xs">®</span>
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mb-6">
              Independent streetwear label dedicated to custom-milled 280 GSM heavyweight
              boxy silhouettes, high-density prints, and zero fast-fashion shortcuts.
              Shipped worldwide from India.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/918078179244"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-mono text-neutral-300 transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>Atelier Hotline: +91 80781 79244</span>
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-mono">
              <li><a href="#drops" className="hover:text-white transition-colors">280 GSM Heavy Tees</a></li>
              <li><a href="#drops" className="hover:text-white transition-colors">Mineral Washed Archive</a></li>
              <li><a href="#drops" className="hover:text-white transition-colors">420 GSM Boxy Hoodies</a></li>
              <li><a href="#lookbook" className="hover:text-white transition-colors">Streetwear Lookbook</a></li>
            </ul>
          </div>

          {/* Garment Engineering */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Garment Specs
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-mono">
              <li><a href="#specs" className="hover:text-white transition-colors">Super-Combed Terry</a></li>
              <li><a href="#specs" className="hover:text-white transition-colors">Anti-Bacon Lycra Rib</a></li>
              <li><a href="#specs" className="hover:text-white transition-colors">Zero-Shrink Bio-Wash</a></li>
              <li><a href="#specs" className="hover:text-white transition-colors">Drop Shoulder Tailoring</a></li>
            </ul>
          </div>

          {/* Help & Shipping */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Customer Atelier
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-mono">
              <li><span className="text-neutral-400">Pan-India Express: 3 Days</span></li>
              <li><span className="text-neutral-400">Easy 7-Day Size Exchanges</span></li>
              <li><span className="text-neutral-400">Complimentary Over ₹999</span></li>
              <li><span className="text-neutral-400">Direct WhatsApp Support</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>© {new Date().getFullYear()} MAD MONKEY CLOTHING CO. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4">
            <span className="text-neutral-400">MUMBAI · TOKYO · LONDON</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
