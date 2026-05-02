"use client";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const FOOTER_LINKS = {
  "About Us": ["Why Us", "Testimonials", "Awards & Recognition", "Care & Maintenance", "Blog", "Contact Us"],
  Services: ["Partner Program", "Design Projects", "Collaborators", "FAQ"],
  Shop: ["Furniture", "Collections", "Accents", "Art"],
  Legal: ["Terms & Conditions", "Privacy Policy", "Return Policy", "Shipping Policy", "Warranty"],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(""); }
  };

  return (
    <footer className="bg-warm-white border-t border-sand">
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 lg:pt-20 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 mb-12 sm:mb-16">
          {/* Brand col */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <p className="font-display text-2xl sm:text-3xl font-light mb-3 sm:mb-4">
              <span className="font-semibold">LivingSpace</span>
            </p>
            <p className="text-sm text-muted leading-relaxed max-w-xs font-light mb-6 sm:mb-7">
              Premium furniture and décor crafted for the spaces where life unfolds.
            </p>
            {/* Email */}
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted mb-3">Sign up for inspiration</p>
              {submitted ? (
                <p className="text-[11px] tracking-[0.15em] uppercase text-terracotta flex items-center gap-2">
                  ✦ You're on the list — welcome!
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 min-w-0 border border-sand bg-warm-white text-[13px] px-4 py-2.5 text-ink placeholder-stone/50 focus:outline-none focus:border-stone transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-ink text-cream text-[10px] tracking-widest uppercase px-3 sm:px-4 py-2.5 hover:bg-terracotta transition-colors flex-shrink-0 flex items-center gap-1.5"
                  >
                    Join <ArrowRight size={11} />
                  </button>
                </form>
              )}
            </div>
            {/* Social Text Links */}
            <div className="flex items-center gap-6 mt-8">
              {["Instagram", "Facebook", "Youtube"].map((s) => (
                <a 
                  key={s} 
                  href="#" 
                  className="text-[10px] tracking-[0.2em] uppercase text-muted hover:text-terracotta transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[10px] tracking-[0.25em] uppercase text-ink font-medium mb-4">{heading}</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-muted hover:text-terracotta transition-colors font-light">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-sand pt-6 sm:pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 font-light">
          <p className="text-[11px] text-muted whitespace-nowrap">
            © 2026 LivingSpace. All rights reserved.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] text-muted">
            {["Privacy", "Terms", "Sitemap"].map((l) => (
              <a key={l} href="#" className="hover:text-terracotta transition-colors tracking-wide">{l}</a>
            ))}
          </div>

          <p className="text-[11px] text-muted whitespace-nowrap">
            Designed and Developed by <a href="https://trowcode.com" target="_blank" rel="noopener noreferrer" className="text-ink font-medium hover:text-terracotta transition-colors">Trowcode</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
