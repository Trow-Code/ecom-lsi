"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const UGC_ITEMS = [
  { id: 1, image: "/coll_village_collection_1777654787769.png", handle: "@priya.home" },
  { id: 2, image: "/prod_miller_cane_sofa_1777655124777.png", handle: "@designedbyarjun" },
  { id: 3, image: "/coll_manhattan_urban_1777654813861.png", handle: "@livingwithkavitha" },
  { id: 4, image: "/prod_nicholas_lounge_chair_1777655201291.png", handle: "@minimalspaces.in" },
  { id: 5, image: "/coll_isle_of_greece_coastal_1777654870630.png", handle: "@livingspace.stories" },
  { id: 6, image: "/prod_puffer_sectional_sofa_1777655249000.png", handle: "@home.in.mumbai" },
];

export default function UGCStrip() {
  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] border-t border-sand/35 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Modern Instagram Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#C49A5D] font-semibold mb-3">
              Social Curation
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-ink tracking-wide">
              Living with LivingSpace
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-4">
            <p className="text-xs sm:text-sm text-charcoal/65 font-light max-w-xs lg:text-right">
              Join our community of design lovers. Share your space with us for a chance to be featured.
            </p>
            <a 
              href="#" 
              className="group flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-ink font-bold"
            >
              <span className="relative pb-1">
                @livingspace
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-ink/15" />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C49A5D] group-hover:w-full transition-all duration-500" />
              </span>
            </a>
          </div>
        </div>

        {/* Premium Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {UGC_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden cursor-pointer bg-sand/10 border border-sand/20"
            >
              <Image 
                src={item.image} 
                alt={`Instagram ${item.handle}`} 
                fill 
                className="object-cover transition-transform duration-[2.5s] group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 15vw"
              />
              
              {/* Subtle Dark Overlay */}
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/65 transition-colors duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 text-center">
                  <p className="text-[10px] text-white tracking-[0.2em] uppercase font-semibold">
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
