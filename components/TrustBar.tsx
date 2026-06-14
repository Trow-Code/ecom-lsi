import React from "react";
import { Star, Truck, ShieldCheck, Phone } from "lucide-react";

const icons = [Star, Truck, ShieldCheck, Phone];

export default function TrustBar() {
  const items = [
    { label: "4.9 / 5", value: "2,400+ Homes" },
    { label: "Free Delivery", value: "Above ₹50,000" },
    { label: "5-Year Warranty", value: "Every Piece" },
    { label: "Complimentary", value: "Design Consultation" },
  ];

  return (
    <div className="bg-warm-white border-y border-sand/35 py-4 w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-20 xl:px-24">
        {/* Mobile: 2x2 grid, Desktop: 1 row with separators */}
        <div className="grid grid-cols-2 lg:flex lg:flex-row lg:items-center lg:justify-between gap-y-4 gap-x-2 lg:gap-0">
          {items.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-center gap-2 lg:flex-1 lg:justify-center">
                  <Icon size={20} strokeWidth={1.5} className="text-[#C49A5D] shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-sans uppercase tracking-widest text-[11px] text-[#C49A5D] font-semibold leading-tight">
                      {item.label}
                    </span>
                    <span className="font-sans text-[13px] text-ink font-light leading-tight mt-0.5">
                      {item.value}
                    </span>
                  </div>
                </div>
                {/* Divider - visible only on desktop and not after the last item */}
                {idx < items.length - 1 && (
                  <div className="hidden lg:block h-8 w-[1px] bg-sand/35" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
