"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MONKEY_CAP_PRODUCTS, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Tilt3DCard } from "@/components/ui/Tilt3DCard";

export function MonkeyCapCatalog() {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState<"all" | "big-graphics" | "low-key">("all");
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({
    "mc-01": "M",
    "mc-02": "M",
    "mc-03": "M",
  });
  const [addedEffect, setAddedEffect] = useState<string | null>(null);

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

    // Micro-interaction trigger
    setAddedEffect(product.id);
    setTimeout(() => {
      setAddedEffect(null);
    }, 1200);
  };

  return (
    <section id="catalog" className="w-full bg-[#fbf9f4] py-16 sm:py-24 border-b border-[#ece8df] relative">
      
      {/* Decorative Background Accents */}
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

        {/* 3 Product Cards Grid with 3D Tilt and Depth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((item) => {
            const currentSize = selectedSizes[item.id] || "M";
            const isJustAdded = addedEffect === item.id;

            return (
              <div key={item.id} className="flex flex-col group">
                
                {/* 3D Tilt Product Canvas */}
                <Tilt3DCard
                  maxTilt={14}
                  scale={1.03}
                  glare={true}
                  className="w-full mb-5"
                >
                  <div
                    className="relative aspect-square w-full rounded-2xl overflow-hidden border-2 border-neutral-900 shadow-lg preserve-3d"
                    style={{ backgroundColor: item.cardBgColor || "#f0eee6" }}
                  >
                    {/* Top Left Badge */}
                    {item.tag && (
                      <div className="absolute top-3.5 left-3.5 z-20">
                        <span className="px-2.5 py-1 rounded bg-black text-[10px] font-black uppercase tracking-wider text-[#dfff00] shadow-md border border-neutral-800">
                          {item.tag}
                        </span>
                      </div>
                    )}

                    {/* Product Shirt Graphic with 3D Pop Out */}
                    <div
                      className="relative w-full h-full p-2 flex items-center justify-center transition-transform duration-500 group-hover:scale-108"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      <Image
                        src={item.frontImage}
                        alt={item.name}
                        fill
                        className="object-cover object-center drop-shadow-xl"
                      />
                    </div>

                    {/* Bottom Right SKU Tag */}
                    <div className="absolute bottom-3 right-3 z-20">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-black/80 bg-white/75 backdrop-blur-sm px-2 py-0.5 rounded shadow-xs border border-black/10">
                        {item.sku}
                      </span>
                    </div>

                    {/* Floating Corner Spec Sticker on Hover */}
                    <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-white text-black font-mono font-bold text-[9px] uppercase px-2 py-0.5 rounded shadow-sm border border-neutral-400">
                        {item.gsm}
                      </span>
                    </div>

                  </div>
                </Tilt3DCard>

                {/* Product Info Row */}
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-lg font-black text-neutral-950 uppercase tracking-tight font-sans group-hover:text-[#eb3324] transition-colors">
                    {item.name}
                  </h3>
                  <div className="text-right">
                    <span className="text-base font-black text-neutral-950 font-mono">
                      ${item.priceUsd}
                    </span>
                    <span className="text-[11px] text-neutral-500 font-mono block">
                      (₹{item.price})
                    </span>
                  </div>
                </div>

                {/* Subtitle / Fit Spec */}
                <p className="text-xs text-neutral-600 font-sans mb-3">
                  {item.fit}
                </p>

                {/* Size Label */}
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 mb-1 block">
                  SIZE
                </span>

                {/* Action Controls: Size Dropdown + Add to Bag Button (Strictly rectangular rounded-lg, NO oval) */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="relative w-24">
                    <select
                      value={currentSize}
                      onChange={(e) => handleSizeChange(item.id, e.target.value)}
                      className="w-full appearance-none bg-white border border-[#dfdacd] text-neutral-900 font-bold text-xs uppercase px-3 py-2.5 rounded-lg focus:outline-none focus:border-black cursor-pointer shadow-xs"
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
                    className={`flex-1 py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all ${
                      isJustAdded
                        ? "bg-emerald-600 text-white"
                        : "bg-[#eb3324] hover:bg-[#d6281a] text-white hover:shadow-md"
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <span>✓ Added to bag</span>
                      </>
                    ) : (
                      <>
                        <span>Add to bag</span>
                        <span className="text-xs">↗</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Color Scheme Label */}
                <div className="text-[11px] text-neutral-500 font-mono flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-neutral-300"
                    style={{ backgroundColor: item.colors[0]?.hex || "#000" }}
                  />
                  <span>{item.colors[0]?.name}</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
