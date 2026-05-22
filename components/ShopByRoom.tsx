"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const ROOMS = [
  { id: 1, name: "Living Spaces", image: "/hero_living_room_1_1777654627821.png", from: "₹89,000" },
  { id: 2, name: "Dining Areas", image: "/hero_modern_dining.png", from: "₹56,000" },
  { id: 3, name: "Bedroom Suites", image: "/room_bedroom_premium.png", from: "₹1,20,000" },
  { id: 4, name: "Private Office", image: "/room_office_premium.png", from: "₹45,000" },
];

export default function ShopByRoom() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="rooms" className="py-20 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24">
        
        {/* Modern Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#C49A5D] font-semibold mb-3">
              Spatial Curation
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-ink tracking-wide">
              Designed Around You
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-xs sm:text-sm text-charcoal/65 font-light leading-relaxed tracking-wide">
              Every home tells a unique story. Explore our collections designed to bring soul and intention to every corner of your life.
            </p>
          </div>
        </div>

        {/* Premium Expanding Accordion Grid (Using CSS transitions to avoid Framer Motion flex-animation errors) */}
        <div className="flex flex-col lg:flex-row h-[520px] lg:h-[620px] gap-5">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              onMouseEnter={() => setHoveredId(room.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative overflow-hidden cursor-pointer bg-sand/15 border border-sand/20 transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.25,1)] ${
                hoveredId === room.id ? 'flex-[2.3]' : 'flex-[1]'
              }`}
            >
              <Image 
                src={room.image} 
                alt={room.name} 
                fill 
                className="object-cover transition-transform duration-[2.5s] ease-out"
                style={{ transform: hoveredId === room.id ? 'scale(1.05)' : 'scale(1)' }}
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              
              {/* Bottom Gradient for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent transition-opacity duration-700" />
 
              {/* Label */}
              <div className="absolute inset-0 flex items-end p-6 sm:p-8 z-10">
                <div className="flex flex-col">
                  <span className="text-[9px] tracking-[0.25em] uppercase text-[#C49A5D] mb-1 sm:mb-2 font-semibold">
                    Starting from {room.from}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-white font-light tracking-wide">
                    {room.name}
                  </h3>
                </div>
                
                {/* Floating Explore Button */}
                <div className={`absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-10 h-10 rounded-full bg-white text-ink flex items-center justify-center transition-all duration-500 shadow-lg ${
                  hoveredId === room.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'
                }`}>
                  <ArrowRight size={14} strokeWidth={1.5} />
                </div>
              </div>

              {/* Underline Indicator */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/10 overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: hoveredId === room.id ? "0%" : "-100%" }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full bg-[#C49A5D]"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
