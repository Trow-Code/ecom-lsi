"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, ArrowRight } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "The Monolith",
    category: "Lounge / Series 01",
    price: "$4,250",
    image: "/hero_living_room_1_1777654627821.png",
    hotspots: [
      { x: "45%", y: "60%", label: "Hand-Stitched Seams" },
      { x: "70%", y: "55%", label: "Feather-Down Core" }
    ]
  },
  {
    id: 2,
    name: "Sanctuary",
    category: "Dining / Series 02",
    price: "$3,800",
    image: "/hero_modern_dining.png",
    hotspots: [
      { x: "50%", y: "45%", label: "Seamless Joinery" },
      { x: "30%", y: "50%", label: "Oil-Rubbed Finish" }
    ]
  },
  {
    id: 3,
    name: "The Archive",
    category: "Study / Edition 01",
    price: "$2,100",
    image: "/hero_furniture_detail_1777654659357.png",
    hotspots: [
      { x: "60%", y: "40%", label: "Patina Finish" },
      { x: "40%", y: "70%", label: "Ergonomic Curve" }
    ]
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % PRODUCTS.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-video max-h-[calc(100vh-140px)] bg-ink overflow-hidden flex flex-col">

          {/* Cinematic Image Frame */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 z-0"
            >
          <Image
            src={PRODUCTS[current].image}
            alt={PRODUCTS[current].name}
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/20" />
        </motion.div>
      </AnimatePresence>

      {/* "Poster" Layout Content */}
      <div className="relative z-10 flex-1 w-full flex items-end sm:items-center justify-start p-6 pb-24 sm:p-12 lg:p-20 pointer-events-none">

        {/* Center: Interactive Hotspots (Pointer Events On) */}
        <div className="absolute inset-0 pointer-events-none">
          <AnimatePresence>
            {PRODUCTS[current].hotspots.map((spot, idx) => (
              <motion.div
                key={`${current}-${idx}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 1 + idx * 0.2 }}
                style={{ left: spot.x, top: spot.y }}
                className="absolute pointer-events-auto group"
              >
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-8 h-8 bg-white/20 rounded-full animate-ping" />
                  <button className="relative w-6 h-6 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-ink hover:bg-terracotta hover:text-white transition-all duration-500 shadow-xl">
                    <Plus size={12} />
                  </button>
                  <div className="absolute left-full ml-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 whitespace-nowrap">
                    <div className="bg-white/95 backdrop-blur-xl px-4 py-2 rounded-sm border-l-2 border-[#C49A5D]">
                      <p className="text-[9px] tracking-[0.2em] uppercase text-ink font-bold">{spot.label}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Left Block: Figma Design "Bring Trend Culture Home" - Vertically Centered */}
        <div className="flex flex-col items-start pointer-events-auto max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl pb-10 sm:pb-0">
          <h1 className="font-display text-[45px] sm:text-[72px] lg:text-[92px] font-normal text-white leading-[0.9] tracking-tight mb-6">
            Bring Trend <br />
            <span className="relative inline-block font-signature text-[#C49A5D] text-[65px] sm:text-[95px] lg:text-[120px] font-normal leading-none py-1 select-none pr-8">
              Culture
              {/* Hand-drawn SVG arrow underline */}
              <svg
                className="absolute -bottom-1 left-0 w-[115%] h-6 text-[#C49A5D]"
                viewBox="0 0 200 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M10 12 C 50 18, 120 18, 180 8 C 185 8, 192 6, 190 6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                />
                <motion.path
                  d="M175 4 C 180 6, 186 7, 190 6 C 184 8, 178 11, 172 13"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 2.0 }}
                />
              </svg>
            </span> <br />
            Home
          </h1>

          <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed max-w-md mb-0 sm:mb-8">
            Discover stylish, modern furniture crafted to elevate your living space with comfort and class.
          </p>

          <a
            href="#collections"
            className="hidden sm:inline-flex items-center gap-3.5 px-9 py-4 bg-[#C49A5D] hover:bg-[#b58c50] text-white text-[10px] tracking-[0.3em] uppercase font-bold transition-all duration-500 rounded-sm shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-0.5"
          >
            Shop Now <ArrowRight size={14} />
          </a>
        </div>

        {/* Right Block: Visual Index (Absolute Positioned Bottom Right) */}
        <div className="absolute bottom-10 sm:bottom-12 lg:bottom-20 right-6 sm:right-12 lg:right-20 flex flex-col items-start lg:items-end gap-6 pointer-events-auto">
          <div className="flex gap-3">
            {PRODUCTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 transition-all duration-700 rounded-full ${current === i ? "w-12 bg-[#C49A5D]" : "w-4 bg-white/20 hover:bg-white/40"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
