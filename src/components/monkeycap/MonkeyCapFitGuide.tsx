"use client";

import React, { useState } from "react";

export function MonkeyCapFitGuide() {
  const [selectedFit, setSelectedFit] = useState<"oversized" | "standard">("oversized");
  const [userHeight, setUserHeight] = useState<number>(175); // cm

  const getRecommendedSize = (h: number) => {
    if (h < 165) return "S";
    if (h < 174) return "M";
    if (h < 182) return "L";
    if (h < 190) return "XL";
    return "XXL";
  };

  const currentSize = getRecommendedSize(userHeight);

  const measurements: Record<string, { chest: string; length: string; shoulder: string; sleeve: string }> = {
    S: { chest: "42 in", length: "27.5 in", shoulder: "21.5 in", sleeve: "9.0 in" },
    M: { chest: "45 in", length: "28.5 in", shoulder: "22.5 in", sleeve: "9.5 in" },
    L: { chest: "48 in", length: "29.5 in", shoulder: "23.5 in", sleeve: "10.0 in" },
    XL: { chest: "51 in", length: "30.5 in", shoulder: "24.5 in", sleeve: "10.5 in" },
    XXL: { chest: "54 in", length: "31.5 in", shoulder: "25.5 in", sleeve: "11.0 in" },
  };

  const currentMeasure = measurements[currentSize];

  return (
    <section className="w-full bg-[#fbf9f4] py-20 sm:py-28 border-b border-[#ece8df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Fit Calculator */}
          <div className="lg:col-span-6">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#eb3324] block mb-2">
              INTERACTIVE FIT FINDER
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-neutral-950 tracking-tight font-sans mb-4">
              Never guess your size again<span className="text-[#eb3324]">.</span>
            </h2>
            <p className="text-sm text-neutral-600 font-sans mb-8 leading-relaxed">
              Streetwear silhouettes fit much wider and boxier than standard department store tees. Drag the height slider below to instantly calculate your tailored Monkey Cap drape.
            </p>

            {/* Height Slider */}
            <div className="p-6 rounded-2xl bg-white border-2 border-neutral-900 shadow-md mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase text-neutral-600">
                  YOUR HEIGHT
                </span>
                <span className="text-xl font-black font-mono text-black">
                  {userHeight} cm ({Math.floor(userHeight / 30.48)}&apos;{Math.round((userHeight % 30.48) / 2.54)}&quot;)
                </span>
              </div>

              <input
                type="range"
                min="155"
                max="200"
                value={userHeight}
                onChange={(e) => setUserHeight(Number(e.target.value))}
                className="w-full h-2.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#eb3324]"
              />

              <div className="flex justify-between text-[10px] font-mono text-neutral-400 mt-2">
                <span>155 cm (5&apos;1&quot;)</span>
                <span>175 cm (5&apos;9&quot;)</span>
                <span>200 cm (6&apos;7&quot;)</span>
              </div>
            </div>

            {/* Recommender Result Box */}
            <div className="p-6 rounded-2xl bg-[#ffcc00] border-2 border-black shadow-lg flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono font-black uppercase tracking-wider text-black block mb-0.5">
                  RECOMMENDED SILHOUETTE
                </span>
                <h4 className="text-2xl font-black uppercase text-black font-sans">
                  Size {currentSize} — Relaxed Boxy
                </h4>
                <p className="text-xs text-black/80 font-sans mt-0.5">
                  Calibrated drop shoulder with clean cropped hem above waistline.
                </p>
              </div>
              <div className="w-14 h-14 rounded-xl bg-black text-white flex items-center justify-center font-black text-xl font-mono shrink-0 shadow-md">
                {currentSize}
              </div>
            </div>

          </div>

          {/* Right Column: Garment Measurement Diagram */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-2xl bg-white border-2 border-neutral-900 shadow-xl">
              <div className="flex items-center justify-between pb-6 border-b border-[#ece8df] mb-6">
                <div>
                  <h4 className="text-base font-black uppercase text-neutral-950 font-sans">
                    Garment Blueprint Spec
                  </h4>
                  <span className="text-xs font-mono text-neutral-500">
                    Precision measurements for Size {currentSize}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#fbf9f4] p-1 rounded-lg border border-[#dfdacd]">
                  <button
                    type="button"
                    onClick={() => setSelectedFit("oversized")}
                    className={`px-3 py-1.5 rounded text-[11px] font-mono font-bold uppercase transition-all ${
                      selectedFit === "oversized"
                        ? "bg-[#eb3324] text-white shadow-2xs"
                        : "text-neutral-600 hover:text-black"
                    }`}
                  >
                    Oversized
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedFit("standard")}
                    className={`px-3 py-1.5 rounded text-[11px] font-mono font-bold uppercase transition-all ${
                      selectedFit === "standard"
                        ? "bg-black text-white shadow-2xs"
                        : "text-neutral-600 hover:text-black"
                    }`}
                  >
                    Size Down
                  </button>
                </div>
              </div>

              {/* 4 Architectural Spec Points */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#fbf9f4] border border-[#ece8df]">
                  <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase block mb-1">
                    CHEST CIRCUMFERENCE
                  </span>
                  <span className="text-2xl font-black font-mono text-neutral-950">
                    {currentMeasure.chest}
                  </span>
                  <p className="text-[11px] text-neutral-500 font-sans mt-1">
                    Wide, relaxed box cut that drapes without hugging.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#fbf9f4] border border-[#ece8df]">
                  <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase block mb-1">
                    GARMENT LENGTH
                  </span>
                  <span className="text-2xl font-black font-mono text-neutral-950">
                    {currentMeasure.length}
                  </span>
                  <p className="text-[11px] text-neutral-500 font-sans mt-1">
                    Slightly cropped to prevent bunching around hips.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#fbf9f4] border border-[#ece8df]">
                  <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase block mb-1">
                    SHOULDER DROP
                  </span>
                  <span className="text-2xl font-black font-mono text-neutral-950">
                    {currentMeasure.shoulder}
                  </span>
                  <p className="text-[11px] text-neutral-500 font-sans mt-1">
                    Exaggerated drop shoulder seams for slouchy drape.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#fbf9f4] border border-[#ece8df]">
                  <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase block mb-1">
                    SLEEVE LENGTH
                  </span>
                  <span className="text-2xl font-black font-mono text-neutral-950">
                    {currentMeasure.sleeve}
                  </span>
                  <p className="text-[11px] text-neutral-500 font-sans mt-1">
                    Elbow-skimming sleeves with reinforced double stitch.
                  </p>
                </div>
              </div>

              {/* Atelier Note */}
              <div className="mt-6 pt-4 border-t border-[#ece8df] text-xs font-mono text-neutral-500 flex items-center gap-2">
                <span className="text-[#eb3324] font-bold">✱ PRO TIP:</span>
                <span>Order your regular size for intended streetwear fit.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
