import React from "react";
import { ShieldCheckIcon, SparklesIcon, TruckIcon, FlameIcon } from "./icons";

export function TechSpecs() {
  const specs = [
    {
      icon: <SparklesIcon className="w-5 h-5 text-[#ccff00]" />,
      title: "260 GSM French Terry",
      description: "Dense, heavyweight knit that refuses to cling, wrinkle, or lose its structured boxy silhouette.",
      tag: "FABRIC DENSITY",
    },
    {
      icon: <FlameIcon className="w-5 h-5 text-[#ff4d00]" />,
      title: "3D High-Density Puff Print",
      description: "Custom formulated tactile silicone & puff rubber. Won't crack or peel after 50+ wash cycles.",
      tag: "PRINT PRECISION",
    },
    {
      icon: <ShieldCheckIcon className="w-5 h-5 text-emerald-400 text-base" />,
      title: "Zero-Sag 1.25\" Ribbed Collar",
      description: "Engineered with reinforced Lycra core ribbing so your neckline stays crisp and flat forever.",
      tag: "COLLAR ARCHITECTURE",
    },
    {
      icon: <TruckIcon className="w-5 h-5 text-blue-400" />,
      title: "Pre-Shrunk & Bio-Washed",
      description: "Enzyme bio-washed to strip fuzz and eliminate shrinkage before your tee even leaves our facility.",
      tag: "PRE-SHRUNK GUARANTEE",
    },
  ];

  return (
    <section className="py-16 bg-[#0c0d13] border-b border-[#1b1c28]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#ccff00] mb-2 uppercase tracking-wider font-bold">
              <span>// ENGINEERING STREETWEAR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Anatomy of a Mad Monkey Tee.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-mono">
            Every stitch, seam, and print layer is built to outlast ordinary fast-fashion blanks.
          </p>
        </div>

        {/* Spec Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {specs.map((s, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#12131b] border border-[#20222f] hover:border-[#2f3246] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#171924] border border-[#26283b] flex items-center justify-center">
                    {s.icon}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider">
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-800/40 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>SPEC-VERIFIED</span>
                <span className="text-emerald-400 font-bold">100% OK</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
