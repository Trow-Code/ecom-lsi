"use client";
import { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag, Menu, X, User } from "lucide-react";
import { useCart } from "@/context/CartContext";

const NAV = [
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
  {
    label: "Collections",
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
  { label: "Décor", href: "#" },
  { label: "Lighting", href: "#" },
  { label: "Outdoor", href: "#" },
  { label: "Journal", href: "#" },
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

  // Determine colors based on scroll state
  const isTransparent = !scrolled && !activeDropdown && !menuOpen;
  const textColor = isTransparent ? "text-white" : "text-ink";
  const subTextColor = isTransparent ? "text-white/70" : "text-charcoal";
  const iconColor = isTransparent ? "text-white" : "text-charcoal";

  return (
    <div className="fixed w-full top-0 z-50 flex flex-col transition-all duration-700">

      {/* Announcement bar - Subtly visible on Hero, Solid on scroll */}
      <div
        className={`text-[9px] tracking-[0.3em] uppercase w-full flex items-center justify-center transition-all duration-700 overflow-hidden ${scrolled ? "h-0 opacity-0" : "h-9 opacity-100 hidden sm:flex"
          } ${isTransparent ? "bg-transparent text-white/60 border-none" : "bg-ink text-cream border-b border-white/10"}`}
      >
        Free design consultation &nbsp;·&nbsp; Pan India shipping &nbsp;·&nbsp; Warehouse sale
      </div>

      <header
        className={`w-full transition-all duration-700 ${isTransparent
            ? "bg-transparent shadow-none backdrop-blur-none"
            : "bg-warm-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(196,185,171,0.5)] py-1"
          }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="flex items-center justify-between h-16 lg:h-22 relative">

            {/* Left: Logo */}
            <div className="flex-1 flex items-center justify-start">
              <a href="#" className="flex-shrink-0 group relative inline-flex items-center pt-2 pb-3 pr-6">
                <span className={`font-sans text-lg sm:text-xl lg:text-[24px] font-medium leading-none transition-colors duration-700 relative z-10 ${textColor}`}>
                  LivingSpace
                </span>
                <span
                  className={`absolute -bottom-[2px] right-2 sm:-right-0 text-2xl sm:text-3xl lg:text-[36px] font-normal leading-none transition-colors duration-700 -rotate-[15deg] z-20 pointer-events-none ${isTransparent ? "text-white/40" : "text-ink/80"}`}
                  style={{ fontFamily: "'Pinyon Script', 'Snell Roundhand', cursive" }}
                >
                  Studio
                </span>
              </a>
            </div>

            {/* Center: Nav Links (Desktop only) */}
            <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-14 absolute left-1/2 -translate-x-1/2 h-full">
              {NAV.map((item) => (
                <div
                  key={item.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setActiveDropdown(item.mega ? item.label : null)}
                >
                  <a
                    href={item.href}
                    className={`relative flex items-center gap-1 text-[11px] tracking-[0.25em] uppercase transition-colors duration-700 font-medium py-2 group ${subTextColor} hover:text-white`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 w-full h-[1px] transition-transform duration-700 origin-left ${isTransparent ? "bg-white" : "bg-ink"} ${activeDropdown === item.label ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                  </a>
                </div>
              ))}
            </nav>

            {/* Right: Icons & Mobile Menu Button */}
            <div className="flex-1 flex items-center justify-end gap-3 sm:gap-6">
              <button
                onClick={() => setSearchOpen(true)}
                className={`w-8 h-8 flex items-center justify-center transition-colors ${iconColor} hover:text-terracotta`}
                aria-label="Search"
              >
                <Search size={18} strokeWidth={1} />
              </button>
              <button className={`w-8 h-8 items-center justify-center transition-colors hidden sm:flex ${iconColor} hover:text-terracotta`} aria-label="Account">
                <User size={18} strokeWidth={1} />
              </button>
              <button
                onClick={() => setCartOpen(true)}
                className={`w-8 h-8 flex items-center justify-center transition-colors relative ${iconColor} hover:text-terracotta`}
                aria-label={`Cart, ${count} items`}
              >
                <ShoppingBag size={18} strokeWidth={1} />
                {count > 0 && (
                  <span className={`absolute -top-1 -right-1 w-3.5 h-3.5 text-[8px] rounded-full flex items-center justify-center font-medium leading-none ${isTransparent ? "bg-white text-ink" : "bg-ink text-white"}`}>
                    {count}
                  </span>
                )}
              </button>
              <button
                className={`w-8 h-8 flex items-center justify-center lg:hidden transition-colors ${iconColor} ml-1`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
              </button>
            </div>
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

      {/* Mobile nav */}
      <div className={`lg:hidden fixed inset-0 top-[56px] sm:top-[64px] bg-warm-white z-40 transition-transform duration-700 overflow-y-auto ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="px-6 py-12 space-y-1">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-5 border-b border-sand/40 text-[13px] tracking-[0.2em] uppercase font-medium text-ink"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-12 space-y-6">
            <a href="#" className="block text-[11px] tracking-[0.15em] uppercase text-muted font-medium">Account</a>
            <a href="#" className="block text-[11px] tracking-[0.15em] uppercase text-muted font-medium">Partner Program</a>
            <a href="#" className="block text-[11px] tracking-[0.15em] uppercase text-muted font-medium">Free Design Consultation</a>
          </div>
        </div>
      </div>
    </div>
  );
}
