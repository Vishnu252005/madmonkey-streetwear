"use client";

import React from "react";
import Image from "next/image";

interface CategoryTilesProps {
  onSelectCategory: (cat: string) => void;
}

const TILES = [
  {
    label: "Heavyweight Tees",
    spec: "280 GSM FRENCH TERRY",
    category: "oversized-tees",
    image: "/images/editorial/hero_tshirt_model.jpg",
  },
  {
    label: "Mineral Wash",
    spec: "ENZYME ACID DISTRESSED",
    category: "acid-wash",
    image: "/images/editorial/skater_tee.jpg",
  },
  {
    label: "Heavy Hoodies",
    spec: "420 GSM BRUSHED FLEECE",
    category: "hoodies",
    image: "/images/editorial/lookbook_3.jpg",
  },
  {
    label: "Street Archive",
    spec: "SHIBUYA × MUMBAI ATELIER",
    category: "all",
    image: "/images/editorial/lookbook_1.jpg",
  },
];

export function CategoryTiles({ onSelectCategory }: CategoryTilesProps) {
  return (
    <section id="categories" className="w-full bg-black border-b border-neutral-900">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {TILES.map((tile) => (
          <div
            key={tile.label}
            onClick={() => onSelectCategory(tile.category)}
            className="group relative aspect-[3/4] overflow-hidden cursor-pointer select-none border-r border-b md:border-b-0 border-neutral-900"
          >
            {/* Background Image with Smooth Zoom */}
            <Image
              src={tile.image}
              alt={tile.label}
              fill
              className="object-cover object-center filter brightness-[0.72] group-hover:brightness-[0.88] transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20 group-hover:bg-black/20 transition-colors duration-500" />

            {/* Bottom Content (Represent Clo style) */}
            <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-end">
              <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-amber-400 mb-1">
                {tile.spec}
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white drop-shadow-md group-hover:translate-x-1 transition-transform">
                {tile.label}
              </h3>
              <span className="mt-3 text-[11px] font-mono font-semibold tracking-wider text-neutral-300 uppercase inline-flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                Shop Category →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
