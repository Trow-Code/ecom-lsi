"use client";
import { useState } from "react";
import { Home, LayoutGrid, ShoppingBag, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

export default function MobileNav() {
  const { count, setCartOpen } = useCart();
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (id: string, onClick?: () => void) => {
    setActiveTab(id);
    if (onClick) onClick();
  };

  const ITEMS = [
    { 
      id: 'home', 
      icon: Home, 
      label: "Home", 
      onClick: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    { 
      id: 'categories', 
      icon: LayoutGrid, 
      label: "Categories", 
      onClick: () => {
        const el = document.getElementById("categories-section");
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    { 
      id: 'cart', 
      icon: ShoppingBag, 
      label: "Cart", 
      onClick: () => setCartOpen(true),
      hasBadge: true 
    },
    { 
      id: 'account', 
      icon: User, 
      label: "Account",
      onClick: () => {
        // Fallback or navigate
      }
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[60] lg:hidden bg-warm-white border-t border-sand/40 shadow-[0_-4px_24px_rgba(0,0,0,0.04)] pt-1 pb-[calc(8px+env(safe-area-inset-bottom))]">
      <div className="flex items-center justify-around h-14 max-w-md mx-auto px-4">
        
        {ITEMS.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id, item.onClick)}
              className="relative flex flex-col items-center justify-center flex-1 h-full py-1 text-ink focus:outline-none"
            >
              <item.icon 
                size={18} 
                className={`transition-colors duration-300 ${isActive ? "text-ink" : "text-ink/40"}`} 
                strokeWidth={isActive ? 2 : 1.5} 
                fill={isActive && item.id !== 'categories' ? "currentColor" : "none"}
              />
              
              <span className={`text-[9px] tracking-[0.1em] uppercase mt-1 font-medium transition-colors duration-300 ${
                isActive ? "text-ink font-semibold" : "text-ink/45"
              }`}>
                {item.label}
              </span>

              {item.hasBadge && count > 0 && (
                <span className="absolute top-1 right-6 sm:right-8 w-4 h-4 bg-terracotta text-white text-[8px] rounded-full flex items-center justify-center font-bold">
                  {count}
                </span>
              )}

              {isActive && (
                <motion.div 
                  layoutId="activeMobileTabUnderline"
                  className="absolute bottom-0 w-1.5 h-1.5 bg-ink rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}

      </div>
    </nav>
  );
}
