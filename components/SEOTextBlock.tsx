"use client";
import { useState } from "react";

export default function SEOTextBlock() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-warm-white border-t border-sand/20">
      <div className="max-w-3xl mx-auto py-16 px-6 text-center space-y-4">
        <h2 className="font-sans text-[12px] uppercase tracking-widest text-muted font-semibold">
          Buy Premium Furniture Online in India
        </h2>
        
        <div className="font-sans text-[13px] leading-[1.9] text-muted font-light text-justify sm:text-center max-w-2xl mx-auto">
          <p>
            LivingSpace is India's destination for ultra-luxury furniture. Our collections span living room, dining, bedroom and outdoor — each handcrafted by master artisans across Jaipur, Kochi, Ahmedabad and Bangalore using premium materials sourced globally.{" "}
            {!expanded && "..."}
          </p>
          
          {expanded && (
            <div className="mt-4 pt-4 border-t border-sand/20 space-y-4 text-left sm:text-center">
              <p>
                <strong className="font-medium text-ink/85">Superior Craftsmanship:</strong> Italian bouclé, solid teak, European oak, hand-finished metals.
              </p>
              <p>
                <strong className="font-medium text-ink/85">Custom Made:</strong> Design consultation for material, finish, and configuration tailored to your space.
              </p>
              <p>
                <strong className="font-medium text-ink/85">Pan-India Delivery:</strong> White-glove delivery and installation across Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, and Kochi.
              </p>
              <p>
                <strong className="font-medium text-ink/85">No-Cost EMI:</strong> Plans from ₹8,500 per month across 15 major banks.
              </p>
            </div>
          )}
        </div>

        <div className="pt-2">
          <button
            onClick={() => setExpanded(!expanded)}
            className="font-sans text-[12px] underline text-muted hover:text-ink transition-colors cursor-pointer focus:outline-none"
          >
            {expanded ? "Read less ↑" : "Read more ↓"}
          </button>
        </div>
      </div>
    </section>
  );
}
