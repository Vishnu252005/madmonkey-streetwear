"use client";

import React from "react";
import { CartProvider } from "@/context/CartContext";
import { MonkeyCapNav } from "@/components/monkeycap/MonkeyCapNav";
import { MonkeyCapHero } from "@/components/monkeycap/MonkeyCapHero";
import { MonkeyCapMarquee } from "@/components/monkeycap/MonkeyCapMarquee";
import { MonkeyCapCatalog } from "@/components/monkeycap/MonkeyCapCatalog";
import { MonkeyCapSpecs } from "@/components/monkeycap/MonkeyCapSpecs";
import { MonkeyCapFitGuide } from "@/components/monkeycap/MonkeyCapFitGuide";
import { MonkeyCapStickers } from "@/components/monkeycap/MonkeyCapStickers";
import { MonkeyCapStory } from "@/components/monkeycap/MonkeyCapStory";
import { MonkeyCapCommunity } from "@/components/monkeycap/MonkeyCapCommunity";
import { MonkeyCapFAQ } from "@/components/monkeycap/MonkeyCapFAQ";
import { MonkeyCapNewsletter } from "@/components/monkeycap/MonkeyCapNewsletter";
import { MonkeyCapFooter } from "@/components/monkeycap/MonkeyCapFooter";
import { CartDrawer } from "@/components/CartDrawer";

export default function Home() {
  return (
    <CartProvider>
      <main className="min-h-screen bg-[#fbf9f4] text-neutral-900 font-sans selection:bg-[#ffcc00] selection:text-black">
        {/* Top Announcement Bar & Sticky Header */}
        <MonkeyCapNav />

        {/* Hero Section: "Monkey business." with Clean 3D Lifestyle Card */}
        <MonkeyCapHero />

        {/* Infinite Neon Lime Marquee Ticker */}
        <MonkeyCapMarquee />

        {/* Product Catalog: "The good stuff." with 3 Primary Graphic Tees */}
        <MonkeyCapCatalog />

        {/* The Anatomy of a Better Tee: 4-Column Bento Spec Grid */}
        <MonkeyCapSpecs />

        {/* Interactive Fit Finder & Blueprint Guide with Height Slider */}
        <MonkeyCapFitGuide />

        {/* Free Collectible 3D Holographic Sticker Pack Feature */}
        <MonkeyCapStickers />

        {/* Brand Story Manifesto: "Dress like you mean fun." in Royal Cobalt Blue */}
        <MonkeyCapStory />

        {/* Community Street Lookbook: "Seen in the wild." */}
        <MonkeyCapCommunity />

        {/* Frequently Asked Questions: Interactive Accordion */}
        <MonkeyCapFAQ />

        {/* Secret Drop Club Newsletter: "Join the troop." */}
        <MonkeyCapNewsletter />

        {/* Clean Ivory Footer */}
        <MonkeyCapFooter />

        {/* Slide-over Shopping Bag Drawer */}
        <CartDrawer />
      </main>
    </CartProvider>
  );
}
