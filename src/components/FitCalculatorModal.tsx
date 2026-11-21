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
    recommendedSize = fitPreference === "super-oversized" ? "L" : "M";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-2xl bg-neutral-900 border border-neutral-800 p-6 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center">
              <SlidersIcon className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Garment Fit Calculator
              </h3>
              <p className="text-xs text-neutral-400 font-mono">
                Engineered for 280 GSM Boxy Tailoring
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={closeFitModal}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Inputs */}
        <div className="space-y-5 my-5">
          {/* Height */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-2">
              <span className="text-neutral-400 uppercase">Your Height:</span>
              <span className="text-white font-bold">
                {heightFt}&apos;{heightIn}&quot; ({Math.round((heightFt * 12 + heightIn) * 2.54)} cm)
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 bg-neutral-950 border border-neutral-800 px-3 py-2 rounded-xl">
                <span className="text-xs font-mono text-neutral-400">Feet:</span>
                <input
                  type="range"
                  min="4"
                  max="6"
                  value={heightFt}
                  onChange={(e) => setHeightFt(Number(e.target.value))}
                  className="w-full accent-white"
                />
                <span className="text-xs font-mono font-bold text-white w-4">{heightFt}</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-950 border border-neutral-800 px-3 py-2 rounded-xl">
                <span className="text-xs font-mono text-neutral-400">Inches:</span>
                <input
                  type="range"
                  min="0"
                  max="11"
                  value={heightIn}
                  onChange={(e) => setHeightIn(Number(e.target.value))}
                  className="w-full accent-white"
                />
                <span className="text-xs font-mono font-bold text-white w-4">{heightIn}</span>
              </div>
            </div>
          </div>

          {/* Weight */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-2">
              <span className="text-neutral-400 uppercase">Your Weight:</span>
              <span className="text-white font-bold">{weightKg} KG ({Math.round(weightKg * 2.204)} LBS)</span>
            </div>
            <div className="bg-neutral-950 border border-neutral-800 px-3 py-2 rounded-xl flex items-center gap-3">
              <input
                type="range"
                min="45"
                max="120"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full accent-white"
              />
              <span className="text-xs font-mono font-bold text-white w-10 text-right">{weightKg}kg</span>
            </div>
          </div>

          {/* Fit Silhouette Preference */}
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase block mb-2">
              Preferred Silhouette Drape:
            </span>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "standard", label: "Clean / Subtle" },
                { id: "boxy", label: "Signature Boxy" },
                { id: "super-oversized", label: "Heavy Oversize" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setFitPreference(opt.id as any)}
                  className={`py-2 px-2 rounded-lg text-xs font-mono font-semibold border transition-all text-center ${
                    fitPreference === opt.id
                      ? "bg-white text-black border-white shadow-sm"
                      : "bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calculated Result Box */}
        <div className="p-4 rounded-xl bg-black border border-neutral-800 mb-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono text-neutral-400 uppercase">
              RECOMMENDED SPEC SIZE:
            </span>
            <span className="px-3 py-1 rounded-md bg-white text-black font-black text-sm font-mono">
              SIZE {recommendedSize}
            </span>
          </div>

          {/* Garment Dimensional Blueprint */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-neutral-800 text-center text-xs font-mono">
            <div className="p-2 rounded bg-neutral-900/60">
              <span className="text-neutral-500 block text-[10px]">CHEST</span>
              <strong className="text-white text-sm">{curr.chest}&quot;</strong>
            </div>
            <div className="p-2 rounded bg-neutral-900/60">
              <span className="text-neutral-500 block text-[10px]">LENGTH</span>
              <strong className="text-white text-sm">{curr.length}&quot;</strong>
            </div>
            <div className="p-2 rounded bg-neutral-900/60">
              <span className="text-neutral-500 block text-[10px]">SHOULDER</span>
              <strong className="text-white text-sm">{curr.shoulder}&quot;</strong>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          type="button"
          onClick={closeFitModal}
          className="w-full py-3.5 rounded-xl bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-wider transition-all font-mono shadow-sm active:scale-95"
        >
          Apply Size {recommendedSize} to Store
        </button>

      </div>
    </div>
  );
}
