"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BANNERS = [
  {
    id: 1,
    desktopImage: "/bann2.webp",
    mobileImage: "/bann2_m.webp" // You can replace this with your 4:5 mobile banner image when ready
  },
  {
    id: 2,
    desktopImage: "/bann3.webp",
    mobileImage: "/bann3_m.webp"
  },
  {
    id: 3,
    desktopImage: "/bann5.webp",
    mobileImage: "/bann5_m.webp"
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BANNERS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % BANNERS.length);
  };

  return (
    <section className="relative w-full aspect-[2/3] sm:h-auto sm:aspect-[2480/1063] bg-[#FAF8F5] overflow-hidden flex flex-col">
      {/* Slide Image Frame */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Desktop Banner Image (Visible on sm screens and up) */}
          <div className="hidden sm:block relative w-full h-full">
            <Image
              src={BANNERS[current].desktopImage}
              alt={`Desktop Banner ${BANNERS[current].id}`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>

          {/* Mobile Banner Image (Visible on screens below sm) */}
          <div className="block sm:hidden relative w-full h-full">
            <Image
              src={BANNERS[current].mobileImage || BANNERS[current].desktopImage}
              alt={`Mobile Banner ${BANNERS[current].id}`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center text-stone-400 hover:text-ink transition-all duration-300 group hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:-translate-x-1" strokeWidth={1.2} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center text-stone-400 hover:text-ink transition-all duration-300 group hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:translate-x-1" strokeWidth={1.2} />
      </button>

      {/* Slide Indicator Lines */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {BANNERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[2px] transition-all duration-500 rounded-full ${current === i ? "w-10 bg-[#C49A5D]" : "w-4 bg-[#C49A5D]/25 hover:bg-[#C49A5D]/50"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

