"use client";
import { useCart } from "@/context/CartContext";
import { CheckCircle } from "lucide-react";

export default function Toast() {
  const { toast } = useCart();

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] transition-all duration-500 ${
        toast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-ink text-cream px-5 py-3 flex items-center gap-3 shadow-xl">
        <CheckCircle size={15} className="text-terracotta flex-shrink-0" strokeWidth={2} />
        <span className="text-[11px] tracking-[0.15em] uppercase whitespace-nowrap">{toast}</span>
      </div>
    </div>
  );
}
