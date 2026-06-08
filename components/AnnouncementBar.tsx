"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem("announcement-dismissed");
    if (!isDismissed) {
      setVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("announcement-dismissed", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="bg-ink text-cream font-sans text-[11px] tracking-widest uppercase py-2.5 px-4 relative flex items-center justify-center text-center select-none z-50">
      <span className="pr-6 pl-2 leading-relaxed">
        Free Pan-India Delivery above ₹50,000 &nbsp;|&nbsp; No-Cost EMI Available
      </span>
      <button
        onClick={handleDismiss}
        className="absolute right-4 hover:opacity-85 transition-opacity p-1 cursor-pointer flex items-center justify-center"
        aria-label="Dismiss announcement"
      >
        <X size={12} className="stroke-[2.5]" />
      </button>
    </div>
  );
}
