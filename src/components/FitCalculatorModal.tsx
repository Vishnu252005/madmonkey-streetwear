"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { CloseIcon, SlidersIcon, CheckIcon } from "./icons";

export function FitCalculatorModal() {
  const { isFitModalOpen, closeFitModal } = useCart();
  const [heightFt, setHeightFt] = useState(5);
  const [heightIn, setHeightIn] = useState(10);
  const [weightKg, setWeightKg] = useState(72);
  const [fitPreference, setFitPreference] = useState<"standard" | "boxy" | "super-oversized">("boxy");

  if (!isFitModalOpen) return null;

  // Calculate recommended size
  const totalInches = heightFt * 12 + heightIn;
  let recommendedSize = "M";

  if (weightKg < 62 || totalInches < 67) {
    recommendedSize = fitPreference === "super-oversized" ? "M" : "S";
  } else if (weightKg <= 73 && totalInches <= 71) {
    recommendedSize = fitPreference === "super-oversized" ? "L" : fitPreference === "standard" ? "M" : "M";
  } else if (weightKg <= 84 && totalInches <= 73) {
    recommendedSize = fitPreference === "super-oversized" ? "XL" : "L";
  } else if (weightKg <= 94) {
    recommendedSize = fitPreference === "super-oversized" ? "XXL" : "XL";
  } else {
    recommendedSize = "XXL";
  }

  const measurements: Record<string, { chest: number; length: number; shoulder: number }> = {
    S: { chest: 44, length: 28, shoulder: 21 },
    M: { chest: 46, length: 29, shoulder: 22 },
    L: { chest: 48, length: 30, shoulder: 23 },
    XL: { chest: 50, length: 31, shoulder: 24 },
    XXL: { chest: 52, length: 32, shoulder: 25 },
  };

  const curr = measurements[recommendedSize];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#12131c] border border-[#26283b] p-6 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#212332]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center">
              <SlidersIcon className="w-4 h-4 text-[#ccff00]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Oversized Fit Finder
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                Engineered for 260 GSM Boxy Cut
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={closeFitModal}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Inputs */}
        <div className="space-y-5 my-5">
          {/* Height */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-2">
              <span className="text-zinc-400 uppercase">Your Height:</span>
              <span className="text-[#ccff00] font-bold">
                {heightFt}&apos;{heightIn}&quot; ({Math.round((heightFt * 12 + heightIn) * 2.54)} cm)
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 bg-[#181924] border border-[#27293a] px-3 py-2 rounded-xl">
                <span className="text-xs font-mono text-zinc-400">Feet:</span>
                <input
                  type="range"
                  min="4"
                  max="6"
                  value={heightFt}
                  onChange={(e) => setHeightFt(Number(e.target.value))}
                  className="w-full accent-[#ccff00]"
                />
                <span className="text-xs font-mono font-bold text-white w-4">{heightFt}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#181924] border border-[#27293a] px-3 py-2 rounded-xl">
                <span className="text-xs font-mono text-zinc-400">Inches:</span>
                <input
                  type="range"
                  min="0"
                  max="11"
                  value={heightIn}
                  onChange={(e) => setHeightIn(Number(e.target.value))}
                  className="w-full accent-[#ccff00]"
                />
                <span className="text-xs font-mono font-bold text-white w-4">{heightIn}</span>
              </div>
            </div>
          </div>

          {/* Weight */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-2">
              <span className="text-zinc-400 uppercase">Your Weight:</span>
              <span className="text-[#ccff00] font-bold">{weightKg} kg</span>
            </div>
            <div className="flex items-center gap-3 bg-[#181924] border border-[#27293a] px-4 py-2.5 rounded-xl">
              <input
                type="range"
                min="45"
                max="110"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full accent-[#ccff00]"
              />
              <span className="text-xs font-mono font-bold text-white min-w-10 text-right">
                {weightKg} kg
              </span>
            </div>
          </div>

          {/* Fit Preference */}
          <div>
            <div className="text-xs font-mono text-zinc-400 uppercase mb-2">
              Fit Preference:
            </div>
            <div className="grid grid-cols-3 gap-2">
              {(
                [
                  { id: "standard", label: "Clean Street" },
                  { id: "boxy", label: "Boxy Oversized" },
                  { id: "super-oversized", label: "Skater Baggy" },
                ] as const
              ).map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFitPreference(f.id)}
                  className={`py-2 px-1 text-center rounded-xl text-xs font-mono font-semibold border transition-all ${
                    fitPreference === f.id
                      ? "bg-[#ccff00] text-black border-[#ccff00]"
                      : "bg-[#181924] border-[#252838] text-zinc-300 hover:text-white"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Recommendation Output Card */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#171926] to-[#0e1017] border border-[#2c2f42] mb-5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono text-zinc-400 uppercase">
                Recommended Size:
              </span>
              <div className="text-3xl font-black text-[#ccff00] font-mono mt-0.5">
                {recommendedSize}
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
                Perfect Drop Fit
              </span>
              <p className="text-[11px] text-zinc-400 mt-1">
                260 GSM drape with no cling
              </p>
            </div>
          </div>

          {/* Dimension Details */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-zinc-800/60 text-center">
            <div className="bg-black/30 p-2 rounded-lg">
              <span className="text-[10px] text-zinc-400 font-mono block">CHEST</span>
              <strong className="text-xs text-white font-mono">{curr.chest}&quot;</strong>
            </div>
            <div className="bg-black/30 p-2 rounded-lg">
              <span className="text-[10px] text-zinc-400 font-mono block">LENGTH</span>
              <strong className="text-xs text-white font-mono">{curr.length}&quot;</strong>
            </div>
            <div className="bg-black/30 p-2 rounded-lg">
              <span className="text-[10px] text-zinc-400 font-mono block">SHOULDER</span>
              <strong className="text-xs text-white font-mono">{curr.shoulder}&quot;</strong>
            </div>
          </div>
        </div>

        {/* Close CTA */}
        <button
          type="button"
          onClick={closeFitModal}
          className="w-full py-3 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-xs uppercase tracking-wider transition-all"
        >
          Got It, Show My Size {recommendedSize}
        </button>
      </div>
    </div>
  );
}
