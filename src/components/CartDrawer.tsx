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
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Click outside to close backdrop */}
      <div className="absolute inset-0" onClick={closeCart} />

      {/* Main Drawer Panel (Warm Ivory/White Theme matching Monkey Cap) */}
      <div className="relative w-full max-w-md h-full bg-[#fbf9f4] border-l border-[#ece8df] flex flex-col shadow-2xl z-10 text-neutral-900">
        
        {/* Header */}
        <div className="p-5 border-b border-[#ece8df] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <h3 className="text-base font-black text-neutral-950 uppercase tracking-tight font-sans">
              Shopping Bag
            </h3>
            <span className="px-2 py-0.5 rounded bg-[#ffcc00] border border-black text-[11px] font-mono font-black text-black">
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 rounded-lg text-neutral-500 hover:text-black hover:bg-neutral-100 transition-colors"
            title="Close"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Milestone Meter */}
        <div className="p-4 bg-amber-50/70 border-b border-amber-200/70">
          <div className="flex items-center gap-2 text-xs font-mono mb-2">
            <TruckIcon className="w-4 h-4 text-amber-700" />
            {diff > 0 ? (
              <span className="text-neutral-700">
                Add <strong className="text-black">₹{diff}</strong> more for{" "}
                <strong className="text-[#eb3324]">FREE Express Shipping</strong>
              </span>
            ) : (
              <span className="text-emerald-700 font-bold">
                ✓ You unlocked Free Express Shipping!
              </span>
            )}
          </div>
          <div className="w-full h-2 rounded bg-amber-200/60 overflow-hidden">
            <div
              className="h-full bg-[#eb3324] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3.5">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-2xl bg-[#ffcc00] border-2 border-black flex items-center justify-center mx-auto mb-4 text-black font-black text-xl shadow-md">
                MC
              </div>
              <h4 className="text-base font-black text-neutral-900 mb-1 uppercase font-sans">
                Your bag is empty
              </h4>
              <p className="text-xs text-neutral-500 mb-6 font-sans">
                Pick a tee from Drop 01 before it sells out.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="px-6 py-3 rounded-lg bg-[#eb3324] hover:bg-[#d6281a] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                Explore Drop 01
              </button>
            </div>
          ) : (
            items.map((item, idx) => (
              <div
                key={`${item.product.id}-${item.size}-${item.color}-${idx}`}
                className="flex gap-3.5 p-3.5 rounded-xl bg-white border border-[#ece8df] shadow-xs items-center group"
              >
                {/* Product Photo Thumbnail with Product's Specific Card Color */}
                <div
                  className="relative w-18 h-20 rounded-lg overflow-hidden border border-neutral-300 shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: item.product.cardBgColor || "#f0eee6" }}
                >
                  <Image
                    src={item.product.frontImage}
                    alt={item.product.name}
                    fill
                    className="object-cover p-1"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-black text-neutral-950 uppercase tracking-tight truncate font-sans">
                    {item.product.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1 text-[11px] font-mono text-neutral-500">
                    <span>
                      Size: <strong className="text-black">{item.size}</strong>
                    </span>
                    <span>·</span>
                    <span className="truncate">{item.color}</span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-1.5 font-mono">
                    <span className="text-sm font-black text-neutral-950">
                      ₹{item.product.price}
                    </span>
                    <span className="text-[11px] text-neutral-400 line-through">
                      ₹{item.product.originalPrice}
                    </span>
                  </div>
                </div>

                {/* Quantity Controls & Delete */}
                <div className="flex flex-col items-end justify-between gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => removeFromCart(idx)}
                    className="text-neutral-400 hover:text-red-600 p-1 transition-colors"
                    title="Remove item"
                  >
                    <TrashIcon className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-1.5 border border-[#dfdacd] bg-[#fbf9f4] rounded-lg px-2 py-0.5 text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => updateQuantity(idx, -1)}
                      className="text-neutral-600 hover:text-black font-bold px-1"
                    >
                      -
                    </button>
                    <span className="text-black font-bold w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(idx, 1)}
                      className="text-neutral-600 hover:text-black font-bold px-1"
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
          <div className="p-5 border-t border-[#ece8df] bg-white space-y-3 font-mono">
            <div className="flex items-center justify-between text-xs text-neutral-600">
              <span>SUBTOTAL:</span>
              <span className="text-sm font-bold text-neutral-950">₹{subtotal}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-neutral-600">
              <span>SHIPPING:</span>
              <span className="text-emerald-700 font-bold">
                {diff <= 0 ? "FREE" : "₹99"}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm font-black text-neutral-950 pt-2 border-t border-[#ece8df]">
              <span>TOTAL ESTIMATE:</span>
              <span className="text-lg">₹{subtotal + (diff <= 0 ? 0 : 99)}</span>
            </div>

            {/* Checkout Action CTA (Rectangular rounded-lg, strictly NO oval) */}
            <button
              type="button"
              onClick={checkoutWhatsApp}
              className="w-full mt-2 py-3.5 px-4 rounded-lg bg-[#eb3324] hover:bg-[#d6281a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md hover:shadow-lg"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Checkout via WhatsApp</span>
            </button>

            <p className="text-[10px] text-center text-neutral-500 pt-1 font-sans">
              Instant order confirmation · UPI, GPay & Cards supported
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
