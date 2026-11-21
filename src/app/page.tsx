"use client";

import React from "react";
import { CartProvider } from "@/context/CartContext";
import { MonkeyCapNav } from "@/components/monkeycap/MonkeyCapNav";
import { MonkeyCapHero } from "@/components/monkeycap/MonkeyCapHero";
import { MonkeyCapMarquee } from "@/components/monkeycap/MonkeyCapMarquee";
import { MonkeyCapCatalog } from "@/components/monkeycap/MonkeyCapCatalog";
import { MonkeyCapStory } from "@/components/monkeycap/MonkeyCapStory";
import { MonkeyCapFooter } from "@/components/monkeycap/MonkeyCapFooter";
import { CartDrawer } from "@/components/CartDrawer";

export default function Home() {
  return (
    <CartProvider>
      <main className="min-h-screen bg-[#fbf9f4] text-neutral-900 font-sans selection:bg-[#ffcc00] selection:text-black">
        {/* Top Announcement Bar & Sticky Header */}
        <MonkeyCapNav />

        {/* Hero Section: "Monkey business." with Lifestyle Skater Shot */}
        <MonkeyCapHero />

        {/* Infinite Neon Lime Marquee Ticker */}
        <MonkeyCapMarquee />

        {/* Product Catalog: "The good stuff." with 3 Primary Graphic Tees */}
        <MonkeyCapCatalog />

        {/* Brand Story Manifesto: "Dress like you mean fun." in Cobalt Blue */}
        <MonkeyCapStory />

        {/* Clean Footer */}
        <MonkeyCapFooter />

        {/* Slide-over Shopping Bag Drawer */}
        <CartDrawer />
      </main>
    </CartProvider>
  );
}
