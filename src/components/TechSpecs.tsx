import React from "react";
import { ShieldCheckIcon, SparklesIcon, TruckIcon } from "./icons";

export function TechSpecs() {
  const specs = [
    {
      step: "01",
      title: "280 GSM French Terry",
      subtitle: "CUSTOM-MILLED DENSITY",
      description:
        "Knitted from 100% long-staple combed cotton yarns. Substantially heavier than fast-fashion tees to maintain a stiff, structured boxy drape that never sags.",
    },
    {
      step: "02",
      title: "1.25\" Lycra Neckband",
      subtitle: "ANTI-COLLAPSE ARCHITECTURE",
      description:
        "Engineered with a dense 1x1 rib knit infused with high-recovery Lycra core. Eliminates bacon neck and maintains a razor-sharp circular neckline through 50+ washes.",
    },
    {
      step: "03",
      title: "Twin-Needle Blind Stitching",
      subtitle: "STRUCTURAL LONGEVITY",
      description:
        "Industrial reinforced topstitching across the drop shoulders, armholes, and hem. Prevents torque twisting in the wash and secures heavy seams under tension.",
    },
    {
      step: "04",
      title: "Pre-Shrunk Bio-Enzyme Wash",
      subtitle: "ZERO-SHRINK GUARANTEE",
      description:
        "Every batch is submerged in natural enzyme baths to eliminate fabric fuzz and pre-shrink cotton fibers. The oversized fit you purchase is the exact fit you keep.",
    },
  ];

  return (
    <section id="specs" className="py-20 bg-black border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2.5 uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>GARMENT ARCHITECTURE & CRAFTSMANSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              The Spec Sheet.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md font-mono leading-relaxed">
            Engineered like industrial hardware. Every millimeter of our pattern is calibrated for structured volume and permanent drape.
          </p>
        </div>

        {/* Spec Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {specs.map((s, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between group hover:bg-neutral-900"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black text-neutral-600 font-mono group-hover:text-white transition-colors">
                    {s.step}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase px-2 py-0.5 rounded bg-neutral-800/80 border border-neutral-700/60">
                    {s.subtitle}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                  {s.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>LAB TESTED</span>
                <span className="text-neutral-300 font-bold uppercase tracking-wider">PASSED · 50+ WASHES</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
