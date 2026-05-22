"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const ROOMS = [
  { id: 1, name: "Living Spaces", image: "/hero_living_room_1_1777654627821.png", from: "₹89,000" },
  { id: 2, name: "Dining Areas", image: "/hero_modern_dining.png", from: "₹56,000" },
  { id: 3, name: "Bedroom Suites", image: "/hero_furniture_detail_1777654659357.png", from: "₹1,20,000" },
  { id: 4, name: "Private Office", image: "/hero_living_room_1_1777654627821.png", from: "₹45,000" },
];

export default function ShopByRoom() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-warm-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Modern Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 lg:mb-14">
          <div className="max-w-2xl">
            <h2 className="font-display text-[45px] sm:text-[55px] lg:text-[72px] font-light text-ink leading-[1.1] tracking-tight">
              Designed Around You
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-sm text-charcoal/60 font-light leading-relaxed tracking-wide">
              Every home tells a unique story. Explore our collections designed to bring soul and intention to every corner of your life.
            </p>
          </div>
        </div>

        {/* Premium Expanding Accordion Grid */}
        <div className="flex flex-col lg:flex-row h-[500px] lg:h-[600px] gap-4">
          {ROOMS.map((room) => (
            <motion.div
              key={room.id}
              onMouseEnter={() => setHoveredId(room.id)}
              onMouseLeave={() => setHoveredId(null)}
              animate={{
                flex: hoveredId === room.id ? 2.5 : 1,
              }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="relative overflow-hidden cursor-pointer bg-sand/10"
            >
              <Image 
                src={room.image} 
                alt={room.name} 
                fill 
                className="object-cover transition-transform duration-[2s]"
                style={{ transform: hoveredId === room.id ? 'scale(1.1)' : 'scale(1)' }}
              />
              
              {/* Bottom Gradient for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-700" />

              {/* Label */}
              <div className="absolute inset-0 flex items-end p-6 sm:p-8">
                <div className="flex flex-col">
                  <span className="text-[9px] tracking-[0.25em] uppercase text-[#C49A5D] mb-1 sm:mb-2 font-semibold">
                    Starting from {room.from}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-[38px] text-white font-light tracking-tight">
                    {room.name}
                  </h3>
                </div>
                
                {/* Floating Explore Button */}
                <div className={`absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-ink flex items-center justify-center transition-all duration-500 ${
                  hoveredId === room.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={1.5} />
                </div>
              </div>

              {/* Minimalist Underline Indicator */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/10 overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: hoveredId === room.id ? "0%" : "-100%" }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full bg-[#C49A5D]"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
