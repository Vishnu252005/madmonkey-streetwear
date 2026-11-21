"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MONKEY_CAP_PRODUCTS, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export function MonkeyCapCatalog() {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState<"all" | "big-graphics" | "low-key">("all");
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({
    "mc-01": "M",
    "mc-02": "M",
    "mc-03": "M",
  });

  const filtered =
    filter === "all"
      ? MONKEY_CAP_PRODUCTS
      : MONKEY_CAP_PRODUCTS.filter((p) => p.category === filter);

  const handleSizeChange = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleAddToCart = (product: Product) => {
    const size = selectedSizes[product.id] || "M";
    const color = product.colors[0]?.name || "Default";
    addToCart(product, size, color);
  };

  return (
    <section id="catalog" className="w-full bg-[#fbf9f4] py-16 sm:py-24 border-b border-[#ece8df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#eb3324] block mb-2">
              PICK YOUR FAVORITE
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-neutral-950 tracking-tight font-sans">
              The good stuff<span className="text-[#eb3324]">.</span>
            </h2>
          </div>

          {/* Filter Tabs (Strictly rectangular rounded-lg, NO oval) */}
          <div className="flex items-center gap-2">
            {[
              { id: "all", label: "All tees" },
              { id: "big-graphics", label: "Big graphics" },
              { id: "low-key", label: "Low-key" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as typeof filter)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                  filter === tab.id
                    ? "bg-[#eb3324] border-[#eb3324] text-white shadow-sm"
                    : "bg-white border-[#dfdacd] text-neutral-700 hover:text-black hover:border-neutral-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((item) => {
            const currentSize = selectedSizes[item.id] || "M";

            return (
              <div key={item.id} className="flex flex-col group">
                
                {/* Visual Square with Vibrant Background Color */}
                <div
                  className="relative aspect-square w-full rounded-2xl overflow-hidden border border-[#ece8df] shadow-sm mb-5 transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ backgroundColor: item.cardBgColor || "#f0eee6" }}
                >
                  {/* Top Left Badge */}
                  {item.tag && (
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="px-2.5 py-1 rounded bg-black text-[10px] font-black uppercase tracking-wider text-[#dfff00]">
                        {item.tag}
                      </span>
                    </div>
                  )}

                  {/* Product Shirt Graphic */}
                  <div className="relative w-full h-full p-2 flex items-center justify-center">
                    <Image
                      src={item.frontImage}
                      alt={item.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Bottom Right SKU Tag */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-black/70 bg-white/60 backdrop-blur-sm px-1.5 py-0.5 rounded">
                      {item.sku}
                    </span>
                  </div>
                </div>

                {/* Product Info Row */}
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-lg font-black text-neutral-950 uppercase tracking-tight font-sans">
                    {item.name}
                  </h3>
                  <div className="text-right">
                    <span className="text-base font-black text-neutral-950 font-mono">
                      ${item.priceUsd}
                    </span>
                    <span className="text-[11px] text-neutral-400 font-mono block">
                      (₹{item.price})
                    </span>
                  </div>
                </div>

                {/* Subtitle / Fit Spec */}
                <p className="text-xs text-neutral-500 font-sans mb-3">
                  {item.fit}
                </p>

                {/* Size Label */}
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1 block">
                  SIZE
                </span>

                {/* Action Controls: Size Dropdown + Add to Bag Button (Strictly rectangular rounded-lg, NO oval) */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="relative w-24">
                    <select
                      value={currentSize}
                      onChange={(e) => handleSizeChange(item.id, e.target.value)}
                      className="w-full appearance-none bg-white border border-[#dfdacd] text-neutral-900 font-bold text-xs uppercase px-3 py-2.5 rounded-lg focus:outline-none focus:border-black cursor-pointer shadow-sm"
                    >
                      {item.sizes.map((s) => (
                        <option key={s} value={s}>
                          SIZE {s}
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-neutral-500 font-bold">
                      ⌵
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAddToCart(item)}
                    className="flex-1 py-2.5 px-4 rounded-lg bg-[#eb3324] hover:bg-[#d6281a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
                  >
                    <span>Add to bag</span>
                    <span className="text-xs">↗</span>
                  </button>
                </div>

                {/* Color Scheme Label */}
                <div className="text-[11px] text-neutral-500 font-mono">
                  {item.colors[0]?.name}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
