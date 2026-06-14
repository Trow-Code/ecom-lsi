import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface EditorialHeroProps {
  label: string;
  headline: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  desktopHeightClass?: string; // e.g. "lg:h-[520px]"
  mobileHeightClass?: string;  // e.g. "h-[320px]"
}

export default function EditorialHero({
  label,
  headline,
  ctaText,
  ctaHref,
  imageSrc,
  desktopHeightClass = "lg:h-[520px]",
  mobileHeightClass = "h-[320px]"
}: EditorialHeroProps) {
  return (
    <section className="w-full relative overflow-hidden bg-sand/10">
      <div className={`relative w-full ${mobileHeightClass} ${desktopHeightClass}`}>
        <Image
          src={imageSrc}
          alt={headline}
          fill
          className="object-cover"
          loading="lazy"
          sizes="100vw"
        />
        {/* Dark cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />
        
        {/* Content bottom-left */}
        <div className="absolute inset-0 max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-20 xl:px-24 flex items-end justify-start pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-2xl text-left space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <span className="font-sans text-[11px] tracking-widest text-[#C49A5D] uppercase font-semibold">
                {label}
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight">
                {headline}
              </h2>
            </div>
            <div>
              <a
                href={ctaHref}
                className="group inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-white font-bold"
              >
                <span className="relative pb-1">
                  {ctaText}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20" />
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500" />
                </span>
                <ArrowRight size={12} className="text-[#C49A5D] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
