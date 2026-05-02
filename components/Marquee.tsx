"use client";

const ITEMS = [
  "Free Design Consultation",
  "Pan India Shipping",
  "Up to 60% Off — Warehouse Sale",
  "No-Cost EMI Available",
  "Made to Order · Ships in 6–8 Weeks",
  "Ethically Crafted in India",
  "4.9 ★ — 2,400+ Happy Homes",
];

export default function Marquee() {
  const repeated = [...ITEMS, ...ITEMS];

  return (
    <div className="bg-warm-white border-b border-sand/40 overflow-hidden py-4 sm:py-5 select-none">
      <div
        className="flex items-center gap-0 whitespace-nowrap"
        style={{ animation: "marquee 32s linear infinite" }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center text-charcoal text-[9px] tracking-[0.25em] uppercase font-medium flex-shrink-0">
            {item}
            <span className="mx-8 sm:mx-12 text-sand text-[10px]">◈</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
