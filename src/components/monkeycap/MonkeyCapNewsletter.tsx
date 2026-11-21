"use client";

import React, { useState } from "react";

export function MonkeyCapNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-[#fbf9f4] py-20 sm:py-24 border-b border-[#ece8df] select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-[#ffcc00] border-2 border-black shadow-2xl relative overflow-hidden">
          
          {/* Decorative Corner Watermark */}
          <div className="absolute -right-8 -bottom-10 text-9xl font-black text-black/10 pointer-events-none select-none font-mono">
            MC
          </div>

          <div className="max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 mb-3 bg-black text-[#dfff00] font-mono text-[10px] font-black uppercase px-3 py-1 rounded-md shadow-2xs">
              <span>⚡</span>
              <span>EARLY ACCESS DISPATCH</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-neutral-950 uppercase tracking-tight font-sans mb-3">
              Join the troop<span className="text-[#eb3324]">.</span>
            </h2>

            <p className="text-xs sm:text-sm text-neutral-800 font-sans leading-relaxed mb-6">
              Our 150-piece drops sell out quickly. Enter your email for a 15-minute head start before links go public on Instagram, plus a free hologram sticker pack with your first order.
            </p>

            {submitted ? (
              <div className="p-4 rounded-xl bg-black text-white font-mono text-xs font-bold flex items-center gap-2 animate-in zoom-in-95">
                <span className="text-emerald-400">✓</span>
                <span>You&apos;re in the troop! We&apos;ll ping you 15 mins before Drop 02 goes live.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="flex-1 px-4 py-3.5 rounded-lg bg-white border-2 border-black text-neutral-900 font-mono text-xs uppercase placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black shadow-inner"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-lg bg-[#eb3324] hover:bg-[#d6281a] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95"
                >
                  Get Early Access
                </button>
              </form>
            )}

            <span className="text-[10px] font-mono text-black/60 block mt-3">
              Zero spam. Only drop dispatches and secret archives. Unsubscribe anytime.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
