"use client";
import { Plus, Heart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

const PRODUCTS = [
  { 
    id: 1, 
    name: "Miller Cane Three Seater", 
    price: 168000, 
    originalPrice: 210000, 
    category: "Living", 
    image: "/prod_miller_cane_sofa_1777655124777.png" 
  },
  { 
    id: 2, 
    name: "Orb Candle Holder", 
    price: 3400, 
    originalPrice: 4857, 
    category: "Décor", 
    image: "/prod_orb_candle_holder_1777655159473.png" 
  },
  { 
    id: 3, 
    name: "Nicholas Lounge Chair", 
    price: 89000, 
    originalPrice: 112000, 
    category: "Furniture", 
    image: "/prod_nicholas_lounge_chair_1777655201291.png" 
  },
  { 
    id: 4, 
    name: "Puffer Sectional Sofa", 
    price: 274400, 
    originalPrice: 390000, 
    category: "Living", 
    image: "/prod_puffer_sectional_sofa_1777655249000.png" 
  },
  { 
    id: 5, 
    name: "Tapered Candle Set", 
    price: 5400, 
    originalPrice: 7714, 
    category: "Décor", 
    image: "/prod_tapered_candles_set_1777655300210.png" 
  },
  { 
    id: 6, 
    name: "Arona Rattan Chair", 
    price: 28000, 
    originalPrice: 45000, 
    category: "Furniture", 
    image: "/prod_arona_rattan_chair_1777655346032.png" 
  }
];

const CATEGORIES = ["All", "Living", "Furniture", "Décor"];

function fmt(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("All");
  
  const filteredProducts = activeTab === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeTab);

  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] border-t border-sand/35">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Editorial Header & Filters - Same Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#C49A5D] font-semibold mb-3">
              New Releases
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-ink tracking-wide">
              New Arrivals
            </h2>
          </div>
          
          {/* Minimalist Category Filter */}
          <div className="flex items-center lg:justify-end gap-6 sm:gap-8 overflow-x-auto pb-3 scrollbar-none border-b border-sand/30 lg:border-none lg:pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-[10px] tracking-[0.25em] uppercase transition-all duration-300 relative pb-1.5 ${
                  activeTab === cat ? "text-ink font-medium" : "text-stone-400 hover:text-ink"
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C49A5D]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Minimal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProductCard({ id, name, price, originalPrice, category, image }: typeof PRODUCTS[0]) {
  const { addItem } = useCart();
  const [wished, setWished] = useState(false);
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div className="group flex flex-col h-full">
      {/* Studio Image Area */}
      <div className="relative aspect-[3/4] overflow-hidden bg-sand/10 mb-6 group/img border border-sand/20">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover transition-transform duration-[2s] group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Top-right Wishlist */}
        <button
          onClick={(e) => { e.stopPropagation(); setWished(!wished); }}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 shadow-sm"
          aria-label="Add to wishlist"
        >
          <Heart size={13} className={wished ? "fill-terracotta text-terracotta" : "text-ink/60"} strokeWidth={1.5} />
        </button>

        {/* Glassmorphic Add to Bag Button */}
        <div className="absolute inset-x-4 bottom-4 flex justify-center z-20">
          <button
            onClick={() => addItem({ id: String(id), name, price, image })}
            className="w-full py-3 bg-white/90 backdrop-blur-md border border-sand/30 text-ink text-[10px] tracking-[0.25em] uppercase font-bold translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex items-center justify-center gap-2 hover:bg-ink hover:text-white"
          >
            Add to Bag <Plus size={12} />
          </button>
        </div>
      </div>

      {/* Balanced Product Info */}
      <div className="flex flex-col flex-1 px-1">
        <p className="text-[9px] tracking-[0.25em] uppercase text-stone-500 mb-2">{category}</p>
        
        <h3 className="font-display text-lg text-ink font-light leading-tight mb-2 group-hover:text-[#C49A5D] transition-colors duration-300">
          {name}
        </h3>
        
        <div className="mt-auto flex items-baseline gap-3 flex-wrap">
          <span className="text-base font-semibold text-ink">{fmt(price)}</span>
          <span className="text-xs text-stone-400 line-through font-light">{fmt(originalPrice)}</span>
          <span className="text-[10px] text-terracotta font-medium tracking-wide">({discount}% OFF)</span>
        </div>
      </div>
    </div>
  );
}
