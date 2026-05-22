"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

const OFFERS = [
  {
    title: "THE ARCHIVE EDIT",
    subtitle: "Privilege Pricing",
    desc: "Enjoy up to 30% off select design classics from our signature collections.",
    code: "ARCHIVE30",
    cta: "Explore Archive",
    href: "#collections",
    img: "/offer_archive_premium.png",
    tag: "Limited Selection"
  },
  {
    title: "ATELIER COMPLIMENT",
    subtitle: "Signature Finishing",
    desc: "Receive a complimentary custom wood finishing treatment on dining orders above ₹1,50,000.",
    code: "ATELIERFINISH",
    cta: "Book Consultation",
    href: "#consultation",
    img: "/offer_atelier_premium.png",
    tag: "Seasonal Privilege"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1.0, ease: [0.25, 1, 0.5, 1] as const }
  }
};

export default function OfferBanners() {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.9)); // Adjust index based on responsive widths
      setActiveSlide(Math.min(index, OFFERS.length - 1));
    }
  };

  return (
    <section id="offers" className="bg-[#FAF8F5] py-20 sm:py-24 border-t border-sand/35 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24 mb-12 sm:mb-16">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#C49A5D] font-semibold mb-3">
            Exclusive Privileges
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-ink tracking-wide">
            Limited Editions & Offers
          </h2>
        </div>
      </div>

      {/* Cards Scroll Container */}
      <div className="w-full xl:max-w-[1440px] xl:mx-auto xl:px-6 sm:xl:px-12 lg:xl:px-20 xl:xl:px-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto xl:grid xl:grid-cols-2 gap-6 xl:gap-8 lg:gap-12 snap-x snap-mandatory scrollbar-none pb-4 xl:pb-0 scroll-smooth w-full px-6 sm:px-12 lg:px-20 xl:px-24 xl:px-0 scroll-pl-6 sm:scroll-pl-12 lg:scroll-pl-20 xl:scroll-pl-24 xl:scroll-pl-0 scroll-pr-6 sm:scroll-pr-12 lg:scroll-pr-20 xl:scroll-pr-24 xl:scroll-pr-0"
        >
          {OFFERS.map((offer, idx) => (
            <motion.div 
              key={offer.title}
              variants={cardVariants}
              className="w-[88vw] md:w-[65vw] xl:w-auto snap-start snap-always shrink-0 xl:shrink flex flex-col md:flex-row bg-white border border-sand/35 overflow-hidden group transition-all duration-500 hover:shadow-lg"
            >
              {/* Image side */}
              <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto relative overflow-hidden bg-sand/5">
                <Image
                  src={offer.img}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
                <span className="absolute top-4 left-4 bg-ink/90 text-white text-[8px] tracking-[0.2em] uppercase px-3 py-1.5 font-semibold border border-white/10">
                  {offer.tag}
                </span>
              </div>

              {/* Content side */}
              <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-between items-start space-y-6">
                <div className="space-y-3">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#C49A5D] font-semibold">
                    {offer.subtitle}
                  </p>
                  <h3 className="font-display text-xl font-light text-ink tracking-wide">
                    {offer.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 font-light leading-relaxed">
                    {offer.desc}
                  </p>
                </div>

                <div className="flex flex-row items-center gap-4 w-full pt-2 flex-wrap">
                  {/* Promo Code Box */}
                  <div className="inline-flex items-center gap-2 border border-dashed border-[#C49A5D]/50 bg-[#C49A5D]/5 px-3 py-1.5 rounded-sm">
                    <span className="text-[8px] tracking-[0.15em] uppercase text-stone-500 font-medium">Code:</span>
                    <span className="text-[10px] tracking-[0.2em] font-semibold text-[#C49A5D] uppercase">
                      {offer.code}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={offer.href}
                    className="group/btn inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-ink font-bold border-b border-ink/40 pb-1.5 hover:border-ink transition-all duration-300"
                  >
                    <span>{offer.cta}</span>
                    <ArrowRight size={12} className="text-[#C49A5D] transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile/Tablet Pagination Dots */}
        <div className="flex xl:hidden justify-center gap-3 mt-8">
          {OFFERS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (scrollRef.current) {
                  const cardWidth = scrollRef.current.scrollWidth / OFFERS.length;
                  scrollRef.current.scrollTo({
                    left: idx * cardWidth,
                    behavior: "smooth"
                  });
                  setActiveSlide(idx);
                }
              }}
              className={`h-1 transition-all duration-500 rounded-full ${
                activeSlide === idx ? "w-8 bg-[#C49A5D]" : "w-3 bg-sand/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
