"use client";
import { Home, Search, ShoppingBag, User, Sofa } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNav() {
  const { count, setCartOpen, setSearchOpen } = useCart();

  const ITEMS = [
    { id: 'home', icon: Home, label: "Home", active: true },
    { id: 'shop', icon: Sofa, label: "Shop", active: false },
    { id: 'search', icon: Search, label: "Search", active: false, onClick: () => setSearchOpen(true) },
    { id: 'account', icon: User, label: "Profile", active: false },
    { id: 'cart', icon: ShoppingBag, label: "Cart", active: false, onClick: () => setCartOpen(true), hasBadge: true },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[60] lg:hidden w-[95%] max-w-[420px]">
      <div className="bg-white/90 backdrop-blur-3xl border border-black/[0.03] shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[3rem] p-2 flex items-center justify-between">
        
        {ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={item.onClick}
            className={`relative flex items-center justify-center transition-all duration-500 rounded-full h-12 ${
              item.active ? "bg-ink text-white px-5 gap-3" : "w-12 text-ink/30"
            }`}
          >
            <item.icon size={20} strokeWidth={item.active ? 1.5 : 1.2} />
            
            <AnimatePresence>
              {item.active && (
                <motion.span 
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[11px] font-medium whitespace-nowrap overflow-hidden"
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>

            {item.hasBadge && count > 0 && !item.active && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-terracotta text-white text-[8px] rounded-full flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </button>
        ))}

      </div>
    </nav>
  );
}
