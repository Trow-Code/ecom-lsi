"use client";

const ITEMS = [
  "Free Design Consultation",
  "Custom Made Furniture",
  "All India Delivery",
  "The Warehouse Archive Sale",
  "Easy EMI Available",
  "Premium Quality Materials",
];

export default function Marquee() {
  const repeated = [...ITEMS, ...ITEMS];

  return (
    <div className="bg-ink overflow-hidden py-2.5 select-none">
      <div
        className="flex items-center gap-0 whitespace-nowrap"
        style={{ animation: "marquee 35s linear infinite" }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center text-white/85 text-[9px] tracking-[0.22em] uppercase font-light flex-shrink-0">
            {item}
            <span className="mx-10 sm:mx-14 text-[#C49A5D] text-[10px] font-normal">•</span>
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
