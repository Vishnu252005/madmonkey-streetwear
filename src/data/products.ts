export interface Product {
  id: string;
  name: string;
  sku: string;
  tag: string;
  tagType: "limited" | "restock" | "archive" | "new";
  price: number;
  originalPrice: number;
  discount: string;
  gsm: string;
  fabric: string;
  fit: string;
  category: "all" | "oversized-tees" | "acid-wash" | "hoodies";
  frontImage: string;
  backImage: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  description: string;
  specs: string[];
  stockRemaining: number;
  rating: number;
  reviewCount: number;
}

export const PRODUCTS: Product[] = [
  {
    id: "mm-01",
    name: "Cyber Monkey // 280 GSM Heavyweight Tee",
    sku: "MM-SS26-041",
    tag: "DROP 04 BESTSELLER",
    tagType: "archive",
    price: 1499,
    originalPrice: 2199,
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
  {
    id: "mm-05",
    name: "Reversible Underground // Boxy Graphic Tee",
    sku: "MM-SS26-044",
    tag: "NEW DROP",
    tagType: "new",
    price: 1449,
    originalPrice: 2099,
    discount: "31% OFF",
    gsm: "270 GSM",
    fabric: "Compact Organic Combed Cotton",
    fit: "Drop-Shoulder Boxy Drape",
    category: "oversized-tees",
    frontImage: "/images/products/tee_studio_white.jpg",
    backImage: "/images/editorial/lookbook_2.jpg",
    colors: [
      { name: "Black Shadow", hex: "#131418" },
      { name: "Raw Chalk", hex: "#dedcd4" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A dual-sided minimal essential with clean front chest typography and large-scale industrial monkey archival schematic on the back. Stitched with anti-twist side seams.",
    specs: [
      "270 GSM Combed Cotton",
      "Micro-Tactile Puff Screenprint",
      "Anti-Twist Seam Engineering",
      "Reinforced Shoulder Taping",
    ],
    stockRemaining: 14,
    rating: 4.89,
    reviewCount: 112,
  },
  {
    id: "mm-06",
    name: "Chaos Theory // Distressed Heavy Terry Tee",
    sku: "MM-SS26-045",
    tag: "RESTOCKED TODAY",
    tagType: "restock",
    price: 1499,
    originalPrice: 2149,
    discount: "30% OFF",
    gsm: "280 GSM",
    fabric: "Bio-Washed French Terry Cotton",
    fit: "Wide Shoulder Street Fit",
    category: "acid-wash",
    frontImage: "/images/products/mineral_tee_front.jpg",
    backImage: "/images/products/mineral_tee_back.jpg",
    colors: [
      { name: "Washed Sand", hex: "#8c8275" },
      { name: "Washed Carbon", hex: "#222329" },
    ],
    sizes: ["M", "L", "XL", "XXL"],
    description:
      "Hand-sprayed archival graphic with distressed twin-stitched hems. Treated with silicone bio-wash for a weighted drape that feels broken-in from day one.",
    specs: [
      "280 GSM Bio-Washed Terry",
      "Silicone Soft-Drape Treatment",
      "Distressed Raw Hems",
      "Oversized Back Typography",
    ],
    stockRemaining: 4,
    rating: 4.95,
    reviewCount: 329,
  },
];
