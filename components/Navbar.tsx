"use client";
import { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag, Menu, X, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

const NAV = [
  { label: "New", href: "#" },
  {
    label: "Collection",
    href: "#collections",
    mega: [
      {
        title: "Latest Edition",
        links: ["Village Collection", "Monocraft Collection", "Incurve Episodes", "Veda Sangrah"]
      },
      {
        title: "Signature Line",
        links: ["Copenhagen Curves", "Jess Design", "Verandah Collection", "Miller Lounge Series"]
      },
      {
        title: "Exclusive Edit",
        links: ["Isles of Greece", "Ebba 2.0", "Home and Cottage", "Chandigarh Sangrah"]
      }
    ]
  },
  { label: "Best Sellers", href: "#" },
  { label: "Workspace", href: "#" },
  { label: "Trends", href: "#" },
  {
    label: "Furniture",
    href: "#",
    mega: [
      {
        title: "Seating",
        links: ["Sofas & Sectionals", "Chairs & Lounges", "Benches", "Stools", "Ottomans"]
      },
      {
        title: "Dining & Living",
        links: ["Dining Tables", "Dining Chairs", "Coffee Tables", "Side Tables", "Consoles"]
      },
      {
        title: "Bedroom & Storage",
        links: ["Beds", "Nightstands", "Wardrobes", "Dressers", "Bookshelves"]
      }
    ]
  },
  { label: "Concepts", href: "#" },
  { label: "Offers", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { count, setCartOpen, setSearchOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Determine colors based on scroll state - always solid for maximum readability
  const isTransparent = false;
  const textColor = "text-ink";
  const subTextColor = "text-charcoal";
  const iconColor = "text-charcoal";

  return (
    <div className="sticky top-0 z-50 flex flex-col transition-all duration-700">

      <header
        className={`w-full transition-all duration-700 ${isTransparent
            ? "bg-transparent shadow-none backdrop-blur-none"
            : "bg-warm-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(196,185,171,0.5)]"
          }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
          
          {/* Main Row */}
          <div className="flex items-center justify-between h-14 lg:h-16 relative border-b border-sand/10">

            {/* Left: Brand Logo (Desktop Only) */}
            <div className="hidden lg:flex flex-1 items-center justify-start">
              <a href="#" className="flex items-center hover:opacity-90 transition-opacity">
                <Image 
                  src="/livingspace.svg" 
                  alt="LivingSpace Logo" 
                  width={28} 
                  height={28} 
                  className="flex-shrink-0" 
                />
              </a>
            </div>

            {/* Center: Brand Name + Cursive Interior */}
            <div className="flex-1 lg:flex-none flex justify-center items-center">
              <a href="#" className="flex flex-col items-center group pt-1">
                <span className={`font-sans text-lg sm:text-xl lg:text-[22px] font-bold tracking-[0.25em] uppercase leading-none transition-colors duration-700 ${textColor}`}>
                  LIVING SPACE
                </span>
                <span
                  className="text-lg sm:text-xl lg:text-[22px] font-normal leading-none transition-colors duration-700 -mt-1 pointer-events-none text-[#C49A5D]"
                  style={{ fontFamily: "'Pinyon Script', 'Snell Roundhand', cursive" }}
                >
                  Interior
                </span>
              </a>
            </div>

            {/* Right: Icons (Search, Bag, Heart, Login text) */}
            <div className="flex-1 flex items-center justify-end gap-3 sm:gap-5">
              <button
                onClick={() => setSearchOpen(true)}
                className={`w-8 h-8 flex items-center justify-center transition-colors ${iconColor} hover:text-terracotta`}
                aria-label="Search"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              
              <button
                onClick={() => setCartOpen(true)}
                className={`w-8 h-8 flex items-center justify-center transition-colors relative ${iconColor} hover:text-terracotta`}
                aria-label={`Cart, ${count} items`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {count > 0 && (
                  <span className={`absolute -top-1 -right-1 w-3.5 h-3.5 text-[8px] rounded-full flex items-center justify-center font-medium leading-none ${isTransparent ? "bg-white text-ink" : "bg-ink text-white"}`}>
                    {count}
                  </span>
                )}
              </button>

              <button className={`w-8 h-8 flex items-center justify-center transition-colors ${iconColor} hover:text-terracotta`} aria-label="Favorites">
                <Heart size={18} strokeWidth={1.5} />
              </button>

              <a 
                href="#" 
                className={`hidden sm:inline-block text-[11px] tracking-[0.2em] uppercase font-medium transition-colors ${textColor} hover:text-terracotta ml-1`}
              >
                Login
              </a>

              <button
                className={`w-8 h-8 flex items-center justify-center lg:hidden transition-colors ${iconColor} ml-1`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
              </button>
            </div>
          </div>

          {/* Desktop Secondary Row: Nav Links */}
          <div className="hidden lg:flex items-center justify-center py-2">
            <nav className="flex items-center gap-10 xl:gap-14">
              {NAV.map((item) => (
                <div
                  key={item.label}
                  className="relative flex items-center"
                  onMouseEnter={() => setActiveDropdown(item.mega ? item.label : null)}
                >
                  <a
                    href={item.href}
                    className={`relative flex items-center gap-1 text-[11px] tracking-[0.25em] uppercase transition-colors duration-700 font-medium py-1 group ${subTextColor} hover:${isTransparent ? "text-white" : "text-terracotta"}`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 w-full h-[1px] transition-transform duration-700 origin-left ${isTransparent ? "bg-white" : "bg-ink"} ${activeDropdown === item.label ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Sub-navigation Row (Swipeable menu under header) */}
        <div 
          className={`lg:hidden w-full overflow-x-auto scrollbar-none py-2.5 px-4 flex items-center gap-4 transition-all duration-700 border-t border-b ${
            isTransparent 
              ? "bg-transparent border-[#C49A5D]/20 text-white/80" 
              : "bg-warm-white/95 border-[#C49A5D]/30 text-ink/80"
          }`}
        >
          <div className="flex items-center gap-3.5 mx-auto whitespace-nowrap text-[10px] tracking-[0.2em] uppercase font-medium">
            {NAV.map((item, index) => (
              <span key={item.label} className="flex items-center gap-3.5">
                {index > 0 && <span className="text-[#C49A5D] text-[8px]">•</span>}
                <a href={item.href} className="hover:text-[#C49A5D] transition-colors">{item.label}</a>
              </span>
            ))}
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <div className={`absolute top-full left-0 w-full bg-warm-white border-t border-sand/30 shadow-2xl transition-all duration-700 origin-top overflow-hidden ${activeDropdown ? "opacity-100 max-h-[600px] py-16" : "opacity-0 max-h-0 py-0 pointer-events-none"}`}>
          <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
            {activeDropdown && NAV.find(n => n.label === activeDropdown)?.mega && (
              <div className="flex justify-between gap-12 max-w-4xl mx-auto text-ink">
                {NAV.find(n => n.label === activeDropdown)?.mega?.map((column: any) => (
                  <div key={column.title} className="flex-1 space-y-8">
                    <h3 className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted">
                      {column.title}
                    </h3>
                    <ul className="space-y-4">
                      {column.links.map((link: string) => (
                        <li key={link}>
                          <a href="#" className="text-[13px] tracking-wide hover:text-terracotta transition-colors block font-light">
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <div className={`lg:hidden fixed inset-0 top-[91px] bg-warm-white z-40 transition-transform duration-700 overflow-y-auto ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="px-6 py-8 space-y-1">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-4 border-b border-sand/40 text-[12px] tracking-[0.2em] uppercase font-medium text-ink"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-8 space-y-5">
            <a href="#" className="block text-[11px] tracking-[0.15em] uppercase text-muted font-medium">Account</a>
            <a href="#" className="block text-[11px] tracking-[0.15em] uppercase text-muted font-medium">Partner Program</a>
            <a href="#" className="block text-[11px] tracking-[0.15em] uppercase text-muted font-medium">Free Design Consultation</a>
          </div>
        </div>
      </div>
    </div>
  );
}
