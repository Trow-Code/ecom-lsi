"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, Plus, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

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
  const { addToCart } = useCart();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % PRODUCTS.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen bg-ink overflow-hidden flex flex-col justify-end">
      
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
      <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-12 lg:p-20 pointer-events-none">
        
        {/* Top Row: Series Info */}
        <div className="flex justify-between items-start">
          <motion.div
            key={`cat-${current}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-2"
          >
            <span className="text-[10px] tracking-[0.5em] uppercase text-terracotta font-bold">LivingSpace</span>
            <span className="text-[9px] tracking-[0.3em] uppercase text-white/40">{PRODUCTS[current].category}</span>
          </motion.div>
          
          <div className="hidden lg:flex flex-col items-end gap-2">
            <span className="text-[9px] tracking-[0.4em] uppercase text-white/30 [writing-mode:vertical-lr]">Exhibition 2026</span>
            <div className="w-[1px] h-20 bg-white/10" />
          </div>
        </div>

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
                    <div className="bg-white/95 backdrop-blur-xl px-4 py-2 rounded-sm border-l-2 border-terracotta">
                      <p className="text-[9px] tracking-[0.2em] uppercase text-ink font-bold">{spot.label}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Row: Massive Poster Typography */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-display text-[70px] sm:text-[100px] lg:text-[160px] font-light text-white leading-[0.85] tracking-tighter mb-4">
                {PRODUCTS[current].name}
              </h1>
              <div className="flex items-center gap-8">
                <p className="text-2xl sm:text-4xl text-white/30 font-light italic">{PRODUCTS[current].price}</p>
                <div className="h-[1px] w-24 bg-terracotta" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CTA Group */}
          <div className="flex flex-col gap-6 items-start lg:items-end">
            <button 
              onClick={() => addToCart({ id: PRODUCTS[current].id, name: PRODUCTS[current].name, price: Number(PRODUCTS[current].price.replace(/[^0-9.-]+/g,"")), image: PRODUCTS[current].image })}
              className="group relative h-16 w-16 sm:h-20 sm:w-20 bg-white rounded-full flex items-center justify-center text-ink overflow-hidden transition-all duration-700 hover:w-64"
            >
              <div className="absolute left-0 w-full flex items-center justify-center group-hover:justify-start group-hover:pl-8 transition-all duration-700">
                <ShoppingBag size={20} />
              </div>
              <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap text-[11px] tracking-[0.3em] uppercase font-bold ml-12 transition-all duration-700">
                Acquire Piece
              </span>
              <div className="absolute inset-0 bg-terracotta translate-y-full group-hover:translate-y-0 -z-10 transition-transform duration-700" />
            </button>
            
            {/* Visual Index */}
            <div className="flex gap-4">
              {PRODUCTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 transition-all duration-700 ${current === i ? "w-16 bg-terracotta" : "w-6 bg-white/20 hover:bg-white/40"}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
