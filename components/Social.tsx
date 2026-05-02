"use client";
import { motion } from "framer-motion";

const STORIES = [
  { 
    quote: "Every piece feels intentional. Our home finally has the warmth and elegance I'd been searching for.", 
    name: "Priya Menon", 
    location: "Bangalore", 
    collection: "Village Collection" 
  },
  { 
    quote: "The quality is extraordinary — solid, considered, and beautiful. Worth every rupee.", 
    name: "Arjun Shah", 
    location: "Mumbai", 
    collection: "Miller Lounge Series" 
  },
  { 
    quote: "LivingSpace transformed our living room in one purchase. The design consultation made it effortless.", 
    name: "Kavitha Nair", 
    location: "Kochi", 
    collection: "Copenhagen Curves" 
  },
];

export default function Social() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-warm-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Modern Minimal Header */}
        <div className="flex flex-col items-center text-center mb-20 lg:mb-32">
          <p className="text-[10px] tracking-[0.5em] uppercase text-muted font-medium mb-6">Customer Voice</p>
          <h2 className="font-display text-[45px] sm:text-[55px] lg:text-[72px] font-light text-ink leading-tight tracking-tight">
            The Living Experience
          </h2>
        </div>

        {/* Clean, Text-Only Boutique Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
          {STORIES.map((story, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-10"
            >
              <div className="flex items-center gap-1.5 opacity-40">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[9px] text-terracotta leading-none">◈</span>
                ))}
              </div>

              <blockquote className="font-sans text-lg sm:text-xl text-ink leading-[1.6] font-light">
                "{story.quote}"
              </blockquote>
              
              <div className="pt-8 border-t border-sand/40">
                <p className="text-sm font-medium text-ink mb-1 uppercase tracking-wide">{story.name}</p>
                <p className="text-[9px] tracking-[0.2em] uppercase text-muted font-light">
                  {story.location} · {story.collection}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
