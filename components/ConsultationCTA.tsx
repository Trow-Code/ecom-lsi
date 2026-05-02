"use client";
import { ArrowRight, Calendar, Clock, Video } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ConsultationCTA() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-ink relative overflow-hidden">
      
      {/* Background Architectural Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block opacity-40">
        <Image 
          src="/hero_living_room_1_1777654627821.png" 
          alt="Studio Background" 
          fill 
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-ink/80 to-ink" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-[1px] bg-terracotta" />
              <p className="text-[10px] tracking-[0.4em] uppercase text-terracotta font-medium">Personalized Experience</p>
            </div>
            
            <h2 className="font-display text-[45px] sm:text-[55px] lg:text-[72px] font-light text-white leading-[1.1] mb-10 tracking-tight">
              Want to discover <br />the <em className="not-italic text-terracotta italic font-medium">perfect</em> design?
            </h2>
            
            <p className="text-base sm:text-lg text-cream/60 font-light leading-relaxed max-w-lg mb-12">
              Our design masters work with you to understand your space, your light, and your life—curating a room that feels unmistakably yours.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { label: "60-Minute Session", sub: "Deep Dive" },
                { label: "Online / Studio", sub: "Your Choice" },
                { label: "No Commitment", sub: "Pure Inspiration" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-white font-medium">{item.label}</p>
                  <p className="text-[9px] tracking-[0.1em] uppercase text-white/40">{item.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:pl-20 flex flex-col items-start lg:items-center"
          >
            <div className="relative group p-12 sm:p-16 bg-white/5 backdrop-blur-xl border border-white/10 text-center flex flex-col items-center max-w-md">
              <p className="text-white text-sm font-light leading-relaxed mb-10">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
              
              <a 
                href="#" 
                className="w-full bg-white text-ink px-10 py-5 text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-terracotta hover:text-white transition-all duration-500 mb-6"
              >
                Book Consultation
              </a>
              
              <div className="flex items-center gap-2 text-[9px] tracking-[0.2em] uppercase text-white/30">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
                Slots available for May
              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
