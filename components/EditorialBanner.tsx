"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EditorialBanner() {
  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] border-t border-sand/35">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Left: Atmospheric Image with Floating Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] lg:aspect-auto lg:h-full min-h-[420px] bg-sand/10 overflow-hidden group cursor-pointer border border-sand/20"
          >
            <Image 
              src="/coll_incurve_sculptural_1777654841003.png" 
              alt="Design Craftsmanship" 
              fill 
              className="object-cover transition-transform duration-[3s] group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 700px"
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-10 left-10 right-10">
              <p className="text-[10px] tracking-[0.4em] uppercase text-white/70 mb-4 font-semibold">Behind the Design</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-light leading-tight">
                Crafted with <br /> <em className="not-italic text-[#C49A5D] italic font-medium">intention.</em>
              </h2>
            </div>
          </motion.div>

          {/* Right: Editorial Story & Smaller Featured Item */}
          <div className="flex flex-col justify-between gap-10 lg:gap-14">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-md"
            >
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#C49A5D] font-semibold mb-3">
                Craft & Legacy
              </p>
              <h3 className="font-display text-3xl sm:text-4xl text-ink font-light leading-tight mb-6">
                Design Masters 2026: The Art of Living
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70 font-light leading-relaxed tracking-wide mb-8">
                At LivingSpace, we believe furniture should be more than just functional objects. They are the silent witnesses to our lives, crafted by master artisans who pour heart and soul into every curve and joint.
              </p>
              <a href="#" className="group inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-ink font-bold">
                <span className="relative pb-1">
                  Our Story
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-ink/10" />
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-ink group-hover:w-full transition-all duration-500" />
                </span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform text-[#C49A5D]" />
              </a>
            </motion.div>

            {/* Smaller Featured Inset */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center justify-between group cursor-pointer pt-8 border-t border-sand/30 mt-4"
            >
              <div className="max-w-[70%]">
                <span className="text-[9px] tracking-[0.3em] uppercase text-terracotta mb-2 block font-semibold">ELLE Nominated</span>
                <h4 className="font-display text-2xl text-ink font-light mb-1.5 hover:text-[#C49A5D] transition-colors duration-300">The Puffer Series</h4>
                <p className="text-xs text-charcoal/65 font-light leading-relaxed">Comfort elevated to high art.</p>
              </div>
              
              <div className="relative w-1/4 h-24 scale-100 group-hover:scale-105 transition-transform duration-700 ease-out">
                <Image 
                  src="/prod_puffer_sectional_sofa_1777655249000.png" 
                  alt="ELLE Nominated Sectional Sofa" 
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
