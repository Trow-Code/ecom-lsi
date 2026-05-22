"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const COLLECTIONS = [
  { 
    id: 1, 
    name: "The Village Collection", 
    from: "₹3,400", 
    tag: "New Season",
    image: "/coll_village_collection_1777654787769.png"
  },
  { 
    id: 2, 
    name: "Manhattan Series", 
    from: "₹56,000", 
    tag: "Bestseller",
    image: "/coll_manhattan_premium.png"
  },
  { 
    id: 3, 
    name: "Incurve Sculptural", 
    from: "₹89,000", 
    tag: "Exclusive",
    image: "/coll_incurve_premium.png"
  },
  { 
    id: 4, 
    name: "Isle of Greece", 
    from: "₹15,400", 
    tag: "Limited",
    image: "/coll_greece_premium.png"
  }
];

export default function Collections() {
  return (
    <section id="collections" className="py-20 sm:py-24 bg-[#FAF8F5] border-t border-sand/35">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10 sm:mb-14">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#C49A5D] font-semibold mb-3">
              Seasonal Curations
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-ink tracking-wide">
              Our Collections
            </h2>
          </div>
          <a href="#" className="hidden lg:flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-ink font-semibold hover:text-[#C49A5D] transition-colors group">
            View Directory 
            <span className="w-8 h-8 rounded-full border border-sand flex items-center justify-center group-hover:border-[#C49A5D] group-hover:bg-[#C49A5D] group-hover:text-white transition-all duration-300">
              <ArrowRight size={12} strokeWidth={1.5} />
            </span>
          </a>
        </div>

        {/* Stable Bento Grid Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-5 h-[650px]">
          {/* Left: Large Feature (Village Collection) */}
          <div className="col-span-6 relative h-full">
            <Card {...COLLECTIONS[0]} large />
          </div>

          {/* Right: Split Grid */}
          <div className="col-span-6 flex flex-col gap-5 h-full">
            {/* Top Row (Manhattan + Incurve) */}
            <div className="grid grid-cols-2 gap-5 h-1/2">
              <div className="relative h-full"><Card {...COLLECTIONS[1]} /></div>
              <div className="relative h-full"><Card {...COLLECTIONS[2]} /></div>
            </div>
            {/* Bottom Row (Isle of Greece) */}
            <div className="h-1/2 relative">
              <Card {...COLLECTIONS[3]} />
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Horizontal Scroll */}
        <div className="lg:hidden flex gap-5 overflow-x-auto pb-6 -mx-5 px-5 sm:-mx-8 sm:px-8 scrollbar-none">
          {COLLECTIONS.map((c) => (
            <div key={c.id} className="flex-shrink-0 w-[290px] sm:w-[340px] h-[420px] relative">
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
    <div className="group relative overflow-hidden cursor-pointer w-full h-full bg-sand/15 border border-sand/20">
      
      {/* Background Image with Zoom */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover transition-transform duration-[2.5s] group-hover:scale-105"
          sizes={large ? "(max-width: 1024px) 100vw, 700px" : "(max-width: 1024px) 50vw, 350px"}
        />
        {/* Soft, dark gradient vignette for readable text */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent transition-opacity duration-500" />
      </div>

      {/* Seasonal Tag */}
      <span className="absolute top-5 left-5 bg-white/95 backdrop-blur-md text-ink text-[8px] tracking-[0.2em] uppercase px-3 py-1.5 font-semibold z-10 shadow-sm border border-sand/35">
        {tag}
      </span>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 flex items-end justify-between z-10">
        <div>
          <p className="text-[9px] tracking-[0.2em] uppercase text-[#C49A5D] mb-2 font-semibold">FROM {from}</p>
          <h3 className={`font-display text-white font-light leading-snug ${large ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
            {name}
          </h3>
        </div>
        <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all duration-500 flex-shrink-0">
          <ArrowRight size={14} strokeWidth={1.5} className="text-white" />
        </div>
      </div>

    </div>
  );
}
