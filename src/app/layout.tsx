import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAD MONKEY® // Heavyweight Oversized Graphic Streetwear",
  description:
    "Luxury heavyweight streetwear & oversized graphic tees crafted from 260 GSM combed French Terry cotton. High-density 3D puff print, boxy drop-shoulder fits, and limited drops.",
  keywords: [
    "Mad Monkey Streetwear",
    "Urban Monkey T-shirts",
    "oversized t-shirts India",
    "heavyweight graphic tees",
    "260 GSM cotton t-shirt",
    "puff print streetwear",
    "boxy fit t-shirt",
    "streetwear brand Kerala",
    "Mad Monkey apparel",
  ],
  authors: [{ name: "Vishnu S", url: "https://vishnubuilds.vercel.app" }],
  openGraph: {
    title: "MAD MONKEY® // Heavyweight Oversized Graphic Streetwear",
    description:
      "Luxury heavyweight streetwear & oversized graphic tees crafted from 260 GSM combed French Terry cotton. Limited drops.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-[#ccff00] selection:text-black">
        {children}
      </body>
    </html>
  );
}
