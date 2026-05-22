"use client";
import { Plus, Heart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

const PRODUCTS = [
  { id: 1, name: "Miller Cane Three Seater", price: 168000, originalPrice: 210000, category: "Living", image: "/hero_living_room_1_1777654627821.png" },
  { id: 2, name: "Orb Candle Holder", price: 3400, originalPrice: 4857, category: "Décor", image: "/hero_furniture_detail_1777654659357.png" },
  { id: 3, name: "Nicholas Lounge Chair", price: 89000, originalPrice: 112000, category: "Furniture", image: "/hero_modern_dining.png" },
  { id: 4, name: "Puffer Sectional Sofa", price: 274400, originalPrice: 390000, category: "Living", image: "/hero_living_room_1_1777654627821.png" },
  { id: 5, name: "Tapered Candle Set", price: 5400, originalPrice: 7714, category: "Décor", image: "/hero_furniture_detail_1777654659357.png" },
  { id: 6, name: "Arona Rattan Chair", price: 28000, originalPrice: 45000, category: "Furniture", image: "/hero_modern_dining.png" },
  { id: 7, name: "Velvet Accent Chair", price: 42000, originalPrice: 60000, category: "Living", image: "/hero_living_room_1_1777654627821.png" },
  { id: 8, name: "Travertine Coffee Table", price: 56000, originalPrice: 80000, category: "Furniture", image: "/hero_modern_dining.png" },
  { id: 9, name: "Ceramic Vase - Bone", price: 2400, originalPrice: 3500, category: "Décor", image: "/hero_furniture_detail_1777654659357.png" },
  { id: 10, name: "Linear Brass Pendant", price: 12000, originalPrice: 18000, category: "Lighting", image: "/hero_modern_dining.png" },
  { id: 11, name: "Opal Glass Table Lamp", price: 8500, originalPrice: 12000, category: "Lighting", image: "/hero_furniture_detail_1777654659357.png" },
  { id: 12, name: "Studio Floor Lamp", price: 15400, originalPrice: 22000, category: "Lighting", image: "/hero_living_room_1_1777654627821.png" },
];

const CATEGORIES = ["All", "Living", "Furniture", "Décor", "Lighting"];

function fmt(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("All");
  
  // Filtering logic: 6 for 'All', 3 for others
  const filteredProducts = activeTab === "All" 
    ? PRODUCTS.slice(0, 6) 
    : PRODUCTS.filter(p => p.category === activeTab).slice(0, 3);

  return (
    <section className="pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-24 bg-warm-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Editorial Header & Filters - Same Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 lg:mb-14">
          <div className="max-w-xl">
            <h2 className="font-display text-[45px] sm:text-[55px] lg:text-[72px] font-light text-ink leading-[1.1] tracking-tight">
              New Arrivals
            </h2>
          </div>
          
          {/* Minimalist Category Filter - Right Aligned on Desktop */}
          <div className="flex items-center lg:justify-end gap-6 sm:gap-10 overflow-x-auto pb-4 scrollbar-none border-b border-sand/40 lg:border-none lg:pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-[10px] tracking-[0.25em] uppercase transition-all duration-300 relative pb-2 ${
                  activeTab === cat ? "text-ink font-medium" : "text-muted hover:text-charcoal"
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-terracotta" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Minimal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
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
      <div className="relative aspect-[3/4] overflow-hidden bg-sand/10 mb-8 group/img">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover transition-transform duration-[2s] group-hover:scale-110"
        />
        
        {/* Top-right Wishlist */}
        <button
          onClick={(e) => { e.stopPropagation(); setWished(!wished); }}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
        >
          <Heart size={14} className={wished ? "fill-terracotta text-terracotta" : "text-ink/40"} strokeWidth={1.5} />
        </button>

        {/* Modernized Glassmorphic Add to Bag Button */}
        <div className="absolute inset-x-0 bottom-6 flex justify-center z-20 px-6">
          <button
            onClick={() => addItem({ id, name, price, category, gradient: "" })}
            className="w-full py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] tracking-[0.3em] uppercase font-medium translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex items-center justify-center gap-3 hover:bg-white hover:text-ink"
          >
            Add to Bag <Plus size={14} />
          </button>
        </div>
      </div>

      {/* Balanced Product Info */}
      <div className="flex flex-col flex-1 px-1">
        <p className="text-[9px] tracking-[0.25em] uppercase text-muted mb-3">{category}</p>
        
        <h3 className="font-sans text-lg lg:text-[20px] text-ink font-medium leading-tight mb-3 group-hover:text-terracotta transition-colors duration-400">
          {name}
        </h3>
        
        <div className="mt-auto flex items-baseline gap-3 flex-wrap">
          <span className="text-[17px] font-medium text-ink">{fmt(price)}</span>
          <span className="text-[11px] text-muted line-through font-light">{fmt(originalPrice)}</span>
          <span className="text-[10px] text-terracotta font-medium tracking-wide">({discount}% OFF)</span>
        </div>
      </div>
    </div>
  );
}
