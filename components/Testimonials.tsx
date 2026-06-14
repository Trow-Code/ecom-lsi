import { Star } from "lucide-react";

const reviews = [
  {
    quote: "The craftsmanship is unlike anything we have seen at this price point in India. Every detail considered.",
    name: "Aisha Mehta",
    location: "Mumbai",
    product: "Sovereign Bouclé Sofa",
  },
  {
    quote: "From consultation to delivery every step felt genuinely premium. Worth every rupee.",
    name: "Vikram Nair",
    location: "Bangalore",
    product: "Nicholas Lounge Chair",
  },
  {
    quote: "We compared with five other brands. LivingSpace was the only one that felt truly handcrafted.",
    name: "Preethi Krishnan",
    location: "Chennai",
    product: "Teak Dining Set",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#FAF8F5] py-24 lg:py-32 border-t border-sand/35">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-20 xl:px-24">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <p className="font-sans text-[11px] tracking-widest uppercase text-[#C49A5D] font-semibold mb-3">
            Client Stories
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-light text-ink tracking-wide leading-tight">
            Homes That Inspire Us
          </h2>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-sand/40">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="flex flex-col px-0 md:px-10 py-10 md:py-0 first:pt-0 last:pb-0 md:first:pl-0 md:last:pr-0"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className="fill-[#C49A5D] text-[#C49A5D]"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Large opening quote */}
              <span className="font-serif text-7xl text-[#C49A5D]/20 select-none leading-none -mb-4 -mt-2">
                &ldquo;
              </span>

              {/* Quote */}
              <p className="font-sans text-[15px] text-ink/80 leading-relaxed font-light italic flex-1">
                {rev.quote}
              </p>

              {/* Author */}
              <div className="mt-8 pt-6 border-t border-sand/35">
                <p className="font-sans font-medium text-[13px] text-ink">{rev.name}</p>
                <p className="font-sans text-[12px] text-muted font-light mt-0.5">
                  {rev.location} &middot; {rev.product}
                </p>
                <span className="inline-block mt-2 font-sans text-[10px] uppercase tracking-widest text-emerald-700 font-semibold">
                  Verified Purchase
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
