export interface Product {
  id: string;
  name: string;
  sku: string;
  tag: string;
  tagVariant: "acid" | "flame" | "cobalt" | "muted";
  price: number;
  originalPrice: number;
  discount: string;
  gsm: string;
  fabric: string;
  fit: string;
  category: "all" | "oversized-tees" | "acid-wash" | "hoodies";
  colors: { name: string; hex: string; class: string }[];
  sizes: string[];
  description: string;
  graphicTheme: string;
  stockRemaining: number;
  rating: number;
  reviewCount: number;
  mockupBg: string;
  badgeText: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "mm-01",
    name: "Cyber Monkey // Heavyweight Tee",
    sku: "MM-SS26-041",
    tag: "DROP 04 BESTSELLER",
    tagVariant: "acid",
    price: 1299,
    originalPrice: 1899,
    discount: "31% OFF",
    gsm: "260 GSM",
    fabric: "100% Super-Combed French Terry Cotton",
    fit: "Boxy Drop-Shoulder Silhouette",
    category: "oversized-tees",
    colors: [
      { name: "Acid Charcoal", hex: "#1c1d24", class: "bg-[#1c1d24]" },
      { name: "Bone White", hex: "#e5e5e1", class: "bg-[#e5e5e1]" },
      { name: "Vintage Moss", hex: "#2a3328", class: "bg-[#2a3328]" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Engineered with a boxy, dropped-shoulder drape that holds its structure wash after wash. Back showcases our signature 5-layer 3D puff neon Cyber Ape with high-density Japanese typography.",
    graphicTheme: "CYBER APE PROTOCOL",
    stockRemaining: 8,
    rating: 4.95,
    reviewCount: 342,
    mockupBg: "from-zinc-900 via-neutral-950 to-zinc-900",
    badgeText: "260 GSM PUFF PRINT",
  },
  {
    id: "mm-02",
    name: "Tokyo Drift // Garage Ape Tee",
    sku: "MM-SS26-042",
    tag: "LIMITED EDITION · 150 PCS",
    tagVariant: "flame",
    price: 1199,
    originalPrice: 1699,
    discount: "29% OFF",
    gsm: "240 GSM",
    fabric: "100% Ringspun Compact Cotton",
    fit: "Relaxed Boxy Cut",
    category: "oversized-tees",
    colors: [
      { name: "Off-White", hex: "#efefe9", class: "bg-[#efefe9]" },
      { name: "Midnight Black", hex: "#111215", class: "bg-[#111215]" },
    ],
    sizes: ["M", "L", "XL", "XXL"],
    description:
      "Tribute to Midnight Club street racing and vintage Kanagawa wave art. Features distressed grease-stencil monkey mechanics on the chest and oversized turbo blueprint on the back.",
    graphicTheme: "TOKYO TUNER APE",
    stockRemaining: 5,
    rating: 4.88,
    reviewCount: 219,
    mockupBg: "from-stone-900 via-zinc-950 to-stone-900",
    badgeText: "SCREENPRINT + HD FOIL",
  },
  {
    id: "mm-03",
    name: "Acid Wash Gorilla // Distressed Tee",
    sku: "MM-SS26-043",
    tag: "MINERAL WASHED",
    tagVariant: "acid",
    price: 1399,
    originalPrice: 1999,
    discount: "30% OFF",
    gsm: "270 GSM",
    fabric: "Heavyweight Enzyme Mineral Washed Terry",
    fit: "Wide Boxy Skater Fit",
    category: "acid-wash",
    colors: [
      { name: "Washed Slate", hex: "#2b2e38", class: "bg-[#2b2e38]" },
      { name: "Faded Olive", hex: "#353b31", class: "bg-[#353b31]" },
      { name: "Rust Terracotta", hex: "#4a2d24", class: "bg-[#4a2d24]" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Individually hand-treated with enzyme acid wash for unique vintage distress. No two tees are identical. Features cracked-ink silver Gorilla icon with reinforced twin-needle hems.",
    graphicTheme: "RAW GORILLA CORROSION",
    stockRemaining: 12,
    rating: 4.92,
    reviewCount: 184,
    mockupBg: "from-slate-900 via-neutral-950 to-slate-900",
    badgeText: "HAND-TREATED ACID WASH",
  },
  {
    id: "mm-04",
    name: "Ape Club // Heavyweight Fleece Hoodie",
    sku: "MM-FW26-081",
    tag: "WINTER GRAIL",
    tagVariant: "cobalt",
    price: 2499,
    originalPrice: 3499,
    discount: "28% OFF",
    gsm: "380 GSM",
    fabric: "Ultra-Dense Brushed Cotton Fleece",
    fit: "Boxy Cropped Silhouette with Drop Shoulders",
    category: "hoodies",
    colors: [
      { name: "Pitch Obsidian", hex: "#0c0d11", class: "bg-[#0c0d11]" },
      { name: "Smoke Ash Grey", hex: "#383a45", class: "bg-[#383a45]" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "A heavyweight armor against chilly nights. Double-lined crossover hood (zero drawstrings for modern clean lines), kangaroo pocket with hidden stash compartment, and embossed back ape emblem.",
    graphicTheme: "MONKEY SYNDICATE",
    stockRemaining: 7,
    rating: 4.98,
    reviewCount: 421,
    mockupBg: "from-blue-950/40 via-neutral-950 to-zinc-900",
    badgeText: "380 GSM FLEECE",
  },
  {
    id: "mm-05",
    name: "Pixel Ape // Cyberpunk Boxy Tee",
    sku: "MM-SS26-044",
    tag: "NEW DROP",
    tagVariant: "acid",
    price: 1249,
    originalPrice: 1799,
    discount: "30% OFF",
    gsm: "260 GSM",
    fabric: "100% Compact Organic Combed Cotton",
    fit: "Drop-Shoulder Boxy Drape",
    category: "oversized-tees",
    colors: [
      { name: "Obsidian Black", hex: "#121316", class: "bg-[#121316]" },
      { name: "Neon Cyber Lime", hex: "#1a2e12", class: "bg-[#1a2e12]" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "16-bit arcade monkey iconography reimagined with 3D tactile flock print. Thick 1.25 inch Lycra ribbed collar that never sags over time.",
    graphicTheme: "8-BIT APE SYSTEM",
    stockRemaining: 14,
    rating: 4.89,
    reviewCount: 97,
    mockupBg: "from-zinc-900 via-neutral-950 to-neutral-900",
    badgeText: "TACTILE FLOCK PRINT",
  },
  {
    id: "mm-06",
    name: "Chaos Theory // Distressed Heavy Tee",
    sku: "MM-SS26-045",
    tag: "RESTOCKED TODAY",
    tagVariant: "flame",
    price: 1299,
    originalPrice: 1849,
    discount: "29% OFF",
    gsm: "260 GSM",
    fabric: "Bio-Washed French Terry Cotton",
    fit: "Wide Shoulder Street Fit",
    category: "acid-wash",
    colors: [
      { name: "Washed Sand", hex: "#8c8275", class: "bg-[#8c8275]" },
      { name: "Washed Carbon", hex: "#222329", class: "bg-[#222329]" },
    ],
    sizes: ["M", "L", "XL", "XXL"],
    description:
      "Graffiti-style spray monkey head with raw edge distressed hems. Hand-screenprinted with eco-friendly discharged ink for breathable, non-rubbery graphic feel.",
    graphicTheme: "CHAOS MONKEY REBELLION",
    stockRemaining: 3,
    rating: 4.96,
    reviewCount: 312,
    mockupBg: "from-zinc-900 via-stone-950 to-zinc-900",
    badgeText: "ZERO-FEEL DISCHARGE INK",
  },
];
