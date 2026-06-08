export default function Testimonials() {
  const reviews = [
    {
      quote: "The craftsmanship is unlike anything we have seen at this price point in India. Every detail considered.",
      name: "Aisha Mehta",
      detail: "Mumbai · Sovereign Bouclé Sofa"
    },
    {
      quote: "From consultation to delivery every step felt genuinely premium. Worth every rupee.",
      name: "Vikram Nair",
      detail: "Bangalore · Nicholas Lounge Chair"
    },
    {
      quote: "We compared with five other brands. LivingSpace was the only one that felt truly handcrafted.",
      name: "Preethi Krishnan",
      detail: "Chennai · Teak Dining Set"
    }
  ];

  return (
    <section className="bg-warm-white py-24 lg:py-28 border-t border-sand/35">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-20 xl:px-24">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <p className="font-sans text-[11px] tracking-widest uppercase text-[#C49A5D] font-semibold mb-3">
            Client Stories
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-ink tracking-wide mb-3">
            Homes That Inspire Us
          </h2>
          <p className="font-sans text-xs sm:text-sm text-muted font-light tracking-wide">
            Real spaces. Real stories.
          </p>
        </div>

        {/* 3 Columns Desktop, 1 Column Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-sand/35 p-8 flex flex-col justify-between h-full shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-md transition-shadow duration-500"
            >
              <div className="space-y-4">
                {/* Quote Mark and Stars */}
                <div className="flex justify-between items-start">
                  <span className="font-display text-6xl text-[#C49A5D] opacity-30 select-none leading-none -mt-4">
                    “
                  </span>
                  <span className="text-[#C49A5D] text-xs tracking-wider">
                    ★★★★★
                  </span>
                </div>
                
                {/* Review Text */}
                <p className="font-sans text-sm text-ink/85 leading-relaxed font-light">
                  {rev.quote}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-sand/35 space-y-2">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-sans font-medium text-[13px] text-ink">
                    {rev.name}
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-emerald-700 font-semibold">
                    · Verified Purchase
                  </span>
                </div>
                <p className="font-sans text-[12px] text-muted font-light">
                  {rev.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
