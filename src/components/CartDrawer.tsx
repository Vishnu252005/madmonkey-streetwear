"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { CloseIcon, TrashIcon, WhatsAppIcon, TruckIcon } from "./icons";

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    updateQuantity,
    removeFromCart,
    subtotal,
    totalItems,
    checkoutWhatsApp,
  } = useCart();

  if (!isOpen) return null;

  const freeShippingThreshold = 999;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const diff = freeShippingThreshold - subtotal;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md h-full bg-neutral-950 border-l border-neutral-800 flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="p-5 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-white uppercase tracking-tight">
              Shopping Bag
            </h3>
            <span className="px-2 py-0.5 rounded bg-neutral-800 text-[11px] font-mono font-bold text-neutral-300">
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Milestone Meter */}
        <div className="p-4 bg-neutral-900/60 border-b border-neutral-800">
          <div className="flex items-center gap-2 text-xs font-mono mb-2">
            <TruckIcon className="w-4 h-4 text-white" />
            {diff > 0 ? (
              <span className="text-neutral-300">
                Add <strong className="text-white">₹{diff}</strong> more for{" "}
                <strong className="text-white">FREE Express Shipping</strong>
              </span>
            ) : (
              <span className="text-emerald-400 font-bold">
                ✓ You&apos;ve unlocked Complimentary Shipping!
              </span>
            )}
          </div>
          <div className="w-full h-1.5 rounded bg-neutral-800 overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto mb-4 text-neutral-600 font-black text-xl">
                MM
              </div>
              <h4 className="text-base font-bold text-white mb-1">
                Your bag is empty
              </h4>
              <p className="text-xs text-neutral-500 mb-6 font-mono">
                Explore Collection 04 for 280 GSM heavyweight boxy silhouettes.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="px-6 py-2.5 rounded-lg bg-white text-black font-bold text-xs uppercase tracking-wider font-mono"
              >
                Explore Drops
              </button>
            </div>
          ) : (
            items.map((item, idx) => (
              <div
                key={`${item.product.id}-${item.size}-${item.color}-${idx}`}
                className="flex gap-3.5 p-3 rounded-xl bg-neutral-900/70 border border-neutral-800/80 items-center"
              >
                {/* Product Photo Thumbnail */}
                <div className="relative w-16 h-20 rounded-lg overflow-hidden bg-neutral-950 border border-neutral-800 shrink-0">
                  <Image
                    src={item.product.frontImage}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-white line-clamp-1">
                    {item.product.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1 text-[11px] font-mono text-neutral-400">
                    <span>Size: <strong className="text-white">{item.size}</strong></span>
                    <span>·</span>
                    <span className="line-clamp-1">{item.color}</span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-1.5 font-mono">
                    <span className="text-xs font-bold text-white">
                      ₹{item.product.price}
                    </span>
                    <span className="text-[10px] text-neutral-500 line-through">
                      ₹{item.product.originalPrice}
                    </span>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-col items-end justify-between gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => removeFromCart(idx)}
                    className="text-neutral-500 hover:text-rose-400 p-1"
                    title="Remove item"
                  >
                    <TrashIcon className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-1.5 border border-neutral-800 bg-neutral-950 rounded-md px-1.5 py-0.5 text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => updateQuantity(idx, -1)}
                      className="text-neutral-400 hover:text-white px-1"
                    >
                      -
                    </button>
                    <span className="text-white font-bold w-3 text-center">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(idx, 1)}
                      className="text-neutral-400 hover:text-white px-1"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {items.length > 0 && (
          <div className="p-5 border-t border-neutral-800 bg-neutral-900/80 space-y-3 font-mono">
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span>SUBTOTAL:</span>
              <span className="text-sm font-bold text-white">₹{subtotal}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span>SHIPPING:</span>
              <span className="text-emerald-400 font-bold">
                {diff <= 0 ? "FREE" : "₹99"}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm font-bold text-white pt-2 border-t border-neutral-800">
              <span>TOTAL ESTIMATE:</span>
              <span className="text-lg">₹{subtotal + (diff <= 0 ? 0 : 99)}</span>
            </div>

            {/* Instant WhatsApp Order CTA (Rectangular rounded radii, strictly NO oval) */}
            <button
              type="button"
              onClick={checkoutWhatsApp}
              className="w-full mt-2 py-3.5 px-4 rounded-xl bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
              <span>Checkout via WhatsApp</span>
            </button>

            <p className="text-[10px] text-center text-neutral-500 pt-1 font-mono">
              Direct checkout with our atelier team · UPI & Cards accepted
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
