"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CATEGORIES = [
  { id: 1, name: "Sofas", image: "/hero_living_room_1_1777654627821.png", count: "12 Designs" },
  { id: 2, name: "Chairs", image: "/hero_modern_dining.png", count: "24 Designs" },
  { id: 3, name: "Tables", image: "/hero_furniture_detail_1777654659357.png", count: "18 Designs" },
  { id: 4, name: "Lighting", image: "/hero_furniture_detail_1777654659357.png", count: "32 Designs" },
  { id: 5, name: "Decor", image: "/hero_living_room_1_1777654627821.png", count: "45 Designs" },
];

export default function ShopByCategory() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Sophisticated Editorial Header */}
        <div className="flex flex-col items-start mb-12 lg:mb-16">
          <p className="text-[10px] tracking-[0.4em] uppercase text-terracotta font-medium mb-4">Objects of Intention</p>
          <h2 className="font-display text-[40px] sm:text-[50px] lg:text-[64px] font-light text-ink leading-tight tracking-tight">
            The Essential Edit
          </h2>
        </div>

        {/* Modern Expanding Accordion Grid */}
        <div className="flex flex-col lg:flex-row h-[500px] lg:h-[600px] gap-4">
          {CATEGORIES.map((cat) => (
            <motion.div
              key={cat.id}
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
              animate={{
                flex: hoveredId === cat.id ? 2.5 : 1,
              }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="relative overflow-hidden cursor-pointer bg-sand/10"
            >
              <Image 
                src={cat.image} 
                alt={cat.name} 
                fill 
                className="object-cover transition-transform duration-[2s]"
                style={{ transform: hoveredId === cat.id ? 'scale(1.1)' : 'scale(1)' }}
              />
              
              {/* Dark Overlay with transition */}
              <div 
                className={`absolute inset-0 bg-black/30 transition-opacity duration-700 ${hoveredId === cat.id ? 'opacity-20' : 'opacity-40'}`} 
              />

              {/* Vertical Label */}
              <div className="absolute inset-0 flex items-center justify-center lg:justify-start lg:items-end p-8">
                <div className={`flex flex-col transition-all duration-700 ${hoveredId === cat.id ? 'lg:translate-y-0 opacity-100' : 'lg:translate-y-4 opacity-90'}`}>
                  <span className={`text-[9px] tracking-[0.3em] uppercase text-white/60 mb-2 transition-opacity duration-500 ${hoveredId === cat.id ? 'opacity-100' : 'opacity-0'}`}>
                    {cat.count}
                  </span>
                  <h3 className="font-display text-3xl lg:text-5xl text-white font-light tracking-tight">
                    {cat.name}
                  </h3>
                </div>
              </div>

              {/* Minimalist Line Indicator */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: hoveredId === cat.id ? "0%" : "-100%" }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full bg-terracotta"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
