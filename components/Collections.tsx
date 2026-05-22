"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const COLLECTIONS = [
  { 
    id: 1, 
    name: "The Village Collection", 
    from: "₹3,400", 
    tag: "New Season",
    image: "/hero_living_room_1_1777654627821.png"
  },
  { 
    id: 2, 
    name: "Manhattan Series", 
    from: "₹56,000", 
    tag: "Bestseller",
    image: "/hero_furniture_detail_1777654659357.png"
  },
  { 
    id: 3, 
    name: "Modern Dining Edit", 
    from: "₹89,000", 
    tag: "Exclusive",
    image: "/hero_modern_dining.png"
  },
  { 
    id: 4, 
    name: "Isle of Greece", 
    from: "₹15,400", 
    tag: "Limited",
    image: "/hero_living_room_1_1777654627821.png"
  }
];

export default function Collections() {
  const [offset, setOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setOffset((prev) => (prev + 1) % COLLECTIONS.length);
    }, 5000); // Slightly slower to appreciate the crossfade
    return () => clearInterval(timer);
  }, [isHovered]);

  const display = [
    ...COLLECTIONS.slice(offset),
    ...COLLECTIONS.slice(0, offset)
  ];

  return (
    <section id="collections" className="pt-16 pb-8 lg:pt-24 lg:pb-12 bg-warm-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-6 sm:mb-10">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-ink">Our Collections</h2>
          </div>
          <a href="#" className="hidden lg:flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-ink font-medium hover:text-terracotta transition-colors group">
            View Directory 
            <span className="w-8 h-8 rounded-full border border-ink/20 flex items-center justify-center group-hover:border-terracotta transition-colors">
              <ArrowRight size={14} strokeWidth={1.5} />
            </span>
          </a>
        </div>

        {/* Desktop Bento Grid */}
        <div 
          className="hidden lg:flex h-[650px] gap-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left: Large Feature */}
          <div className="w-1/2 relative h-full">
            <Card {...display[0]} large />
          </div>

          {/* Right: Split Grid */}
          <div className="w-1/2 flex flex-col gap-4 h-full">
            {/* Top Row */}
            <div className="flex gap-4 h-1/2 w-full">
              <div className="w-1/2 relative h-full"><Card {...display[1]} /></div>
              <div className="w-1/2 relative h-full"><Card {...display[2]} /></div>
            </div>
            {/* Bottom Row */}
            <div className="h-1/2 relative w-full">
              <Card {...display[3]} />
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Horizontal Scroll */}
        <div className="lg:hidden flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 sm:-mx-12 sm:px-12 scrollbar-none">
          {COLLECTIONS.map((c) => (
            <div key={c.id} className="flex-shrink-0 w-[280px] sm:w-[320px] h-[400px] relative">
              <Card {...c} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function Card({ name, from, tag, image, large = false }: { name: string; from: string; tag: string; image: string; large?: boolean }) {
  return (
    <div className="group relative overflow-hidden cursor-pointer w-full h-full bg-sand/20">
      <AnimatePresence initial={false}>
        <motion.div
          key={name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, position: "absolute", zIndex: 0 }}
          transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          className="absolute inset-0 w-full h-full z-10"
        >
          <Image 
            src={image} 
            alt={name} 
            fill 
            className="object-cover transition-transform duration-[3s] group-hover:scale-105"
          />
          {/* Clean elegant gradient overlay just for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

          {/* Tag */}
          <div className="absolute top-6 left-6 bg-ink/90 border border-white/10 text-white text-[9px] tracking-[0.2em] uppercase px-3.5 py-1.5 font-medium">
            {tag}
          </div>

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 flex items-end justify-between">
            <div>
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#C49A5D] mb-2 font-medium">FROM {from}</p>
              <h3 className={`font-display text-cream font-light leading-snug ${large ? 'text-3xl lg:text-4xl' : 'text-2xl lg:text-3xl'}`}>
                {name}
              </h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 flex-shrink-0">
              <ArrowRight size={16} strokeWidth={1.5} className="text-white" />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
