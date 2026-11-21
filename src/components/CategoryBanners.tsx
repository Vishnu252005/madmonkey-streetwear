"use client";

import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "./icons";

interface CategoryBannersProps {
  onSelectCategory: (category: string) => void;
}

export function CategoryBanners({ onSelectCategory }: CategoryBannersProps) {
  const categories = [
    {
      id: "oversized-tees",
      title: "Oversized Tees",
      spec: "280 GSM FRENCH TERRY",
      tag: "DROP 04 ARCHIVE",
      image: "/images/editorial/hero_tshirt_model.jpg",
      count: "3 Silhouettes",
    },
    {
      id: "acid-wash",
      title: "Mineral Wash",
      spec: "ENZYME ACID DISTRESSED",
      tag: "ARTISANAL WASH",
      image: "/images/editorial/skater_tee.jpg",
      count: "2 Silhouettes",
    },
    {
      id: "hoodies",
      title: "Heavy Hoodies",
      spec: "420 GSM BRUSHED FLEECE",
      tag: "WINTER GRAIL",
      image: "/images/editorial/lookbook_3.jpg",
      count: "1 Silhouette",
    },
  ];

  return (
    <section id="categories" className="py-20 bg-[#070709] border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 block mb-1 font-semibold">
              // ATELIER CATEGORIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Curated Silhouettes.
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
            All Garments Milled In-House
          </span>
        </div>

        {/* 3 Tall Campaign Banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative h-[480px] sm:h-[540px] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-all cursor-pointer shadow-xl flex flex-col justify-between p-6 sm:p-7"
            >
              {/* Background Photo with Subtle Zoom on Hover */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover object-center filter brightness-[0.7] group-hover:brightness-[0.82] group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/30" />
              </div>

              {/* Top Meta */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-[10px] font-mono tracking-wider font-bold text-neutral-200 border border-neutral-700 uppercase">
                  {cat.tag}
                </span>
                <span className="text-[11px] font-mono text-neutral-400 font-semibold bg-black/60 px-2 py-0.5 rounded">
                  {cat.count}
                </span>
              </div>

              {/* Bottom Details & CTA */}
              <div className="relative z-10 mt-auto">
                <span className="text-[11px] font-mono text-amber-400 font-bold tracking-widest uppercase block mb-1.5">
                  {cat.spec}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4 group-hover:translate-x-1 transition-transform">
                  {cat.title}
                </h3>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 hover:bg-white text-black font-bold text-xs uppercase tracking-wider font-mono transition-all group-hover:bg-white shadow-md">
                  <span>Shop Silhouette</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
