"use client";

import React, { useState } from "react";
import { Product } from "@/data/products";
import { TShirtGraphic } from "./TShirtGraphic";
import { useCart } from "@/context/CartContext";
import { WhatsAppIcon, StarIcon } from "./icons";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] || product.sizes[0]);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor.name);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleWhatsApp = () => {
    const message = `Hey Mad Monkey! 🐒%0AI want to order:%0A*${product.name}*%0A• Size: ${selectedSize}%0A• Color: ${selectedColor.name}%0A• Price: ₹${product.price}%0APlease share checkout link.`;
    window.open(`https://wa.me/918078179244?text=${message}`, "_blank");
  };

  return (
    <div className="group relative flex flex-col rounded-2xl bg-[#111219] border border-[#20222f] hover:border-[#2f3244] transition-all duration-300 p-4 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.7)]">
      
      {/* Top Badge & SKU */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span
          className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-wider ${
            product.tagVariant === "acid"
              ? "bg-[#ccff00]/10 border border-[#ccff00]/30 text-[#ccff00]"
              : product.tagVariant === "flame"
              ? "bg-[#ff4d00]/10 border border-[#ff4d00]/30 text-[#ff4d00]"
              : "bg-blue-500/10 border border-blue-500/30 text-blue-400"
          }`}
        >
          {product.tag}
        </span>
        <span className="text-[11px] font-mono text-zinc-500">
          {product.gsm}
        </span>
      </div>

      {/* Visual T-Shirt Mockup */}
      <div className="relative rounded-xl bg-[#0b0c10] border border-[#1b1c26] overflow-hidden mb-4 group-hover:border-zinc-700/60 transition-colors">
        <TShirtGraphic
          colorHex={selectedColor.hex}
          theme={product.graphicTheme}
          badge={product.badgeText}
        />
      </div>

      {/* Colorway Toggle */}
      <div className="flex items-center gap-1.5 mb-3">
        {product.colors.map((c) => (
          <button
            key={c.name}
            type="button"
            onClick={() => setSelectedColor(c)}
            className={`w-6 h-6 rounded-md border flex items-center justify-center transition-all ${
              selectedColor.name === c.name
                ? "border-[#ccff00] scale-110 shadow-[0_0_8px_rgba(204,255,0,0.3)]"
                : "border-[#2b2d3d] hover:border-zinc-500"
            }`}
            title={c.name}
          >
            <span
              className="w-4 h-4 rounded-sm"
              style={{ backgroundColor: c.hex }}
            />
          </button>
        ))}
        <span className="text-[11px] font-mono text-zinc-400 ml-1">
          {selectedColor.name}
        </span>
      </div>

      {/* Title & Review Rating */}
      <div className="mb-2">
        <h3 className="text-base font-bold text-white group-hover:text-[#ccff00] transition-colors line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5 mt-1">
          <div className="flex items-center text-amber-400 text-xs">
            <StarIcon className="w-3.5 h-3.5" />
            <span className="font-mono font-semibold ml-1 text-zinc-300 text-[11px]">
              {product.rating}
            </span>
          </div>
          <span className="text-zinc-600 text-xs">·</span>
          <span className="text-[11px] text-zinc-400 font-mono">
            ({product.reviewCount})
          </span>
          <span className="text-zinc-600 text-xs">·</span>
          <span className="text-[11px] text-emerald-400 font-mono">
            {product.stockRemaining} left
          </span>
        </div>
      </div>

      {/* Pricing */}
      <div className="flex items-baseline gap-2 mb-3.5">
        <span className="text-xl font-black text-white font-mono">
          ₹{product.price}
        </span>
        <span className="text-xs font-mono text-zinc-500 line-through">
          ₹{product.originalPrice}
        </span>
        <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          {product.discount}
        </span>
      </div>

      {/* Size Buttons */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1.5">
          <span>SELECT SIZE:</span>
          <span className="text-zinc-500">{product.fit}</span>
        </div>
        <div className="flex items-center gap-1">
          {product.sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`flex-1 py-1.5 rounded-lg text-xs font-mono font-bold border transition-all ${
                selectedSize === size
                  ? "bg-[#ccff00] text-black border-[#ccff00]"
                  : "bg-[#161720] border-[#252736] text-zinc-400 hover:text-white hover:border-zinc-600"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-auto grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={handleAddToCart}
          className={`py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
            added
              ? "bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              : "bg-[#ccff00] hover:bg-[#b8e600] text-black shadow-[0_0_12px_rgba(204,255,0,0.2)]"
          }`}
        >
          {added ? "Added ✓" : "Add to Bag"}
        </button>

        <button
          type="button"
          onClick={handleWhatsApp}
          className="py-2.5 rounded-xl bg-[#171822] hover:bg-[#1f212f] border border-[#2b2e40] text-zinc-200 font-semibold text-xs tracking-wider flex items-center justify-center gap-1 transition-all hover:border-[#25D366]/40"
          title="Order this tee directly on WhatsApp"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
