"use client";

import React from "react";
import Image from "next/image";

export function MonkeyCapCommunity() {
  const posts = [
    {
      city: "VENICE BEACH // CA",
      handle: "@marcus.skates",
      tee: "Monkey Business Tee (Size XL)",
      quote: "The 280 GSM weight is unreal. Doesn't flap around when carving bowls.",
      image: "/images/monkeycap/hero_skater.jpg",
    },
    {
      city: "SHIBUYA // TOKYO",
      handle: "@kenji_street",
      tee: "Cap On, World Off (Size L)",
      quote: "Collar has zero bacon neck even after two months of heavy wear.",
      image: "/images/editorial/skater_tee.jpg",
    },
    {
      city: "BANDRA WEST // MUMBAI",
      handle: "@arjun.creates",
      tee: "Little Legend Tee (Size M)",
      quote: "Cleanest minimal chest hit. Blue pop gets compliments constantly.",
      image: "/images/editorial/lookbook_1.jpg",
    },
    {
      city: "HONGDAE // SEOUL",
      handle: "@minji_drip",
      tee: "Everyday Uniform (Size L)",
      quote: "Slouchy drop shoulder drape sits perfectly over wide-leg denim.",
      image: "/images/editorial/lookbook_2.jpg",
    },
  ];

  return (
    <section className="w-full bg-[#fbf9f4] py-20 sm:py-28 border-b border-[#ece8df] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#eb3324] block mb-2">
              COMMUNITY ARCHIVE
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-neutral-950 tracking-tight font-sans">
              Seen in the wild<span className="text-[#eb3324]">.</span>
            </h2>
          </div>
          <div className="text-right">
            <span className="text-2xl font-black font-mono text-black">
              4.96 ★★★★★
            </span>
            <span className="text-xs font-mono text-neutral-500 block">
              1,420+ Verified Reviews Across India & Worldwide
            </span>
          </div>
        </div>

        {/* 4-Column Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-neutral-900 shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={post.image}
                alt={post.handle}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
              />

              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top City Stamp */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-white/90 backdrop-blur-sm text-black font-mono font-black text-[10px] uppercase px-2.5 py-1 rounded shadow-xs border border-black/10">
                  {post.city}
                </span>
              </div>

              {/* Bottom Post Info */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white z-10 flex flex-col justify-end">
                <span className="text-xs font-mono font-bold text-[#ffcc00] mb-1">
                  {post.handle}
                </span>
                <p className="text-xs font-sans text-neutral-200 line-clamp-2 leading-snug mb-2 italic">
                  &ldquo;{post.quote}&rdquo;
                </p>
                <span className="text-[10px] font-mono font-bold uppercase text-neutral-400">
                  Wearing: <strong className="text-white">{post.tee}</strong>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
