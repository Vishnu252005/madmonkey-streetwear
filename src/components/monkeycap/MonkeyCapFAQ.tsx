"use client";

import React, { useState } from "react";

export function MonkeyCapFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How oversized is the fit?",
      a: "Our tees are engineered with true drop-shoulder architecture, wide chest circumferences, and a slightly cropped waistline. If you enjoy authentic streetwear slouch, order your true size. If you prefer a trimmer standard fit, size down one step.",
    },
    {
      q: "Will the collar stretch out into a bacon neck?",
      a: "Never. We formulate our 1.25\" circular collar rib with a reinforced high-recovery spandex core. It stays flat, tight, and pristine across 50+ machine washes without curling or stretching.",
    },
    {
      q: "Are these really limited to 150 pieces?",
      a: "Yes. Every graphic drop is strictly capped at 150 units worldwide. Once the 150th piece ships, the physical screenprint screens are destroyed and retired into our permanent archive. We never restock retired drops.",
    },
    {
      q: "How fast is shipping & what if it doesn't fit?",
      a: "Orders dispatch within 24–48 hours via Blue Dart & DTDC express with 3-day delivery across India (and DHL express worldwide). We offer instant size swaps if you want to switch between S, M, L, or XL.",
    },
    {
      q: "What wash care do you recommend?",
      a: "Machine wash cold with like colors inside-out. Hang dry or tumble dry low. Do not iron directly on the tactile puff graphic to preserve its 3D rubber texture for years.",
    },
  ];

  return (
    <section className="w-full bg-[#fbf9f4] py-20 sm:py-28 border-b border-[#ece8df]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#eb3324] block mb-2">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-neutral-950 tracking-tight font-sans">
            Got questions? We got answers<span className="text-[#eb3324]">.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border-2 border-neutral-900 bg-white overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-sans font-black text-base sm:text-lg uppercase text-neutral-950 tracking-tight cursor-pointer hover:bg-neutral-50/80 transition-colors"
                >
                  <span>{item.q}</span>
                  <span
                    className={`w-7 h-7 rounded-lg bg-[#fbf9f4] border border-[#dfdacd] flex items-center justify-center font-mono font-bold text-sm shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-[#eb3324] text-white border-[#eb3324]" : "text-black"
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed border-t border-[#ece8df] animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
