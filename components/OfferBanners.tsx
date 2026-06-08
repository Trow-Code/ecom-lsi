"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const OFFERS = [
  {
    title: "THE ARCHIVE EDIT",
    subtitle: "Privilege Pricing",
    discount: "30%",
    desc: "Enjoy up to 30% off select design classics from our signature collections.",
    code: "ARCHIVE30",
    cta: "Explore Archive",
    href: "/collections/archive",
    img: "/offer_archive_premium.png",
    tag: "Limited Selection"
  },
  {
    title: "ATELIER COMPLIMENT",
    subtitle: "Signature Finishing",
    discount: "FREE",
    desc: "Receive a complimentary custom wood finishing treatment on dining orders above ₹1,50,000.",
    code: "ATELIERFINISH",
    cta: "Book Consultation",
    href: "/consultation",
    img: "/offer_atelier_premium.png",
    tag: "Seasonal Privilege"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const }
  }
};

export default function OfferBanners() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  return (
    <section id="offers" className="bg-[#FAF8F5] py-24 sm:py-32 border-t border-sand/35">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-20 xl:px-24">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <p className="font-sans text-[11px] tracking-widest uppercase text-[#C49A5D] font-semibold mb-3">
            Bespoke Benefits
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-ink tracking-wide">
            Limited Privileges
          </h2>
        </div>

        {/* 2-Column Voucher Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {OFFERS.map((offer, idx) => {
            return (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
                className="bg-white border border-sand/35 p-5 sm:p-6 lg:p-8 flex flex-col group hover:shadow-lg transition-all duration-500"
              >
                {/* Image Frame with Zoom & Fine Details */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-sand/10 border border-sand/20">
                  <Image
                    src={offer.img}
                    alt={offer.title}
                    fill
                    className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  {/* Glassmorphic Tag */}
                  <div className="absolute top-4 left-4 bg-white/85 backdrop-blur-md text-ink text-[8px] tracking-[0.25em] uppercase px-3.5 py-2 font-semibold border border-white/20 shadow-sm">
                    {offer.tag}
                  </div>
                </div>

                {/* Details split with Giant Discount Indicator */}
                <div className="flex gap-5 sm:gap-6 items-start mt-6 sm:mt-8">
                  {/* Giant Elegant Discount Indicator */}
                  <div className="font-display text-5xl sm:text-6xl font-light text-[#C49A5D] leading-none shrink-0 select-none">
                    {offer.discount}
                  </div>

                  {/* Text Contents */}
                  <div className="flex-1 flex flex-col items-start min-w-0">
                    {/* Subtitle and Copy Code */}
                    <div className="flex items-center gap-2 flex-wrap mb-2 select-none">
                      <span className="text-[9px] tracking-[0.2em] uppercase text-[#C49A5D] font-bold">
                        {offer.subtitle}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-sand/80" />
                      <button
                        onClick={() => handleCopy(offer.code)}
                        className="group/copy relative inline-flex items-center gap-1 text-[9px] tracking-[0.2em] uppercase text-stone-500 hover:text-ink font-semibold transition-colors"
                        title="Click to copy promo code"
                      >
                        <span>
                          CODE: <span className="underline decoration-dotted decoration-stone-400 group-hover/copy:decoration-solid">{offer.code}</span>
                        </span>
                        {copiedCode === offer.code ? (
                          <span className="text-terracotta text-[8px] font-bold ml-1 transition-all duration-300">
                            ✓ COPIED
                          </span>
                        ) : (
                          <span className="text-stone-400 text-[8px] font-normal opacity-0 group-hover/copy:opacity-100 transition-all duration-300 ml-1">
                            ↳ COPY
                          </span>
                        )}
                      </button>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-light text-ink tracking-wide mb-3 group-hover:text-[#C49A5D] transition-colors duration-500">
                      {offer.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-muted font-light leading-relaxed tracking-wide mb-6 sm:mb-8">
                      {offer.desc}
                    </p>

                    <a
                      href={offer.href}
                      className="group/btn inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-ink font-bold border-b border-ink/20 pb-1.5 hover:border-ink transition-all duration-500"
                    >
                      <span>{offer.cta}</span>
                      <ArrowRight size={12} className="text-[#C49A5D] transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
