"use client";

import React, { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechSpecs } from "@/components/TechSpecs";
import { ProductCard } from "@/components/ProductCard";
import { Lookbook } from "@/components/Lookbook";
import { FitCalculatorModal } from "@/components/FitCalculatorModal";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { PRODUCTS } from "@/data/products";
import { FlameIcon, SlidersIcon } from "@/components/icons";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col font-sans">
        
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Anatomy of a Tee / Quality Specs */}
        <TechSpecs />

        {/* Product Catalog / Drop Section */}
        <section id="drops" className="py-20 bg-[#0c0d12] border-b border-[#1b1c28]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            
            {/* Section Header & Category Filters */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#ccff00] mb-2 font-bold uppercase tracking-wider">
                  <FlameIcon className="w-3.5 h-3.5" />
                  <span>DROP 04 ARCHIVE // SPRING-SUMMER 2026</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                  Available Drops.
                </h2>
                <p className="text-sm text-zinc-400 mt-2 font-mono">
                  Limited to 150 pieces per graphic. When it sells out, it does not restock.
                </p>
              </div>

              {/* Category Filter Buttons (Strictly rectangular rounded-xl / rounded-lg) */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: "all", label: "All Drops (6)" },
                  { id: "oversized-tees", label: "Oversized Tees" },
                  { id: "acid-wash", label: "Acid Wash" },
                  { id: "hoodies", label: "380 GSM Hoodies" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold border transition-all ${
                      activeCategory === cat.id
                        ? "bg-[#ccff00] text-black border-[#ccff00] shadow-[0_0_15px_rgba(204,255,0,0.25)]"
                        : "bg-[#141520] border-[#252838] text-zinc-400 hover:text-white hover:border-zinc-600"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Bottom Guarantee Banner */}
            <div className="mt-16 p-6 rounded-2xl bg-[#12131b] border border-[#232536] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h4 className="text-sm font-bold text-white uppercase font-mono">
                  Need Help Deciding on Your Oversized Fit?
                </h4>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Try our interactive Fit Finder or chat with us directly on WhatsApp for real human fit advice.
                </p>
              </div>
              <a
                href="https://wa.me/918078179244"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#181926] hover:bg-[#202234] border border-[#2f3246] text-xs font-mono font-bold text-[#ccff00] shrink-0 transition-colors"
              >
                Chat on WhatsApp →
              </a>
            </div>

          </div>
        </section>

        {/* Editorial Community Lookbook */}
        <Lookbook />

        {/* Footer */}
        <Footer />

        {/* Interactive Drawers & Modals */}
        <CartDrawer />
        <FitCalculatorModal />

      </div>
    </CartProvider>
  );
}
