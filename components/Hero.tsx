"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "The Monolith Sofa",
    category: "Lounge / Series 01",
    price: "₹1,85,000",
    image: "/hero_luxury_living.png",
    hotspots: [
      { x: "66%", y: "38%", label: "Sovereign Bouclé Sofa" },
      { x: "42%", y: "48%", label: "Travertine Coffee Table" }
    ],
    specHeader: "LIVING ROOM DESIGN",
    specItems: ["Sovereign Bouclé Sofa", "Travertine Coffee Table"]
  },
  {
    id: 2,
    name: "Sanctuary Dining Table",
    category: "Dining / Series 02",
    price: "₹1,20,000",
    image: "/hero_luxury_dining.png",
    hotspots: [
      { x: "54%", y: "66%", label: "Sanctuary Dining Table" },
      { x: "25%", y: "72%", label: "Arona Rattan Chair" }
    ],
    specHeader: "DINING ROOM DESIGN",
    specItems: ["Sanctuary Dining Table", "Arona Rattan Chairs"]
  },
  {
    id: 3,
    name: "The Archive Desk System",
    category: "Study / Edition 01",
    price: "₹68,000",
    image: "/hero_study_moody.png",
    hotspots: [
      { x: "54%", y: "62%", label: "Atelier Console Desk" },
      { x: "50%", y: "46%", label: "Brass Task Lamp" }
    ],
    specHeader: "STUDY ROOM DESIGN",
    specItems: ["Atelier Console Desk", "Brass Task Lamp"]
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % PRODUCTS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[620px] sm:h-[660px] lg:h-[680px] bg-ink overflow-hidden flex flex-col">

      {/* Cinematic Image Frame */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08, x: current === 0 ? -30 : 0 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={PRODUCTS[current].image}
            alt={PRODUCTS[current].name}
            fill
            className={`object-cover brightness-[0.76] contrast-[1.02] ${current === 0 ? "-scale-x-100 lg:object-[center_70%]" : ""}`}
            priority
            sizes="100vw"
          />
          {/* Targeted gradients for high legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-1 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black/80 via-black/25 to-transparent z-1 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-black/40 to-transparent z-1 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* "Poster" Split Layout Content */}
      <div className="relative z-10 flex-1 w-full flex flex-col justify-end md:flex-row md:items-end md:justify-between px-6 sm:px-12 lg:px-20 xl:px-24 pb-12 sm:pb-16 lg:pb-20 pt-20 pointer-events-none">

        {/* Center: Interactive Hotspots (Pointer Events On) */}
        <div className="absolute inset-0 pointer-events-none">
          <AnimatePresence>
            {PRODUCTS[current].hotspots.map((spot, idx) => (
              <motion.div
                key={`${current}-${idx}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 1.2 + idx * 0.2 }}
                style={{ left: spot.x, top: spot.y }}
                className="absolute pointer-events-auto group"
              >
                <div className="relative flex items-center justify-center">
                  {/* Thin outer ring */}
                  <div className="absolute w-6 h-6 border border-white/30 rounded-full transition-all duration-500 group-hover:scale-125 group-hover:border-white/50" />
                  {/* Floating minimal plus icon */}
                  <button className="relative w-4 h-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <svg 
                      className="w-2.5 h-2.5 text-white/90 transition-colors duration-300 group-hover:text-[#C49A5D]" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                  <div className="absolute left-full ml-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 whitespace-nowrap z-30">
                    <div className="bg-white/95 backdrop-blur-xl px-4 py-2 rounded-sm border-l-2 border-[#C49A5D] shadow-md">
                      <p className="text-[9px] tracking-[0.2em] uppercase text-ink font-bold">{spot.label}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Left Block: Editorial Typography (Bottom-Left) */}
        <div className="flex flex-col items-start pointer-events-auto max-w-xl md:max-w-md lg:max-w-lg xl:max-w-2xl z-10 mb-8 md:mb-0">
          <h1 className="font-display text-[38px] sm:text-[60px] lg:text-[76px] font-light text-white leading-[0.95] sm:leading-[1] lg:leading-[0.95] tracking-tight mb-4">
            Bring Trend &amp; <br />
            <span className="font-serif italic text-[#C49A5D] tracking-normal font-normal">Culture</span> Home
          </h1>

          <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed max-w-md tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
            Discover stylish, modern furniture crafted to elevate your living space with comfort and class.
          </p>
        </div>

        {/* Right Block: Shop Now CTA, Slide Specs & Indicator (Bottom-Right) */}
        <div className="flex flex-col items-start md:items-end gap-6 sm:gap-8 pointer-events-auto z-10">
          
          {/* Shop Now CTA Button */}
          <a
            href="#collections"
            className="group inline-flex items-center gap-3 text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-white font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
          >
            <span className="relative pb-1">
              Shop Now
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20" />
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C49A5D] group-hover:w-full transition-all duration-500" />
            </span>
            <ArrowRight size={12} className="text-[#C49A5D] group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>

          {/* Featured In Scene Room Specs */}
          <motion.div
            key={`specs-${current}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden sm:flex flex-col items-start md:items-end font-sans text-[11px] text-white/70 font-light"
          >
            <span className="text-[#C49A5D] font-semibold text-[9px] tracking-[0.2em] uppercase mb-1">
              Featured in scene
            </span>
            <span className="text-left md:text-right leading-relaxed max-w-[220px]">
              {PRODUCTS[current].specItems.join(" & ")}
            </span>
          </motion.div>

          {/* Slide Indicator Dots */}
          <div className="flex gap-3">
            {PRODUCTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 transition-all duration-700 rounded-full ${current === i ? "w-12 bg-[#C49A5D]" : "w-4 bg-white/20 hover:bg-white/40"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
