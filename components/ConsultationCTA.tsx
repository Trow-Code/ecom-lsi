"use client";
import { useState } from "react";
import { ArrowRight, Calendar, Clock, Video } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ConsultationCTA() {
  const [format, setFormat] = useState("In-Studio");

  return (
    <section id="consultation" className="py-16 sm:py-20 lg:py-24 bg-ink relative overflow-hidden">
      
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

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:pl-10 w-full max-w-md"
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
              <div className="space-y-2">
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#C49A5D] font-medium">Design Appointment</p>
                <h3 className="font-display text-3xl sm:text-4xl text-white font-light tracking-tight">Book a Consultation</h3>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="YOUR NAME" 
                    className="w-full bg-transparent border-b border-white/20 py-3 text-xs tracking-widest text-white focus:border-white placeholder:text-cream/30 outline-none transition-colors duration-300 font-light"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="tel" 
                    placeholder="PHONE NUMBER" 
                    className="w-full bg-transparent border-b border-white/20 py-3 text-xs tracking-widest text-white focus:border-white placeholder:text-cream/30 outline-none transition-colors duration-300 font-light"
                  />
                </div>
                
                {/* Session Type Selectors */}
                <div className="space-y-3 pt-2">
                  <label className="text-[9px] tracking-[0.25em] uppercase text-white/40 block">Preferred Format</label>
                  <div className="flex flex-wrap gap-2.5">
                    {["In-Studio", "Virtual Visit", "Phone Call"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormat(type)}
                        className={`px-4 py-2 border text-[9px] tracking-widest uppercase transition-all duration-300 ${
                          format === type 
                            ? "border-white bg-white text-ink" 
                            : "border-white/10 text-white/70 hover:border-white/40 hover:text-white"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 space-y-4">
                <button 
                  type="submit" 
                  className="w-full py-4 bg-white text-ink text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-terracotta hover:text-white transition-all duration-500 flex items-center justify-center gap-2"
                >
                  Submit Request <ArrowRight size={14} />
                </button>
                
                <div className="flex items-center justify-center gap-2 text-[9px] tracking-[0.2em] uppercase text-white/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
                  Slots available for May
                </div>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
