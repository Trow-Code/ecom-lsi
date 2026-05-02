"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const UGC_ITEMS = [
  { id: 1, image: "/hero_living_room_1_1777654627821.png", handle: "@priya.home" },
  { id: 2, image: "/hero_modern_dining.png", handle: "@designedbyarjun" },
  { id: 3, image: "/hero_furniture_detail_1777654659357.png", handle: "@livingwithkavitha" },
  { id: 4, image: "/hero_living_room_1_1777654627821.png", handle: "@minimalspaces.in" },
  { id: 5, image: "/hero_modern_dining.png", handle: "@livingspace.stories" },
  { id: 6, image: "/hero_furniture_detail_1777654659357.png", handle: "@home.in.mumbai" },
];

export default function UGCStrip() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Modern Instagram Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16 lg:mb-24">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-terracotta" />
              <p className="text-[10px] tracking-[0.4em] uppercase text-terracotta font-medium">The Social Edit</p>
            </div>
            <h2 className="font-display text-[45px] sm:text-[55px] lg:text-[72px] font-light text-ink leading-tight tracking-tight">
              Living with LivingSpace
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-4">
            <p className="text-sm text-charcoal/60 font-light max-w-xs lg:text-right">
              Join our community of design lovers. Share your space with us for a chance to be featured.
            </p>
            <a 
              href="#" 
              className="group flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-ink font-medium"
            >
              <span className="relative pb-1">
                @livingspace
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-ink/10" />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-ink group-hover:w-full transition-all duration-500" />
              </span>
            </a>
          </div>
        </div>

        {/* Premium Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {UGC_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden cursor-pointer bg-sand/10"
            >
              <Image 
                src={item.image} 
                alt={`Instagram ${item.handle}`} 
                fill 
                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              
              {/* Subtle Dark Overlay */}
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-center">
                  <p className="text-[10px] text-white tracking-[0.2em] uppercase font-light">
                    {item.handle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
