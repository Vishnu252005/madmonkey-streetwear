"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, PRODUCTS } from "@/data/products";

export interface CartItem {
  id: string;
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, size: string, color: string) => void;
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isFitModalOpen: boolean;
  openFitModal: () => void;
  closeFitModal: () => void;
  checkoutWhatsApp: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isFitModalOpen, setIsFitModalOpen] = useState(false);

  // Initialize with 1 default item for instant realistic e-commerce demonstration
  useEffect(() => {
    setItems([
      {
        id: "mm-01-L-AcidCharcoal",
        product: PRODUCTS[0],
        size: "L",
        color: "Acid Charcoal",
        quantity: 1,
      },
    ]);
  }, []);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const openFitModal = () => setIsFitModalOpen(true);
  const closeFitModal = () => setIsFitModalOpen(false);

  const addToCart = (product: Product, size: string, color: string) => {
    const key = `${product.id}-${size}-${color}`;
    setItems((prev) => {
      const idx = prev.findIndex((item) => item.id === key);
      if (idx > -1) {
        const next = [...prev];
        next[idx].quantity += 1;
        return next;
      }
      return [...prev, { id: key, product, size, color, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, delta: number) => {
    setItems((prev) => {
      const next = [...prev];
      const newQty = next[index].quantity + delta;
      if (newQty <= 0) {
        return prev.filter((_, i) => i !== index);
      }
      next[index].quantity = newQty;
      return next;
    });
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const checkoutWhatsApp = () => {
    if (items.length === 0) return;
    const itemList = items
      .map(
        (i, idx) =>
          `${idx + 1}. ${i.product.name} (Size: ${i.size}, Color: ${i.color}) x ${i.quantity} = ₹${i.product.price * i.quantity}`
      )
      .join("%0A");

    const message = `Hey Mad Monkey! 🐒%0AI'd like to place an order:%0A%0A${itemList}%0A%0ATotal: ₹${subtotal}%0A%0APlease share the payment link and confirmation.`;
    window.open(`https://wa.me/918078179244?text=${message}`, "_blank");
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        isFitModalOpen,
        openFitModal,
        closeFitModal,
        checkoutWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
