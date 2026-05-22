"use client";
import Image from "next/image";

const CATEGORIES = [
  { id: 1, name: "Sofas", image: "/hero_living_room_1_1777654627821.png", count: "12 Designs", from: "₹1,68,000" },
  { id: 2, name: "Chairs", image: "/hero_modern_dining.png", count: "24 Designs", from: "₹28,000" },
  { id: 3, name: "Tables", image: "/hero_furniture_detail_1777654659357.png", count: "18 Designs", from: "₹56,000" },
  { id: 4, name: "Lighting", image: "/hero_furniture_detail_1777654659357.png", count: "32 Designs", from: "₹8,500" },
  { id: 5, name: "Decor", image: "/hero_living_room_1_1777654627821.png", count: "45 Designs", from: "₹2,400" },
];

export default function ShopByCategory() {

  return (
    <section id="categories-section" className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">

        {/* Sophisticated Editorial Header */}
        <div className="flex flex-col items-start mb-8 lg:mb-12">
          <h2 className="font-display text-[40px] sm:text-[50px] lg:text-[64px] font-light text-ink leading-tight tracking-tight">
            The Essential Edit
          </h2>
        </div>

        {/* Staggered Editorial Row Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8 items-start">
          {CATEGORIES.map((cat, idx) => {
            // Editorial heights & offsets for desktop
            const cardHeightStyles = [
              "lg:h-[480px] lg:mt-0",   // Sofas
              "lg:h-[420px] lg:mt-12",  // Chairs
              "lg:h-[500px] lg:mt-0",   // Tables
              "lg:h-[440px] lg:mt-8",   // Lighting
              "lg:h-[470px] lg:mt-4",   // Decor
            ][idx];

            return (
              <div
                key={cat.id}
                className="group flex flex-col cursor-pointer"
              >
                {/* Image Frame with grayscale and hover scale */}
                <div className={`relative w-full aspect-[4/5] lg:aspect-auto overflow-hidden bg-ink ${cardHeightStyles}`}>
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover filter grayscale brightness-[0.75] contrast-[1.05] group-hover:grayscale-0 group-hover:brightness-[0.9] group-hover:scale-105 transition-all duration-[1.2s] ease-in-out"
                  />

                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Under Image */}
                <div className="mt-4 flex flex-col items-start w-full px-1">
                  <div className="flex items-baseline justify-between w-full">
                    <h3 className="font-sans text-base lg:text-lg text-ink font-semibold tracking-wide group-hover:text-terracotta transition-colors duration-300">
                      {cat.name}
                    </h3>
                    <span className="text-[9px] tracking-wider text-[#C49A5D] font-medium">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Subtle expanding line divider */}
                  <div className="w-full h-[1px] bg-sand/30 my-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-terracotta transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
                  </div>

                  <div className="flex items-center justify-between w-full text-[9px] tracking-[0.15em] uppercase text-muted">
                    <span>{cat.count}</span>
                    <span className="text-terracotta font-medium">From {cat.from}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
