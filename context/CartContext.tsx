"use client";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type CartItem = {
  id: string | number;
  name: string;
  price: number;
  category?: string;
  gradient?: string;
  image?: string;
  qty: number;
};

type CartCtx = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "qty">) => void;
  removeItem: (id: string | number) => void;
  updateQty: (id: string | number, qty: number) => void;
  clearCart: () => void;
  total: number;
  count: number;
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (v: boolean) => void;
  toast: string | null;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const addItem = useCallback((item: Omit<CartItem, "qty">) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) return prev.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
    showToast(`${item.name.split(" ").slice(0, 3).join(" ")} added to cart`);
    setCartOpen(true);
  }, []);

  const removeItem = useCallback((id: string | number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQty = useCallback((id: string | number, qty: number) => {
    if (qty < 1) return;
    setItems((prev) => prev.map((i) => i.id === id ? { ...i, qty } : i));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <Ctx.Provider value={{ items, addItem, removeItem, updateQty, clearCart, total, count, cartOpen, setCartOpen, searchOpen, setSearchOpen, toast }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}
