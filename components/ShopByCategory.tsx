"use client";
import Image from "next/image";

const CATEGORIES = [
  { id: 1, name: "Sofas", image: "/SOFA.jpg", count: "12 Designs", from: "₹1,68,000" },
  { id: 2, name: "Chairs", image: "/prod_nicholas_lounge_chair_1777655201291.png", count: "24 Designs", from: "₹28,000" },
  { id: 3, name: "Tables", image: "/CONSOLE TABLE 1.jpg", count: "18 Designs", from: "₹56,000" },
  { id: 4, name: "Lighting", image: "/prod_travertine_lamp.png", count: "32 Designs", from: "₹8,500" },
  { id: 5, name: "Decor", image: "/prod_orb_candle_holder_1777655159473.png", count: "45 Designs", from: "₹2,400" },
];

export default function ShopByCategory() {
  return (
    <section id="categories-section" className="py-20 sm:py-24 bg-[#FAF8F5] border-t border-sand/35">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* Sophisticated Editorial Header */}
        <div className="flex flex-col items-start mb-10 lg:mb-14">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#C49A5D] font-semibold mb-3">
            Product Taxonomy
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-ink tracking-wide">
            The Essential Edit
          </h2>
        </div>

        {/* Staggered Editorial Row Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8 items-start">
          {CATEGORIES.map((cat, idx) => {
            // Editorial heights & offsets for desktop to look high-fashion
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
                {/* Image Frame with soft warmth and hover scale */}
                <div className={`relative w-full aspect-[4/5] lg:aspect-auto overflow-hidden bg-sand/15 border border-sand/20 ${cardHeightStyles}`}>
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover brightness-[0.9] group-hover:brightness-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                    sizes="(max-width: 768px) 50vw, 250px"
                  />
                  <div className="absolute inset-0 bg-ink/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>

                {/* Content Under Image */}
                <div className="mt-4 flex flex-col items-start w-full px-1">
                  <div className="flex items-baseline justify-between w-full">
                    <h3 className="font-display text-base text-ink font-light tracking-wide group-hover:text-[#C49A5D] transition-colors duration-300">
                      {cat.name}
                    </h3>
                    <span className="text-[9px] tracking-wider text-[#C49A5D] font-medium">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Underline line divider */}
                  <div className="w-full h-[1px] bg-sand/40 my-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#C49A5D] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
                  </div>

                  <div className="flex items-center justify-between w-full text-[9px] tracking-[0.15em] uppercase text-stone-500">
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
