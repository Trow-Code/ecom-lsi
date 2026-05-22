"use client";
import Image from "next/image";

export default function OfferBanners() {
  const OFFERS = [
    {
      title: "THE ARCHIVE EDIT",
      subtitle: "Privilege Pricing",
      desc: "Enjoy up to 30% off select design classics from our signature collections.",
      code: "ARCHIVE30",
      cta: "Explore Archive",
      href: "#collections",
      img: "/hero_furniture_detail_1777654659357.png",
      tag: "Limited Selection"
    },
    {
      title: "ATELIER COMPLIMENT",
      subtitle: "Signature Finishing",
      desc: "Receive a complimentary custom wood finishing treatment on dining orders above ₹1,50,000.",
      code: "ATELIERFINISH",
      cta: "Book Consultation",
      href: "#consultation",
      img: "/hero_modern_dining.png",
      tag: "Seasonal Privilege"
    }
  ];

  return (
    <section className="bg-warm-white py-16 sm:py-20 lg:py-24 border-t border-sand/20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#C49A5D] font-medium mb-3">
            Exclusive Privileges
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-light text-ink tracking-wide">
            Limited Editions & Offers
          </h2>
        </div>

        {/* Banners Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
          {OFFERS.map((offer) => (
            <div 
              key={offer.title}
              className="flex flex-col md:flex-row bg-[#FAF8F5] border border-sand/40 overflow-hidden group transition-all duration-500 hover:shadow-xl hover:border-sand/60"
            >
              {/* Image side */}
              <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto relative overflow-hidden">
                <Image
                  src={offer.img}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
                <span className="absolute top-4 left-4 bg-ink/90 text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1 font-medium">
                  {offer.tag}
                </span>
              </div>

              {/* Content side */}
              <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-between items-start space-y-6">
                <div className="space-y-3">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#C49A5D] font-medium">
                    {offer.subtitle}
                  </p>
                  <h3 className="font-display text-xl font-light text-ink tracking-wide">
                    {offer.title}
                  </h3>
                  <p className="text-sm text-charcoal font-light leading-relaxed">
                    {offer.desc}
                  </p>
                </div>

                <div className="flex flex-row items-center gap-4 w-full pt-2 flex-wrap">
                  {/* Promo Code Box */}
                  <div className="inline-flex items-center gap-2 border border-dashed border-[#C49A5D]/50 bg-[#C49A5D]/5 px-3 py-1.5">
                    <span className="text-[8px] tracking-[0.1em] uppercase text-stone-500 font-medium">Code:</span>
                    <span className="text-[10px] tracking-[0.2em] font-semibold text-[#C49A5D] uppercase">
                      {offer.code}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={offer.href}
                    className="group/btn inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-ink font-semibold border-b border-ink/40 pb-1.5 hover:border-ink transition-all duration-300"
                  >
                    <span>{offer.cta}</span>
                    <span className="text-[#C49A5D] transition-transform duration-300 group-hover/btn:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
