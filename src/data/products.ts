export interface Product {
  id: string;
  name: string;
  sku: string;
  tag: string;
  tagType: "limited" | "restock" | "archive" | "new" | "bestseller";
  price: number;
  originalPrice: number;
  priceUsd: number;
  discount: string;
  gsm: string;
  fabric: string;
  fit: string;
  category: "all" | "big-graphics" | "low-key" | "oversized-tees" | "acid-wash" | "hoodies";
  frontImage: string;
  backImage?: string;
  cardBgColor?: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  description: string;
  specs: string[];
  stockRemaining: number;
  rating: number;
  reviewCount: number;
}

export const MONKEY_CAP_PRODUCTS: Product[] = [
  {
    id: "mc-01",
    name: "Monkey Business Tee",
    sku: "MC—01",
    tag: "BEST SELLER",
    tagType: "bestseller",
    price: 1499,
    originalPrice: 2199,
    priceUsd: 38,
    discount: "32% OFF",
    gsm: "280 GSM",
    fabric: "100% Super-Combed French Terry Cotton",
    fit: "Heavyweight · roomy fit",
    category: "big-graphics",
    frontImage: "/images/monkeycap/tee_black_orange.jpg",
    cardBgColor: "#a3ff00",
    colors: [{ name: "Black / Orange", hex: "#ff7700" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Signature oversized black tee with a vibrant hand-drawn smiling orange monkey face graphic. Heavyweight drape with reinforced Lycra collar.",
    specs: ["280 GSM French Terry", "Reinforced 1.25\" Lycra Rib", "Tactile Puff Screenprint", "Roomy Drop-Shoulder Cut"],
    stockRemaining: 12,
    rating: 4.98,
    reviewCount: 420,
  },
  {
    id: "mc-02",
    name: "Cap On, World Off",
    sku: "MC—02",
    tag: "NEW DROP",
    tagType: "new",
    price: 1499,
    originalPrice: 2199,
    priceUsd: 38,
    discount: "32% OFF",
    gsm: "280 GSM",
    fabric: "100% Raw Chalk Combed Cotton",
    fit: "Heavyweight · roomy fit",
    category: "big-graphics",
    frontImage: "/images/monkeycap/tee_cream_cap.jpg",
    cardBgColor: "#eb3324",
    colors: [{ name: "Natural / Cobalt", hex: "#1862ea" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Natural cream tee featuring the iconic sketch monkey sporting a dual-tone red & blue cap. Built for off-duty days and spontaneous adventures.",
    specs: ["280 GSM Natural Cotton", "Distressed Sketch Print", "Pre-Shrunk Bio-Wash", "Heavy Boxy Drape"],
    stockRemaining: 7,
    rating: 4.95,
    reviewCount: 312,
  },
  {
    id: "mc-03",
    name: "Little Legend Tee",
    sku: "MC—03",
    tag: "",
    tagType: "limited",
    price: 1349,
    originalPrice: 1999,
    priceUsd: 34,
    discount: "30% OFF",
    gsm: "240 GSM",
    fabric: "100% Ringspun Breathable Cotton",
    fit: "Soft cotton · easy fit",
    category: "low-key",
    frontImage: "/images/monkeycap/tee_cobalt_lime.jpg",
    cardBgColor: "#ffcc00",
    colors: [{ name: "Cobalt / Lime", hex: "#b4f400" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Vibrant royal cobalt blue tee featuring high-density neon-lime monkey cap micro-embroidery on the left chest. Minimalist front with big energy.",
    specs: ["240 GSM Ringspun Cotton", "High-Density Micro-Embroidery", "Silicone Soft Wash", "Relaxed Everyday Cut"],
    stockRemaining: 15,
    rating: 4.92,
    reviewCount: 245,
  },
];

export const PRODUCTS: Product[] = [
  ...MONKEY_CAP_PRODUCTS,
  {
    id: "mm-01",
    name: "Cyber Monkey // 280 GSM Heavyweight Tee",
    sku: "MM-SS26-041",
    tag: "DROP 04 BESTSELLER",
    tagType: "archive",
    price: 1499,
    originalPrice: 2199,
    priceUsd: 38,
    discount: "32% OFF",
    gsm: "280 GSM",
    fabric: "100% Super-Combed French Terry Cotton",
    fit: "Boxy Drop-Shoulder Heavy Drape",
    category: "oversized-tees",
    frontImage: "/images/products/tee_studio_black.jpg",
    backImage: "/images/editorial/hero_streetwear_model.jpg",
    colors: [
      { name: "Pitch Obsidian", hex: "#0d0e12" },
      { name: "Vintage Charcoal", hex: "#22242b" },
      { name: "Bone White", hex: "#e7e6e1" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Crafted from custom-milled 280 GSM heavy French Terry cotton. Engineered with exaggerated drop shoulders and a stiff boxy cut that maintains its silhouette without collapsing. Back features our high-density screenprint.",
    specs: [
      "280 GSM French Terry",
      "1.25\" Heavy Lycra Rib Collar",
      "Twin-Needle Reinforced Hems",
      "Pre-Shrunk Bio-Enzyme Washed",
    ],
    stockRemaining: 8,
    rating: 4.96,
    reviewCount: 384,
  },
  {
    id: "mm-02",
    name: "Tokyo Garage Ape // Raw Vintage Wash Tee",
    sku: "MM-SS26-042",
    tag: "LIMITED RUN · 150 UNITS",
    tagType: "limited",
    price: 1399,
    originalPrice: 1999,
    priceUsd: 36,
    discount: "30% OFF",
    gsm: "260 GSM",
    fabric: "100% Ringspun Compact Cotton",
    fit: "Relaxed Boxy Street Cut",
    category: "oversized-tees",
    frontImage: "/images/products/tokyo_tee_front.jpg",
    backImage: "/images/products/tokyo_tee_back.jpg",
    colors: [
      { name: "Raw Bone Cream", hex: "#e9e7df" },
      { name: "Washed Carbon", hex: "#1c1d22" },
    ],
    sizes: ["M", "L", "XL", "XXL"],
    description:
      "Inspired by underground Tokyo speed workshops and Shibuya alley culture. Screenprinted with distressed discharged ink that feels completely weightless on the skin.",
    specs: [
      "260 GSM Ringspun Cotton",
      "Zero-Feel Discharge Ink",
      "Relaxed Dropped Armholes",
      "Enzyme Soft-Wash Finish",
    ],
    stockRemaining: 5,
    rating: 4.91,
    reviewCount: 228,
  },
  {
    id: "mm-03",
    name: "Acid Gorilla // Mineral Washed Distressed Tee",
    sku: "MM-SS26-043",
    tag: "HAND-TREATED MINERAL",
    tagType: "archive",
    price: 1599,
    originalPrice: 2299,
    priceUsd: 42,
    discount: "30% OFF",
    gsm: "290 GSM",
    fabric: "Heavyweight Enzyme Mineral Washed Terry",
    fit: "Wide-Shoulder Skater Fit",
    category: "acid-wash",
    frontImage: "/images/products/acid_tee_front.jpg",
    backImage: "/images/products/acid_tee_back.jpg",
    colors: [
      { name: "Mineral Slate", hex: "#2b2e38" },
      { name: "Washed Faded Ash", hex: "#3b3e47" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Individually hand-treated through an artisanal mineral wash process, making every single garment one-of-one with natural sun-bleached highs and moody charcoal shadows.",
    specs: [
      "290 GSM Heavy Mineral Cotton",
      "1-of-1 Acid Wash Gradient",
      "Antiqued Ribbed Neckline",
      "Distressed Edge Detail",
    ],
    stockRemaining: 11,
    rating: 4.94,
    reviewCount: 196,
  },
  {
    id: "mm-04",
    name: "Syndicate Heavy Fleece // 420 GSM Boxy Hoodie",
    sku: "MM-FW26-081",
    tag: "WINTER GRAIL · HEAVYWEIGHT",
    tagType: "limited",
    price: 2799,
    originalPrice: 3899,
    priceUsd: 68,
    discount: "28% OFF",
    gsm: "420 GSM",
    fabric: "Ultra-Dense Brushed Cotton Fleece",
    fit: "Boxy Cropped Silhouette with Drop Shoulders",
    category: "hoodies",
    frontImage: "/images/products/hoodie_front.jpg",
    backImage: "/images/products/hoodie_back.jpg",
    colors: [
      { name: "Pitch Obsidian", hex: "#0b0c10" },
      { name: "Faded Smoke", hex: "#323540" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Built for extreme comfort and crisp boxy structure. Features a double-layer crossover hood with zero drawstrings for pure minimalist lines and custom hidden side-seam pockets.",
    specs: [
      "420 GSM Brushed Fleece",
      "Double-Lined Crossover Hood",
      "Zero-Drawstring Clean Silhouette",
      "Heavy Ribbed Waistband & Cuffs",
    ],
    stockRemaining: 6,
    rating: 4.98,
    reviewCount: 462,
  },
];
