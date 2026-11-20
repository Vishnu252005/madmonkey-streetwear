"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { CloseIcon, PlusIcon, MinusIcon, WhatsAppIcon, TruckIcon, ArrowRightIcon } from "./icons";

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalItems,
    checkoutWhatsApp,
  } = useCart();

  if (!isOpen) return null;

  const freeShippingThreshold = 999;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const diff = freeShippingThreshold - subtotal;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#111219] border-l border-[#212332] shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="px-5 py-4 border-b border-[#212332] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white uppercase tracking-wider font-mono">
                Your Bag
              </span>
              <span className="px-2 py-0.5 rounded-md bg-[#ccff00]/10 border border-[#ccff00]/30 text-[#ccff00] font-mono text-xs font-bold">
                {totalItems} {totalItems === 1 ? "Item" : "Items"}
              </span>
            </div>
            <button
              type="button"
              onClick={closeCart}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Milestone Meter */}
          <div className="p-4 bg-[#161824] border-b border-[#212332]">
            <div className="flex items-center gap-2 text-xs font-mono mb-2">
              <TruckIcon className="w-4 h-4 text-[#ccff00]" />
              {diff > 0 ? (
                <span className="text-zinc-300">
                  Add <strong className="text-[#ccff00]">₹{diff}</strong> more for{" "}
                  <strong className="text-white">FREE Express Shipping</strong>
                </span>
              ) : (
                <span className="text-emerald-400 font-bold">
                  ✓ You&apos;ve unlocked FREE Express Shipping!
                </span>
              )}
            </div>
            <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#ccff00] to-emerald-400 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-4 text-zinc-600 font-black text-xl">
                  MM
                </div>
                <h4 className="text-base font-bold text-white mb-1">
                  Your bag is empty
                </h4>
                <p className="text-xs text-zinc-500 mb-6">
                  Check out Drop 04 for 260 GSM boxy graphic tees.
                </p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="px-6 py-2.5 rounded-xl bg-[#ccff00] text-black font-bold text-xs uppercase tracking-wider"
                >
                  Explore Drops
                </button>
              </div>
            ) : (
              items.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="p-3.5 rounded-xl bg-[#171823] border border-[#232636] flex gap-3.5"
                >
                  {/* Thumbnail */}
                  <div className="w-18 h-20 rounded-lg bg-black border border-zinc-800 flex items-center justify-center shrink-0 p-1">
                    <span className="text-[10px] font-mono text-[#ccff00] font-bold text-center">
                      {item.product.graphicTheme.split(" ")[0]}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-sm font-bold text-white line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeFromCart(idx)}
                          className="text-xs text-zinc-500 hover:text-red-400 transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mt-1">
                        <span>Size: <strong className="text-white">{item.size}</strong></span>
                        <span>·</span>
                        <span>{item.color}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-800/60">
                      <div className="flex items-center gap-1.5 bg-[#0e0f14] border border-zinc-800 px-2 py-1 rounded-lg">
                        <button
                          type="button"
                          onClick={() => updateQuantity(idx, -1)}
                          className="text-zinc-400 hover:text-white"
                        >
                          <MinusIcon className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono font-bold text-white px-2">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(idx, 1)}
                          className="text-zinc-400 hover:text-white"
                        >
                          <PlusIcon className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-black text-white font-mono">
                        ₹{item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#212332] bg-[#141520] space-y-3">
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal:</span>
                  <span className="text-white font-bold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Express Shipping:</span>
                  <span className={diff <= 0 ? "text-emerald-400 font-bold" : "text-white"}>
                    {diff <= 0 ? "FREE" : "₹79"}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-zinc-800 font-mono">
                  <span>Total:</span>
                  <span className="text-[#ccff00]">₹{diff <= 0 ? subtotal : subtotal + 79}</span>
                </div>
              </div>

              {/* Direct WhatsApp Checkout Button */}
              <button
                type="button"
                onClick={checkoutWhatsApp}
                className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)]"
              >
                <WhatsAppIcon className="w-4 h-4 text-black" />
                <span>Instant WhatsApp Checkout</span>
              </button>

              {/* Online Gateway Simulation */}
              <button
                type="button"
                onClick={() => alert("Checkout demo simulated! In production this triggers Razorpay/UPI gateway.")}
                className="w-full py-3 rounded-xl bg-[#1c1e2b] hover:bg-[#252738] border border-[#2d3044] text-zinc-200 font-semibold text-xs tracking-wider transition-all"
              >
                Pay Online (UPI / Card / NetBanking)
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-500 font-mono pt-1">
                <span>🔒 256-Bit SSL Encrypted</span>
                <span>·</span>
                <span>7-Day Hassle-Free Returns</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
