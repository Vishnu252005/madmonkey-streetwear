"use client";

import React, { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { CategoryBanners } from "@/components/CategoryBanners";
import { AtelierBento } from "@/components/AtelierBento";
import { ProductCard } from "@/components/ProductCard";
import { Lookbook } from "@/components/Lookbook";
import { FitCalculatorModal } from "@/components/FitCalculatorModal";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { PRODUCTS } from "@/data/products";
import { WhatsAppIcon } from "@/components/icons";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const handleSelectCategory = (cat: string) => {
    setActiveCategory(cat);
    const dropsEl = document.getElementById("drops");
    if (dropsEl) {
      dropsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#050505] text-neutral-100 flex flex-col font-sans selection:bg-neutral-800 selection:text-white">
        
        {/* Minimalist Sticky Header */}
        <Navbar />

        {/* Cinematic Full-Bleed Campaign Hero */}
        <Hero />

        {/* Infinite Brand Running Tape */}
        <MarqueeBanner />

        {/* Represent Clo Style Category Banners */}
        <CategoryBanners onSelectCategory={handleSelectCategory} />

        {/* Product Catalog / Drop Section */}
        <section id="drops" className="py-24 bg-[#08080a] border-b border-neutral-900">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            
            {/* Header & Filter Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2 uppercase tracking-widest font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  <span>COLLECTION 04 ARCHIVE // LIMITED RUNS</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                  Available Drops.
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2 font-mono">
                  Strictly limited to 150 pieces per silhouette. Never restocked once sold out.
                </p>
              </div>

              {/* Category Filter Pills (Rectangular rounded radii, strictly NO oval) */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: "all", label: "All Garments (6)" },
                  { id: "oversized-tees", label: "Heavyweight Tees" },
                  { id: "acid-wash", label: "Mineral Washed" },
                  { id: "hoodies", label: "420 GSM Hoodies" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider border transition-all ${
                      activeCategory === cat.id
                        ? "bg-white text-black border-white shadow-sm"
                        : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Cards Grid with Represent Clo Style Quick Size Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Assistance Card */}
            <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div>
                <h4 className="text-base font-bold text-white tracking-tight uppercase font-mono">
                  Unsure About Your Oversized Fit?
                </h4>
                <p className="text-xs text-neutral-400 mt-1 max-w-xl font-sans">
                  Streetwear fits differently across builds. Check our interactive Fit Guide or chat directly with our design atelier on WhatsApp for custom sizing guidance.
                </p>
              </div>
              <a
                href="https://wa.me/918078179244?text=Hey%20Mad%20Monkey!%20Need%20sizing%20help%20for%20the%20heavyweight%20tees."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-700 text-white font-semibold text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all hover:border-emerald-500/50 whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span>Chat for Fit Advice</span>
              </a>
            </div>

          </div>
        </section>

        {/* 21st.dev Style Bento Grid: Garment Blueprint & Architecture */}
        <AtelierBento />

        {/* Editorial Community Lookbook */}
        <Lookbook />

        {/* Footer */}
        <Footer />

        {/* Interactive Fit Calculator Modal */}
        <FitCalculatorModal />

        {/* Slide-over Shopping Bag Drawer */}
        <CartDrawer />

      </div>
    </CartProvider>
  );
}
