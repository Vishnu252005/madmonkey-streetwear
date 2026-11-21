"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { WhatsAppIcon, StarIcon, CheckIcon } from "./icons";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] || product.sizes[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleSizeClick = (size: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedSize(size);
    addToCart(product, size, selectedColor.name);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor.name);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Hey Mad Monkey! 🐒%0AI want to order:%0A*${product.name}*%0A• Size: ${selectedSize}%0A• Color: ${selectedColor.name}%0A• Price: ₹${product.price}%0APlease share checkout link.`;
    window.open(`https://wa.me/918078179244?text=${message}`, "_blank");
  };

  return (
    <div
      className="group relative flex flex-col rounded-2xl bg-neutral-900/60 border border-neutral-800/90 hover:border-neutral-700 transition-all duration-300 p-4 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Metadata */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-wider bg-neutral-800 text-neutral-300 border border-neutral-700 uppercase">
          {product.tag}
        </span>
        <span className="text-[11px] font-mono font-bold text-neutral-400">
          {product.gsm}
        </span>
      </div>

      {/* Real Streetwear Photography Container with Hover Cross-Fade */}
      <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 mb-4 cursor-pointer">
        {/* Front Shot */}
        <Image
          src={product.frontImage}
          alt={product.name}
          fill
          className={`object-cover object-center transition-all duration-700 group-hover:scale-105 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Back / On-Model Shot (Cross-fades on hover) */}
        <Image
          src={product.backImage}
          alt={`${product.name} alternate view`}
          fill
          className={`object-cover object-center transition-all duration-700 group-hover:scale-105 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Angle Pill Indicator */}
        <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-[9px] font-mono tracking-wider font-bold text-neutral-300 border border-neutral-700">
          {isHovered ? "ON MODEL" : "STUDIO FLAT"}
        </div>

        {/* Low Stock Warning Badge */}
        {product.stockRemaining <= 6 && (
          <div className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded bg-amber-500/90 text-black text-[10px] font-mono font-bold">
            ONLY {product.stockRemaining} LEFT
          </div>
        )}

        {/* 21st.dev Style Quick-Add Size Bar (Slides up on card hover) */}
        <div
          className={`absolute bottom-3 left-3 right-3 z-20 p-2 rounded-xl bg-black/90 backdrop-blur-md border border-neutral-700 transition-all duration-300 ${
            isHovered
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-1.5 px-1">
            <span>QUICK ADD SIZE:</span>
            <span className="text-white font-bold">{selectedSize}</span>
          </div>
          <div className="grid grid-cols-5 gap-1">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={(e) => handleSizeClick(s, e)}
                className={`py-1 rounded-md text-[11px] font-mono font-bold border transition-all ${
                  selectedSize === s
                    ? "bg-white text-black border-white"
                    : "bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Title & Details */}
      <div className="mb-2">
        <h3 className="text-base font-bold text-white tracking-tight line-clamp-1 group-hover:text-neutral-200 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-neutral-400 font-mono mt-0.5 line-clamp-1">
          {product.fit}
        </p>

        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex items-center text-amber-400 text-xs">
            <StarIcon className="w-3.5 h-3.5" />
            <span className="font-mono font-semibold ml-1 text-white text-[11px]">
              {product.rating}
            </span>
          </div>
          <span className="text-neutral-700 text-xs">·</span>
          <span className="text-[11px] text-neutral-400 font-mono">
            ({product.reviewCount} reviews)
          </span>
        </div>
      </div>

      {/* Pricing */}
      <div className="flex items-baseline gap-2 mt-1 mb-3">
        <span className="text-lg font-black text-white font-mono">
          ₹{product.price}
        </span>
        <span className="text-xs font-mono text-neutral-500 line-through">
          ₹{product.originalPrice}
        </span>
        <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
          {product.discount}
        </span>
      </div>

      {/* Color Swatch Dots */}
      <div className="flex items-center gap-1.5 mb-4">
        {product.colors.map((c) => (
          <button
            key={c.name}
            type="button"
            onClick={() => setSelectedColor(c)}
            className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
              selectedColor.name === c.name
                ? "border-white scale-110 shadow-sm"
                : "border-neutral-700 hover:border-neutral-500"
            }`}
            title={c.name}
          >
            <span
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: c.hex }}
            />
          </button>
        ))}
        <span className="text-[10px] font-mono text-neutral-400 ml-1.5">
          {selectedColor.name}
        </span>
      </div>

      {/* Action Buttons (Strictly rectangular rounded radii) */}
      <div className="grid grid-cols-2 gap-2 mt-auto">
        <button
          type="button"
          onClick={handleAddToCart}
          className={`py-2.5 px-3 rounded-lg text-xs font-bold font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 active:scale-95 ${
            added
              ? "bg-emerald-500 text-black"
              : "bg-white hover:bg-neutral-200 text-black shadow-sm"
          }`}
        >
          {added ? (
            <>
              <CheckIcon className="w-3.5 h-3.5" />
              <span>Added</span>
            </>
          ) : (
            <span>Add to Bag</span>
          )}
        </button>

        <button
          type="button"
          onClick={handleWhatsApp}
          className="py-2.5 px-3 rounded-lg text-xs font-semibold font-mono uppercase tracking-wider bg-neutral-950 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 transition-all flex items-center justify-center gap-1.5 hover:border-emerald-500/50"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
          <span>WhatsApp</span>
        </button>
      </div>

    </div>
  );
}
