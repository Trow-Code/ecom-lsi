"use client";
import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag, ArrowRight, Truck } from "lucide-react";

function fmt(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function CartDrawer() {
  const { items, cartOpen, setCartOpen, removeItem, updateQty, total, count } = useCart();
  const emi = Math.round(total / 12);
  const freeShippingThreshold = 50000;
  const remaining = freeShippingThreshold - total;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${cartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-[440px] bg-warm-white flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-ink" />
            <span className="font-display text-xl font-light">Your Cart</span>
            {count > 0 && (
              <span className="bg-terracotta text-cream text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-medium">
                {count}
              </span>
            )}
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-muted hover:text-ink transition-colors"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Free shipping progress */}
        {total > 0 && (
          <div className="px-6 py-3 bg-cream border-b border-sand">
            {remaining > 0 ? (
              <>
                <p className="text-[10px] tracking-[0.15em] uppercase text-muted mb-2">
                  Add {fmt(remaining)} more for <span className="text-ink font-medium">free shipping</span>
                </p>
                <div className="h-0.5 bg-sand rounded-full overflow-hidden">
                  <div
                    className="h-full bg-terracotta rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((total / freeShippingThreshold) * 100, 100)}%` }}
                  />
                </div>
              </>
            ) : (
              <p className="text-[10px] tracking-[0.15em] uppercase text-terracotta flex items-center gap-2">
                <Truck size={12} /> You've unlocked free shipping!
              </p>
            )}
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-stone" />
              <div>
                <p className="font-display text-2xl text-ink font-light mb-1">Your cart is empty</p>
                <p className="text-sm text-muted font-light">Add something beautiful to get started.</p>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="mt-4 bg-ink text-cream text-[11px] tracking-[0.2em] uppercase px-8 py-3 hover:bg-terracotta transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  {/* Thumbnail */}
                  <div className={`w-20 h-20 flex-shrink-0 bg-gradient-to-br ${item.gradient} rounded-sm`} />
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] tracking-[0.2em] uppercase text-muted mb-0.5">{item.category}</p>
                    <p className="text-sm text-ink font-light leading-snug mb-2 truncate">{item.name}</p>
                    <p className="text-sm font-medium text-ink">{fmt(item.price)}</p>
                  </div>
                  {/* Qty + remove */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-stone hover:text-terracotta transition-colors"
                    >
                      <X size={14} strokeWidth={1.5} />
                    </button>
                    <div className="flex items-center border border-sand">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink transition-colors"
                      >
                        <Minus size={12} strokeWidth={1.5} />
                      </button>
                      <span className="w-7 text-center text-sm text-ink">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink transition-colors"
                      >
                        <Plus size={12} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-sand px-6 py-6 space-y-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted font-light">Subtotal ({count} items)</span>
              <span className="text-lg font-display font-light text-ink">{fmt(total)}</span>
            </div>
            {emi > 0 && (
              <p className="text-[10px] text-muted tracking-wide">
                or {fmt(emi)}/mo with No-Cost EMI · <span className="underline cursor-pointer hover:text-terracotta transition-colors">View plans</span>
              </p>
            )}
            <p className="text-[10px] tracking-[0.1em] uppercase text-muted">
              Taxes included · Shipping calculated at checkout
            </p>
            {/* CTA */}
            <button className="w-full bg-ink text-cream text-[11px] tracking-[0.2em] uppercase py-4 hover:bg-terracotta transition-colors duration-300 flex items-center justify-center gap-3 group">
              Proceed to Checkout
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setCartOpen(false)}
              className="w-full border border-sand text-ink text-[11px] tracking-[0.2em] uppercase py-3 hover:border-stone transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
