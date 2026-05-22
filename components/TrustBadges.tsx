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
    <div className="py-12 sm:py-16 border-b border-sand/30 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          
          {BADGES.map((badge, idx) => {
            const IconComponent = badge.icon;
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center group cursor-default"
              >
                {/* Minimalist Icon: Thin outline, floats on hover */}
                <div className="text-[#C49A5D] transition-transform duration-500 group-hover:-translate-y-1.5 flex items-center justify-center">
                  <IconComponent size={26} strokeWidth={1} />
                </div>

                {/* Content */}
                <div className="mt-4 space-y-1">
                  <h3 className="text-xs font-semibold text-ink tracking-[0.2em] uppercase">
                    {badge.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-charcoal/60 font-light leading-relaxed max-w-[200px] mx-auto">
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
