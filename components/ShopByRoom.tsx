"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const ROOMS = [
  { id: 1, name: "Living Spaces", image: "/hero_living_room_1_1777654627821.png", tag: "Warm & Inviting" },
  { id: 2, name: "Dining Areas", image: "/hero_modern_dining.png", tag: "Modern & Refined" },
  { id: 3, name: "Bedroom Suites", image: "/hero_furniture_detail_1777654659357.png", tag: "Quiet & Calm" },
  { id: 4, name: "Private Office", image: "/hero_living_room_1_1777654627821.png", tag: "Focused & Clean" },
];

export default function ShopByRoom() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-warm-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Modern Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-terracotta" />
              <p className="text-[10px] tracking-[0.4em] uppercase text-terracotta font-medium">Curated Spaces</p>
            </div>
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

        {/* Premium Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ROOMS.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-sand/10 mb-6">
                <Image 
                  src={room.image} 
                  alt={room.name} 
                  fill 
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                
                {/* Subtle Overlay Reveal */}
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-700" />
                
                {/* Floating Explore Button */}
                <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white text-ink flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowRight size={18} strokeWidth={1.5} />
                </div>
              </div>

              <div className="flex flex-col">
                <p className="text-[9px] tracking-[0.2em] uppercase text-terracotta font-medium mb-2">{room.tag}</p>
                <h3 className="font-display text-2xl lg:text-[28px] text-ink font-light group-hover:text-terracotta transition-colors duration-400">
                  {room.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
