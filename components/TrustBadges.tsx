"use client";
import { Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";

const BADGES = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over ₹50,000"
  },
  {
    icon: ShieldCheck,
    title: "5-Year Warranty",
    description: "On all furniture pieces"
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day return policy"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert assistance anytime"
  }
];

export default function TrustBadges() {
  return (
    <div className="border-t border-b border-sand/30 bg-white">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-sand/35">
          
          {BADGES.map((badge, idx) => {
            const IconComponent = badge.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-4 py-6 sm:py-8 px-4 lg:px-6 hover:bg-[#FAF8F5] transition-colors duration-500 group cursor-default"
              >
                {/* Minimalist Champagne Icon */}
                <div className="text-[#C49A5D] shrink-0 transition-transform duration-500 group-hover:scale-110">
                  <IconComponent size={20} strokeWidth={1.2} />
                </div>

                {/* Content */}
                <div className="flex flex-col text-left">
                  <h4 className="text-[10px] sm:text-[11px] font-semibold text-ink tracking-[0.2em] uppercase">
                    {badge.title}
                  </h4>
                  <p className="text-[11px] text-charcoal/65 font-light mt-0.5 whitespace-nowrap">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}
