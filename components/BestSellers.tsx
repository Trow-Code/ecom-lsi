"use client";
import Image from "next/image";
import { Heart, Plus } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const BEST_SELLERS = [
  {
    id: "bs-1",
    name: "Sovereign Bouclé Sofa",
    price: 185000,
    originalPrice: 220000,
    category: "Living",
    image: "/SOFA.jpg"
  },
  {
    id: "bs-2",
    name: "Atelier Side Table",
    price: 32000,
    originalPrice: 40000,
    category: "Furniture",
    image: "/SIDE TABLE(2).jpg"
  },
  {
    id: "bs-3",
    name: "Organic Tea Poy Coffee Table",
    price: 45000,
    originalPrice: 58000,
    category: "Furniture",
    image: "/TEA POY(1).JPG"
  },
  {
    id: "bs-4",
    name: "Minimalist Console Table",
    price: 68000,
    originalPrice: 85000,
    category: "Furniture",
    image: "/CONSOLE TABLE 1.jpg"
  }
];

function fmt(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function BestSellers() {
  const { addItem } = useCart();
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});

  const toggleWish = (id: string) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="bg-[#FAF8F5] py-20 sm:py-24 border-t border-sand/35">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#C49A5D] font-semibold mb-3">
              Customer Favorites
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-ink tracking-wide">
              Best Sellers
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-charcoal/70 font-light max-w-sm">
            Explore our most sought-after designs, meticulously crafted to bring timeless form and daily comfort to your home.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {BEST_SELLERS.map((item) => {
            const isWished = !!wishlist[item.id];
            const discount = Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);

            return (
              <div key={item.id} className="group flex flex-col h-full">
                {/* Image Wrapper */}
                <div className="relative aspect-[3/4] overflow-hidden bg-sand/10 border border-sand/20 mb-6 group/img">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Discount Badge */}
                  <span className="absolute top-4 left-4 bg-terracotta text-white text-[8px] tracking-wider uppercase px-2 py-1 font-semibold z-10 border border-white/10">
                    -{discount}%
                  </span>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWish(item.id)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-all duration-300 z-10"
                    aria-label="Add to wishlist"
                  >
                    <Heart
                      size={13}
                      className={isWished ? "fill-terracotta text-terracotta" : "text-ink/60"}
                      strokeWidth={1.5}
                    />
                  </button>

                  {/* Quick Add Overlay Button on Hover */}
                  <div className="absolute inset-x-4 bottom-4 flex justify-center z-10">
                    <button
                      onClick={() => addItem({ id: item.id, name: item.name, price: item.price, image: item.image })}
                      className="w-full py-3 bg-white/90 backdrop-blur-md border border-sand/30 text-ink text-[10px] tracking-[0.25em] uppercase font-bold translate-y-4 opacity-0 group-hover/img:translate-y-0 group-hover/img:opacity-100 transition-all duration-500 ease-out flex items-center justify-center gap-2 hover:bg-ink hover:text-white"
                    >
                      Add to Bag <Plus size={12} />
                    </button>
                  </div>
                </div>

                {/* Product Metadata */}
                <div className="flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <p className="text-[9px] tracking-[0.15em] uppercase text-stone-500 mb-1">
                      {item.category}
                    </p>
                    <h3 className="font-display text-lg font-light text-ink tracking-wide group-hover:text-[#C49A5D] transition-colors duration-300">
                      {item.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <span className="text-base font-semibold text-ink">{fmt(item.price)}</span>
                    <span className="text-xs text-stone-400 line-through font-light">
                      {fmt(item.originalPrice)}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
