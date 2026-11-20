"use client";

import React from "react";

interface TShirtGraphicProps {
  colorHex?: string;
  theme?: string;
  badge?: string;
  className?: string;
}

export function TShirtGraphic({
  colorHex = "#1c1d24",
  theme = "CYBER APE",
  badge = "260 GSM",
  className = "w-full aspect-[4/5]",
}: TShirtGraphicProps) {
  return (
    <div className={`relative flex items-center justify-center p-4 select-none overflow-hidden ${className}`}>
      {/* Background radial studio glow */}
      <div className="absolute inset-0 bg-radial from-white/5 to-transparent pointer-events-none" />

      {/* SVG T-Shirt Silhouette */}
      <svg
        viewBox="0 0 400 480"
        className="w-full h-full max-h-[380px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="shirtLighting" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="60%" stopColor="#000000" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.65" />
          </radialGradient>

          <filter id="fabricTexture" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" result="noise" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.04 0" />
            <feComposite in2="SourceGraphic" in="glare" operator="atop" />
          </filter>

          <linearGradient id="cyberNeonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ccff00" />
            <stop offset="60%" stopColor="#00f0ff" />
            <stop offset="100%" stopColor="#ff0055" />
          </linearGradient>

          <linearGradient id="goldVintageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>

        {/* Base T-Shirt Silhouette with Boxy Drop Shoulders */}
        <path
          d="M130 50 C150 75 250 75 270 50 L345 95 L395 195 L345 220 L320 180 L320 440 L80 440 L80 180 L55 220 L5 195 L55 95 Z"
          fill={colorHex}
          stroke="#333748"
          strokeWidth="2"
        />

        {/* Fabric lighting overlay */}
        <path
          d="M130 50 C150 75 250 75 270 50 L345 95 L395 195 L345 220 L320 180 L320 440 L80 440 L80 180 L55 220 L5 195 L55 95 Z"
          fill="url(#shirtLighting)"
        />

        {/* Heavy Ribbed Collar (1.25 inch) */}
        <path
          d="M130 50 C150 75 250 75 270 50 C250 62 150 62 130 50 Z"
          fill="#0f1014"
          stroke="#40455a"
          strokeWidth="1.5"
        />

        {/* Sleeve Seam Details (Drop Shoulder Cut) */}
        <path d="M100 120 L75 210" stroke="#000" strokeWidth="2.5" strokeOpacity="0.4" />
        <path d="M300 120 L325 210" stroke="#000" strokeWidth="2.5" strokeOpacity="0.4" />

        {/* Graphic Print Placement on Chest */}
        <g transform="translate(130, 140)">
          {/* Cyber / Streetwear Monkey Graphic */}
          <rect x="0" y="0" width="140" height="150" rx="8" fill="#090a0f" fillOpacity="0.5" stroke="#ccff00" strokeWidth="1" strokeDasharray="3 3" />
          
          {/* Monkey Head Silhouette */}
          <circle cx="70" cy="70" r="42" fill="url(#cyberNeonGrad)" fillOpacity="0.85" />
          
          {/* Headset / Goggles */}
          <rect x="36" y="58" width="68" height="20" rx="4" fill="#090a0f" />
          <rect x="42" y="62" width="22" height="12" rx="2" fill="#ccff00" />
          <rect x="76" y="62" width="22" height="12" rx="2" fill="#00f0ff" />
          
          {/* Ears */}
          <circle cx="28" cy="70" r="12" fill="#ccff00" fillOpacity="0.4" />
          <circle cx="112" cy="70" r="12" fill="#00f0ff" fillOpacity="0.4" />

          {/* Typography Under Print */}
          <text
            x="70"
            y="125"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="10"
            fontWeight="900"
            letterSpacing="2"
            fontFamily="monospace"
          >
            {theme}
          </text>
          <text
            x="70"
            y="138"
            textAnchor="middle"
            fill="#ccff00"
            fontSize="8"
            fontWeight="700"
            letterSpacing="1.5"
            fontFamily="monospace"
          >
            MAD MONKEY® // HEAVY
          </text>
        </g>
      </svg>

      {/* Floating Streetwear Tag Badge */}
      <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-[#27293a] rounded-lg">
        <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
        <span className="text-[10px] font-mono tracking-wider font-semibold text-zinc-300">
          {badge}
        </span>
      </div>
    </div>
  );
}
