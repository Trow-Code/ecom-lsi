"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  { 
    id: 1,
    title: "The Signature \nSeries 2026", 
    subtitle: "New Season Drop",
    description: "Handcrafted with intention, designed for the modern sanctuary. Experience the ultimate in quiet luxury.",
    image: "/hero_living_room_1_1777654627821.png",
    cta: "Explore The Series"
  },
  { 
    id: 2,
    title: "Modern Dining \nEssentials", 
    subtitle: "Artisan Edit",
    description: "Discover minimalist silhouettes and premium natural textures that redefine the dining experience.",
    image: "/hero_modern_dining.png",
    cta: "Shop Dining"
  },
  { 
    id: 3,
    title: "Crafted for \nComfort", 
    subtitle: "Limited Edition",
    description: "Exquisite details and sustainable materials meet in our most ambitious handcrafted collection yet.",
    image: "/hero_furniture_detail_1777654659357.png",
    cta: "Learn More"
  }
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Bulletproof manual pagination
  const nextSlide = () => {
    setActive((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  // Single reliable timer - NO PAUSE ON HOVER
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 8000);

    return () => clearTimeout(timer);
  }, [active]);

  return (
    <section 
      className="relative w-full h-screen bg-ink overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
          className="absolute inset-0"
        >
          <motion.div
            animate={{ scale: [1, 1.1] }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "alternate" }}
            className="w-full h-full relative"
          >
            <Image
              src={SLIDES[active].image}
              alt={SLIDES[active].title}
              fill
              className="object-cover object-center"
              priority
              quality={100}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Editorial Content */}
      <div className="relative h-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-32 flex flex-col justify-center z-20 pointer-events-none">
        <div className="relative h-full max-w-2xl pointer-events-auto">
          <AnimatePresence>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center gap-4 mb-6"
              >
                <span className="w-10 h-[1px] bg-terracotta" />
                <p className="text-[10px] tracking-[0.5em] uppercase text-cream/80 font-medium">
                  {SLIDES[active].subtitle}
                </p>
              </motion.div>
              
              <h1 className="font-display text-[55px] sm:text-[75px] lg:text-[95px] font-light leading-[0.95] text-white mb-8 whitespace-pre-line">
                {SLIDES[active].title}
              </h1>
              
              <p className="text-base sm:text-lg text-cream/70 font-light leading-relaxed max-w-md mb-12">
                {SLIDES[active].description}
              </p>
              
              <div className="flex items-center gap-8">
                <a
                  href="#collections"
                  className="bg-white text-ink px-10 py-4 text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-terracotta hover:text-white transition-all duration-500"
                >
                  {SLIDES[active].cta}
                </a>
                <button className="text-[10px] tracking-[0.3em] uppercase text-white font-medium border-b border-white/20 pb-1 hover:border-white transition-colors">
                  View Film
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Side Arrows */}
      <div className="absolute inset-y-0 left-4 sm:left-8 flex items-center z-30 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all duration-700 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-auto"
        >
          <ChevronLeft size={32} strokeWidth={1} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 sm:right-8 flex items-center z-30 pointer-events-none">
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all duration-700 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-auto"
        >
          <ChevronRight size={32} strokeWidth={1} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-12 right-6 sm:right-12 lg:right-20 flex items-center gap-8 z-30">
        <div className="flex items-center gap-8">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="py-4 group"
            >
              <div className="flex flex-col items-end gap-2">
                <span className={`text-[10px] font-medium transition-colors duration-500 ${i === active ? "text-white" : "text-white/40"}`}>
                  0{i + 1}
                </span>
                <div className={`relative h-[1px] transition-all duration-700 overflow-hidden ${i === active ? "bg-white/20 w-16" : "bg-white/15 w-6 group-hover:bg-white/30"}`}>
                  {i === active && (
                    <motion.div 
                      key={`progress-${i}-${active}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 8, ease: "linear" }}
                      className="absolute inset-y-0 left-0 bg-white"
                    />
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
