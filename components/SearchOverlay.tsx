"use client";
import { useCart } from "@/context/CartContext";
import { Search, X, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const TRENDING = ["Rattan Chair", "Village Collection", "Candle Holders", "Lounge Sofa", "Side Table"];
const CATEGORIES = ["Furniture", "Décor", "Lighting", "Outdoor", "Collections"];

export default function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useCart();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setSearchOpen]);

  return (
    <div
      className={`fixed inset-0 z-[80] bg-warm-white transition-opacity duration-300 ${searchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div className="max-w-[800px] mx-auto px-6 pt-24 pb-12">
        {/* Close */}
        <button
          onClick={() => setSearchOpen(false)}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-muted hover:text-ink transition-colors"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        {/* Input */}
        <div className="flex items-center border-b-2 border-ink pb-3 mb-12 gap-4">
          <Search size={20} strokeWidth={1.5} className="text-muted flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for furniture, décor, collections…"
            className="flex-1 font-display text-3xl lg:text-4xl font-light text-ink bg-transparent outline-none placeholder-stone/50"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-muted hover:text-ink transition-colors">
              <X size={18} strokeWidth={1.5} />
            </button>
          )}
        </div>

        {!query && (
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Trending */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-5">Trending Searches</p>
              <ul className="space-y-3">
                {TRENDING.map((t) => (
                  <li key={t}>
                    <button
                      onClick={() => setQuery(t)}
                      className="flex items-center gap-3 text-sm text-charcoal hover:text-terracotta transition-colors group"
                    >
                      <ArrowRight size={13} className="text-stone group-hover:translate-x-1 transition-transform" />
                      {t}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* Categories */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-5">Browse by Category</p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    className="border border-sand text-[11px] tracking-[0.15em] uppercase px-4 py-2 text-charcoal hover:border-terracotta hover:text-terracotta transition-colors"
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {query && (
          <div>
            <p className="text-sm text-muted mb-6">
              Showing results for <span className="text-ink font-medium">"{query}"</span>
            </p>
            <p className="text-sm text-muted font-light">
              Press Enter or browse below — connect your product database to show live results.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
