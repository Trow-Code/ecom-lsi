"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EditorialBanner() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Atmospheric Image with Floating Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] lg:aspect-[3/4] bg-sand/10 overflow-hidden group cursor-pointer"
          >
            <Image 
              src="/hero_living_room_1_1777654627821.png" 
              alt="Design Craftsmanship" 
              fill 
              className="object-cover transition-transform duration-[3s] group-hover:scale-105"
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-10 left-10 right-10">
              <p className="text-[10px] tracking-[0.4em] uppercase text-white/70 mb-4">Behind the Design</p>
              <h2 className="font-display text-[40px] sm:text-[50px] lg:text-[60px] text-white font-light leading-tight">
                Crafted with <br /> <em className="not-italic text-terracotta italic font-medium">intention.</em>
              </h2>
            </div>
          </motion.div>

          {/* Right: Editorial Story & Smaller Featured Item */}
          <div className="flex flex-col gap-16 lg:gap-24">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-md"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-[1px] bg-terracotta" />
                <p className="text-[10px] tracking-[0.3em] uppercase text-terracotta font-medium">The Makers</p>
              </div>
              <h3 className="font-display text-[32px] sm:text-[40px] text-ink font-light leading-tight mb-8">
                Design Masters 2026: The Art of Living
              </h3>
              <p className="text-charcoal/60 font-light leading-relaxed tracking-wide mb-10">
                At LivingSpace, we believe furniture should be more than just functional objects. They are the silent witnesses to our lives, crafted by master artisans who pour heart and soul into every curve and joint.
              </p>
              <a href="#" className="group inline-flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-ink font-medium">
                <span className="relative pb-1">
                  Our Story
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-ink/10" />
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-ink group-hover:w-full transition-all duration-500" />
                </span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Smaller Featured Inset */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative aspect-[16/9] bg-warm-white border border-sand/30 p-8 flex items-center justify-between group overflow-hidden cursor-pointer"
            >
              <div className="relative z-10 max-w-[60%]">
                <span className="text-[9px] tracking-[0.25em] uppercase text-terracotta mb-2 block">ELLE Nominated</span>
                <h4 className="font-display text-2xl text-ink font-light mb-2">The Puffer Series</h4>
                <p className="text-[10px] text-muted tracking-wide uppercase">Comfort elevated to high art.</p>
              </div>
              
              <div className="relative w-1/3 h-full scale-110 group-hover:scale-125 transition-transform duration-1000">
                <Image 
                  src="/hero_furniture_detail_1777654659357.png" 
                  alt="Featured Item" 
                  fill 
                  className="object-contain"
                />
              </div>
              
              {/* Background accent */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-sand/10 rounded-full blur-3xl group-hover:bg-terracotta/10 transition-colors duration-1000" />
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
