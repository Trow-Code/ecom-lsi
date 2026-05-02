"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setVisible(scrollTop > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-28 sm:bottom-10 right-6 z-[70] group"
        >
          {/* Progress Ring */}
          <div className="relative w-12 h-12 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="24"
                cy="24"
                r="22"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="transparent"
                className="text-sand/30"
              />
              <circle
                cx="24"
                cy="24"
                r="22"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="transparent"
                strokeDasharray={138.23}
                strokeDashoffset={138.23 - (138.23 * progress) / 100}
                className="text-terracotta transition-all duration-300 ease-out"
              />
            </svg>
            
            {/* Inner Button */}
            <div className="absolute inset-[3px] bg-ink rounded-full flex items-center justify-center text-white group-hover:bg-terracotta transition-colors duration-500 shadow-xl">
              <ArrowUp size={16} strokeWidth={1.5} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
