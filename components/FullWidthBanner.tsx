"use client";
import Image from "next/image";

export default function FullWidthBanner() {
  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[500px] overflow-hidden">
          
          {/* Background Image */}
          <Image
            src="/Fig/banner.png"
            alt="Living Room Sofa Sale"
            fill
            className="object-cover object-left md:object-center"
            priority
            sizes="(max-width: 1440px) 100vw, 1280px"
          />

          {/* Subtle blend gradient to enhance text readability on the left, restricted to the text area */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent w-full md:w-[45%]" />

          {/* Content overlay inside contained frame */}
          <div className="absolute inset-0 p-8 sm:p-12 lg:p-16 flex items-center justify-start">
            
            {/* Blended Typography Panel */}
            <div className="max-w-md w-full relative z-10 space-y-6">
              <div className="space-y-2">
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#C49A5D] font-semibold">
                  Limited Time Offer
                </p>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-ink tracking-wide leading-tight">
                  The Living <br />Room Sale
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-charcoal/90 font-light leading-relaxed">
                Upgrade your space with our premium sofas, sectionals, and lounge chairs. Get 15% off and free home delivery on all orders.
              </p>

              <div className="flex flex-row items-center gap-6 pt-4">
                {/* Promo Code Box */}
                <div className="inline-flex items-center gap-2 border border-dashed border-[#C49A5D]/50 bg-[#C49A5D]/5 px-3 py-1.5">
                  <span className="text-[8px] tracking-[0.1em] uppercase text-stone-500 font-medium">Code:</span>
                  <span className="text-[10px] tracking-[0.2em] font-semibold text-[#C49A5D] uppercase">
                    SOFA15
                  </span>
                </div>

                {/* Button */}
                <a
                  href="#collections"
                  className="group inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-ink font-semibold border-b border-ink/40 pb-1.5 hover:border-ink transition-all duration-300"
                >
                  <span>Shop Sofa Collection</span>
                  <span className="text-[#C49A5D] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
