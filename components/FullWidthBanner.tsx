"use client";
import Image from "next/image";

export default function FullWidthBanner() {
  return (
    <section className="bg-[#FAF8F5] py-8 sm:py-12">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24">
        <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[500px] overflow-hidden border border-sand/25">

          {/* Background Image - Styled with vertical offset to frame the sofa/table crop perfectly */}
          <Image
            src="/sale_banner_sofa_wide.png"
            alt="Living Room Sofa Sale"
            fill
            className="object-cover object-[center_50%]"
            priority
            unoptimized
          />

          {/* Subtle blend gradient to enhance text readability on the left, matching warm-sand background */}
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#FAF8F5]/95 via-[#FAF8F5]/60 to-transparent w-[85%] sm:w-[65%] md:w-[55%] lg:w-[45%]" />

          {/* Content overlay inside contained frame */}
          <div className="absolute inset-0 p-6 sm:p-12 lg:p-16 flex items-center justify-start">

            {/* Blended Typography Panel */}
            <div className="max-w-md w-full relative z-10 space-y-4 sm:space-y-6">
              <div className="space-y-1.5">
                <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#C49A5D] font-semibold">
                  Limited Time Offer
                </p>
                <h2 className="font-display text-xl sm:text-3xl lg:text-4xl font-light text-ink tracking-wide leading-tight">
                  The Living <br className="hidden sm:block" />Room Sale
                </h2>
              </div>

              <p className="text-[11px] sm:text-sm text-charcoal/90 font-light leading-relaxed max-w-[280px] sm:max-w-none">
                Upgrade your space with our premium sofas, sectionals, and lounge chairs. Get 15% off and free delivery.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-2 sm:pt-4">
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
