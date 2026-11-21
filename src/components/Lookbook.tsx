"use client";

import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "./icons";

export function Lookbook() {
  const editorialShots = [
    {
      image: "/images/editorial/lookbook_1.jpg",
      title: "LOOK 01 // INDIRANAGAR ARCHIVE",
      location: "BLR · 12.9716° N",
      pieces: "Cyber Monkey 280 GSM Tee (XL) + Tactical Cargo Short",
      tag: "OVERSIZED BOXY",
      span: "md:col-span-2 md:row-span-2",
      height: "h-[500px]",
    },
    {
      image: "/images/editorial/lookbook_2.jpg",
      title: "LOOK 02 // TOKYO TUNER",
      location: "SHIBUYA · 35.6580° N",
      pieces: "Tokyo Garage Ape Tee (L) + Raw Selvedge Denim",
      tag: "VINTAGE WASH",
      span: "md:col-span-1 md:row-span-1",
      height: "h-[240px]",
    },
    {
      image: "/images/editorial/lookbook_3.jpg",
      title: "LOOK 03 // SYNDICATE FLEECE",
      location: "BANDRA · 19.0596° N",
      pieces: "Syndicate 420 GSM Boxy Hoodie (L) + Flared Sweats",
      tag: "WINTER GRAIL",
      span: "md:col-span-1 md:row-span-1",
      height: "h-[240px]",
    },
    {
      image: "/images/editorial/lookbook_4.jpg",
      title: "LOOK 04 // CORROSION GORILLA",
      location: "FORT KOCHI · 9.9656° N",
      pieces: "Acid Gorilla Mineral Tee (M) + Distressed Canvas",
      tag: "MINERAL WASH",
      span: "md:col-span-1 md:row-span-1",
      height: "h-[260px]",
    },
    {
      image: "/images/editorial/lookbook_5.jpg",
      title: "LOOK 05 // UNDERGROUND SKATE",
      location: "SOHO · 51.5136° N",
      pieces: "Reversible Boxy Skater Tee (L) + Washed Chinos",
      tag: "SKATE ARCHIVE",
      span: "md:col-span-2 md:row-span-1",
      height: "h-[260px]",
    },
  ];

  return (
    <section id="lookbook" className="py-24 bg-[#070709] border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2.5 uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>COLLECTION 04 STREET ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              The Lookbook.
            </h2>
          </div>
          <a
            href="#drops"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-neutral-300 hover:text-white uppercase tracking-wider transition-colors"
          >
            <span>Explore All Garments</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* High Fashion Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {editorialShots.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 group hover:border-neutral-700 transition-all ${item.span} ${item.height}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9] group-hover:brightness-100"
              />

              {/* Dark Gradient Overlay for Typography Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono tracking-wider font-bold text-neutral-200 border border-neutral-700 uppercase">
                  {item.tag}
                </span>
              </div>

              {/* Bottom Meta */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col justify-end">
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1">
                  <span className="text-amber-400 font-semibold">{item.location}</span>
                  <span>LOOK 0{idx + 1}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 font-mono mt-0.5 line-clamp-1">
                  {item.pieces}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
