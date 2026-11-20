"use client";

import React, { useState } from "react";
import { WhatsAppIcon, ArrowRightIcon, CheckIcon } from "./icons";

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
    <footer className="w-full bg-[#07080a] border-t border-[#1a1b24] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Top VIP Drop Newsletter Band */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#11131c] via-[#141622] to-[#11131c] border border-[#232638] mb-16 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-mono text-[#ccff00] font-bold uppercase tracking-wider block mb-1">
              // PRIVATE DROP NOTIFICATIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Get Early Access To Drop 05.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Members get password-protected store access 2 hours before public launch. Zero spam.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full lg:w-auto max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-xl bg-black/60 border border-zinc-700 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ccff00]"
              required
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-xs uppercase tracking-wider shrink-0 transition-all shadow-[0_0_15px_rgba(204,255,0,0.2)]"
            >
              {subscribed ? "Joined ✓" : "Join Drop"}
            </button>
          </form>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#ccff00] flex items-center justify-center font-black text-black text-base">
                MM
              </div>
              <span className="text-lg font-black tracking-widest text-white">
                MAD MONKEY<span className="text-[#ccff00]">®</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mb-6">
              Independent streetwear label dedicated to heavyweight 260 GSM boxy
              fits, high-density 3D puff graphics, and zero fast-fashion corners.
              Shipped across India from Kerala.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/918078179244"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#151620] hover:bg-[#1c1e2b] border border-[#2b2d3e] text-xs font-mono text-zinc-300 transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp: +91 80781 79244</span>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-mono">
              <li><a href="#tees" className="hover:text-[#ccff00] transition-colors">Oversized Graphic Tees</a></li>
              <li><a href="#acid-wash" className="hover:text-[#ccff00] transition-colors">Acid Mineral Wash</a></li>
              <li><a href="#hoodies" className="hover:text-[#ccff00] transition-colors">380 GSM Heavy Hoodies</a></li>
              <li><a href="#drops" className="hover:text-[#ccff00] transition-colors">Drop 04 Bestsellers</a></li>
              <li><a href="#lookbook" className="hover:text-[#ccff00] transition-colors">Editorial Lookbook</a></li>
            </ul>
          </div>

          {/* Quality Specs */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Fabric Standards
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-mono">
              <li>260 GSM French Terry</li>
              <li>3D High-Density Puff</li>
              <li>1.25&quot; Anti-Sag Rib Collar</li>
              <li>Pre-Shrunk Bio-Washed</li>
              <li>100% Super-Combed Cotton</li>
            </ul>
          </div>

          {/* Client / Project Context */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              E-Commerce Showcase
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed mb-3">
              Crafted as a flagship high-converting D2C streetwear storefront with instant WhatsApp checkout and interactive sizing.
            </p>
            <span className="text-[11px] font-mono text-zinc-500">
              Designed & Built by <strong className="text-white">Vishnu S</strong>
            </span>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © 2026 MAD MONKEY STREETWEAR CLOTHING CO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-300 transition-colors">PRIVACY POLICY</a>
            <span>·</span>
            <a href="#" className="hover:text-zinc-300 transition-colors">TERMS OF SERVICE</a>
            <span>·</span>
            <a href="#" className="hover:text-zinc-300 transition-colors">SHIPPING & RETURNS</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
