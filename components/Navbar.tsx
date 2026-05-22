"use client";
import { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag, Menu, X, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

const NAV = [
  { label: "Rooms", href: "#rooms" },
  { label: "Best Sellers", href: "#best-sellers" },
  {
    label: "Categories",
    href: "#categories",
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
  { label: "Featured", href: "#featured" },
  { label: "Offers", href: "#offers" },
  { label: "Consultation", href: "#consultation" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
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

  // Determine colors based on scroll state - transparent at top, solid on scroll
  const isTransparent = !scrolled && !menuOpen && !activeDropdown;
  const textColor = isTransparent ? "text-white" : "text-ink";
  const subTextColor = isTransparent ? "text-white/80" : "text-charcoal";
  const iconColor = isTransparent ? "text-white/90 hover:text-white" : "text-charcoal hover:text-terracotta";

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col transition-all duration-700">

      <header
        className={`w-full transition-all duration-700 ${isTransparent
          ? "bg-transparent shadow-none backdrop-blur-none border-b border-transparent"
          : "bg-warm-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(196,185,171,0.5)]"
          }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24">

          {/* Main Row */}
          <div className={`flex items-center justify-between h-16 lg:h-20 relative border-b transition-colors duration-700 ${isTransparent ? "border-white/10" : "border-sand/10"}`}>

            {/* Left: Brand Logo & Name (Inline Icon + Vertically Stacked Text) */}
            <div className="flex items-center justify-start flex-1 lg:flex-none">
              <a href="#" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                <Image
                  src="/livingspace.svg"
                  alt="LivingSpace Logo Icon"
                  width={40}
                  height={40}
                  className="h-[40px] w-auto object-contain"
                  priority
                />
                <div className="flex flex-col items-start pt-1">
                  <Image
                    src="/LSI_logo.svg"
                    alt="LivingSpace Wordmark"
                    width={140}
                    height={28}
                    className={`h-[23px] w-auto object-contain transition-all duration-700 ${isTransparent ? "invert brightness-200" : ""}`}
                    priority
                  />
                  <span
                    className="text-[16px] font-normal text-[#C49A5D] leading-none -mt-0.5 pl-9 transform -rotate-[3deg] origin-left select-none pointer-events-none"
                    style={{ fontFamily: "'Pinyon Script', 'Snell Roundhand', cursive" }}
                  >
                    Interior
                  </span>
                </div>
              </a>
            </div>



            {/* Center: Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {NAV.map((item) => (
                <div
                  key={item.label}
                  className="relative flex items-center"
                  onMouseEnter={() => setActiveDropdown(item.mega ? item.label : null)}
                >
                  <a
                    href={item.href}
                    className={`relative flex items-center gap-1 text-[13px] tracking-[0.05em] transition-colors duration-700 font-medium py-1 group ${textColor}`}
                  >
                    <span>{item.label}</span>
                    {item.mega && (
                      <svg 
                        className={`w-2.5 h-2.5 opacity-55 mt-0.5 transition-transform duration-500 ${activeDropdown === item.label ? "rotate-180" : ""}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    <span className={`absolute -bottom-1 left-0 w-full h-[1px] transition-transform duration-700 origin-left bg-current ${activeDropdown === item.label ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                  </a>
                </div>
              ))}
            </nav>

            {/* Right: Icons (Search, Bag, Heart, Login text) */}
            <div className="flex-1 lg:flex-none flex items-center justify-end gap-3 sm:gap-5">
              <button
                onClick={() => setSearchOpen(true)}
                className={`w-8 h-8 flex items-center justify-center transition-all duration-700 ${iconColor}`}
                aria-label="Search"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                onClick={() => setCartOpen(true)}
                className={`w-8 h-8 flex items-center justify-center transition-all duration-700 relative ${iconColor}`}
                aria-label={`Cart, ${count} items`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {count > 0 && (
                  <span className={`absolute -top-1 -right-1 w-3.5 h-3.5 text-[8px] rounded-full flex items-center justify-center font-medium leading-none ${isTransparent ? "bg-white text-ink" : "bg-ink text-white"}`}>
                    {count}
                  </span>
                )}
              </button>

              <button className={`w-8 h-8 flex items-center justify-center transition-all duration-700 ${iconColor}`} aria-label="Favorites">
                <Heart size={18} strokeWidth={1.5} />
              </button>

              <a
                href="#"
                className={`hidden sm:inline-block text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-700 ${textColor} ml-1`}
              >
                Login
              </a>

              <button
                className={`w-8 h-8 flex items-center justify-center lg:hidden transition-colors duration-700 ${iconColor} ml-1`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <div className={`absolute top-full left-0 w-full bg-warm-white border-t border-sand/30 shadow-2xl transition-all duration-700 origin-top overflow-hidden ${activeDropdown ? "opacity-100 max-h-[600px] py-16" : "opacity-0 max-h-0 py-0 pointer-events-none"}`}>
          <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24">
            {activeDropdown && NAV.find(n => n.label === activeDropdown)?.mega && (
              <div className="grid grid-cols-12 gap-12 max-w-6xl mx-auto text-ink">
                
                {/* Left Side: Large category title of selected item */}
                <div className="col-span-4 flex flex-col justify-start border-r border-sand/30 pr-12">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#C49A5D] font-semibold mb-2">
                    Spatial Curation
                  </span>
                  <h2 className="font-display text-4xl font-light tracking-wide text-ink capitalize">
                    {activeDropdown}
                  </h2>
                  <p className="text-xs text-charcoal/60 font-light mt-4 leading-relaxed max-w-[220px]">
                    {activeDropdown === "Categories" 
                      ? "Meticulously crafted items, organized by form and function to elevate everyday spaces." 
                      : "Thoughtfully curated collections, inspired by international art, architecture, and design."}
                  </p>
                </div>

                {/* Right Side: Columns of Sub-categories */}
                <div className="col-span-8 grid grid-cols-3 gap-8">
                  {NAV.find(n => n.label === activeDropdown)?.mega?.map((column: any) => (
                    <div key={column.title} className="space-y-6">
                      <h3 className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted">
                        {column.title}
                      </h3>
                      <ul className="space-y-3.5">
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

              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <div className={`lg:hidden fixed w-full h-[calc(100dvh-4rem)] top-16 left-0 bg-warm-white z-40 transition-transform duration-700 overflow-y-auto ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="px-6 pt-6 pb-24 space-y-1">
          {NAV.map((item) => {
            const hasMega = !!item.mega;
            const isExpanded = expandedMobileItem === item.label;

            return (
              <div key={item.label} className="border-b border-sand/30">
                {hasMega ? (
                  <div>
                    {/* Expand Trigger */}
                    <button
                      onClick={() => setExpandedMobileItem(isExpanded ? null : item.label)}
                      className="w-full flex items-center justify-between py-4.5 text-[14px] tracking-[0.05em] font-medium text-ink text-left focus:outline-none"
                    >
                      <span>{item.label}</span>
                      <svg 
                        className={`w-3 h-3 opacity-60 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Collapsible Panel */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isExpanded ? "max-h-[600px] pb-6 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="pl-4 space-y-6 pt-2 border-l border-sand/35 ml-1.5">
                        {item.mega?.map((column: any) => (
                          <div key={column.title} className="space-y-3">
                            <h4 className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#C49A5D]">
                              {column.title}
                            </h4>
                            <ul className="space-y-3">
                              {column.links.map((link: string) => (
                                <li key={link}>
                                  <a 
                                    href={item.href}
                                    onClick={() => {
                                      setMenuOpen(false);
                                      setExpandedMobileItem(null);
                                    }}
                                    className="text-[13px] tracking-wide text-charcoal hover:text-terracotta transition-colors block font-light"
                                  >
                                    {link}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4.5 text-[14px] tracking-[0.05em] font-medium text-ink"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            );
          })}
          <div className="pt-8 space-y-5">
            <a href="#" className="block text-[13px] tracking-[0.05em] text-muted font-medium">Account</a>
            <a href="#" className="block text-[13px] tracking-[0.05em] text-muted font-medium">Partner Program</a>
            <a href="#" className="block text-[13px] tracking-[0.05em] text-muted font-medium">Free Design Consultation</a>
          </div>
        </div>
      </div>
    </div>
  );
}
