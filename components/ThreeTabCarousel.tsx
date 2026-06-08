"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CARDS = [
  {
    id: "new-arrivals",
    label: "01",
    tag: "Just Landed",
    title: "New Arrivals",
    description: "Discover the latest additions to our curated collection — fresh designs crafted for the modern home.",
    cta: "Explore New",
    href: "/collections/new-arrivals",
    image: "/hero_luxury_living.png"
  },
  {
    id: "ready-to-ship",
    label: "02",
    tag: "Ships in 48hrs",
    title: "Ready to Ship",
    description: "No wait. Handpicked essentials finished, inspected, and ready to leave our atelier today.",
    cta: "Shop Now",
    href: "/collections/ready-to-ship",
    image: "/hero_luxury_dining.png"
  },
  {
    id: "trending",
    label: "03",
    tag: "Most Loved",
    title: "Trending Now",
    description: "The pieces our community can't stop talking about — bestsellers and editor's picks.",
    cta: "See What's Hot",
    href: "/collections/trending",
    image: "/hero_luxury_study.png"
  }
];

export default function ThreeTabCarousel() {
  return (
    <section className="bg-[#FAF8F5] py-24 lg:py-28 border-t border-sand/35 overflow-hidden">
      {/* Header — inside padded container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-20 xl:px-24">
        <div className="flex flex-col items-start mb-10 lg:mb-14">
          <p className="font-sans text-[11px] tracking-widest uppercase text-[#C49A5D] font-semibold mb-3">
            Discover
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-ink tracking-wide">
            Shop the Edit
          </h2>
        </div>
      </div>

      {/* Mobile: edge-to-edge scroll | Desktop: normal padded grid */}
      <div className="sm:max-w-[1440px] sm:mx-auto sm:px-12 lg:px-20 xl:px-24">
        <div
          className="flex sm:grid sm:grid-cols-3 gap-4 sm:gap-6 xl:gap-8 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none", scrollPaddingLeft: "16px" }}
        >
          {CARDS.map((card, idx) => (
            <a
              key={card.id}
              href={card.href}
              className={`group relative flex flex-col overflow-hidden cursor-pointer min-w-[75vw] sm:min-w-0 snap-start shrink-0 ${idx === 0 ? "ml-4 sm:ml-0" : ""} ${idx === CARDS.length - 1 ? "mr-4 sm:mr-0" : ""}`}
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-sand/15 border border-sand/20">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover brightness-[0.85] group-hover:brightness-[0.75] group-hover:scale-105 transition-all duration-[1.8s] ease-out"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />

                {/* Dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                {/* Tag Badge — top left */}
                <div className="absolute top-4 left-4 bg-white/85 backdrop-blur-md text-ink text-[8px] tracking-[0.25em] uppercase px-3 py-1.5 font-semibold border border-white/20 shadow-sm">
                  {card.tag}
                </div>

                {/* Index Number — top right */}
                <span className="absolute top-4 right-4 text-white/40 text-[10px] tracking-wider font-sans font-medium">
                  {card.label}
                </span>

                {/* Content Overlay — bottom */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex flex-col items-start">
                  <h3 className="font-display text-xl sm:text-2xl lg:text-[28px] font-light text-white tracking-wide mb-2 leading-tight">
                    {card.title}
                  </h3>
                  <p className="font-sans text-[11px] sm:text-xs text-white/70 font-light leading-relaxed tracking-wide mb-4 max-w-[90%]">
                    {card.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-white font-semibold border-b border-white/30 pb-1 group-hover:border-white/80 transition-all duration-500 font-sans">
                    {card.cta}
                    <ArrowRight size={12} className="text-[#C49A5D] transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
