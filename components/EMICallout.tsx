"use client";
import { ArrowRight } from "lucide-react";

export default function EMICallout() {
  return (
    <section className="bg-ink text-white py-20 sm:py-24 border-t border-sand/20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-20 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#C49A5D] font-semibold mb-3">
              Financing Privilege
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[45px] font-light tracking-wide mb-5 text-white leading-tight">
              Acquire Now, Appreciate Forever.
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/70 font-light leading-relaxed tracking-wide max-w-3xl">
              Indulge in masterfully crafted luxury furniture with our bespoke payment plans. Enjoy 
              <span className="text-white font-medium"> zero-cost, interest-free EMI options for up to 12 months </span> 
              across all leading financial institutions. Select plans start from just ₹12,500/month.
            </p>
          </div>

          {/* Right Action Column */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-6 lg:justify-center">
            <a
              href="/emi-plans"
              className="inline-flex items-center gap-4 py-3.5 px-6 sm:px-8 bg-white text-ink font-sans text-[10px] tracking-[0.25em] uppercase font-bold hover:bg-[#C49A5D] hover:text-white transition-all duration-500 shadow-md cursor-pointer"
            >
              <span>View EMI Structure</span>
              <ArrowRight size={12} />
            </a>
            
            <p className="font-sans text-[10px] text-white/40 font-light tracking-wide uppercase select-none">
              *Applicable on orders above ₹1,00,000
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
